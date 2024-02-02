import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoMdDoneAll } from "react-icons/io";

const Notes = () => {
    const cardStyle = {
        width: '18rem',
    };

    const clickAble = {
        cursor: 'pointer'
    };

    const updateComplete = (id, currentCompleteStatus) => {
        const updatedCompleteStatus = !currentCompleteStatus; // Toggle between true and false

        fetch(`http://127.0.0.1:8000/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                completed: updatedCompleteStatus,
            }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Failed to update note with ID ${id}`);
                }
                return res.json();
            })
            .then((data) => {
                console.log('Successfully updated note:', data);

                setNotes((prevNotes) => {
                    // Update the specific note with the new data
                    return prevNotes.map((note) => (note._id === id ? { ...note, complete: updatedCompleteStatus } : note));
                });
            })
            .catch((error) => {
                console.error('Error updating note:', error);
            });
    };


    const handleDelete = (id) => {
        fetch(`http://127.0.0.1:8000/todos/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Note deleted successfully:', data);

                setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
            })
            .catch((error) => {
                console.error('Error deleting note:', error);
            });
    };

    const handleEdit = (id) => {

        console.log('Editing note with ID:', id);
    };


    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/todos/list')
            .then((res) => res.json())
            .then((data) => {
                setNotes(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="d-flex align-content-end flex-wrap">

            {loading ? (
                <p>Loading...</p>
            ) : (
                notes.map((note) => (
                    <div key={note._id}>
                        <div className="col  m-2">
                            <div className={`card`} style={{ ...cardStyle, backgroundColor: note.completed ? 'lightgreen' : '' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{note.title}</h5>
                                    <small>{note.about}</small>
                                    <p className="card-text">{note.description}</p>
                                    <div className="action d-flex justify-content-between">
                                        <div className="delete" style={clickAble} onClick={() => handleDelete(note._id)}>
                                            <MdDelete size={20} />
                                        </div>
                                        <div className="status" style={clickAble} onClick={() => updateComplete(note._id, note.completed)} data-ref={note.completed}>
                                            <IoMdDoneAll size={20} style={{ color: note.completed ? 'lightgreen' : 'red' }}/>
                                        </div>
                                        <div className="edit" style={clickAble} onClick={() => handleEdit(note._id)}>
                                            <CiEdit size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}

        </div >
    );
};

export default Notes;