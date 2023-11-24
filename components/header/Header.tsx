'use client'

import { useState } from 'react'
import Link from 'next/link'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  return (
    <div id='header' className='header'>
      <div className='padding-container flex items-center justify-between '>
        <Link href='/' onClick={() => setMobileMenuIsOpen(false)}>
          <h2 className='text-gradient font-semibold italic'>RoamReady</h2>
        </Link>

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
