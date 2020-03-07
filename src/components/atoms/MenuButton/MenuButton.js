import React from 'react'

class MenuButton extends React.Component {

    constructor(props, state) {
        super(props, state)
        this.state = {
            hovered: false,
        }
        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.innerstyle = {
            position: "absolute",
            right: "0px",
            bottom: "0px",
            left: "0px",
            margin: "auto",
            transform: "scale(0.8, 0.5)",
            fontSize: "10px",
            color: "white",
            top: "3px",
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
            this.style = {
                position: "relative",
                display: "inline-block",
                textAlign: "center",
                left: "10px",
                bottom: "3px",
                background: "#306F00",
                width: "20px",
                height: "20px",
                borderRadius: "3px 3px 3px 3px",
                cursor: "pointer",
            }
        }
        else {
            this.style = {
                position: "relative",
                display: "inline-block",
                textAlign: "center",
                left: "10px",
                bottom: "3px",
                background: "#3C8B00",
                width: "20px",
                height: "20px",
                borderRadius: "3px 3px 3px 3px",
                cursor: "pointer",
            }
        }
        return(
            <div style={this.style} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <div style={this.innerstyle}>
                    ▼
                </div>
            </div>
        )
    }
}


export default MenuButton