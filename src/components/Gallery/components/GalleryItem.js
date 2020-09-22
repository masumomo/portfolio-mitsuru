import React, { useEffect, useCallback } from 'react'
import AOS from 'aos'
import PropTypes from 'prop-types'

const GalleryItem = ({
  id,
  source,
  thumbnail,
  title,
  date,
  description,
  position,
  toggleLightbox,
}) => {
  useEffect(() => {
    AOS.init()
  }, [])

  const onClick = useCallback(
    (e) => {
      e.preventDefault()
      toggleLightbox(position)
    },
    [position, toggleLightbox]
  )

  return (
    <article key={id} className="6u 12u$(xsmall) work-item" data-aos="fade-up">
      <a className="image fit thumb" href={source} onClick={onClick}>
        <img src={thumbnail} />
      </a>
      <span className="title">{title}</span>
      <span className="image-date">Painted at {date}</span>
      <p>{description}</p>
    </article>
  )
}

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired,
}

export default GalleryItem
