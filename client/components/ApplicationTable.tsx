import type { Application } from "@/types/application";

type ApplicationTableProps = {
  applications: Application[];
};

export default function ApplicationTable({
  applications,
}: ApplicationTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-gray-100 bg-gray-50">
          <tr>
            <th className="px-5 py-3 font-medium text-gray-500">Student</th>

            <th className="px-5 py-3 font-medium text-gray-500">University</th>

            <th className="px-5 py-3 font-medium text-gray-500">Program</th>

            <th className="px-5 py-3 font-medium text-gray-500">Status</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((application) => (
            <tr key={application.student} className="border-b border-gray-100">
              <td className="px-5 py-4 text-gray-800">{application.student}</td>

              <td className="px-5 py-4 text-gray-600">
                {application.university}
              </td>

              <td className="px-5 py-4 text-gray-600">{application.program}</td>

              <td className="px-5 py-4">
                <span
                  className={
                    application.status === "Approved"
                      ? "rounded-full bg-green-100 px-3 py-1 text-xs font-medium text=green-700"
                      : "rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700"
                  }
                >
                  {application.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
