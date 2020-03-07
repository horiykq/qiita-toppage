import React from 'react'


class SearchInput extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            display: "inline-block",
            left: "15px",
            bottom: "2px",
        }
        this.inputstyle = {
            position: "relative",
            width: "170px",
            border: "none",
            outline: "none",
        }
    }

    render() {
        return(
            <form style={this.style} action="/search" method="get">
                <input style={this.inputstyle} placeholder="キーワードを入力" type="search" />
            </form>
        )
    }
}


export default SearchInput