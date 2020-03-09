import React from 'react'


class TrendButton extends React.Component {

    constructor(props) {
        super(props)
        this.label = props.label
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
        if (this.label === "トレンド") {
            if (this.state.hovered) {
                this.style = {
                    position: "relative",
                    display: "flex",
                    marginTop: "8px",
                    left: "0%",
                    width: "200px",
                    height: "34px",
                    background: "#48A700",
                    borderTopLeftRadius: "3px",
                    borderBottomLeftRadius: "3px",
                    cursor: "pointer",
                }
            }
            else {
                this.style = {
                    position: "relative",
                    display: "flex",
                    marginTop: "8px",
                    left: "0%",
                    width: "200px",
                    height: "34px",
                    background: "#55C500",
                    borderTopLeftRadius: "3px",
                    borderBottomLeftRadius: "3px",
                    cursor: "pointer",
                }
            }
            this.labelstyle = {
                position: "relative",
                display: "inline-block",
                marginTop: "auto",
                marginBottom: "auto",
                left: "40px",
                color: "white",
                fontSize: "12.5px",
            }
        }
        else if (this.label === "マイルストーン") {
            if (this.state.hovered) {
                this.style = {
                    position: "relative",
                    display: "flex",
                    marginTop: "8px",
                    left: "0%",
                    width: "200px",
                    height: "34px",
                    background: "#E8E8E8",
                    borderTopLeftRadius: "3px",
                    borderBottomLeftRadius: "3px",
                    cursor: "pointer",
                }
            }
            else {
                this.style = {
                    position: "relative",
                    display: "flex",
                    marginTop: "8px",
                    left: "0%",
                    width: "200px",
                    height: "34px",
                    borderTopLeftRadius: "3px",
                    borderBottomLeftRadius: "3px",
                    cursor: "pointer",
                }
            }
            this.labelstyle = {
                position: "relative",
                display: "inline-block",
                marginTop: "auto",
                marginBottom: "auto",
                left: "40px",
                color: "#85837A",
                fontSize: "12.5px",
            }
        }
        return(
            <div style={this.style} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <div style={this.labelstyle}>{this.label}</div>
            </div>
        )
    }
}


export default TrendButton