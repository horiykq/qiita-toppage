import React from 'react'


class Increments extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            display: "inline-block",
            top: "32px",
            width: "200px",
            height: "160px",
            marginLeft: "auto",
        }
        this.titlestyle = {
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            height: "40px",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <div style={this.titlestyle}>Increments</div>
            </div>
        )
    }
}


export default Increments