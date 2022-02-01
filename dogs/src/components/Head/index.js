import React, { useEffect } from 'react'

import PropTypes from 'prop-types'

export const Head = (props) => {

  useEffect(() => {
    document.title = `${props.title} | Dogs`
    document.querySelector("meta[name='description']").setAttribute('content', props.description)
  }, [props])

  return (
    <></>
  )
}

Head.defaultProps = {
  description: ''
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}