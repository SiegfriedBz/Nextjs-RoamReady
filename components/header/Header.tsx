import Logo from './Logo'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import ButtonToggleTheme from './ButtonToggleTheme'

const Header = () => {
  return (
    <div id='header'>
      <div className='flex gap-x-4'>
        <Logo />
        BrandName
      </div>

      <div className='flex gap-x-4'>
        <ButtonToggleTheme />

        {/* desktop nav */}
        <div className='hidden md:flex'>
          <DesktopNav />
        </div>
        {/* mobile nav */}
        <div className='flex md:hidden'>
          <MobileNav />
        </div>
      </div>
    </div>
  )
}

export default Header
