import React, {useState} from 'react'


function LikeButton() {
    const [count, setCount] = useState(0)

    const buttonstyle = {
        position: "relative",
        display: "inline",
        cursor: "pointer",
    }

    return (
        <div style={buttonstyle} onClick={() => setCount(count + 1)}>
            <i class="fas fa-thumbs-up"></i> {count}
        </div>
    )
}


export default LikeButton