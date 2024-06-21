import { Fragment } from "react";
import Iframe from "../partials/Iframe"

const GoogleForm = () => {
  const url = 'https://docs.google.com/forms/d/1KdGdpbgECcQm3mY0zvBqIM4v-oxe_O_jqqord8qe3XA/viewform?edit_requested=true'

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

export default GoogleForm