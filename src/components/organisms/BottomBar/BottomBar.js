import React from 'react'

class BottomBar extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            width: "100%",
            height: "280px",
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


export default BottomBar