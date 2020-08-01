import React, {Component} from "react";

class FilmTitle extends Component{

  render(){
    return(
      <div className="film-title">
        <a href={this.props.url}>• {this.props.name}</a>
      </div>
    )
  }

}

export default FilmTitle;
