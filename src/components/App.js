import React from 'react'
import { Link } from 'react-router'

const App = ({ children }) => (
  <div>
    <header>
      <Link to='/'> Home
      </Link>
      <Link to='/about'> About
      </Link>
    </header>
    <section className='splash'>
      {children || <div className='content'>
        <h2>Hello World!</h2>
      </div>}
    </section>
  </div>
)

App.propTypes = { children: React.PropTypes.object }

export default App
