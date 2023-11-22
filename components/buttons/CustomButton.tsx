import { twMerge } from 'tailwind-merge'

type Props = {
  btnType?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: () => void
  children: React.ReactNode
}

const CustomButton = ({
  btnType = 'button',
  className = '',
  onClick,
  children,
}: Props) => {
  return (
    <button
      type={btnType}
      onClick={onClick}
      className={twMerge(
        `
            from-primary-dark
            shadow-primary-dark
            to-primary-light
            text-light
            rounded-md
            bg-gradient-to-r px-4
            py-2 font-semibold uppercase
            tracking-wide shadow-sm
            transition-all duration-300 ease-in-out
            hover:scale-105
            hover:opacity-90
         `,
        className
      )}
    >
      {children}
    </button>
  )
}

export default CustomButton
