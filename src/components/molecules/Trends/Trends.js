import React from 'react'
import TrendBar from '../../atoms/TrendBar/TrendBar'
import TrendTabButton from '../../atoms/TrendTabButton/TrendTabButton'
import Article from '../../atoms/Article/Article'
import todaytrends from '../../../contents/trends'


class Trends extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            left: "0%",
            width: "584px",
            height: "2537px",
            background: "white",
        }
        this.tabsstyle = {
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            width: "584px",
            height: "43px",
            borderBottom: "thin solid #E8E8E8",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <TrendBar />
                <div style={this.tabsstyle}>
                    <TrendTabButton left="26px" label="1日" />
                    <TrendTabButton left="26px" label="週間" />
                    <TrendTabButton left="26px" label="月間" />
                </div>
                {todaytrends.map((trend) => (
                    <Article title={trend.title} user={trend.user} new={trend.new} time={trend.time} />
                ))}
            </div>
        )
    }
}


export default Trends