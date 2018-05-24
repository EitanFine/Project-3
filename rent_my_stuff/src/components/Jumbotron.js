import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

class Jumbotron extends React.Component {
    render() {
        return (
            <div style={{ background: "white" }} className="jumbotron text-center">
                <Link to="/"><img style={{ width: "186px", marginTop: "32px", marginBottom: "-46px" }} src={ logo } alt="logo" /></Link>
            </div>
        )
    }
}
export default Jumbotron;