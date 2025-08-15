#!/usr/bin/env python3
"""
Comprehensive Backend API Testing for CC Software Solutions Clone
Tests all backend endpoints with proper data validation and error handling
"""

import requests
import json
import sys
from datetime import datetime

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=')[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return "http://localhost:8001"
    return "http://localhost:8001"

BASE_URL = get_backend_url()
API_BASE = f"{BASE_URL}/api"

class BackendTester:
    def __init__(self):
        self.passed_tests = 0
        self.failed_tests = 0
        self.test_results = []
        
    def log_test(self, test_name, passed, message="", response_data=None):
        """Log test results"""
        status = "✅ PASS" if passed else "❌ FAIL"
        print(f"{status}: {test_name}")
        if message:
            print(f"   {message}")
        if response_data and not passed:
            print(f"   Response: {response_data}")
        print()
        
        self.test_results.append({
            'test': test_name,
            'passed': passed,
            'message': message,
            'response': response_data
        })
        
        if passed:
            self.passed_tests += 1
        else:
            self.failed_tests += 1
    
    def test_services_api(self):
        """Test GET /api/services endpoint"""
        print("🔍 Testing Services API...")
        
        try:
            response = requests.get(f"{API_BASE}/services", timeout=10)
            
            if response.status_code == 200:
                services = response.json()
                
                # Check if it returns an array
                if not isinstance(services, list):
                    self.log_test("Services API - Response Type", False, "Expected array, got different type")
                    return
                
                # Check if we have 10 services as expected
                if len(services) != 10:
                    self.log_test("Services API - Count", False, f"Expected 10 services, got {len(services)}")
                else:
                    self.log_test("Services API - Count", True, f"Successfully returned {len(services)} services")
                
                # Validate service structure
                if services:
                    service = services[0]
                    required_fields = ['id', 'title', 'description', 'icon', 'color', 'category', 'isActive']
                    missing_fields = [field for field in required_fields if field not in service]
                    
                    if missing_fields:
                        self.log_test("Services API - Structure", False, f"Missing fields: {missing_fields}")
                    else:
                        self.log_test("Services API - Structure", True, "All required fields present")
                        
                        # Test specific service data
                        react_service = next((s for s in services if s['title'] == 'React js'), None)
                        if react_service:
                            self.log_test("Services API - Data Integrity", True, "React js service found with correct data")
                        else:
                            self.log_test("Services API - Data Integrity", False, "React js service not found")
                
                self.log_test("Services API - Overall", True, "Services endpoint working correctly")
                
            else:
                self.log_test("Services API - HTTP Status", False, f"Expected 200, got {response.status_code}", response.text)
                
        except requests.exceptions.RequestException as e:
            self.log_test("Services API - Connection", False, f"Request failed: {str(e)}")
    
    def test_clients_api(self):
        """Test GET /api/clients endpoint"""
        print("🔍 Testing Clients API...")
        
        try:
            response = requests.get(f"{API_BASE}/clients", timeout=10)
            
            if response.status_code == 200:
                clients = response.json()
                
                # Check if it returns an array
                if not isinstance(clients, list):
                    self.log_test("Clients API - Response Type", False, "Expected array, got different type")
                    return
                
                # Check if we have 5 clients as expected
                if len(clients) != 5:
                    self.log_test("Clients API - Count", False, f"Expected 5 clients, got {len(clients)}")
                else:
                    self.log_test("Clients API - Count", True, f"Successfully returned {len(clients)} clients")
                
                # Validate client structure
                if clients:
                    client = clients[0]
                    required_fields = ['id', 'name', 'logo', 'website', 'isActive']
                    missing_fields = [field for field in required_fields if field not in client]
                    
                    if missing_fields:
                        self.log_test("Clients API - Structure", False, f"Missing fields: {missing_fields}")
                    else:
                        self.log_test("Clients API - Structure", True, "All required fields present")
                        
                        # Test specific client data
                        bloom_client = next((c for c in clients if c['name'] == 'Bloom Mark'), None)
                        if bloom_client:
                            self.log_test("Clients API - Data Integrity", True, "Bloom Mark client found with correct data")
                        else:
                            self.log_test("Clients API - Data Integrity", False, "Bloom Mark client not found")
                
                self.log_test("Clients API - Overall", True, "Clients endpoint working correctly")
                
            else:
                self.log_test("Clients API - HTTP Status", False, f"Expected 200, got {response.status_code}", response.text)
                
        except requests.exceptions.RequestException as e:
            self.log_test("Clients API - Connection", False, f"Request failed: {str(e)}")
    
    def test_contact_form_api(self):
        """Test POST /api/contact endpoint"""
        print("🔍 Testing Contact Form API...")
        
        # Test valid contact form submission
        valid_contact_data = {
            "name": "John Smith",
            "email": "john.smith@example.com",
            "subject": "Business Inquiry",
            "message": "I'm interested in your web development services. Could you please provide more information about your pricing and timeline?"
        }
        
        try:
            response = requests.post(
                f"{API_BASE}/contact",
                json=valid_contact_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code == 200:
                result = response.json()
                
                # Check response structure
                required_fields = ['success', 'message', 'id']
                missing_fields = [field for field in required_fields if field not in result]
                
                if missing_fields:
                    self.log_test("Contact API - Response Structure", False, f"Missing fields: {missing_fields}")
                else:
                    if result.get('success') == True:
                        self.log_test("Contact API - Valid Submission", True, "Contact form submitted successfully")
                        
                        # Store the contact ID for later verification
                        self.contact_id = result.get('id')
                    else:
                        self.log_test("Contact API - Valid Submission", False, "Success field is not True")
                
            else:
                self.log_test("Contact API - Valid Submission", False, f"Expected 200, got {response.status_code}", response.text)
        
        except requests.exceptions.RequestException as e:
            self.log_test("Contact API - Connection", False, f"Request failed: {str(e)}")
        
        # Test invalid data (missing required fields)
        invalid_contact_data = {
            "name": "Jane Doe",
            "email": "invalid-email"  # Missing subject and message
        }
        
        try:
            response = requests.post(
                f"{API_BASE}/contact",
                json=invalid_contact_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            # Should return 422 for validation error
            if response.status_code == 422:
                self.log_test("Contact API - Invalid Data Handling", True, "Properly rejected invalid data")
            else:
                self.log_test("Contact API - Invalid Data Handling", False, f"Expected 422, got {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_test("Contact API - Invalid Data Test", False, f"Request failed: {str(e)}")
    
    def test_company_info_api(self):
        """Test GET /api/contact-info endpoint"""
        print("🔍 Testing Company Info API...")
        
        try:
            response = requests.get(f"{API_BASE}/contact-info", timeout=10)
            
            if response.status_code == 200:
                company_info = response.json()
                
                # Check required fields
                required_fields = ['phone', 'email', 'description', 'socialMedia']
                missing_fields = [field for field in required_fields if field not in company_info]
                
                if missing_fields:
                    self.log_test("Company Info API - Structure", False, f"Missing fields: {missing_fields}")
                else:
                    self.log_test("Company Info API - Structure", True, "All required fields present")
                    
                    # Check social media structure
                    social_media = company_info.get('socialMedia', {})
                    social_fields = ['facebook', 'instagram', 'youtube', 'twitter']
                    missing_social = [field for field in social_fields if field not in social_media]
                    
                    if missing_social:
                        self.log_test("Company Info API - Social Media", False, f"Missing social media fields: {missing_social}")
                    else:
                        self.log_test("Company Info API - Social Media", True, "All social media fields present")
                    
                    # Check specific data
                    if company_info.get('phone') == "+94 770 832 340":
                        self.log_test("Company Info API - Data Integrity", True, "Company phone number matches expected value")
                    else:
                        self.log_test("Company Info API - Data Integrity", False, f"Unexpected phone: {company_info.get('phone')}")
                
                self.log_test("Company Info API - Overall", True, "Company info endpoint working correctly")
                
            else:
                self.log_test("Company Info API - HTTP Status", False, f"Expected 200, got {response.status_code}", response.text)
                
        except requests.exceptions.RequestException as e:
            self.log_test("Company Info API - Connection", False, f"Request failed: {str(e)}")
    
    def test_contact_messages_api(self):
        """Test GET /api/contact-messages endpoint (admin endpoint)"""
        print("🔍 Testing Contact Messages API...")
        
        try:
            response = requests.get(f"{API_BASE}/contact-messages", timeout=10)
            
            if response.status_code == 200:
                messages = response.json()
                
                # Check if it returns an array
                if not isinstance(messages, list):
                    self.log_test("Contact Messages API - Response Type", False, "Expected array, got different type")
                    return
                
                self.log_test("Contact Messages API - Response Type", True, f"Successfully returned {len(messages)} messages")
                
                # If we submitted a contact earlier, check if it's in the list
                if hasattr(self, 'contact_id') and messages:
                    found_message = any(msg.get('id') == self.contact_id for msg in messages)
                    if found_message:
                        self.log_test("Contact Messages API - Data Persistence", True, "Previously submitted contact found in messages")
                    else:
                        self.log_test("Contact Messages API - Data Persistence", False, "Previously submitted contact not found")
                
                # Validate message structure if messages exist
                if messages:
                    message = messages[0]
                    required_fields = ['id', 'name', 'email', 'subject', 'message', 'status', 'createdAt']
                    missing_fields = [field for field in required_fields if field not in message]
                    
                    if missing_fields:
                        self.log_test("Contact Messages API - Structure", False, f"Missing fields: {missing_fields}")
                    else:
                        self.log_test("Contact Messages API - Structure", True, "All required fields present")
                
                self.log_test("Contact Messages API - Overall", True, "Contact messages endpoint working correctly")
                
            else:
                self.log_test("Contact Messages API - HTTP Status", False, f"Expected 200, got {response.status_code}", response.text)
                
        except requests.exceptions.RequestException as e:
            self.log_test("Contact Messages API - Connection", False, f"Request failed: {str(e)}")
    
    def test_cors_configuration(self):
        """Test CORS configuration"""
        print("🔍 Testing CORS Configuration...")
        
        try:
            # Test preflight request
            response = requests.options(
                f"{API_BASE}/services",
                headers={
                    "Origin": "https://example.com",
                    "Access-Control-Request-Method": "GET",
                    "Access-Control-Request-Headers": "Content-Type"
                },
                timeout=10
            )
            
            if response.status_code in [200, 204]:
                cors_headers = response.headers
                if 'Access-Control-Allow-Origin' in cors_headers:
                    self.log_test("CORS Configuration", True, "CORS headers present")
                else:
                    self.log_test("CORS Configuration", False, "CORS headers missing")
            else:
                self.log_test("CORS Configuration", False, f"Preflight request failed: {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_test("CORS Configuration", False, f"CORS test failed: {str(e)}")
    
    def test_api_root(self):
        """Test API root endpoint"""
        print("🔍 Testing API Root...")
        
        try:
            response = requests.get(f"{API_BASE}/", timeout=10)
            
            if response.status_code == 200:
                result = response.json()
                if result.get('message') == "CC Software Solutions API":
                    self.log_test("API Root", True, "Root endpoint working correctly")
                else:
                    self.log_test("API Root", False, f"Unexpected message: {result}")
            else:
                self.log_test("API Root", False, f"Expected 200, got {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_test("API Root", False, f"Request failed: {str(e)}")
    
    def run_all_tests(self):
        """Run all backend tests"""
        print(f"🚀 Starting Backend API Tests for CC Software Solutions")
        print(f"📍 Testing against: {API_BASE}")
        print("=" * 60)
        
        # Run all tests
        self.test_api_root()
        self.test_services_api()
        self.test_clients_api()
        self.test_contact_form_api()
        self.test_company_info_api()
        self.test_contact_messages_api()
        self.test_cors_configuration()
        
        # Print summary
        print("=" * 60)
        print(f"📊 TEST SUMMARY")
        print(f"✅ Passed: {self.passed_tests}")
        print(f"❌ Failed: {self.failed_tests}")
        print(f"📈 Success Rate: {(self.passed_tests / (self.passed_tests + self.failed_tests) * 100):.1f}%")
        
        if self.failed_tests > 0:
            print("\n🔍 FAILED TESTS:")
            for result in self.test_results:
                if not result['passed']:
                    print(f"   ❌ {result['test']}: {result['message']}")
        
        return self.failed_tests == 0

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    sys.exit(0 if success else 1)