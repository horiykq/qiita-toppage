import React from 'react'
import TopBar from '../organisms/TopBar/TopBar'
import AboutOuter from '../organisms/AboutOuter/AboutOuter'
import LoginItems from '../organisms/LoginItems/LoginItems'

class TopHeader extends React.Component {

    constructor(props) {
        super(props)
        this.bodystyle = {
            top: "0%",
            left: "0%",
            width: "100%",
            maxWidth: "1100px",
            marginLeft: "auto",
            marginRight: "auto",
        }
    }

    render() {
        return(
            <div style={this.bodystyle}>
                <TopBar />
                <AboutOuter />
                <LoginItems />
            </div>
        )
    }
}


export default TopHeader