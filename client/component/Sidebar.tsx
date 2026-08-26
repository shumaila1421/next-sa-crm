import Link from "next/link";
export default function Sidebar() {
  return (
    <aside className="w-64 bg-white p-6">
      <div>
        <h2 className="text-xl font-semibold text-blue-900">NEXT</h2>
        <p className="text-sm text-gray-500">Study Abroad CRM</p>
      </div>
      <nav className="mt-8 space-y-2">
        <p className="text-xs font-semibold text-gray-500 uppercase">
          Main Menu
        </p>
        <Link
          href="/dashboard"
          className="mt-3 block rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-900"
        >
          Dashboard
        </Link>
        <Link
          href="/students"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600"
        >
          Students
        </Link>
        <Link
          href="/applications"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600"
        >
          Applications
        </Link>
        <Link
          href="/universities"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600"
        >
          Universities
        </Link>
        <Link
          href="/documents"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600"
        >
          Documents
        </Link>
        <Link
          href="/agents"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600"
        >
          Agents
        </Link>
      </nav>
    </aside>
  );
}
