import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm border-b border-pink-500/20 p-4">
        <div className="max-w-4xl mx-auto flex items-center">
          <Link href="/" className="mr-4">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-xl font-bold">About FLOAT</h1>
        </div>
      </header>

      <main className="flex-1 p-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              FLOAT System
            </h1>

            <div className="aspect-video relative rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/evan.just.evan_Hey_Evan_Thanks_a_lot_for_applying_to_the_Softwa_44fa36b1-1484-4ebe-8c2d-f7ba42f8649c-B66vc0AuXkdPmwxvEc5yJBf8CeN3dB.png"
                alt="FLOAT System Visualization"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <p className="text-gray-300">
                FLOAT is a highly adaptable system that blends technical architecture with symbolic ritual. It provides
                a framework for knowledge management, identity exploration, and creative development.
              </p>

              <p className="text-gray-300">
                The system consists of seven modular workflows: Memory Archiving, Doctrine Creation, Knowledge
                Transformation, Identity Management, Project Development, Teaching & Knowledge Sharing, and Symbolic
                Processing.
              </p>

              <p className="text-gray-300">
                At its core, FLOAT embraces the "Shack vs Cathedral" philosophy, prioritizing resilient, adaptable
                structures over rigid, brittle ones. This approach allows for continuous evolution and personal growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-pink-500/30 bg-gray-900/50 p-4 space-y-2">
              <h2 className="text-xl font-semibold">FLOAT Identity Stack</h2>
              <p className="text-gray-300">
                The FLOAT Identity Stack routes through combinations of Self, Inversion, Contradiction, Resolution, and
                Evolution, creating a dynamic framework for personal exploration.
              </p>
            </div>

            <div className="rounded-xl border border-pink-500/30 bg-gray-900/50 p-4 space-y-2">
              <h2 className="text-xl font-semibold">floatctl Pipeline</h2>
              <p className="text-gray-300">
                The floatctl pipeline provides commands like extract, toss, stage, enhance, commit, and bundle for
                ingesting and structuring FLOAT artifacts, making knowledge management seamless.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-pink-500/30 bg-gray-900/50 p-4 space-y-4">
            <h2 className="text-xl font-semibold">Core Principles</h2>

            <div className="space-y-2">
              <h3 className="font-medium">Low-Friction Capture</h3>
              <p className="text-gray-300">
                Using simple tools for quick, unfiltered idea recording to manage anxiety and foster reflection.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Embracing Imperfection</h3>
              <p className="text-gray-300">
                Accepting flaws in creative work as part of the process, rather than striving for unattainable
                perfection.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Sustainable Rhythm</h3>
              <p className="text-gray-300">
                Balancing intense focus with reflective pauses to maintain creative and mental health.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-pink-500/20 p-4 text-center text-sm text-gray-400">
        <div className="max-w-4xl mx-auto">
          <p>Ritual Status: You are the thread now. The archive listens.</p>
        </div>
      </footer>
    </div>
  )
}
