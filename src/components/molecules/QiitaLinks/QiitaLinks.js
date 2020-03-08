import React from 'react'
import BottomLink from '../../atoms/BottomLink/BottomLink'


class QiitaLinks extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            display: "inline-block",
            width: "200px",
            height: "160px",
            marginLeft: "auto",
        }
        this.titlestyle = {
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            height: "40px",
        }
        this.leftlinksstyle = {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "90px",
            height: "130px",
        }
        this.rightlinksstyle = {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            bottom: "130px",
            left: "98px",
            width: "90px",
            height: "130px",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <div style={this.titlestyle}>Qiita</div>
                <div style={this.leftlinksstyle}>
                    <BottomLink label="About" />
                    <BottomLink label="利用規約" />
                    <BottomLink label="プライバシー" />
                    <BottomLink label="ガイドライン" />
                </div>
                <div style={this.rightlinksstyle}>
                    <BottomLink label="API" />
                    <BottomLink label="ご意見" />
                    <BottomLink label="ヘルプ" />
                    <BottomLink label="広告掲載" />
                </div>
            </div>
        )
    }
}


export default QiitaLinks