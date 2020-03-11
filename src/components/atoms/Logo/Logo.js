import React from 'react'
import LogoImg from '../../pages/images/qiita_logo.jpg'
import {Link} from 'react-router-dom'
import PullDownMenu from '../PullDownMenu/PullDownMenu'


class Logo extends React.Component {

    constructor(props, state) {
        super(props, state)
        this.state = {
            hovered: false,
            clicked: false,
        }
        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.LogoStyle = {
            width: "81px",
            height: "27px",
            cursor: "pointer"
        }
        this.style = {
            position: "relative",
            display: "flex",
        }
        this.menustyle = {
            position: "relative",
            top: "6px",
            display: "inline-block",
        }
        this.innerstyle = {
            position: "absolute",
            right: "0px",
            bottom: "0px",
            left: "0px",
            margin: "auto",
            transform: "scale(0.8, 0.5)",
            fontSize: "10px",
            color: "white",
            top: "3px",
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

    handleClick() {
        if (this.state.clicked) {
            this.setState({
                clicked: false,
            })
        }
        else {
            this.setState({
                clicked: true,
            })
        }
    }

    render() {
        if (this.state.hovered) {
            this.buttonstyle = {
                position: "relative",
                display: "inline-block",
                textAlign: "center",
                left: "10px",
                bottom: "3px",
                background: "#306F00",
                width: "20px",
                height: "20px",
                borderRadius: "3px 3px 3px 3px",
                cursor: "pointer",
            }
        }
        else {
            this.buttonstyle = {
                position: "relative",
                display: "inline-block",
                textAlign: "center",
                left: "10px",
                bottom: "3px",
                background: "#3C8B00",
                width: "20px",
                height: "20px",
                borderRadius: "3px 3px 3px 3px",
                cursor: "pointer",
            }
        }
        if (this.state.clicked) {
            return(
                <div style={this.style}>
                    <Link to="/">
                        <img src={LogoImg} alt="qiita_logo" style={this.LogoStyle}></img>
                    </Link>
                    <div style={this.menustyle}>
                        <div style={this.buttonstyle} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.handleClick}>
                            <div style={this.innerstyle}>
                                ▼
                            </div>
                        </div>
                    </div>
                    <PullDownMenu purpose="logo" width="238px" height="120px" />
                </div>
            )
        }
        else {
            return(
                <div style={this.style}>
                    <Link to="/">
                        <img src={LogoImg} alt="qiita_logo" style={this.LogoStyle}></img>
                    </Link>
                    <div style={this.menustyle}>
                        <div style={this.buttonstyle} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.handleClick}>
                            <div style={this.innerstyle}>
                                ▼
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}


export default Logo