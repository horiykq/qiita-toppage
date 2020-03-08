import React from 'react'
import googleicon from '../../pages/images/google_icon.png'
import githubicon from '../../pages/images/github_icon.png'
import twittericon from '../../pages/images/twitter_icon.png'

class SNSButton extends React.Component {

    constructor(props) {
        super(props)
        this.button = props.button
        this.state = {
            hovered: false,
        }
        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.elementstyle = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }
        this.imgstyle = {
            position: "relative",
            display: "inline-block",
            right: "3px",
            width: "18px",
            height: "18px",
        }
        this.labelstyle = {
            position: "relative",
            display: "inline-block",
            fontSize: "12px",
        }
    }

    onMouseEnter() {
        this.setState({
            hovered: true,
        })
    }

    onMouseLeave() {
        this.setState({
            hovered: false,
        })
    }

    render() {
        if (this.button === "GitHub") {
            this.imgsrc = githubicon
        }
        else if (this.button === "Twitter") {
            this.imgsrc = twittericon
        }
        else if (this.button === "Google") {
            this.imgsrc = googleicon
        }
        if (this.state.hovered) {
            this.style = {
                position: "relative",
                display: "inline-block",
                width: "99px",
                height: "40px",
                background: "#EAEAEA",
                borderRadius: "4px",
                cursor: "pointer",
            }
        }
        else {
            this.style = {
                position: "relative",
                display: "inline-block",
                width: "99px",
                height: "40px",
                background: "white",
                borderRadius: "4px",
                cursor: "pointer",
            }
        }
        return (
            <div style={this.style} onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>
                <div style={this.elementstyle}>
                    <img src={this.imgsrc} alt="snsicon" style={this.imgstyle}></img>
                    <p style={this.labelstyle}>{this.button}</p>
                </div>
            </div>
        )
    }
}


export default SNSButton