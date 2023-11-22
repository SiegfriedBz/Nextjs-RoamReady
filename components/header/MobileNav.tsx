'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import ButtonMobileBurger from './ButtonMobileBurger'
import { MENU_LINKS } from '@/constants'

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
  const pathName = usePathname()
  const isActivePath = (href: string) => pathName === href

  return (
    <ul className='flex flex-col items-center gap-y-8'>
      {MENU_LINKS.map((link) => {
        return (
          <li key={link.id}>
            <Link href={link.href} onClick={() => setMobileMenuIsOpen(false)}>
              <h2
                className={`nav-link-mobile text-4xl
                    ${isActivePath(link.href) ? 'font-semibold' : ''}
                `}
              >
                {link.title}
              </h2>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
