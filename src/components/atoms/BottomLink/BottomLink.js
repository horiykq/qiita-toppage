import React from 'react'


class BottomLink extends React.Component {

    constructor(props, state) {
        super(props, state)
        this.label = props.label
        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.state = {
            hovered: false,
        }
        this.style = {
            position: "relative",
            display: "flex",
            width: "90px",
            height: "30px",
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
            this.linkstyle = {
                position: "relative",
                marginTop: "auto",
                marginBottom: "auto",
                color: "#B3B3B3",
                fontSize: "13px",
                cursor: "pointer",
                textDecoration: "underline",
                textDecorationColor: "white",
            }
        }
        else {
            this.linkstyle = {
                position: "relative",
                marginTop: "auto",
                marginBottom: "auto",
                color: "#B3B3B3",
                fontSize: "13px",
                cursor: "pointer",
            }
        }
        return(
            <div style={this.style}>
                <div style={this.linkstyle} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>{this.label}</div>
            </div>
        )
    }
}


export default BottomLink