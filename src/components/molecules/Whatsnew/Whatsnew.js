import React from 'react'


class Whatsnew extends React.Component {

    constructor(props) {
        super(props)
        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.state = {
            hovered: false,
        }
        this.style = {
            position: "relative",
            display: "inline-block",
            width: "300px",
            height: "218px",
            marginBottom: "16px",
            border: "1px solid #55C501",
            background: "white",
        }
        this.innerstyle = {
            margin: "16px",
        }
        this.titlestyle = {
            position: "relative",
            top: "8px",
            fontSize: "14px",
            fontWeight: "300",
        }
        this.iconstyle = {
            color: "green",
        }
        this.sentencestyle = {
            position: "relative",
            top: "24px",
            fontSize: "12px",
            fontWeight: "300",
        }
        this.buttonstyle = {
            position: "relative",
            color: "#55C500",
            fontSize: "13px",
            fontWeight: "300",
            top: "40px",
            left: "210px",
            cursor: "pointer",
        }
    }

    onMouseEnter() {
        this.setState({
            hovered: true,
        })
    }

    onMouseLeave() {
        this.setState({
            hovered: false,
        })
    }

    render() {
        if (this.state.hovered) {
            this.specificstyle = {
                cursor: "pointer",
                display: "inline",
                textDecoration: "underline",
                textDecorationColor: "#55C500",
            }
        }
        else {
            this.specificstyle = {
                cursor: "pointer",
                display: "inline",
            }
        }
        return(
            <div style={this.style}>
                <div style={this.innerstyle}>
                    <div style={this.titlestyle}>
                        <i style={this.iconstyle} class="fa fa-bullhorn"></i> Qiita記事のOGPイメージが新しくなりました
                    </div>
                    <div style={this.sentencestyle}>
                    先日行ったQiitaのビジュアルアイデンティティの再定義に伴い、OGPイメージも新しくなりました。
                    </div>
                    <div style={this.sentencestyle}>
                    Twitterに表示されるカードのデザインも、タイムライン上で視認しやすいように変更しています。
                    </div>
                    <div style={this.buttonstyle}>
                        <i class="fa fa-fw fa-arrow-circle-right"></i><div style={this.specificstyle} onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>詳しく</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Whatsnew