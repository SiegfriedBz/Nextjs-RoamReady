'use client'

import { useRouter } from 'next/navigation'
import CustomButton from './buttons/CustomButton'

const HeroBtnWrapper = () => {
  const router = useRouter()

  return (
    <CustomButton onClick={() => router.push('/#get-app')} className='sm:w-1/2'>
      Download App
    </CustomButton>
  )
}

export default HeroBtnWrapper
