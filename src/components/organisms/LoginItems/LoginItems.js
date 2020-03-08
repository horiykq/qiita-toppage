import React from 'react'
import SNSButtons from '../../molecules/SNSButtons/SNSButtons'
import UserInfoInputs from '../../molecules/UserInfoInputs/UserInfoInputs'
import robotcheck from '../../pages/images/robotcheck.png'
import RegistrationArea from '../../molecules/RegistrationArea/RegistrationArea'


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
        this.passinfostyle = {
            position: "relative",
            display: "inline-block",
            marginLeft: "auto",
            width: "330px",
            color: "white",
            fontSize: "9px",
            top: "8px",
        }
        this.robotcheckouterstyle = {
            position: "relative",
            display: "inline-block",
            marginLeft: "auto",
            width: "330px",
            height: "78px",
            top: "25px",
        }
        this.robotcheckstyle = {
            position: "relative",
            display: "inline-block",
            marginLeft: "auto",
            width: "300px",
            height: "73px",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <SNSButtons />
                <div style={this.orstyle}>
                    <p style={this.orinnerstyle}>OR</p>
                </div>
                <UserInfoInputs />
                <div style={this.passinfostyle}>8文字以上、英・数・記号が使えます</div>
                <div style={this.robotcheckouterstyle}>
                    <img src={robotcheck} style={this.robotcheckstyle} alt="robotcheck" />
                </div>
                <RegistrationArea />
            </div>
        )
    }
}


export default LoginItems