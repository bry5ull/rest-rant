
const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div className="home">
                  <img src="/images/pierogie.jpg" alt="pierogies" />
                  <p>Image source: saltandbaker.com</p>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
                </div>
            </main>
        </Def>
    )
}

module.exports = home

