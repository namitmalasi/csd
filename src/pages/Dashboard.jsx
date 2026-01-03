import { useState } from "react";
import Navbar from "../components/Navbar";
import TicketTable from "../components/TicketTable";
import TicketForm from "../components/TicketForm";
import useTickets from "../hooks/useTickets";

export default function Dashboard() {
  const { tickets, loading, fetchTickets } = useTickets();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Support Tickets</h2>
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + New Ticket
          </button>
        </div>

        {loading ? (
          <p>Loading tickets...</p>
        ) : (
          <TicketTable tickets={tickets} />
        )}
      </div>

      {open && (
        <TicketForm
          closeModal={() => setOpen(false)}
          onSuccess={fetchTickets}
        />
      )}
    </>
  );
}
  