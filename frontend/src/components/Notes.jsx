import React, { useContext, useEffect, useState, useRef } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem';
import AddNote from './AddNote'
import { useNavigate } from 'react-router-dom';
const Notes = () => {
    const [showModal, setShowModal] = useState(false);
    const context = useContext(noteContext)
    let navigate =useNavigate();
    const { notes, getNotes,editNote } = context;
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes()
        }
        else{
            navigate("/login")
        }
        
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""})


    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})

    }

    const handleClick = ()=>{
        editNote(note.id, note.etitle, note.edescription, note.etag)
        setShowModal(false)
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <>
            <AddNote />
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hidden"
                type="button" ref={ref}
                onClick={() => setShowModal(true)}>
                Open regular modal
            </button>
            {
                showModal ? (
                    <div >
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-2xl font-semibold justify-center">
                                            Update Note
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                        <form className="mt-10 space-y-4">
                                            <input
                                                className="w-full border rounded h-12 px-4 focus:outline-none"
                                                placeholder="Add Title " id='etilte' name='etitle' value={note.etitle}
                                                onChange={onChange}
                                            />
                                            <div className="flex items-center ">
                                                <input
                                                    className="w-full border rounded h-12 px-4 focus:outline-none -mr-7"
                                                    placeholder="Description" id='edescription' name='edescription'
                                                    type="text" value={note.edescription}
                                                    onChange={onChange}
                                                />
                                            </div>
                                            <div className="flex items-center ">
                                                <input
                                                    className="w-full border rounded h-12 px-4 focus:outline-none -mr-7"
                                                    placeholder="tag" id='etag' name='etag'
                                                    type="text" value={note.etag}
                                                    onChange={onChange}
                                                />
                                            </div>

                                        </form>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="bg-blue-600 text-white  font-medium uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"   disabled={note.etitle.length<5 || note.edescription.length<5}
                                            onClick={handleClick}
                                            // onClick={() => { setShowModal(false); handleClick() }}
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </div>
                ) : null
            }
            <div className="container px-20">
                <h2 className="font-xl text-center">Your Notes</h2>
                <div className=" mx-auto text-center"> 
                {notes.length===0 && 'No notes to display'}
                </div>
                <div className="flex flex-wrap">
                    {notes.map((note) => {
                        return <Noteitem key={note._id} note={note} updateNote={updateNote} setShowModal={setShowModal} />
                    })}
                </div>            </div>
        </>
    )
}

export default Notes