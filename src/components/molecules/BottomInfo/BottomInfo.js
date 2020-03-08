import React from 'react'
import qiita_logo from '../../pages/images/qiita_logo_bottom.png'
import twitter_icon from '../../pages/images/twitter_icon_bottom.png'
import facebook_icon from '../../pages/images/facebook_icon_bottom.png'

class BottomInfo extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            width: "200px",
            height: "160px",
            top: "32px",
        }
        this.logostyle = {
            position: "relative",
            width: "114px",
            height: "59px",
        }
        this.msgstyle = {
            position: "relative",
            display: "inline-block",
            color: "white",
            fontSize: "13px",
            bottom: "10px",
        }
        this.iconsstyle = {
            position: "relative",
            display: "flex",
            width: "128px",
            height: "32px",
            right: "8px",
        }
        this.iconstyle = {
            position: "relative",
            display: "inline-block",
            width: "32px",
            height: "32px",
            marginRight: "4px",
            cursor: "pointer",
        }
        this.copyrightstyle = {
            position: "relative",
            display: "inline-block",
            color: "#B3B3B3",
            fontSize: "11px",
            top: "30px",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <img src={qiita_logo} alt="logo" style={this.logostyle} />
                <div style={this.msgstyle}>How developers code is here.</div>
                <div style={this.iconsstyle}>
                    <img src={twitter_icon} alt="link to twitter" style={this.iconstyle} />
                    <img src={facebook_icon} alt="link to facebook" style={this.iconstyle} />
                </div>
                <div style={this.copyrightstyle}>© 2011-2020 Increments Inc.</div>
            </div>
        )
    }
}


export default BottomInfo