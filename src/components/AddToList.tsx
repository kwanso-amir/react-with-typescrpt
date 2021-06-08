import React, { useState } from 'react'
import { IState as Props } from '../App'

interface IProps {
  people: Props["people"],
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (): void => {
    if (
      !input.name ||
      !input.age ||
      !input.url
    ) {
      return
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url
      }
    ])
    
    setInput({
      name: "",
      age: "",
      url: "",
      note: ""
    })
  }


  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="name"
        className="AddToList-input"
        onChange={handleChange}
        value={input.name}
        name="name"
      />
      <input
        type="text"
        placeholder="age"
        className="AddToList-input"
        onChange={handleChange}
        value={input.age}
        name="age"
      />
      <input
        type="text"
        placeholder="image url"
        className="AddToList-input"
        onChange={handleChange}
        value={input.url}
        name="url"
      />
      <textarea
        placeholder="note"
        className="AddToList-input"
        onChange={handleChange}
        value={input.note}
        name="note"
      />

      <button
        className="AddToList-btn"
        onClick={handleClick}
      >Add To List</button>
    </div>
  )
}

export default AddToList
