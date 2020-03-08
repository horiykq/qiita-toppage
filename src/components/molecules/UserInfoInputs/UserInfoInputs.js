import React from 'react'
import UserInfoInput from '../../atoms/UserInfoInput/UserInfoInput'

class UserInfoInputs extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            marginLeft: "auto",
            width: "430px",
            height: "150px",
        }
        this.marginstyle = {
            position: "relative",
            display: "inline-block",
            width: "330px",
            height: "15px",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <UserInfoInput purpose="user" />
                <div style={this.marginstyle}></div>
                <UserInfoInput purpose="address" />
                <div style={this.marginstyle}></div>
                <UserInfoInput purpose="password" />
            </div>
        )
    }
}


export default UserInfoInputs