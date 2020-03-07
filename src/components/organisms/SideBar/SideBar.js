import React from 'react'

class SideBar extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            display: "inline-block",
            marginLeft: "auto",
            width: "300px",
            height: "3029px",
            background: "blue",
        }
    }

    render() {
        return(
            <div style={this.style}>
            </div>
        )
    }
}


export default SideBar