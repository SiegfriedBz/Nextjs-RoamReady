'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import ButtonToggleTheme from './ButtonToggleTheme'

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  return (
    <div id='header'>
      <Link
        href='/'
        onClick={() => setMobileMenuIsOpen(false)}
        className='flex items-center gap-x-4'
      >
        <Logo />
        <h3 className='hidden sm:flex'>BrandName</h3>
      </Link>

      <div className='flex gap-x-4'>
        <ButtonToggleTheme />

        {/* desktop nav */}
        <div className='hidden md:flex'>
          <DesktopNav />
        </div>
        {/* mobile nav */}
        <div className='flex md:hidden'>
          <MobileNav
            mobileMenuIsOpen={mobileMenuIsOpen}
            setMobileMenuIsOpen={setMobileMenuIsOpen}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
