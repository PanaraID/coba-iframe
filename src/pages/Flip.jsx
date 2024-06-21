import { Fragment } from 'react'
import Iframe from '../partials/Iframe'

const Flip = () => {
  const url = 'https://flip.id/pwf/$panaracourse/#tryouttnipolripaket1-7404'

  const handleClick = () => {
    const options = 'width=600,height=400,scrollbars=yes';
    window.open(url, '_blank', options);
  }

  return (
    <Fragment>
      <button onClick={handleClick}>Open Window</button>
      <Iframe src={url} />
    </Fragment>
  )
}

export default Flip