export default function Dashboard() {
  return (
    <main className="min-h-screen bg-zinc-50 flex">
      <aside className="w-64 bg-white p-6">
        <div>
          <h2 className="text-xl font-semibold text-blue-900">NEXT</h2>
          <p className="text-sm text-gray-500">Study Abroad CRM</p>
        </div>
        <nav className="mt-8 space-y-2">
          <p className="text-xs font-semibold text-gray-500 uppercase">
            Main Menu
          </p>
          <a
            href="/dashboard"
            className="mt-3 block rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-900"
          >
            Dashboard
          </a>
          <a
            href="/students"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600"
          >
            Students
          </a>
          <a
            href="/applications"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600"
          >
            Applications
          </a>
          <a
            href="/universities"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600"
          >
            Universities
          </a>
          <a
            href="/documents"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600"
          >
            Documents
          </a>
          <a
            href="/agents"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600"
          >
            Agents
          </a>
        </nav>
      </aside>
      <section>Dashboard</section>
    </main>
  );
}
