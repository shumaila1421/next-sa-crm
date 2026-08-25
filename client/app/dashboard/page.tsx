import Link from "next/link";
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
      <section className="flex-1 p-8">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of your study abroad consultancy.
        </p>
        <div className="mt-8 flex gap-4">
          <div className="flex-1 rounded-xl border border-gray-100  bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Students</p>
            <h2 className="mt-2 text-2xl font-semibold text-gray-800">128</h2>
          </div>

          <div className="flex-1 rounded-xl border border-gray-100  bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Applications</p>
            <h2 className="mt-2 text-2xl font-semibold text-gray-800">42</h2>
          </div>

          <div className="flex-1 rounded-xl border border-gray-100  bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Universities</p>
            <h2 className="mt-2 text-2xl font-semibold text-gray-800">35</h2>
          </div>

          <div className="flex-1 rounded-xl  border border-gray-100 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Documents</p>
            <h2 className="mt-2 text-2xl font-semibold text-gray-800">186</h2>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Applications
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Latest student application activity.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-gray-100 bg-gray-50">
                <tr>
                  <th className="px-5 py-3 font-medium text-gray-500">
                    Student
                  </th>
                  <th className="px-5 py-3 font-medium text-gray-500">
                    University
                  </th>
                  <th className="px-5 py-3 font-medium text-gray-500">
                    Program
                  </th>
                  <th className="px-5 py-3 font-medium text-gray-500">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-5 py-4 text-gray-800">Ali Khan</td>
                  <td className="px-5 py-4 text-gray-600">
                    University of Toronto
                  </td>
                  <td className="px-5 py-4 text-gray-600">Computer Science</td>
                  <td className="px-5 py-4 text-gray-600">Pending</td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-gray-800">Sara Ahmed</td>
                  <td className="px-5 py-4 text-gray-600">
                    University of Melbourne
                  </td>
                  <td className="px-5 py-4 text-gray-600">Business</td>
                  <td className="px-5 py-4 text-gray-600">Approved</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
