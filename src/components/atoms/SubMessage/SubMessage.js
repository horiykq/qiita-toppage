import React from 'react'

class SubMessage extends React.Component {

    constructor(props) {
        super(props)
        this.style = {
            fontSize: "16px",
            fontWeight: "300",
            color: "white",
            width: "580px",
            height: "96px",
            lineHeight: "1.9",
            letterSpacing: "0.1",
        }
        this.face = " ;)"
    }

    render() {
        return(
            <p style={this.style}>
                Qiitaは、エンジニアリングに関する知識を記録・共有するためのサービスです。コードを書いていて気づいたことや、自分がハマったあの仕様について、他のエンジニアと知見を共有しましょう{this.face}
            </p>
        )
    }
}


export default SubMessage