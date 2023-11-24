import FooterNav from './FooterNav'

const currentYear = () => {
  return new Date().getFullYear()
}

const Footer = () => {
  return (
    <div id='footer' className='footer padding-container-x py-4 sm:py-8'>
      <div className='flex flex-col items-center justify-between'>
        <div className='flex flex-col items-center gap-y-2 sm:flex-row sm:gap-x-24 sm:gap-y-0 md:gap-x-32 lg:gap-x-64 xl:gap-x-80'>
          <h4 className='text-gradient self-start font-semibold italic sm:self-center'>
            RoamReady
          </h4>
          <FooterNav />
        </div>

        <h6 className='text-gradient mt-4 self-start text-sm italic'>
          &copy;RoamReady {currentYear()} All Rights Reserved.
        </h6>
      </div>
    </div>
  )
}

export default Footer
