import { About } from '@/components/about'
import { Differences } from '@/components/differences'
import { Introdution } from '@/components/introdution'
import { Projects } from '@/components/projects'
import { Service } from '@/components/service'

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Introdution />
      <About />
      <Service />
      <Differences />
      <Projects />
    </main>
  )
}
