from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Collections
services_collection = db.services
clients_collection = db.clients
contact_messages_collection = db.contact_messages
company_info_collection = db.company_info

async def init_database():
    """Initialize database with sample data if collections are empty"""
    
    # Initialize services if empty
    if await services_collection.count_documents({}) == 0:
        services_data = [
            {
                "id": "1",
                "title": "React js",
                "description": "Interactive JavaScript framework for dynamic, user-centered interfaces.",
                "icon": "react",
                "color": "from-blue-400 to-cyan-400",
                "category": "frontend",
                "isActive": True
            },
            {
                "id": "2",
                "title": "Node js",
                "description": "Modern solution for creating scalable network applications.",
                "icon": "nodejs",
                "color": "from-green-400 to-emerald-400",
                "category": "backend",
                "isActive": True
            },
            {
                "id": "3",
                "title": "MongoDB",
                "description": "Popular NoSQL database known for its flexibility and scalability.",
                "icon": "mongodb",
                "color": "from-green-500 to-teal-400",
                "category": "database",
                "isActive": True
            },
            {
                "id": "4",
                "title": "Web development",
                "description": "Innovative web applications to support your business.",
                "icon": "web",
                "color": "from-purple-400 to-pink-400",
                "category": "development",
                "isActive": True
            },
            {
                "id": "5",
                "title": "Electron JS",
                "description": "Electron.js enables cross-platform desktop apps using JavaScript, HTML, and CSS.",
                "icon": "electron",
                "color": "from-indigo-400 to-blue-400",
                "category": "desktop",
                "isActive": True
            },
            {
                "id": "6",
                "title": "React Native",
                "description": "Create high-quality, cross-platform mobile apps using React Native framework.",
                "icon": "react-native",
                "color": "from-blue-500 to-purple-400",
                "category": "mobile",
                "isActive": True
            },
            {
                "id": "7",
                "title": "SQLite",
                "description": "Lightweight, self-contained SQL database engine for embedded and mobile applications.",
                "icon": "sqlite",
                "color": "from-gray-400 to-slate-400",
                "category": "database",
                "isActive": True
            },
            {
                "id": "8",
                "title": "Mobile Development",
                "description": "Scalability, performance, and cost optimization thanks to resilient software architecture.",
                "icon": "mobile",
                "color": "from-orange-400 to-red-400",
                "category": "mobile",
                "isActive": True
            },
            {
                "id": "9",
                "title": "Digital Marketing",
                "description": "Innovative digital strategies to propel your business forward.",
                "icon": "marketing",
                "color": "from-pink-400 to-rose-400",
                "category": "marketing",
                "isActive": True
            },
            {
                "id": "10",
                "title": "Digital Product Design",
                "description": "Complete digital creation - from UX prototyping to impactful final UI designs.",
                "icon": "design",
                "color": "from-purple-400 to-violet-400",
                "category": "design",
                "isActive": True
            }
        ]
        await services_collection.insert_many(services_data)
    
    # Initialize clients if empty
    if await clients_collection.count_documents({}) == 0:
        clients_data = [
            {
                "id": "1",
                "name": "Bloom Mark",
                "logo": "🌸 BLOOM MARK",
                "website": "https://bloommark.com",
                "isActive": True
            },
            {
                "id": "2",
                "name": "Theu Ella Resort",
                "logo": "🏔️ THEU ELLA RESORT",
                "website": "https://theuella.com",
                "isActive": True
            },
            {
                "id": "3",
                "name": "Menu Restaurant",
                "logo": "🍽️ Me'n'u Restaurant",
                "website": "https://menurestaurant.com",
                "isActive": True
            },
            {
                "id": "4",
                "name": "Digital Solutions Co",
                "logo": "💼 DIGITAL SOLUTIONS",
                "website": "https://digitalsolutions.com",
                "isActive": True
            },
            {
                "id": "5",
                "name": "Tech Innovators",
                "logo": "🚀 TECH INNOVATORS",
                "website": "https://techinnovators.com",
                "isActive": True
            }
        ]
        await clients_collection.insert_many(clients_data)
    
    # Initialize company info if empty
    if await company_info_collection.count_documents({}) == 0:
        company_info_data = {
            "id": "1",
            "phone": "+94 770 832 340",
            "email": "info@ccsoftwares.com",
            "description": "CC Software Solutions is a leading software engineering company specializing in the development of mobile apps, POS systems, and web applications. With a focus on innovation and quality, we deliver cutting-edge solutions to meet our clients' needs.",
            "socialMedia": {
                "facebook": "https://facebook.com/ccsoftwares",
                "instagram": "https://instagram.com/ccsoftwares",
                "youtube": "https://youtube.com/ccsoftwares",
                "twitter": "https://twitter.com/ccsoftwares"
            }
        }
        await company_info_collection.insert_one(company_info_data)