import React,{useState,useEffect} from 'react'
import AddButton from '../components/AddButton'
import { ListItem } from '../components/ListItem'


const NotesListPage = () => {
    const [notesData, setNotesData]=useState([])

    useEffect(()=>{
        getNotes()
    },[])

    const getNotes = async ()=>{
        const response  = await fetch("api/notes/")
        const data = await response.json()
        setNotesData(data)
    }
  return (
    <div className='notes'>
        <div className='notes-header'>
            <h2 className="notes-title">&#9782;</h2>
            <p className="notes-count"></p>
        </div>
        <div className='notes-list'>
            {notesData.map((note,index)=>(
                <ListItem key={index} note={note} number={index+1}/>
            ))}
        </div>
        <AddButton/>
    </div>
    
  )
}

export default NotesListPage