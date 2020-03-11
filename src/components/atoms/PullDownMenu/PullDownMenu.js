import React from 'react'
import PullDownButton from '../PullDownButton/PullDownButton'


class PullDownMenu extends React.Component {

    constructor(props) {
        super(props)
        this.width = props.width
        this.height = props.height
        this.purpose = props.purpose
        this.style = {
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            top: "40px",
            width: this.width,
            height: this.height,
            background: "white",
            borderRadius: "3px",
            border: "1px solid #ADADAD",
        }
        this.logininfostyle = {
            position: "relative",
            display: "inline-block",
            borderTop: "1px solid #DDDDDD",
            fontSize: "12px",
            color: "#AAAAAA",
            fontWeight: "500",
            paddingTop: "7px",
        }
    }

    render() {
        if (this.purpose === "community") {
            return(
                <div style={this.style}>
                    <PullDownButton width={this.width} label="ユーザー一覧" />
                    <PullDownButton width={this.width} label="Organization一覧" />
                    <PullDownButton width={this.width} label="アドベントカレンダー" />
                </div>
            )
        }
        else if (this.purpose === "logo") {
            return(
                <div style={this.style}>
                    <PullDownButton width={this.width} label="Qiita" />
                    <div style={this.logininfostyle}>
                        　　ログイン中のチームがありません
                    </div>
                    <PullDownButton width={this.width} label="Qiita Team にログイン…" />
                </div>
            )
        }
    }

}


export default PullDownMenu
