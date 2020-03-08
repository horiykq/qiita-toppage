import React from 'react'
import RegistrationButton from '../../atoms/RegistrationButton/RegistrationButton'

class RegistrationArea extends React.Component {

    constructor(props, state) {
        super(props, state)
        this.state = {
            hovered: false,
        }
        this.style = {
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            width: "330px",
            height: "55px",
            marginLeft: "auto",
            top: "22px",
        }
        this.infostyle = {
            position: "relative",
            display: "inline-block",
            width: "194px",
            height: "36px",
            marginLeft: "auto",
            fontSize: "12px",
            color: "white",
            bottom: "4px",
        }
        this.termsstyle = {
            position: "relative",
            display: "inline",
            color: "white",
            cursor: "pointer",
            textDecoration: "underline",
            textDecorationColor: "white",
        }

    }

    render() {
        return(
            <div style={this.style}>
                <RegistrationButton purpose="登録する" />
                <div style={this.infostyle}>登録には<div style={this.termsstyle}>利用規約</div>に同意する必要があります。</div>
            </div>
        )
    }
}


export default RegistrationArea