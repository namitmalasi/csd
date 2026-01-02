import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getTickets = () => axios.get(API_URL);
export const createTicket = (data) => axios.post(API_URL, data);
export const updateTicket = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteTicket = (id) => axios.delete(`${API_URL}/${id}`);
