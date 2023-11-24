'use client'

import { useRef, forwardRef } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapLocationDot,
  faCircleLeft,
  faCircleRight,
} from '@fortawesome/free-solid-svg-icons'
import { PERSONS_IMG } from '@/constants'

const CampImages = () => {
  const leftImg = useRef<HTMLDivElement>(null)
  const rightImg = useRef<HTMLDivElement>(null)
  const scrollToLeft = () => {
    leftImg.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    })
  }
  const scrollToRight = () => {
    rightImg.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    })
  }

  return (
    <div className='camp-images-wrapper'>
      {/* left img */}
      <CampImage
        ref={leftImg}
        scrollTo={scrollToRight}
        arrowIcon={faCircleRight}
        campBgImg='camp-1-bg'
        locationTitle='Shaman mixtape camp'
        locationSubtitle='Bear Cove'
        personsJoined={50}
      />
      {/* right img */}
      <CampImage
        ref={rightImg}
        scrollTo={scrollToLeft}
        arrowIcon={faCircleLeft}
        campBgImg='camp-2-bg'
        locationTitle='Shaman racoon camp'
        locationSubtitle='Racoon Cove'
        personsJoined={65}
      />
    </div>
  )
}

export default CampImages

type CampImageProps = {
  scrollTo: () => void
  arrowIcon: any
  campBgImg: string
  locationTitle: string
  locationSubtitle: string
  personsJoined?: number
}

const CampImage = forwardRef(
  (props: CampImageProps, ref: React.Ref<HTMLDivElement> | undefined) => {
    const {
      scrollTo,
      arrowIcon,
      campBgImg,
      locationTitle,
      locationSubtitle,
      personsJoined,
    } = props

    return (
      <div
        ref={ref}
        className={`camp-bg ${campBgImg} overflow-hidden rounded-3xl`}
      >
        {/* content */}
        <div className='relative z-[999] h-full w-full md:w-5/6'>
          {/* top */}
          <div className='absolute left-4 top-4 flex items-center gap-x-4'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary-dark to-primary-light ring-1 ring-primary'>
              <FontAwesomeIcon
                icon={faMapLocationDot}
                className='h-4 w-4 text-light'
              />
            </div>
            <div className='flex flex-col gap-y-1'>
              <h3 className='font-extrabold capitalize tracking-wide text-light opacity-90'>
                {locationTitle}
              </h3>
              <h5 className='font-extrabold capitalize tracking-wide text-light opacity-80'>
                {locationSubtitle}
              </h5>
            </div>
          </div>

          {/* bottom */}
          <div className='absolute bottom-4 left-0 flex w-full items-center sm:w-2/3'>
            <div className='relative h-8 w-1/3 -translate-y-1/2 rounded-full'>
              {/* persons */}
              {PERSONS_IMG.map((person) => {
                return (
                  <div
                    key={person.id}
                    className={`${person.z} absolute ${person.left} flex h-16 w-16 items-center justify-center`}
                  >
                    <Image
                      src={person.img}
                      width={36}
                      height={36}
                      alt='avatar'
                    />
                  </div>
                )
              })}
            </div>
            <div>
              <h4 className='ms-4 font-extrabold capitalize tracking-wide text-light opacity-80 lg:ms-8'>
                {personsJoined}+ joined
              </h4>
            </div>
          </div>
        </div>

        {/* scroll to img - btn */}
        <button
          type='button'
          onClick={scrollTo}
          className='absolute bottom-4 right-4 z-[999] flex w-fit items-center justify-center rounded-full bg-gradient-to-r from-primary-dark to-primary-light p-2 2xl:hidden'
        >
          <FontAwesomeIcon icon={arrowIcon} className='h-5 w-5 text-light' />
        </button>
      </div>
    )
  }
)

CampImage.displayName = 'CampImage'
