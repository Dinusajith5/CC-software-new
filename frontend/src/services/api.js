import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Services API
export const servicesApi = {
  getAll: async () => {
    try {
      const response = await apiClient.get('/services');
      return response.data;
    } catch (error) {
      console.error('Error fetching services:', error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const response = await apiClient.get(`/services/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching service:', error);
      throw error;
    }
  },

  create: async (serviceData) => {
    try {
      const response = await apiClient.post('/services', serviceData);
      return response.data;
    } catch (error) {
      console.error('Error creating service:', error);
      throw error;
    }
  },
};

// Clients API
export const clientsApi = {
  getAll: async () => {
    try {
      const response = await apiClient.get('/clients');
      return response.data;
    } catch (error) {
      console.error('Error fetching clients:', error);
      throw error;
    }
  },

  create: async (clientData) => {
    try {
      const response = await apiClient.post('/clients', clientData);
      return response.data;
    } catch (error) {
      console.error('Error creating client:', error);
      throw error;
    }
  },
};

// Contact API
export const contactApi = {
  submit: async (contactData) => {
    try {
      const response = await apiClient.post('/contact', contactData);
      return response.data;
    } catch (error) {
      console.error('Error submitting contact:', error);
      throw error;
    }
  },

  getMessages: async () => {
    try {
      const response = await apiClient.get('/contact-messages');
      return response.data;
    } catch (error) {
      console.error('Error fetching contact messages:', error);
      throw error;
    }
  },
};

// Company Info API
export const companyApi = {
  getInfo: async () => {
    try {
      const response = await apiClient.get('/contact-info');
      return response.data;
    } catch (error) {
      console.error('Error fetching company info:', error);
      throw error;
    }
  },

  updateInfo: async (infoData) => {
    try {
      const response = await apiClient.put('/contact-info', infoData);
      return response.data;
    } catch (error) {
      console.error('Error updating company info:', error);
      throw error;
    }
  },
};

export default {
  services: servicesApi,
  clients: clientsApi,
  contact: contactApi,
  company: companyApi,
};