'use client'

type Props = {
  mobileMenuIsOpen: boolean
  setMobileMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ButtonMobileBurger = ({
  mobileMenuIsOpen,
  setMobileMenuIsOpen,
}: Props) => {
  return (
    <button
      id='button-mobile-burger'
      className={`${
        mobileMenuIsOpen ? 'toggle-mobile-btn' : ''
      } relative right-0 ms-4 h-8 w-8 rounded-2xl text-3xl`}
      onClick={() =>
        setMobileMenuIsOpen((prev: boolean) => {
          return !prev
        })
      }
    >
      <div
        className={`absolute top-3.5 h-[0.15rem] w-4 ${
          !mobileMenuIsOpen ? 'animate-pulse' : ''
        } bg-primary-light 
          before:bg-primary-dark
          after:bg-primary-dark
          rounded transition-all duration-500

          before:absolute before:h-[0.15rem] before:w-8
          before:-translate-x-4 before:-translate-y-3
          before:rounded
          before:transition-all before:duration-500
          before:content-[""]

          after:absolute after:h-[0.15rem] after:w-8
          after:-translate-x-4 after:translate-y-3
          after:rounded
          after:transition-all after:duration-500
          after:content-[""]`}
      ></div>
    </button>
  )
}

export default ButtonMobileBurger
