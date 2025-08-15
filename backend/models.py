from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

# Service Models
class ServiceBase(BaseModel):
    title: str
    description: str
    icon: str
    color: str
    category: Optional[str] = "general"
    isActive: bool = True

class ServiceCreate(ServiceBase):
    pass

class Service(ServiceBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

# Client Models
class ClientBase(BaseModel):
    name: str
    logo: str
    website: Optional[str] = None
    isActive: bool = True

class ClientCreate(ClientBase):
    pass

class Client(ClientBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

# Contact Models
class ContactMessageBase(BaseModel):
    name: str
    email: str
    subject: str
    message: str

class ContactMessageCreate(ContactMessageBase):
    pass

class ContactMessage(ContactMessageBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    status: str = "new"
    createdAt: datetime = Field(default_factory=datetime.utcnow)

class ContactResponse(BaseModel):
    success: bool
    message: str
    id: str

# Company Info Models
class SocialMedia(BaseModel):
    facebook: str
    instagram: str
    youtube: str
    twitter: str

class CompanyInfoBase(BaseModel):
    phone: str
    email: str
    description: str
    socialMedia: SocialMedia

class CompanyInfoCreate(CompanyInfoBase):
    pass

class CompanyInfo(CompanyInfoBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)