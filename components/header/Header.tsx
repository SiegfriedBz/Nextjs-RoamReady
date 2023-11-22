import Logo from './Logo'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <div id='header'>
      <div className='flex gap-x-4'>
        <Logo />
        BrandName
      </div>

      {/* desktop nav */}
      <div>
        <DesktopNav />
      </div>

      {/* mobile nav */}
      <div>
        <MobileNav />
      </div>
    </div>
  )
}

export default Header
