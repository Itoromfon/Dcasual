import React from "react"

function Main() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    const style = {
        color: "FF8C00",
        backgroundColor: "whitesmoke",
        textAlign: "center" 
    }

    return(
        <h1 style={style}>Good {timeOfDay} and welcome to the D-casual thanks</h1>
    )
}

export default Main
