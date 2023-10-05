import { Route, Routes } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import About from './About'
import Categories from './Categories'
import Category from './Category'
import Session from './Session'
import Register from './Register'
import Confirmation from './Confirmation'

function App() {
  return (
    <div className='app'>
      <Header />

      <Routes>
        <Route path='/' element={<Home title='Welcome to Red30 Tech' />} />

        <Route path='about' element={<About />} />

        <Route path='categories' element={<Categories />}>
          <Route index element={<h3>Select a category from above</h3>} />

          <Route path=':catId' element={<Category />}>
            <Route index element={<h4>Select a session from above</h4>} />

            <Route path=':sessionId' element={<Session />} />
          </Route>
        </Route>

        <Route path='register' element={<Register />} />

        <Route path='confirmed' element={<Confirmation />} />

        <Route
          path='*'
          element={<h1 className='not-found'>Page Not Found</h1>}
        />
      </Routes>

      <footer className='container'>
        &copy;2023 | <a href='https://red30tech.com/'>Red30 Tech</a>
      </footer>
    </div>
  )
}

export default App
