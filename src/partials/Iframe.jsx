import PropTypes from 'prop-types'

const Iframe = ({ src }) => {
  return (
    <iframe
      src={src}
      height='500vh'
      width='100%'
      sandbox="allow-same-origin allow-scripts"
    />
  )
}

Iframe.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Iframe