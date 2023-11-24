import Link from 'next/link'
import {
  FOOTER_LINKS,
  FOOTER_CONTACT_INFO,
  FOOTER_SOCIAL_LINKS,
} from '@/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterNav = () => {
  return (
    <nav className='flex flex-col gap-y-4 2xl:flex-row 2xl:gap-x-8'>
      <div className='flex flex-col gap-y-4 lg:flex-row lg:gap-x-8'>
        {/* links */}
        <ul className='flex gap-x-8'>
          {FOOTER_LINKS.map((link, index) => {
            return (
              <ul key={index}>
                <h5 className='text-gradient whitespace-nowrap font-semibold'>
                  {link.title}
                </h5>
                {link.links.map((link, index) => {
                  return (
                    <li key={index} className='w-fit'>
                      <Link
                        href={link.href}
                        className='underline-gradient-link opacity-80'
                      >
                        <h6 className='text-base'>{link.title}</h6>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )
          })}
        </ul>

        {/* contact */}
        <ul className=''>
          {FOOTER_CONTACT_INFO.map((link, index) => {
            return (
              <>
                <h5 className='text-gradient whitespace-nowrap font-semibold'>
                  {link.title}
                </h5>
                <ul key={index} className='opacity-80'>
                  {link.links.map((link, index) => {
                    return (
                      <li key={index} className='flex w-fit gap-x-4'>
                        <h6 className='text-base'>{link.title}</h6>
                        <h6 className='text-base'>{link.value}</h6>
                      </li>
                    )
                  })}
                </ul>
              </>
            )
          })}
        </ul>
      </div>

      {/* social */}
      <ul className='flex flex-col'>
        {FOOTER_SOCIAL_LINKS.map((link, index) => {
          return (
            <>
              <h5 className='text-gradient whitespace-nowrap font-semibold'>
                {link.title}
              </h5>
              <ul key={index} className='flex gap-x-8'>
                {link.links.map((link, index) => {
                  return (
                    <li key={index} className='w-fit'>
                      <Link
                        href={link.href}
                        target='_blank'
                        className='underline-gradient-link opacity-80'
                      >
                        <FontAwesomeIcon
                          icon={link.icon}
                          className='h-6 w-6 rounded-full text-primary md:h-8 md:w-8'
                        />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </>
          )
        })}
      </ul>
    </nav>
  )
}

export default FooterNav
