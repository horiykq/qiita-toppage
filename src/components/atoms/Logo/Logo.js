import React from 'react'
import LogoImg from '../../pages/images/qiita_logo.jpg'
import {Link} from 'react-router-dom'


class Logo extends React.Component {

    constructor(props) {
        super(props)
        this.LogoStyle = {
            width: "81px",
            height: "27px",
            cursor: "pointer"
        }
        this.style = {
            position: "relative",
            display: "inline-block",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <Link to="/">
                    <img src={LogoImg} alt="qiita_logo" style={this.LogoStyle}></img>
                </Link>
            </div>
        )
    }
}


export default Logo