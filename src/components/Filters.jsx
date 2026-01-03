export default function Filters({
  search,
  setSearch,
  status,
  setStatus,
  priority,
  setPriority,
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4 flex flex-wrap gap-4 items-center">
      {/* Search */}
      <input
        type="text"
        placeholder="Search by customer or subject..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded px-3 py-2 w-full md:w-64 focus:ring focus:ring-blue-200"
      />

      {/* Status Filter */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border rounded px-3 py-2"
      >
        <option value="All">All Status</option>
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Resolved">Resolved</option>
      </select>

      {/* Priority Filter */}
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border rounded px-3 py-2"
      >
        <option value="All">All Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
}
