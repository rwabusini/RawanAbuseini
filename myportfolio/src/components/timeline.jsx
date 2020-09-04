import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full-Stack development program at ReBootKamp (RBK)<span> 2020</span></h2>
                        <p>4 months Immersion program with market-ready technical skills</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <h2>IT Lecturer at Princess Nora University<span> 2016-2017</span></h2>
                        <p>Advanced Programming -  C# and Fundamental Programming  - Java</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Master's Degree in Software Engineering<span> 2013-2015</span></h2>
                        <p><b>Publications</b></p>
                        <a href = "https://journal.uob.edu.bh/handle/123456789/3697"> Multiview Visualization of Software Testing Results </a> <br></br>
                        <a href = "https://eis.hu.edu.jo/deanshipfiles/conf108502612.pdf">Visualizing Testing Results for Software Projects</a>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>QA Analyst at Aspire-Services<span> 2011-2012</span></h2>
                        <p>Reviewed project requirements to uncover bugs in early stages. Wrote and optimized test cases, test scripts, and test plans to maximize the success of manual software testing. Conducted functional and usability testing for the website and its main database.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachalor's Degree in Computer Information Systems<span> 2005-2009</span></h2>
                      </div>
                    </div>
                  </article>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
