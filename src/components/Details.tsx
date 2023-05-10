import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { firestore } from '../lib/controller'
import Information from './information'

function Details() {
  const {id} = useParams()
  const getFilm = doc(firestore, `films/${id}`)
  const [isLoading, setIsLoading] = useState(false)
  const [film, setFilm] = useState({})

  useEffect(() => {
    const fetchFilmData = async () => {
      setIsLoading(true)
      const docSnap = await getDoc(getFilm)
      if (docSnap.exists()) {
        const newFilmObj = {
          id: docSnap.id,
          ...docSnap.data()
        }
        setFilm(newFilmObj)
        setIsLoading(false)
      } else {
        console.log('No doc')
      }
    }
    fetchFilmData()
  }, [])
  if (isLoading) return <div className='loading'/>
  return (
    <div className="film-details">
      {Object.keys(film) && Object.keys(film).length ? (
        <Information film={film} detailsPage />
      ): null}
    </div>
  )
}

export default Details