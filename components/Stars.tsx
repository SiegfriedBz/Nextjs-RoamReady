import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Stars = () => {
  const star = (
    <FontAwesomeIcon
      icon={faStar}
      className='text-secondary-light h-5 w-5 lg:h-8 lg:w-8'
    />
  )

  const stars = Array(5)
    .fill(0)
    .map((_, i) => {
      return <span key={i}>{star}</span>
    })

  return (
    <div className='my-4 flex items-center gap-x-1 lg:gap-x-2'>{stars}</div>
  )
}

export default Stars
