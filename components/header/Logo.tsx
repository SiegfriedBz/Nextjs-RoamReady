import Image from 'next/image'

const Logo = () => {
  return (
    <div className='dark:ring-primary-light ring-secondary-light flex h-10 w-10 items-center justify-center rounded-full ring-1 dark:bg-gray-200'>
      <Image
        src='/images/logo.png'
        width='32'
        height='32'
        objectFit='contain'
        alt='logo'
      />
    </div>
  )
}

export default Logo
