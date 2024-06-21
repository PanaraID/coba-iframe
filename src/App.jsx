import { Fragment } from 'react'
import { Card } from 'react-bootstrap';

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
      <Card className='text-center'>
        <Card.Header>
          <h1>Aplikasi IFrame</h1>
        </Card.Header>
        <Card.Body>
          <p>Test</p>
        </Card.Body>
      </Card>
      <Iframe />
    </Fragment>
  );
}

export default App;