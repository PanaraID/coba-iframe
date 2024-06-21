import { Fragment } from 'react'

function App() {
  const Iframe = () => {
    return (
      <iframe
        src="https://panara.id"
        height='1000px'
      />
    )
  }

  return (
    <Fragment>
      {/* <Design1 /> */}
      <Iframe />
    </Fragment>
  );
}

export default App;