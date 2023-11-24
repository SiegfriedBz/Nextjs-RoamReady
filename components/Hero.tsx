import Image from 'next/image'
import Link from 'next/link'
import Stars from './Stars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import CustomButtonWrapper from './buttons/CustomButtonWrapper'

const Hero = () => {
  return (
    <section className='mt-section-top min-h-section-top padding-container relative'>
      {/* hero bg img */}
      <div className='hero-bg z-[-20]' />

      {/* desktop left */}
      <div className='z-[9999] flex flex-1 flex-col sm:gap-y-4 lg:w-1/2'>
        <Image
          src='/camp.svg'
          width={50}
          height={50}
          className='h-12 w-12 lg:h-14 lg:w-14'
          alt='camp'
        />
        <h1 className='title'>shaman mixtape ascot unicorn camp</h1>
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
            className='mb-4 mt-2 flex w-1/2 items-center justify-center gap-x-1 whitespace-nowrap px-4 py-2 normal-case text-primary-dark lg:w-1/3'
          >
            <FontAwesomeIcon icon={faCircleRight} className='h-5 w-5' />
            How we work ?
          </CustomButtonWrapper>
        </div>
      </div>

      {/* location */}
      <div
        className='absolute
        -bottom-2 
        left-4 my-8 
        w-fit
        flex-1 
        rounded-3xl 
        ring-1 
        ring-primary-light sm:bottom-32 lg:bottom-auto
        lg:left-1/2 
        lg:top-1/4 
        lg:-translate-y-16 
        lg:translate-x-1/2'
      >
        <div
          className='
          relative
          flex 
          w-full 
          flex-col 
          items-start justify-start gap-y-2 rounded-3xl
          bg-gradient-to-r from-primary-super-dark
          to-primary-dark 
          px-8 
          py-4 text-light lg:gap-y-4'
        >
          <div className='flex w-full flex-col'>
            <h6 className='opacity-50'>Location</h6>
            <h5>Bear Cove</h5>
          </div>
          {/* fake close btn */}
          <button type='button' className='absolute right-3 top-3'>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className='h-5 w-5 rounded-full bg-light text-primary-light opacity-90'
            />
          </button>
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
