import React, { useState } from 'react'
import { updateFilm } from '../lib/controller';
import { useNavigate } from 'react-router-dom';

interface IProps {
  editDescription: boolean;
  setEditDescription: React.Dispatch<React.SetStateAction<boolean>>;
  id?: string
}

function Edit({editDescription, setEditDescription, id}: IProps) {
  const [newDescription, setNewDescription] = useState('')

  const navigate = useNavigate()

  const handleUpdate = () => {
    updateFilm(id, {description: newDescription})
    setEditDescription(!editDescription);
    navigate('/')
  }

  return (
    <div className='edit'>
      <label>Enter the film description</label>
      <textarea required name="description" id="description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)}></textarea>
      <button className='update-button' onClick={() => handleUpdate()}>Update Film</button>
    </div>
  )
}

export default Edit