import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { FEATURES } from '@/constants'

const Features = () => {
  return (
    <section
      className='section-full-page flex
      flex-col
      rounded-lg
      bg-feature-bg bg-cover bg-center bg-no-repeat'
    >
      {/* title */}
      <div className='flex flex-col sm:gap-y-4 lg:w-1/2'>
        <Image
          src='/camp.svg'
          width={50}
          height={50}
          className='h-12 w-12 lg:h-14 lg:w-14'
          alt='camp'
        />
        <h1 className='title'>Our Features</h1>
      </div>

      <div className='flex h-full'>
        {/* left img */}
        <div className='relative hidden flex-1 lg:flex '>
          <Image
            src='/phone.png'
            alt='feature'
            width={285}
            height={285}
            className='absolute left-12 top-4 rotate-12 object-contain'
          />
        </div>

        {/* features container */}
        <div
          className='
          grid 
          gap-y-2 
          sm:gap-y-4
          md:w-[67%] 
          md:gap-x-4
          md:gap-y-8
          lg:grid-cols-2
          lg:gap-x-8 lg:gap-y-8
          '
        >
          {FEATURES.map((feature, index) => {
            return <FeatureItem key={index} {...feature} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Features

type FeatureItemProps = {
  title: string
  icon: FontAwesomeIconProps['icon']
  iconColor: string
  description: string
}

const FeatureItem = ({
  title,
  icon,
  iconColor,
  description,
}: FeatureItemProps) => {
  return (
    <div className='flex flex-col gap-y-1 sm:gap-y-2'>
      <div
        className={`
          flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r p-2 md:h-10 md:w-10
            ${
              iconColor === 'green'
                ? 'from-primary-dark to-primary-light'
                : 'from-secondary-dark to-secondary-light'
            }
           `}
      >
        <FontAwesomeIcon
          icon={icon}
          className='h-4 w-4 rounded-full text-light md:h-6 md:w-6'
        />
      </div>

      <h3 className='text-lg font-semibold opacity-80'>{title}</h3>
      <p className='text-smopacity-80 '>{description}</p>
    </div>
  )
}
