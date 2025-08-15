from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import List

# Import models and database
from models import (
    Service, ServiceCreate, Client, ClientCreate, 
    ContactMessage, ContactMessageCreate, ContactResponse,
    CompanyInfo, CompanyInfoCreate
)
from database import (
    services_collection, clients_collection, 
    contact_messages_collection, company_info_collection,
    init_database
)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Services Routes
@api_router.get("/services", response_model=List[Service])
async def get_services():
    """Get all active services"""
    services = await services_collection.find({"isActive": True}).to_list(1000)
    return [Service(**service) for service in services]

@api_router.post("/services", response_model=Service)
async def create_service(service: ServiceCreate):
    """Create a new service"""
    service_dict = service.dict()
    service_obj = Service(**service_dict)
    await services_collection.insert_one(service_obj.dict())
    return service_obj

@api_router.get("/services/{service_id}", response_model=Service)
async def get_service(service_id: str):
    """Get a specific service by ID"""
    service = await services_collection.find_one({"id": service_id})
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")
    return Service(**service)

# Clients Routes
@api_router.get("/clients", response_model=List[Client])
async def get_clients():
    """Get all active clients"""
    clients = await clients_collection.find({"isActive": True}).to_list(1000)
    return [Client(**client) for client in clients]

@api_router.post("/clients", response_model=Client)
async def create_client(client: ClientCreate):
    """Create a new client"""
    client_dict = client.dict()
    client_obj = Client(**client_dict)
    await clients_collection.insert_one(client_obj.dict())
    return client_obj

# Contact Routes
@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact(contact: ContactMessageCreate):
    """Submit a contact form message"""
    try:
        contact_dict = contact.dict()
        contact_obj = ContactMessage(**contact_dict)
        await contact_messages_collection.insert_one(contact_obj.dict())
        
        return ContactResponse(
            success=True,
            message="Thank you for your message! We'll get back to you soon.",
            id=contact_obj.id
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to submit contact message")

@api_router.get("/contact-messages", response_model=List[ContactMessage])
async def get_contact_messages():
    """Get all contact messages (admin endpoint)"""
    messages = await contact_messages_collection.find().sort("createdAt", -1).to_list(1000)
    return [ContactMessage(**message) for message in messages]

# Company Info Routes
@api_router.get("/contact-info", response_model=CompanyInfo)
async def get_contact_info():
    """Get company contact information"""
    company_info = await company_info_collection.find_one()
    if not company_info:
        raise HTTPException(status_code=404, detail="Company info not found")
    return CompanyInfo(**company_info)

@api_router.put("/contact-info", response_model=CompanyInfo)
async def update_contact_info(info: CompanyInfoCreate):
    """Update company contact information"""
    info_dict = info.dict()
    existing_info = await company_info_collection.find_one()
    
    if existing_info:
        await company_info_collection.update_one(
            {"id": existing_info["id"]},
            {"$set": info_dict}
        )
        updated_info = await company_info_collection.find_one({"id": existing_info["id"]})
        return CompanyInfo(**updated_info)
    else:
        company_info_obj = CompanyInfo(**info_dict)
        await company_info_collection.insert_one(company_info_obj.dict())
        return company_info_obj

# Legacy routes (keeping for compatibility)
@api_router.get("/")
async def root():
    return {"message": "CC Software Solutions API"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_db():
    """Initialize database on startup"""
    await init_database()
    logger.info("Database initialized successfully")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()