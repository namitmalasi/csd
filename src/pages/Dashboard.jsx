import Navbar from "../components/Navbar";
import TicketTable from "../components/TicketTable";
import useTickets from "../hooks/useTickets";

export default function Dashboard() {
  const { tickets, loading } = useTickets();

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Tickets</h2>

        {loading ? (
          <p>Loading tickets...</p>
        ) : (
          <TicketTable tickets={tickets} />
        )}
      </div>
    </>
  );
}
