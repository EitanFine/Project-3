import React from "react";
import "./About.css"

class About extends React.Component {
    render() {
        return (
            <div className="container about">
                <div className="panel panel-primary">
                    <div className="panel-heading">

                    </div>
                    <div className="panel-body">
                        <div className="row text-center">
                            <img id="meettheteam" src="http://eequalso2.com/wp-content/uploads/2017/11/meet_the_team_header.jpg" alt="meet the team header" />
                            <br />
                            <br />
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-xs-4 center">
                                <div className="caption">
                                    <img className="ah mix-auto rounded-circle" src="./images/alex.png" alt="..." />

                                    <h3 className="team">Alex Baranov</h3>
                                    <p>Full Stack Web Developer</p>
                                    <p>
                                        <a href="https://www.google.com/">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a href="https://www.google.com/">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a href="https://www.google.com/">
                                            <i className="fab fa-stack-overflow"></i>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-4 center">
                                <div className="caption">
                                    <img className="ah mix-auto rounded-circle" src="./images/inom.png"
                                        alt="..." />

                                    <h3 className="team">Inom Ibragimov</h3>
                                    <p>Full Stack Web Developer</p>
                                    <p>
                                        <a href="https://www.google.com/">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a href="https://www.google.com/">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a href="https://www.google.com/">
                                            <i className="fab fa-stack-overflow"></i>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-4 center">
                                <div className="caption">
                                    <img  className="ah mix-auto rounded-circle" src="./images/eitan.png"
                                        alt="..." />

                                    <h3 className="team">Eitan Fine</h3>
                                    <p>Full Stack Web Developer</p>
                                    <p>
                                        <a href="https://www.google.com/">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a href="https://www.google.com/">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a href="https://www.google.com/">
                                            <i className="fab fa-stack-overflow"></i>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 col-xs-2 "></div>
                            <div className="col-md-4 col-xs-4 center">
                                <div className="caption">
                                    <img  className="ah mix-auto rounded-circle" src="./images/john.png"
                                        alt="..." />

                                    <h3 className="team">John Palumbo</h3>
                                    <p>Full Stack Web Developer</p>
                                    <p>
                                        <a href="https://www.google.com/">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a href="https://www.google.com/">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a href="https://www.google.com/">
                                            <i className="fab fa-stack-overflow"></i>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-4 center">
                                <div className="caption">
                                    <img className="ah mix-auto rounded-circle" src="./images/lan.png"
                                        alt="..." />

                                    <h3 className="team">Lan Ejiri</h3>
                                    <p>Full Stack Web Developer</p>
                                    <p>
                                        <a href="https://www.google.com/">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a href="https://www.google.com/">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a href="https://www.google.com/">
                                            <i className="fab fa-stack-overflow"></i>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default About;