export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-2 justify-center bg-zinc-50">
      <div className="bg-white w-80 p-8 rounded-2xl shadow-sm flex flex-col gap-2 items-center">
        <h1 className="text-5xl  font-semibold tracking-tight text-blue-900">
          NEXT
        </h1>
        <p className="text-gray-500 text-sm font-medium tracking-wide">
          Study Abroad Consultancy
        </p>
        <p className="text-gray-400 text-xs">Your journey. Our guidance.</p>
        <button className="mt-4 bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
          Get Started
        </button>
      </div>
    </main>
  );
}
