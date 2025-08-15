# CC Software Solutions - Backend Implementation Contracts

## API Contracts

### 1. Services API
```
GET /api/services
Response: Array of service objects
{
  "id": number,
  "title": string,
  "description": string,
  "icon": string,
  "color": string,
  "category": string,
  "isActive": boolean
}
```

```
POST /api/services
Body: ServiceCreate object (without id)
Response: Created service object
```

### 2. Clients API
```
GET /api/clients
Response: Array of client objects
{
  "id": number,
  "name": string,
  "logo": string,
  "website": string,
  "isActive": boolean
}
```

### 3. Contact API
```
POST /api/contact
Body: {
  "name": string,
  "email": string,
  "subject": string,
  "message": string
}
Response: {
  "success": boolean,
  "message": string,
  "id": string
}
```

```
GET /api/contact-info
Response: {
  "phone": string,
  "email": string,
  "description": string,
  "socialMedia": {
    "facebook": string,
    "instagram": string,
    "youtube": string,
    "twitter": string
  }
}
```

## Mock Data to Replace

### From mockData.js:
1. **services array** - Will be fetched from MongoDB via /api/services
2. **clients array** - Will be fetched from MongoDB via /api/clients  
3. **companyInfo object** - Will be fetched from MongoDB via /api/contact-info

## Backend Implementation Plan

### 1. MongoDB Models
- **Service Model**: Store technology services with descriptions and metadata
- **Client Model**: Store client information and logos
- **ContactMessage Model**: Store contact form submissions
- **CompanyInfo Model**: Store company contact information and social links

### 2. API Endpoints
- Services CRUD operations
- Clients management
- Contact form submission and retrieval
- Company information management

### 3. Data Seeding
- Populate initial services data from current mock
- Populate initial clients data
- Set company information

## Frontend Integration Changes

### Files to Modify:
1. **HeroSection.jsx** - No API calls needed (static content)
2. **ServicesSection.jsx** - Replace mockData import with API call to /api/services
3. **ClientsSection.jsx** - Replace mockData import with API call to /api/clients
4. **Footer.jsx** - Replace mockData import with API call to /api/contact-info
5. **ContactForm component** - New component for /api/contact endpoint

### Integration Strategy:
1. Create API service layer (`/src/services/api.js`)
2. Add React hooks for data fetching
3. Add loading states and error handling
4. Replace mock data imports with API calls
5. Add contact form functionality

## Database Schema

### Services Collection
```json
{
  "_id": ObjectId,
  "title": "React js",
  "description": "Interactive JavaScript framework...",
  "icon": "react",
  "color": "from-blue-400 to-cyan-400",
  "category": "frontend",
  "isActive": true,
  "createdAt": Date,
  "updatedAt": Date
}
```

### Clients Collection
```json
{
  "_id": ObjectId,
  "name": "Bloom Mark",
  "logo": "🌸 BLOOM MARK",
  "website": "https://bloommark.com",
  "isActive": true,
  "createdAt": Date,
  "updatedAt": Date
}
```

### ContactMessages Collection
```json
{
  "_id": ObjectId,
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Looking for web development...",
  "status": "new",
  "createdAt": Date
}
```

### CompanyInfo Collection
```json
{
  "_id": ObjectId,
  "phone": "+94 770 832 340",
  "email": "info@ccsoftwares.com",
  "description": "CC Software Solutions is a leading...",
  "socialMedia": {
    "facebook": "https://facebook.com/ccsoftwares",
    "instagram": "https://instagram.com/ccsoftwares",
    "youtube": "https://youtube.com/ccsoftwares",
    "twitter": "https://twitter.com/ccsoftwares"
  },
  "createdAt": Date,
  "updatedAt": Date
}
```

## Success Criteria
- All mock data replaced with live API data
- Contact form functional and storing messages
- Admin can manage services and clients via API
- Error handling and loading states implemented
- Seamless user experience maintained