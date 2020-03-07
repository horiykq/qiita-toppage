import React from 'react'


class RegistrationButton extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hovered: false,
        }
        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.labelstyle = {
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
                textAlign: "center",
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
                width: "96px",
                height: "32px",
                textAlign: "center",
                borderColor: "white",
                border: "4px solid white",
                borderWidth: "2px",
                borderRadius: "5px",
                cursor: "pointer",
            }
        }
        return (
            <div style={this.buttonstyle} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <p style={this.labelstyle}>ユーザ登録</p>
            </div>
        )
    }
}


export default RegistrationButton