'use client'

import { useRouter } from 'next/navigation'
import CustomButton from './CustomButton'

type Props = {
  variant?: string
  className?: string
  route: string
  children: React.ReactNode
}
const CustomButtonWrapper = ({
  variant,
  className,
  route,
  children,
}: Props) => {
  const router = useRouter()

  return (
    <CustomButton
      variant={variant}
      className={className}
      handleClick={() => router.push(route)}
    >
      {children}
    </CustomButton>
  )
}

export default CustomButtonWrapper
