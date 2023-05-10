import {addDoc, collection, deleteDoc, doc, getFirestore, setDoc} from 'firebase/firestore'
import { app } from './firebase'
import { AddFilmType } from '../types/films'
import { NavigateFunction } from 'react-router-dom'

export const firestore = getFirestore(app)

// GET COLLECTION
export const filmsCollection = collection(firestore, 'films')

// ADD DOCUMENT
export const addFilm = async (filmData: AddFilmType) => {
  const newFilm = await addDoc(filmsCollection, {...filmData})
  console.log("FILM WAS CREATED")
}

// DELETE DOCUMENT
export const deleteFilm = async(id: string | undefined, navigate: NavigateFunction) => {
  const document = doc(firestore, `films/${id}`)
  await deleteDoc(document)
  console.log("FILM WAS DELETED")
  navigate('/')
}

// EDIT COLLECTION
export const updateFilm = async (id: string | undefined, docData: any) => {
  const getFilm = doc(firestore, `films/${id}`)
  await setDoc(getFilm, docData, {merge: true})
  console.log('FILM WAS EDITED')
}