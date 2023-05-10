import React, { useState } from 'react'
import { NewFilmType } from '../types/films'
import { Link, useNavigate } from 'react-router-dom'
import Edit from './Edit';
import { deleteFilm } from '../lib/controller';

interface IProps {
  film: NewFilmType;
  detailsPage?: boolean
}

function Information({film, detailsPage} : IProps) {
  console.log(film, 'film')

  const [editDescription, setEditDescription] = useState(false)

  const navigate = useNavigate()

  return (
    <div className="film-preview">
      <div className="image-container">
        <img className='location-image' src={film.location} alt="A-Little-Trip-To-Heaven" />
        <div className="highlights">
          <div className="highlights-text">
            <h2>{film.name}</h2>
          </div>
          <div className="highlights-year">
            <h2 className="year-text">{film.year}</h2>
          </div>
        </div>
      </div>

      <div className="description">
        <span className="stars">
          <strong className="star-number">{film.stars} / 10</strong>
        </span>

        {detailsPage ? (
          <>
          <p className='description-text'>{film.description}
          <br></br>
          <strong className='edit-text' onClick={() => setEditDescription(!editDescription)}>Edit description</strong>
          {editDescription ? 
            <Edit 
              editDescription={editDescription} 
              setEditDescription={setEditDescription}
              id={film.id}  
            />
          : null}
          </p>
          <button onClick={() => deleteFilm(film.id, navigate)}>Delete Film</button>
          </>
        ): (
          <Link to={`/films/${film.id}`}>
          <button className="moreinfo-btn">Show Information</button>
          </Link>
        )}
        
      </div>
    </div>
    )
}

export default Information