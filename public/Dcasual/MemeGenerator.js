import React, { Component } from "react"

class MemeGenerator extends Component {
    state = {
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({allMemeImgs: memes})
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({randomImg: randMemeImg})
    }

    handleChange = (event) => {
    const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    render() {
        return(
            <div>
            <form className="meme-form" onSubmit={this.handleSubmit}>
            <input 
                type="text" 
                placeholder="Top Text" 
                onChange={this.handleChange} 
                name="topText"
                value={this.state.topText}
            />
            <br/>
            <br/>
            <input 
                type="text" 
                placeholder="Bottom Text" 
                onChange={this.handleChange} 
                name="bottomText"
                value={this.state.bottomText}
            />
            <br/>
            <button>Gen</button>
            </form>
            <hr/>
            <div className="meme">
            <img src={this.state.randomImg} alt="" />
            <h2 className="top">{this.state.topText}</h2>
            <h2 className="bottom">{this.state.bottomText}</h2>
          </div> 
          </div> 
        )
    }
}

export default MemeGenerator