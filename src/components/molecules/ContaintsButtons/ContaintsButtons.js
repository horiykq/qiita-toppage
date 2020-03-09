import React from 'react'
import TrendButton from '../../atoms/TrendButton/TrendButton'


class ContaintsButtons extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "sticky",
            display: "inline-block",
            top: "16px",
            left: "0%",
            width: "200px",
            height: "92px",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <TrendButton label="トレンド" />
                <TrendButton label="マイルストーン" />
            </div>
        )
    }
}


export default ContaintsButtons