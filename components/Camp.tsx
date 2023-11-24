import CampImages from './CampImages'

const Camp = () => {
  return (
    <section className='min-h-section-full-page padding-container relative'>
      {/* bg imgs */}
      <CampImages />

      {/* pop up */}
      <PopUp />
    </section>
  )
}

export default Camp

const PopUp = () => {
  return (
    <>
      <div
        className='
        absolute 
        bottom-4
        left-4
        right-4

        w-fit

        rounded-3xl 
        ring-1 
        ring-primary-light 
        
        xs:bottom-16
        xs:right-1/4

        sm:bottom-12

        md:bottom-4
        md:right-4

        lg:bottom-44
        lg:left-1/2
        lg:right-12
        lg:-translate-x-1/4
        xl:bottom-44
        '
      >
        <div
          className='
            flex
            w-full 
            flex-col 
            items-start justify-start gap-y-4 rounded-3xl
            bg-gradient-to-r 
          from-primary-super-dark
          to-primary-dark 
            px-4 
            py-8 
          text-light'
        >
          <h4 className='capitalize opacity-90'>
            <span className='font-semibold '>Feeling lost </span>& not knowing
            the way ?
          </h4>
          <h5 className='opacity-50'>
            Vegan you probably haven&apos;t heard of them activated charcoal
            roof party, mlkshk gluten-free normcore jianbing salvia swag echo
            park single-origin coffee vape.
          </h5>
        </div>
      </div>
    </>
  )
}
