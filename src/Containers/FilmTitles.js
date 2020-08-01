import React, {Component} from "react";
import FilmTitle from "../Components/FilmTitle"

class FilmTitles extends Component{

  render(){
    const titles = this.props.filmTitles.map(title => {
      return(
        <FilmTitle key={title.id} name={title.name} url={title.url}/>
      )
    })
    return(
      <div className="film-titles">
        {titles}
      </div>
    )
  }

}

export default FilmTitles;
