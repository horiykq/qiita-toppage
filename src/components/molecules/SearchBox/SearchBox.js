import React from 'react'
import SearchIcon from '../../atoms/SearchIcon/SearchIcon'
import SearchInput from '../../atoms/SearcnInput/SearchInput'


class SearchBox extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            display: "flex",
            alignItems: "center",
            width: "200px",
            height: "32px",
            background: "white",
            borderRadius: "4px",
            left: "74px",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <SearchIcon />
                <SearchInput />
            </div>
        )
    }
}


export default SearchBox