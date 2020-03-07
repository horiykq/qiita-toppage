import React from 'react'
import searchimg from '../../pages/images/search.png'


class SearchIcon extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            display: "inline-block",
            width: "13px",
            height: "13px",
            bottom: "1px",
            left: "10px",
        }
    }

    render() {
        return(
            <img src={searchimg} alt="searchicon" style={this.style}>
            </img>
        )
    }
}


export default SearchIcon