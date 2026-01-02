import { useCallback, useEffect, useState } from "react";
import {
  getTickets,
  createTicket,
  updateTicket,
  deleteTicket,
} from "../api/ticketApi";

export default function useTickets() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTickets = useCallback(async () => {
    setLoading(true);
    const res = await getTickets();
    setTickets(res.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchTickets();
  }, [fetchTickets]);

  return {
    tickets,
    loading,
    createTicket,
    updateTicket,
    deleteTicket,
    fetchTickets,
  };
}
