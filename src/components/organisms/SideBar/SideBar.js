import React from 'react'
import Ad from '../../atoms/Ad/Ad'
import Whatsnew from '../../molecules/Whatsnew/Whatsnew'


class SideBar extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            display: "inline-block",
            marginLeft: "auto",
            width: "300px",
            height: "3029px",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <Ad />
                <Whatsnew />
            </div>
        )
    }
}


export default SideBar