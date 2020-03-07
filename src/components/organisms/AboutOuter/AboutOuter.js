import React from 'react'
import Message from '../../atoms/Message/Message'
import SubMessage from '../../atoms/SubMessage/SubMessage'

class AboutOuter extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            top: "70px",
            left: "0%",
            width: "660px",
            height: "220px",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <Message />
                <SubMessage />
            </div>
        )
    }
}


export default AboutOuter