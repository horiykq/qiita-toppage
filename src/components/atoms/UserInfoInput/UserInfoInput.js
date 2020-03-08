import React from 'react'


class UserInfoInput extends React.Component {

    constructor(props) {
        super(props)
        this.purpose = props.purpose
        this.style = {
            position: "relative",
            display: "inline-block",
            itemsAlign: "center",
            width: "330px",
            height: "40px",
            borderRadius: "4px",
            background: "white",
        }
        this.formstyle = {
            position: "relative",
            display: "inline-block",
            width: "330px",
            height: "40px",
            margin: "auto",
        }
        this.inputstyle = {
            position: "absolute",
            display: "inline-block",
            width: "325px",
            height: "30px",
            border: "none",
            outline: "none",
            fontSize: "12px",
            margin: "auto",
            top: "0px",
            bottom: "0px",
            left: "0px",
            right: "0px",
        }
    }

    render() {
        if (this.purpose === "user") {
            this.type = "text"
            this.init = "qiitan"
        }
        else if (this.purpose === "address") {
            this.type = "text"
            this.init = "qiitan@qiita.com"
        }
        else if (this.purpose === "password") {
            this.type = "password"
            this.init = "********"
        }
        return(
            <div style={this.style}>
                <form style={this.formstyle}>
                    <input style={this.inputstyle} placeholder={this.init} type={this.type} />
                </form>
            </div>
        )
    }
}


export default UserInfoInput