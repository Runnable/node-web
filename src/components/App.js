import React from 'react'

const App = ({ children }) => (
  <div>
    <section className='splash'>
      {children || <div className='content'>
        <h2>Hello World!</h2>
        <p>
          Runnable is a sandbox service that creates <b>full-stack environments</b> for your GitHub branches, so your team can integrate and test more often.
        </p>
      </div>}
    </section>
  </div>
)

App.propTypes = { children: React.PropTypes.object }

export default App
