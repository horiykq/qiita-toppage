import React from 'react'
import Containts from '../organisms/Containts/Containts'
import SideBar from '../organisms/SideBar/SideBar'

class TopContent extends React.Component {

    constructor(props) {
        super(props)
        this.bodystyle = {
            display: "flex",
            left: "0%",
            width: "100%",
            height: "3029px",
            maxWidth: "1100px",
            marginLeft: "auto",
            marginRight: "auto",
            background: "pink",
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