import React from 'react'

class QiitaLinks extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            width: "100%",
            height: "235px",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <BottomInfo />
            </div>
        )
    }
}


export default QiitaLinks