import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='section-full-page relative rounded-lg'>
      <div className='hero-bg z-[-20]' />

      {/* LEFT */}
      <div className='z-[9999] flex flex-1 flex-col'>
        <Image src='/camp.svg' width={50} height={50} alt='camp' />
        <h1 className='hero-title'>shaman mixtape ascot unicorn camp</h1>
        <p className='text-justify'>
          I&apos;m baby taxidermy vinyl waistcoat tbh authentic normcore health
          goth blog post-ironic street art big mood meditation. Raw denim shaman
          ramps biodiesel, prism kitsch live-edge flexitarian
        </p>
      </div>
    </section>
  )
}

export default Hero
