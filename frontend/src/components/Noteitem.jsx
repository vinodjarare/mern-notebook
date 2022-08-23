import React,{useContext} from 'react'
import noteContext from "../context/notes/noteContext"

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note,setShowModal,updateNote } = props;
    return (
        <>
            <div className="p-4 w-11/12 md:w-3/12 ">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className="p-6 md:p-2">
                        <div className="flex justify-between">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{note.tag}</h2>
                        <div className='flex'>
                        <i className="fa-solid fa-trash-can mr-3 cursor-pointer text-red-500" onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="fa-solid fa-pen-to-square cursor-pointer"  onClick={() =>{ setShowModal(true); updateNote(note)}}></i>
                        </div>
                        </div>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{note.title}</h1>
                        <p className=" mb-3 font-normal text-base">{note.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Noteitem