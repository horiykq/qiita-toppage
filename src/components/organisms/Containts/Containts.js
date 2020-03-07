import React from 'react'

class Containts extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            display: "inline-block",
            left: "0%",
            width: "782px",
            height: "1564px",
            background: "blue",
        }
    }

    render() {
        return(
            <div style={this.style}>
            </div>
        )
    }
}


export default Containts