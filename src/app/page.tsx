import { About } from '@/components/about'
import { Differences } from '@/components/differences'
import { Location } from '@/components/location'
import { Service } from '@/components/service'

export default function Home() {
  return (
    <main className="">
      <About />
      <Differences />
      <Service />
      <Location />
    </main>
  )
}
