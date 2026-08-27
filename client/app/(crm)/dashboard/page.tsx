import StatCard from "@/components/StatCard";
import ApplicationTable from "@/components/ApplicationTable";

export default function Dashboard() {
  const stats = [
    { title: "Students", value: 128 },
    { title: "Applications", value: 42 },
    { title: "Universities", value: 35 },
    { title: "Documents", value: 186 },
  ];

  const applications = [
    {
      student: "Ali Khan",
      university: "University of Toronto",
      program: "Computer Science",
      status: "Pending",
    },
    {
      student: "Sara Ahmed",
      university: "University of Melbourne",
      program: "Business",
      status: "Approved",
    },
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
          <div className="mt-4">
            <ApplicationTable applications={applications} />
          </div>
        </div>
      </section>
    </main>
  );
}
