import React from 'react'
import TopContent from '../templates/TopContent'
import TopHeader from '../templates/TopHeader'
import TopFooter from '../templates/TopFooter'


class TopPage extends React.Component {

  constructor(props) {
    super(props)
    this.headerstyle = {
      position: "absolute",
      top: "0%",
      left: "0%",
      width: "100%",
      height: "500px",
      background: "#55C500",
    }
    this.contentstyle = {
      position: "absolute",
      top: "500px",
      height: "3120px",
      left: "0%",
      width: "100%",
      background: "#EFEFEF",
    }
    this.footerstyle = {
      position: "absolute",
      top: "3620px",
      left: "0%",
      width: "100%",
      background: "#404040",
    }
  }

  render() {
    return (
      <div>
        <div style={this.headerstyle}>
          <TopHeader />
        </div>
        <div style={this.contentstyle}>
          <TopContent />
        </div>
        <div style={this.footerstyle}>
          <TopFooter />
        </div>
      </div>
    )
  }
}

export default TopPage