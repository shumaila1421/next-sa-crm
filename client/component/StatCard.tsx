type StatCardProps = {
  title: string;
  value: string;
};

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <div>
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}
