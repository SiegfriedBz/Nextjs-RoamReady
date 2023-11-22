'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import ButtonMobileBurger from './ButtonMobileBurger'

const MobileMenuLinks = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'Home', href: '/' },
  { id: 3, title: 'About', href: '/about' },
]

type Props = {
  mobileMenuIsOpen: boolean
  setMobileMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNav = ({ mobileMenuIsOpen, setMobileMenuIsOpen }: Props) => {
  return (
    <>
      <ButtonMobileBurger
        mobileMenuIsOpen={mobileMenuIsOpen}
        setMobileMenuIsOpen={setMobileMenuIsOpen}
      />
      <AnimatePresence>
        {mobileMenuIsOpen && (
          <motion.nav
            className='mobile-menu'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
          >
            <MobileMenu setMobileMenuIsOpen={setMobileMenuIsOpen} />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileNav

type MobileMenuProps = {
  setMobileMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu = ({ setMobileMenuIsOpen }: MobileMenuProps) => {
  return (
    <ul className='flex flex-col gap-y-8'>
      {MobileMenuLinks.map((link) => {
        return (
          <li key={link.id}>
            <Link href={link.href} onClick={() => setMobileMenuIsOpen(false)}>
              <h2> {link.title}</h2>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
