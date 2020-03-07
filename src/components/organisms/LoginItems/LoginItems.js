import React from 'react'

class LoginItems extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            marginLeft: "auto",
            bottom: "230px",
            width: "350px",
            height: "396px",
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


export default LoginItems