import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about1.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Rawan Abuseini</a></h1>
              <span className="email"><i className="icon-mail"></i> rwabuseini@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li><a href="#home" data-nav-section="Home">Home</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/rawan.abusieni/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.linkedin.com/in/rawan-abuseini-4b75ab38/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/rwabusini?tab=overview&from=2020-03-01&to=2020-03-31" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://www.blogger.com/blog/posts/2520092595375288359" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" />    
              </small></p>
              <p><small>
              It is <b>NOT ENOUGH </b>to do your best: you must <b>KNOW </b>what to do, and <b>THEN</b> do your best.
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
