
const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
          <h1>404: PAGE NOT FOUND</h1>
                <div className="home">
                  <img src="/images/404.jpg" alt="404" />
                  <h2>You'll never find what you're looking for here...</h2>
                </div>
          </main>
      </Def>
    )
  }

module.exports = error404
