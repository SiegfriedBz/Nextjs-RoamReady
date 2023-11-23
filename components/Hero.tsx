import Image from 'next/image'
import Link from 'next/link'
import Stars from './Stars'
import CustomButtonWrapper from './CustomButtonWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <section className='section-top section-full-page relative rounded-lg'>
      <div className='hero-bg z-[-20]' />

      {/* desktop left */}
      <div className='z-[9999] flex flex-1 flex-col sm:gap-y-4 lg:w-1/2'>
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
              Excellent Reviews
            </Link>
          </h4>
        </div>

        {/* CTA */}
        <div className='flex flex-col sm:flex-row sm:gap-x-4 lg:gap-x-8 xl:gap-x-16'>
          <CustomButtonWrapper route='/#get-app' className='sm:w-1/2'>
            Download App
          </CustomButtonWrapper>

          <CustomButtonWrapper
            route='/#get-app'
            variant='btn-outline-green'
            className='text-primary-dark my-4 flex w-1/2 items-center justify-center gap-x-1 whitespace-nowrap px-4 py-2 normal-case lg:w-1/3'
          >
            <FontAwesomeIcon icon={faCircleRight} className='h-5 w-5' />
            How we work ?
          </CustomButtonWrapper>
        </div>
      </div>

      {/*  */}
      <div
        className='ring-primary-light
        absolute 
        -bottom-6 left-0 
        my-8
        w-fit 
        flex-1 
        rounded-3xl 
        ring-1 sm:bottom-32 lg:bottom-auto
        lg:left-1/2 
        lg:top-1/4 
        lg:-translate-y-16 
        lg:translate-x-1/2'
      >
        <div
          className='
          from-primary-super-dark
          to-primary-dark 
          text-light 
          relative 
          flex w-full flex-col items-start
          justify-start gap-y-2
          rounded-3xl 
          bg-gradient-to-r 
          px-8 py-4 lg:gap-y-4'
        >
          <div className='flex w-full flex-col'>
            <div className='flex w-full justify-between'>
              <h6 className='opacity-50'>Location</h6>
              <button type='button'>
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className='text-primary-light bg-light h-5 w-5 rounded-full opacity-90'
                />
              </button>
            </div>
            <h5>Bear Cove</h5>
          </div>
          <div className='flex w-full gap-x-8'>
            <div className='flex flex-col'>
              <h6 className='opacity-50'>Distance</h6>
              <h5>42.4km</h5>
            </div>
            <div className='flex flex-col'>
              <h6 className='opacity-50'>Elevation</h6>
              <h5>4.24km</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
