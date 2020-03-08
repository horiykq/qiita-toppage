import React from 'react'
import BottomLink from '../../atoms/BottomLink/BottomLink'


class Increments extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            display: "inline-block",
            width: "200px",
            height: "160px",
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
            width: "73px",
            height: "130px",
        }
        this.rightlinksstyle = {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            bottom: "130px",
            left: "90px",
            width: "73px",
            height: "130px",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <div style={this.titlestyle}>Increments</div>
                <div style={this.leftlinksstyle}>
                    <BottomLink label="About" />
                    <BottomLink label="採用情報" />
                    <BottomLink label="ブログ" />
                </div>
                <div style={this.rightlinksstyle}>
                    <BottomLink label=" Qiita Team" />
                    <BottomLink label="Qiita Jobs" />
                    <BottomLink label="Qiita Zine" />
                </div>
            </div>
        )
    }
}


export default Increments