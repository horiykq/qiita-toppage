import React from 'react'


class RegistrationButton extends React.Component {

    constructor(props) {
        super(props)
        this.purpose = props.purpose
        this.state = {
            hovered: false,
        }
        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.onMouseEnter = this.onMouseEnter.bind(this)
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
        if (this.purpose === "ユーザ登録") {
            this.width = "96px"
            this.height = "32px"
            this.labelstyle = {
                position: "relative",
                display: "inline-block",
                margin: "auto",
                fontSize: "12px",
                color: "white",
            }
            }
        else if (this.purpose === "登録する") {
            this.width = "120px"
            this.height = "40px"
            this.labelstyle = {
                position: "relative",
                display: "inline-block",
                margin: "auto",
                fontSize: "14px",
                color: "white",
            }
            }
        if (this.state.hovered) {
            this.buttonstyle = {
                position: "relative",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                width: this.width,
                height: this.height,
                borderColor: "white",
                border: "4px solid white",
                borderWidth: "2px",
                borderRadius: "5px",
                cursor: "pointer",
                background: "#72D923",
            }
        }
        else {
            this.buttonstyle = {
                position: "relative",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                width: this.width,
                height: this.height,
                borderColor: "white",
                border: "4px solid white",
                borderWidth: "2px",
                borderRadius: "5px",
                cursor: "pointer",
            }
        }
        return (
            <div style={this.buttonstyle} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <div style={this.labelstyle}>{this.purpose}</div>
            </div>
        )
    }
}


export default RegistrationButton