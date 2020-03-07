import React from 'react'
import SNSButton from '../../atoms/SNSButton/SNSButton'

class SNSButtons extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            width: "330px",
            height: "40px",
        }
        this.marginstyle = {
            position: "relative",
            display: "inline-block",
            width: "16px",
            height: "42px",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <SNSButton button="GitHub" />
                <div style={this.marginstyle}></div>
                <SNSButton button="Twitter" />
                <div style={this.marginstyle}></div>
                <SNSButton button="Google" />
            </div>
        )
    }
}


export default SNSButtons