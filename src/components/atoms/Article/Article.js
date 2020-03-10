import React from 'react'
import usericon from '../../pages/images/account_icon.png'
import LikeButton from '../LikeButton/LikeButton'


class Article extends React.Component {

    constructor(props) {
        super(props)
        this.title = props.title
        this.user = props.user
        this.time = props.time
        this.state = {
            titlehovered: false,
            userhovered: false,
        }
        this.onMouseLeavetitle = this.onMouseLeavetitle.bind(this)
        this.onMouseEntertitle = this.onMouseEntertitle.bind(this)
        this.onMouseLeaveuser = this.onMouseLeaveuser.bind(this)
        this.onMouseEnteruser = this.onMouseEnteruser.bind(this)
        this.style = {
            position: "relative",
            display: "flex",
            alignItems: "center",
            left: "0%",
            width: "584px",
            minHeight: "75px",
            height: "auto !important",
            borderBottom: "thin solid #E8E8E8",
        }
        this.usericonouterstyle = {
            position: "relative",
            display: "inline-block",
            width: "40px",
            height: "40px",
            left: "16px",
        }
        this.usericonstyle = {
            position: "relative",
            display: "inline-block",
            width: "40px",
            height: "40px",
        }
        this.infoouterstyle = {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "502px",
            minHeight: "42px",
            height: "auto !important",
            left: "20px",
        }
        this.infostyle = {
            position: "relative",
            display: "inline-block",
            width: "502px",
            height: "16px",
            marginBottom: "8px",
            fontSize: "12px",
            color: "#999999",
        }
    }

    onMouseEntertitle() {
        this.setState({
            titlehovered: true,
        })
    }

    onMouseLeavetitle() {
        this.setState({
            titlehovered: false,
        })
    }

    onMouseEnteruser() {
        this.setState({
            userhovered: true,
        })
    }

    onMouseLeaveuser() {
        this.setState({
            userhovered: false,
        })
    }

    render() {
        if (this.state.titlehovered) {
            this.titlestyle = {
                position: "relative",
                display: "inline-block",
                fontSize: "16px",
                fontWeight: "600",
                width: "502px",
                minHeight: "26px",
                height: "auto !important",
                wordWrap: "break-word",
                margin: "10px",
                cursor: "pointer",
                textDecoration: "underline",
                textDecorationColor: "black",
            }
        }
        else {
            this.titlestyle = {
                position: "relative",
                display: "inline-block",
                fontSize: "16px",
                fontWeight: "600",
                width: "502px",
                minHeight: "26px",
                height: "auto !important",
                wordWrap: "break-word",
                margin: "10px",
                cursor: "pointer",
            }
        }
        if (this.state.userhovered) {
            this.userstyle = {
                display: "inline",
                cursor: "pointer",
                textDecoration: "underline",
                textDecorationColor: "#999999",
            }
        }
        else {
            this.userstyle = {
                display: "inline",
                cursor: "pointer",
            }
        }
        return(
            <div style={this.style}>
                <div style={this.usericonouterstyle}>
                    <img src={usericon} alt="usericon" style={this.usericonstyle} />
                </div>
                <div style={this.infoouterstyle}>
                    <div style={this.titlestyle} onMouseEnter={this.onMouseEntertitle} onMouseLeave={this.onMouseLeavetitle}>
                        {this.title}
                    </div>
                    <div style={this.infostyle}>
                        　by <div style={this.userstyle} onMouseLeave={this.onMouseLeaveuser} onMouseEnter={this.onMouseEnteruser}>{this.user}</div>　{this.time}　<LikeButton count={this.count} />
                    </div>
                </div>
            </div>
        )
    }
}


export default Article