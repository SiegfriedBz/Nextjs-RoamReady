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
        ` rounded-xl
          px-8 py-4
          font-semibold uppercase
          tracking-wide shadow-sm
          transition-all duration-300 ease-in-out
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
