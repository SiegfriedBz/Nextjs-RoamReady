import Camp from '@/components/Camp'
import Features from '@/components/Features'
import GetApp from '@/components/GetApp'
import Guide from '@/components/Guide'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className='page'>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </div>
  )
}
