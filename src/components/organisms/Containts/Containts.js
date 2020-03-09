import React from 'react'
import ContaintsButtons from '../../molecules/ContaintsButtons/ContaintsButtons'
import Trends from '../../molecules/Trends/Trends'


class Containts extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            display: "flex",
            left: "0%",
            width: "782px",
            height: "2997px",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <ContaintsButtons />
                <Trends />
            </div>
        )
    }
}


export default Containts