import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { Card, ListGroup } from 'react-bootstrap'
import Flip from './pages/Flip'
import PanaraID from './pages/PanaraID'
import GoogleForm from './pages/GoogleForm'

function App() {
  return (
    <>
      <BrowserRouter>
        <Card className='text-center'>
          <Card.Header>
            <h1>Aplikasi IFrame</h1>
            <ListGroup>
              <ListGroup.Item>
                <Link to='/flip'>Flip</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to='/panara.id'>Website panara.id</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to='/google-form'>Google Form</Link>
              </ListGroup.Item>
            </ListGroup>
          </Card.Header>
          <Card.Body>
            <Routes>
              <Route path='/flip' element={<Flip />} />
              <Route path='/panara.id' element={<PanaraID />} />
              <Route path='/google-form' element={<GoogleForm />} />
            </Routes>
          </Card.Body>
        </Card>
      </BrowserRouter>
    </>
  )
}

export default App
