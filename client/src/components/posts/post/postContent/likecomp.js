import React, { Component } from "react"
import "./index.scss"
import like from "../../../../img/like-img.png"
class Likecomp extends Component {
    constructor(props) {
        super(props)
    }

    likeClick = (_id) => {
        alert(_id)
    }

    render() {
        return (
          <div className="like-div" >
            <img onClick={() => this.likeClick(this.props._id)} className="like-img" src={like}></img> 
            <b>{this.props.likeNum}</b>
          </div>
        )
    }
}
export default Likecomp