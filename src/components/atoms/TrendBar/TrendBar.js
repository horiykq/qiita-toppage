import React from 'react'
import trendicon from '../../pages/images/trends_icon.png'


class TrendBar extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            display: "flex",
            alignItems: "end",
            left: "0%",
            width: "584px",
            height: "42.5px",
        }
        this.iconouterstyle = {
            position: "relative",
            display: "flex",
            width: "42.5px",
            height: "42.5px",
        }
        this.iconstyle = {
            position: "relative",
            margin: "auto",
            top: "5px",
            left: "8px",
            width: "32px",
            height: "32px",
        }
        this.titleouterstyle = {
            position: "relative",
            display: "flex",
            textAlign: "center",
            width: "70px",
            height: "34.5px",
            marginTop: "auto",
        }
        this.titlestyle = {
            position: "relative",
            margin: "auto",
        }
        this.descriptionstyle = {
            position: "relative",
            color:"#AAAAAA",
            fontSize: "12px",
            top: "4px",
            left: "6px",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <div style={this.iconouterstyle}>
                    <img src={trendicon} alt="trendicon" style={this.iconstyle} />
                </div>
                <div style={this.titleouterstyle}>
                    <p style={this.titlestyle}>トレンド</p>
                </div>
                <p style={this.descriptionstyle}>最近人気の記事を毎日5時/17時に更新</p>
            </div>
        )
    }
}


export default TrendBar