import { twMerge } from 'tailwind-merge'

type Props = {
  btnType?: 'button' | 'submit' | 'reset'
  variant?: string
  className?: string
  onClick?: () => void
  children: React.ReactNode
}

const CustomButton = ({
  btnType = 'button',
  variant = 'btn-gradient-green',
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
          rounded-md
          px-4 py-2
          font-semibold uppercase
          tracking-wide shadow-sm
          transition-all duration-300 ease-in-out
          hover:opacity-90
         `,
        variant,
        className
      )}
    >
      {children}
    </button>
  )
}

export default CustomButton
