import React from 'react'
import ContaintsButtons from '../../molecules/ContaintsButtons/ContaintsButtons'


class Containts extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            display: "inline-block",
            left: "0%",
            width: "782px",
            height: "2997px",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <ContaintsButtons />
            </div>
        )
    }
}


export default Containts