import React from 'react'


class TrendTabButton extends React.Component {

    constructor(props) {
        super(props)
        this.left = props.left
        this.label = props.label
        this.style = {
            position: "relative",
            display: "flex",
            alignItems: "flex-start",
            left: this.left,
            bottom: "2px",
            width: "52px",
            height: "28px",
            marginRight: "8px",
            cursor: "pointer",
        }
        this.labelstyle = {
            position: "relative",
            display: "inline-block",
            fontSize: "14px",
            color: "#999999",
            width: "30px",
            height: "14px",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <div style={this.labelstyle}>
                    {this.label}
                </div>
            </div>
        )
    }
}


export default TrendTabButton