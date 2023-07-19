import React from 'react'


function Movie({id,poster,name,summary,rating,remo}) {
  return (
    <div className="movie-container">
    <img src={poster} alt={name} className="movie-poster" />
    <div className="movie-specs">
      <h2 className="movie-name">{name}</h2>
      <p  className="movie-rating">
        ⭐
      </p>
    </div>
    <p className="movie-summary">{summary}</p>
    <button onClick={()=>remo(id)}>REmove</button>
    
  </div>
  )
}

export default Movie