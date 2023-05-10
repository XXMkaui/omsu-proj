import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addFilm } from '../lib/controller';

function Create() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [stars, setStars] = useState("1");
  const [year, setYear] = useState('')

  const navigate = useNavigate()

  const addNewFilm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addFilm({
      name,
      description,
      location,
      stars,
      year
    })
    navigate('/')
  }
  console.log(name)
  return (
    <div className='create'>
      <h2>Add new film</h2>
      <form onSubmit={(e) => addNewFilm(e)}>
        <label>Film title:</label>
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)}/>

        <label>Film Description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label>Image URL Link location:</label>
        <input
          type="text"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label>Stars Rating:</label>
        <select value={stars} onChange={(e) => setStars(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <label>Film year:</label>
        <input type="text" required value={year} onChange={(e) => setYear(e.target.value)}/>

        <button>Add Film</button>
      </form> 
    </div>
  )
}

export default Create