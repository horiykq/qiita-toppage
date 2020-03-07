import React from 'react'

class Message extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            fontSize: "46px",
            color: "white",
            lineHeight: "60px",
        }
    }

    render() {
        return(
            <h1 style={this.style}>
                How developers code is here.
            </h1>
        )
    }
}


export default Message