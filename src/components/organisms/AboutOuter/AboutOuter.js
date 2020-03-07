import React from 'react'

class AboutOuter extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            top: "100px",
            left: "0%",
            width: "550px",
            height: "250px",
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


export default AboutOuter