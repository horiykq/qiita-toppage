import React from 'react'


class UserInfoInput extends React.Component {

    constructor(props) {
        super(props)
        this.purpose = props.purpose
        this.style = {
            position: "relative",
            display: "flex",
            width: "430px",
            height: "40px",
            alignItems: "center",
        }
        this.labelstyle = {
            position: "relative",
            display: "inline-block",
            color: "white",
            fontSize: "12px",
            width: "100px",
            textAlign: "right",
        }
        this.boxstyle = {
            position: "relative",
            display: "inline-block",
            alignItems: "center",
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
            this.label = "ユーザ名"
        }
        else if (this.purpose === "address") {
            this.type = "text"
            this.init = "qiitan@qiita.com"
            this.label = "メールアドレス"
        }
        else if (this.purpose === "password") {
            this.type = "password"
            this.init = "********"
            this.label = "パスワード"
        }
        return(
            <div style={this.style}>
                <div style={this.labelstyle}>{this.label}　</div>
                <div style={this.boxstyle}>
                    <form style={this.formstyle}>
                        <input style={this.inputstyle} placeholder={this.init} type={this.type} />
                    </form>
                </div>
            </div>
        )
    }
}


export default UserInfoInput