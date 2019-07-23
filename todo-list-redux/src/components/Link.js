import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, clicked }) => {
  return (
    <button onClick={clicked} disabled={active} style={{ margin: '4px' }}>
      {children}
    </button>
  )
}

Link.propTypes = {
  clicked: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired
}

export default Link
