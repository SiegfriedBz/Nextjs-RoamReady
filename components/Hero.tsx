import Image from 'next/image'
import Link from 'next/link'
import CustomButton from '@/components/buttons/CustomButton'
import Stars from './Stars'
import HeroBtnWrapper from './HeroBtnWrapper'

const Hero = () => {
  return (
    <section className='section-top section-full-page relative rounded-lg'>
      <div className='hero-bg z-[-20]' />

      {/* desktop left */}
      <div className='z-[9999] flex flex-1 flex-col lg:w-1/2 lg:gap-y-4'>
        <Image
          src='/camp.svg'
          width={50}
          height={50}
          className='h-12 w-12 lg:h-20 lg:w-20'
          alt='camp'
        />
        <h1 className='hero-title'>shaman mixtape ascot unicorn camp</h1>
        <p className='text-justify'>
          I&apos;m baby taxidermy authentic normcore health post-ironic street
          art big mood meditation. Raw shaman ramps biodiesel, live-edge
          flexitarian.
        </p>

        {/* stars/reviews */}
        <div className='flex items-center gap-x-4'>
          <Stars />
          <h4 className='whitespace-nowrap'>
            <span className='font-bold'>285k</span>{' '}
            <Link href='/#reviews' className='underline-gradient-link'>
              good reviews
            </Link>
          </h4>
        </div>

        {/* CTA */}
        <HeroBtnWrapper />
      </div>
    </section>
  )
}

export default Hero
