import React,{useEffect,useState} from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'
import {ReactComponent as ArrowLeft} from "../assets/chevron-left.svg"

export const NotePage = () => {

    const [note,setNote] = useState("")
    const {id} = useParams()
    const navigate = useNavigate()
    console.log(id)

    useEffect(()=>{
        getNote()
        console.log(note)
    },[id])

    const getNote= async()=>{
      if (id!=="new"){
        const response = await fetch(`http://127.0.0.1:8000/api/notes/${id}`)
        const data = await response.json()
        setNote(data)
      }
    }
    
    const updateNote = async()=>{
      fetch(`http://127.0.0.1:8000/api/notes/${id}`,{
        method:"PUT",
        headers: {
          'Content-Type':"application/json"
        },
        body:JSON.stringify(note)
      },
      
      )

    }

    const deleteNote = async()=>{
          fetch(`/api/notes/${id}`,{
            method:"DELETE",
            "headers":{
              'Content-Type':'application/json',
            }
          })
    }

    const createNote = async()=>{
      fetch(`/api/notes/${id}`,{
        method:"POST",
        "headers":{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(note)
      })
    }

    const handleSubmit= ()=>{
      
      if (id!=="new" && note.body===''){
        deleteNote()
      }
      else if(id!=="new" && note.body){
        console.log(note.body)
        updateNote()
      }
      else if (id==="new" && note.body){
        createNote()
      }
      navigate("/notes")
    }


    const handleDelete=()=>{
        deleteNote()
        navigate("/notes")

    }

  return (
    <div className='note'>
        <div className="note-header">
          <h3>
            <Link to="/notes">
              <ArrowLeft onClick={handleSubmit} />
            </Link>
          </h3>
          {
            id!=="new"?
            (
            <button onClick={handleDelete} >Delete</button>
            )
            :
            (
              <button onClick={handleSubmit}>Done</button>
            )
            }
          
        </div>

        <textarea onChange={(e)=>setNote(note=>({...note,"body":e.target.value}))} value={note?.body}></textarea>
        
        

      
        
    </div>
  )
}
