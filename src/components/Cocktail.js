import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id, name, image, glass}) => {
  return (
    <article className="cocktail">
        <div className="img-container">
            <img src={image} alt={name}/>
        </div>
        <div className="cocktail-footer">
            <h4>{name}</h4>
            <h3>{glass}</h3>
            <Link to={`/cocktail/${id}`} className="btn btn primary btn-details">Details</Link>
        </div>
    </article>
  )
}

export default Cocktail