import { useState,useEffect } from "react"
import { Note } from "./components/Note"
import axios from "axios"





const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote,setNewNote] = useState('a new note ...')
  const [showAll,setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important :Math.random()<0.5,
      id:notes.legth + 1
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
    console.log('button clicked',event.target)
  }


  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  
  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)


  useEffect(() => {
    console.log("Effect")
    axios
    .get('http://localhost:3001/notes')
    .then(response => {
      console.log('promise pulfilled') 
      setNotes(response.data)   
    })
    return () => {
      
    };
  }, []);

console.log('render',notes.length,'notes')


  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}

        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote} >
      <input  value={newNote} onChange={handleNoteChange}  />
      <button type="submit">Save</button>

      </form>
    </div>
  )
}

export default App
