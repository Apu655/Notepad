import React from 'react'
import {Link} from "react-router-dom"

export const ListItem = ({note,number}) => {

  console.log(note.body.length)

  const getTime = (note)=>{
    return new Date(note.updated).toLocaleString()
  }
  const getTitle = (note) => {
    let title = note.body
    if (title.length>40){
      return title.slice(0,50)+"..."
    }
    return title
  }

  return (
    <Link to={`/notes/${note.id}`}>
      <div className='notes-list-item'>
        <h3>{number}. {getTitle(note)}</h3>
        <p>{getTime(note)}</p>
      </div>
    </Link>
  )
}
