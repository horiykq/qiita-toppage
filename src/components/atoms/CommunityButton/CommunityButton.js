import React from 'react'


class CommunityButton extends React.Component {

    constructor(props, state) {
        super(props, state)
        this.state = {
            hovered: false,
        }
        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.style = {
            position: "relative",
            display: "flex",
            left: "40px",
            top: "3px",
            cursor: "pointer",
            height: "28px",
        }
        this.letterstyle = {
            position: "relative",
            display: "inline-block",
            fontSize: "12px",
            color: "white",
        }
        this.hoveredstyle = {
            position: "relative",
            display: "inline-block",
            transform: "scale(0.8, 0.5)",
            left: "7px",
            bottom: "2px",
            fontSize: "10px",
            color: "white",
        }
        this.unhoveredstyle = {
            position: "relative",
            display: "inline-block",
            transform: "scale(0.8, 0.5)",
            left: "7px",
            bottom: "2px",
            fontSize: "10px",
            color: "#3C8B00",
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
        return(
            <div style={this.style} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <div style={this.letterstyle}>
                    コミュニティ
                </div>
                {this.state.hovered ?
                    <div style={this.hoveredstyle}>▼</div>
                :
                    <div style={this.unhoveredstyle}>▼</div>
                }
            </div>
        )
    }
}


export default CommunityButton