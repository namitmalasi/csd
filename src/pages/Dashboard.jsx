import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import TicketTable from "../components/TicketTable";
import TicketForm from "../components/TicketForm";
import useTickets from "../hooks/useTickets";
import Filters from "../components/Filters";

export default function Dashboard() {
  const { tickets, loading } = useTickets();
  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");

  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      const matchesSearch =
        ticket.customerName.toLowerCase().includes(search.toLowerCase()) ||
        ticket.subject.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = status === "All" || ticket.status === status;

      const matchesPriority =
        priority === "All" || ticket.priority === priority;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [tickets, search, status, priority]);

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

        {/* Filters */}
        <Filters
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          priority={priority}
          setPriority={setPriority}
        />

        {loading ? (
          <p className="mt-4">Loading tickets...</p>
        ) : (
          <TicketTable tickets={filteredTickets} />
        )}
      </div>

      {open && <TicketForm closeModal={() => setOpen(false)} />}
    </>
  );
}
