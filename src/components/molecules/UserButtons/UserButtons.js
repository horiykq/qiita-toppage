import React from 'react'
import RegistrationButton from '../../atoms/RegistrationButton/RegistrationButton'
import LoginButton from '../../atoms/LoginButton/LoginButton'


class UserButtons extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            width: "194px",
            height: "34px",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <RegistrationButton purpose="ユーザ登録" />
                <LoginButton />
            </div>
        )
    }
}


export default UserButtons