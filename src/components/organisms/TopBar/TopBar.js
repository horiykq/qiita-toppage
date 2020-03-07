import React from 'react'
import Logo from '../../atoms/Logo/Logo'
import MenuButton from '../../atoms/MenuButton/MenuButton'
import CommunityButton from '../../atoms/CommunityButton/CommunityButton'
import SearchBox from '../../molecules/SearchBox/SearchBox'
import UserButtons from '../../molecules/UserButtons/UserButtons'

class TopBar extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            position: "relative",
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "56px",
        }
    }

    render() {
        return(
            <div style={this.style}>
                <Logo />
                <MenuButton />
                <CommunityButton />
                <SearchBox />
                <UserButtons />
            </div>
        )
    }
}


export default TopBar