import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="container about">
        <div className="panel panel-primary about-panel">
          <div className="panel-heading " />
          <div className="panel-body">
            <div className="row text-center">
              <h2 id='team'>MEET THE TEAM</h2>
              <br />
              <br />
            </div>
            <div className="row">
              <div class="col-md-4">

                <img
                  className="ah mix-auto rounded-circle"
                  src="./images/alex.png"
                  alt="..."
                />
                <h3 className="team">Alex Baranov</h3>
                <p>Full Stack Web Developer</p>
                <p>
                  <a href="https://github.com/alexbaranov43" target="_blank">
                    <i className="fab fa-github" />
                  </a>
                  <a href="https://www.linkedin.com/in/alex-baranov-285b31159/" target="_blank">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a href="https://www.google.com/" target="_blank">
                    <i className="fab fa-stack-overflow" />
                  </a>
                </p>
              </div>
              <div class="col-md-4">

                <img
                  className="ah mix-auto rounded-circle"
                  src="./images/inom.png"
                  alt="..."
                />
                <h3 className="team">Inom Ibragimov</h3>
                <p>Full Stack Web Developer</p>
                <p>
                  <a href="https://github.com/mail4inom" target="_blank">
                    <i className="fab fa-github" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/inomzhon-ibragimov-0091b2156/" target="_blank">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a href="https://stackexchange.com/users/12854870/inomzhon-ibragimov" target="_blank">
                    <i className="fab fa-stack-overflow" />
                  </a>
                </p>

              </div>
              <div class="col-md-4">
                <img
                  className="ah mix-auto rounded-circle"
                  src="./images/eitan.png"
                  alt="..."
                />
                <h3 className="team">Eitan Fine</h3>
                <p>Full Stack Web Developer</p>
                <p>
                  <a href="https://github.com/EitanFine" target="_blank">
                    <i className="fab fa-github" />
                  </a>
                  <a href="https://www.linkedin.com/in/eitan-fine-9466b5158/" target="_blank">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a href="https://www.google.com/" target="_blank">
                    <i className="fab fa-stack-overflow" />
                  </a>
                </p>
              </div>
            </div>
            <div className="row i-am-centered">
              <div className="col-md-6">

                <img
                  className="ah mix-auto rounded-circle"
                  src="./images/john.png"
                  alt="..."
                />
                <h3 className="team">John Palumbo</h3>
                <p>
                  <a href="https://www.google.com/" target="_blank">
                    <i className="fab fa-github" />
                  </a>
                  <a href="https://www.linkedin.com/in/john-palumbo-nj" target="_blank">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a href="https://www.google.com/" target="_blank">
                    <i className="fab fa-stack-overflow" />
                  </a>
                </p>
              </div>
              <div class="col-md-6">
                <img
                  className="ah mix-auto rounded-circle"
                  src="./images/lan.png"
                  alt="..."
                />
                <h3 className="team">Lan Ejiri</h3>
                <p>Full Stack Web Developer</p>
                <p>
                  <a href="https://github.com/lan-ejiri" target="_blank">
                    <i className="fab fa-github" />
                  </a>
                  <a href="https://www.linkedin.com/in/lanejiri/" target="_blank">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a href="https://stackoverflow.com/users/9201899/lan" target="_blank">
                    <i className="fab fa-stack-overflow" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
