import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">biostate.AI</h1>
        <p className="text-xl text-gray-300 mb-8">RNA Sequencing Platform</p>
        <Link
          href="/rna-sequencing"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Enter Platform
        </Link>
      </div>
    </main>
  );
}
