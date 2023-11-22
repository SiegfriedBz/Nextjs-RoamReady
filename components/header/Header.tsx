'use client'

import { useState } from 'react'
import Link from 'next/link'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  return (
    <div id='header'>
      <Link href='/' onClick={() => setMobileMenuIsOpen(false)}>
        <h3 className='italic'>RoamReady</h3>
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
  )
}

export default Header
