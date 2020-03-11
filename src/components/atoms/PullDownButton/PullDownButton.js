import React from 'react'


class PullDownButton extends React.Component {

    constructor(props) {
        super(props)
        this.width = props.width
        this.state = {
            hovered: false,
        }
        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.label = props.label
        this.labelstyle = {
            position: "relative",
            display: "inline-block",
            marginTop: "auto",
            marginBottom: "auto",
            left: "20px",
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
                display: "flex",
                width: this.width,
                height: "40px",
                fontSize: "12px",
                marginTop: "6px",
                marginBottom: "6px",
                background: "#DDDDDD",
            }
        }
        else {
            this.style = {
                position: "relative",
                display: "flex",
                width: this.width,
                height: "40px",
                fontSize: "12px",
                marginTop: "6px",
                marginBottom: "6px",
            }
        }
        return(
            <div style={this.style} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <div style={this.labelstyle}>
                    {this.label}
                </div>
            </div>
        )
    }
}


export default PullDownButton
