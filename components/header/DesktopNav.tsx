'use client'

import Link from 'next/link'
import { MENU_LINKS } from '@/constants'
import { usePathname } from 'next/navigation'

const DesktopNav = () => {
  const pathName = usePathname()
  const isActivePath = (href: string) => pathName === href

  return (
    <nav>
      <ul className='flex gap-x-4'>
        {MENU_LINKS.map((link) => {
          return (
            <li key={link.id}>
              <Link href={link.href} className='underline-gradient-link'>
                <h5
                  className={`nav-link
                    ${isActivePath(link.href) ? 'font-semibold' : ''}
                `}
                >
                  {link.title}
                </h5>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default DesktopNav
