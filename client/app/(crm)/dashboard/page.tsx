import StatCard from "@/components/StatCard";
export default function Dashboard() {
  const stats = [
    { title: "Students", value: 128 },
    { title: "Applications", value: 42 },
    { title: "Universities", value: 35 },
    { title: "Documents", value: 186 },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 flex">
      <section className="flex-1 p-8">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of your study abroad consultancy.
        </p>
        <div className="mt-8 flex gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.title} title={stat.title} value={stat.value} />
          ))}
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
