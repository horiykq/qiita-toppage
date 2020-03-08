import React from 'react'
import BottomInfo from '../../molecules/BottomInfo/BottomInfo'
import Increments from '../../molecules/Increments/Increments'
import QiitaLinks from '../../molecules/QiitaLinks/QiitaLinks'

class BottomBar extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            display: "flex",
            width: "100%",
            height: "235px",
        }
        this.linksstyle = {
            position: "relative",
            marginLeft: "auto",
            top: "32px",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <BottomInfo />
                <div style={this.linksstyle}>
                    <QiitaLinks />
                    <Increments />
                </div>
            </div>
        )
    }
}


export default BottomBar