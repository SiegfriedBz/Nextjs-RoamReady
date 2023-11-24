import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons'
import CustomButton from './buttons/CustomButton'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section
      id='get-app'
      className='min-h-section-full-page bg-section-accent relative scroll-mt-24'
    >
      <div className='padding-container-x flex flex-col py-4 text-light xl:py-16'>
        <div className='mb-4'>
          <h1 className='title'>Get for free now!</h1>
          <p>Available in ios and android, download now!</p>
        </div>

        <div className='flex flex-col md:flex-row md:items-center md:justify-between md:gap-x-8'>
          {/* CTA */}
          <div className='flex flex-col sm:flex-row sm:gap-x-8'>
            <CustomButton variant='btn-outline-light sm:w-fit normal-case my-4 px-4 py-2 sm:px-8 sm:py-2'>
              <div className='flex items-center justify-center gap-x-4'>
                <FontAwesomeIcon
                  icon={faAndroid}
                  className='h-6 w-6 sm:h-8 sm:w-8'
                />
                Play Store
              </div>
            </CustomButton>

            <CustomButton variant='btn-outline-dark sm:w-fit normal-case my-4 px-4 py-2 sm:px-8 sm:py-2'>
              <div className='flex items-center justify-center gap-x-4'>
                <FontAwesomeIcon
                  icon={faApple}
                  className='h-6 w-6 sm:h-8 sm:w-8'
                />{' '}
                App Store
              </div>
            </CustomButton>
          </div>

          {/* phones */}
          <div className='relative mt-4 min-h-[32rem] w-full flex-1'>
            <Image
              src='/get-app-phones.png'
              alt='phone'
              fill
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetApp
