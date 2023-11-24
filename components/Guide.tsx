import Image from 'next/image'

const Guide = () => {
  return (
    <section className='min-h-section-full-page relative flex flex-col'>
      {/* top */}
      <div className='padding-container-x flex h-1/2 w-full flex-col gap-y-1 lg:flex-row lg:items-center'>
        {/*  */}
        <div className='lg:w-2/3'>
          <Image
            src='/camp.svg'
            width={50}
            height={50}
            className='h-12 w-12 lg:h-14 lg:w-14'
            alt='camp'
          />

          <h3 className='text-gradient text-base uppercase tracking-wide'>
            we are here for you
          </h3>
          <h1 className='title max-w-[340px] xl:max-w-[480px]'>
            Guide you to easy path
          </h1>
        </div>
        {/*  */}
        <div className='lg:mb-4 lg:w-1/2 lg:self-end'>
          <p className='text-justify'>
            I&apos;m baby taxidermy authentic normcore health post-ironic street
            art big mood meditation. Raw shaman ramps biodiesel, live-edge
            flexitarian.
          </p>
        </div>
      </div>

      {/* bottom - img */}
      <div className='guide-boat-bg h-full w-full'>
        {/* bg img content */}
        <div className='relative h-full w-full'>
          <div
            className='absolute
                bottom-4
                left-1/2
                flex

                h-fit
                w-5/6
                max-w-[320px]
                -translate-x-1/2
                items-center
                gap-x-4
                rounded-3xl 
                bg-gradient-to-r 
                from-gray-100 
                to-light 
                px-8 
                py-2 ring-1
                ring-primary-light 
                sm:left-4 sm:top-1/4
                sm:-translate-y-1/3
                sm:translate-x-0
                lg:py-4
                xl:py-8
                '
          >
            {/* left panel - img */}
            <Image
              src='/meter.svg'
              width={50}
              height={50}
              alt='meter'
              className='h-full w-4'
            />
            {/* right panel - text */}
            <div className='flex w-full flex-col gap-y-2'>
              {/* top */}
              <div className='flex h-1/2 w-full flex-col justify-center'>
                <div className='flex justify-between'>
                  <h5 className='opacity-80'>Destination</h5>
                  <h4 className='text-gradient font-semibold lg:text-xl'>
                    48 min
                  </h4>
                </div>
                <h4 className='font-bold capitalize tracking-wide opacity-80 lg:text-xl'>
                  Aguas calientes
                </h4>
              </div>

              {/* bottom */}
              <div className='flex h-1/2 w-full flex-col justify-center opacity-80'>
                <h5 className=''>Start treck</h5>
                <h4 className='font-bold capitalize tracking-wide lg:text-xl'>
                  Machu picchu
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
