import "./AltHeroImageStyles.css";
import React, { Component } from 'react';

class AltHeroImage extends Component {
    render() {
        return (
            <div className="hero2" >
                <div className="content">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default AltHeroImage