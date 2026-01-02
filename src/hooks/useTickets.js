import { useEffect, useState } from "react";
import {
  getTickets,
  createTicket,
  updateTicket,
  deleteTicket,
} from "../api/ticketApi";

export default function useTickets() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTickets = async () => {
      setLoading(true);
      const res = await getTickets();
      setTickets(res.data);
      setLoading(false);
    };
    fetchTickets();
  }, []);

  return {
    tickets,
    loading,
    createTicket,
    updateTicket,
    deleteTicket,
    fetchTickets,
  };
}
