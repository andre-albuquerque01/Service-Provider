import { About } from '@/components/about'
import { Differences } from '@/components/differences'
import { Introdution } from '@/components/introdution'
import { Location } from '@/components/location'
import { Projects } from '@/components/projects'
import { Service } from '@/components/service'

export default function Home() {
  return (
    <main className="">
      <Introdution />
      <About />
      <Differences />
      <Service />
      <Projects />
      <Location />
    </main>
  )
}
