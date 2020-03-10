import React from 'react'
import ad from '../../pages/images/ad.png'


class Ad extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            display: "inline-block",
            width: "300px",
            height: "250px",
            cursor: "pointer",
            marginBottom: "16px",
        }
        this.adstyle = {
            position: "relative",
            display: "inline-block",
            width: "300px",
            height: "250px",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <img src={ad} style={this.adstyle} alt="ad" />
            </div>
        )
    }
}


export default Ad