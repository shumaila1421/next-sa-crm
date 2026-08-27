import type { Application } from "@/types/application";

type ApplicationTableProps = {
  applications: Application[];
};

export default function ApplicationTable({
  applications,
}: ApplicationTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Student</th>
          <th>University</th>
          <th>Program</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {applications.map((application) => (
          <tr key={application.student}>
            <td>{application.student}</td>
            <td>{application.university}</td>
            <td>{application.program}</td>
            <td>{application.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
