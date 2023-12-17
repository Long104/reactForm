import { useState } from "react"
import "./App.css"


function App() {

  const myObj = {
    content:"",
    author:""
  }

  const [note,setNote] = useState(myObj)

  const [editNote,setEditNote] = useState(null)
  const [text,setText] = useState([])

  function eachNote(event) {
    const {name,value} = event.target

    setNote((prev) => {
  return ({...prev,[name]:value})
    })
  }

 function whenSubmit(event) {

  event.preventDefault();

    if(note.content.trim() !== "" && note.author.trim() !== "") {

    setText((prev) => 
    {  
    const newNote = {...note};
    newNote.id = Date.now().toString();
      return [...prev, newNote]} )

    }

    setNote(myObj)

   
    
  }

function Delete(eachId) {
   setText((prev) => {
    return prev.filter(thenote => {
       thenote.id !== eachId
    }) 
  })
} 


  let allText = null;
  if(!!text) {
    allText = text.map((allText,index) => {
return  (
  <div className="" key={index}>
<div className="comment">comment</div>
  <div className="inText">{allText.content}</div>
  <div className="inText">{allText.author}</div>
    <a  onClick={() => { 
Delete(note.id)
    }}>delete</a>
    <span>|</span>
    <a  onClick={() => {setEditNote(allText)}}>edit</a>
  </div>

    )

    })
  }

// onClick={(event) => {event.preventDefault(); setText((prev) => {return (text.id ="")})}}

let editNoteElement = null;
if(!!editNote) {
  editNoteElement = (
  <div className="edit">
    <form  className="form" onSubmit={onEditNoteSubmit} action="">


 <input value = {editNote.author} onChange={editNoted} placeholder="author" type="text" name="author"/> 
 <input value = {editNote.content} onChange={editNoted} placeholder="content" type="text" name="content"/> 
 <button style={{height:"5.5rem"}} type="submit">click me</button>

</form>
  </div>
  )

  function editNoted(event) {
    const {name,value} = event.target;
    setEditNote(prevNote => {
      return {...prevNote,[name]:value}
    })
  }


}
  function onEditNoteSubmit(event) {
    event.preventDefault()

setText(prev => {
  return prev.map(theNote => {
    if(theNote.id !== editNote.id) return;
    return editNote;
  }) 
})

  }
return(
  <>
  <div className="container">


<form  className="form" onSubmit={whenSubmit} action="">


 <input value = {note.author} onChange={eachNote} placeholder="author" type="text" name="author"/> 
 <input value = {note.content} onChange={eachNote} placeholder="content" type="text" name="content"/> 
 <button style={{height:"5.5rem"}} type="submit">click me</button>
 <div className="">{allText}</div>

</form>
{editNoteElement}


  </div>





  

  
  </>
) 
  


  
  
  

}



export default App