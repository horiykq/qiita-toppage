import React from 'react'
import Containts from '../organisms/Containts/Containts'
import SideBar from '../organisms/SideBar/SideBar'


class TopContent extends React.Component {

    constructor(props) {
        super(props)
        this.bodystyle = {
            position: "relative",
            display: "flex",
            top: "32px",
            left: "0%",
            width: "100%",
            height: "2997px",
            maxWidth: "1100px",
            marginLeft: "auto",
            marginRight: "auto",
        }
    }

    render() {
        return(
            <div style={this.bodystyle}>
                <Containts />
                <SideBar />
            </div>
        )
    }
}


export default TopContent