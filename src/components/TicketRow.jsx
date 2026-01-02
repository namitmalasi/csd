const priorityColors = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-green-100 text-green-700",
};

export default function TicketRow({ ticket }) {
  return (
    <tr className="border-t">
      <td className="px-4 py-3">{ticket.customerName}</td>
      <td className="px-4 py-3">{ticket.subject}</td>
      <td className="px-4 py-3 text-center">{ticket.status}</td>
      <td className="px-4 py-3 text-center">
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            priorityColors[ticket.priority]
          }`}
        >
          {ticket.priority}
        </span>
      </td>
      <td className="px-4 py-3 text-center space-x-2">
        <button className="text-blue-600 hover:underline">Edit</button>
        <button className="text-red-600 hover:underline">Delete</button>
      </td>
    </tr>
  );
}
