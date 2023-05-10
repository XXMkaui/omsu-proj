import React, { useEffect, useState } from 'react'
import { filmsCollection } from '../lib/controller'
import { DocumentData, QuerySnapshot, onSnapshot } from 'firebase/firestore'
import { NewFilmType } from '../types/films'
import Information from './information'

function Card() {
  const [films, setFilms] = useState<NewFilmType[]>([])

  // listen doc
  useEffect(() => onSnapshot(filmsCollection, (snapshot: QuerySnapshot<DocumentData>) => {
    setFilms(
      snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
    )
  }), [])

  return (
    <div className='card'>
      <div className="title"><h2>Film list</h2></div>
      {films && films.length ? (
        <div>
          {
            films?.map((film) => (
              <Information key={film.id} film={film}/>
            ))
          }
        </div>
      ) : (
        <h2 className='no-films'>FILMDB is empty!</h2>
      )}
    </div>
  )
}

export default Card
