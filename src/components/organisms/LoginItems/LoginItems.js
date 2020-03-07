import React from 'react'
import SNSButtons from '../../molecules/SNSButtons/SNSButtons'

class LoginItems extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            marginLeft: "auto",
            bottom: "230px",
            width: "350px",
            height: "396px",
        }
        this.orstyle = {
            position: "relative",
            display: "flex",
            marginLeft: "auto",
            width: "330px",
            height: "30px",
        }
        this.orinnerstyle = {
            position: "relative",
            display: "inline-block",
            margin: "auto",
            fontSize: "12px",
            color: "#9DE06A",
            textAlign: "center",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <SNSButtons />
                <div style={this.orstyle}>
                    <p style={this.orinnerstyle}>OR</p>
                </div>
            </div>
        )
    }
}


export default LoginItems