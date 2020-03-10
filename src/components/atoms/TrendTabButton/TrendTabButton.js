import React from 'react'


class TrendTabButton extends React.Component {

    constructor(props) {
        super(props)
        this.left = props.left
        this.label = props.label
        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.state = {
            hovered: false,
        }
        this.style = {
            position: "relative",
            display: "flex",
            left: this.left,
            bottom: "2px",
            width: "52px",
            height: "28px",
            marginRight: "8px",
            cursor: "pointer",
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
        if (this.label === "1日") {
            this.labelstyle = {
                position: "relative",
                display: "inline-block",
                textAlign: "center",
                fontSize: "14px",
                color: "#55C500",
                width: "52px",
                height: "14px",
                textDecoration: "none",
                borderBottom: "2px solid #55C500",
                paddingBottom: "14px",
            }
        }
        else {
            if (this.state.hovered) {
                this.labelstyle = {
                    position: "relative",
                    display: "inline-block",
                    textAlign: "center",
                    fontSize: "14px",
                    color: "#55C500",
                    width: "52px",
                    height: "14px",
                    textDecoration: "none",
                    borderBottom: "2px solid #55C500",
                    paddingBottom: "14px",
                }
            }
            else {
                this.labelstyle = {
                    position: "relative",
                    display: "inline-block",
                    textAlign: "center",
                    fontSize: "14px",
                    color: "#999999",
                    width: "52px",
                    height: "14px",
                    paddingBottom: "14px",
                }
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


export default TrendTabButton