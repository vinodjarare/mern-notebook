import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className='container px-5 py-4 mx-auto'>
            <h1 className="text-2xl font-medium text-center">Add a Note</h1>
            <div className="bg-white p-5 max-w-md mx-auto ">

                <form className="mt-10 space-y-4">
                    <input
                        className="w-full border rounded h-12 px-4 focus:outline-none"
                        placeholder="Add Title " id='tilte' name='title'
                        onChange={onChange} value={note.title}
                    />
                    <div className="flex items-center ">
                        <input
                            className="w-full border rounded h-12 px-4 focus:outline-none -mr-7"
                            placeholder="Description" id='description' name='description' value={note.description}
                            type="text"
                            onChange={onChange}
                        />
                    </div>
                    <div className="flex items-center ">
                        <input
                            className="w-full border rounded h-12 px-4 focus:outline-none -mr-7"
                            placeholder="tag" id='tag' name='tag'
                            type="text" value={note.tag}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between ">
                            <button
                                className="bg-blue-600 text-sm active:bg-gray-700 cursor-pointer font-regular text-white px-4 py-2 rounded uppercase"
                                type="submit" disabled={note.title.length<5 || note.description.length<5}
                                onClick={handleClick}
                            >
                                Add Note
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddNote