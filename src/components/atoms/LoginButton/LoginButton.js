import React from 'react'


class LoginButton extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hovered: false,
        }
        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.labelstyle = {
            position: "relative",
            display: "inline-block",
            margin: "auto",
            fontSize: "12px",
            color: "white",
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
        if (this.state.hovered) {
            this.buttonstyle = {
                position: "relative",
                display: "flex",
                alignItems: "center",
                width: "96px",
                height: "32px",
                cursor: "pointer",
                textDecoration: "underline",
                textDecorationColor: "white",
            }
        }
        else {
            this.buttonstyle = {
                position: "relative",
                display: "flex",
                alignItems: "center",
                width: "96px",
                height: "32px",
                cursor: "pointer",
            }
        }
        return (
            <div style={this.buttonstyle} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <p style={this.labelstyle}>ログイン</p>
            </div>
        )
    }
}


export default LoginButton