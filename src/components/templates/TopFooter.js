import React from 'react'
import BottomBar from '../organisms/BottomBar/BottomBar'

class TopFooter extends React.Component {

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
                <BottomBar />
            </div>
        )
    }
}


export default TopFooter