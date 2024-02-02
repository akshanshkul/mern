import React, { useState } from "react";
import '../assets/css/form.css';

export default function CreateNewNote() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [about, setAbout] = useState("");
    const [complete, setcomplete] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault();

        // Assuming you have an API endpoint for creating a new note
        try {
            const response = await fetch('http://127.0.0.1:8000/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    description,
                    about,
                    complete:'false',
                }),
            });

            if (response.ok) {
                console.log('Note created successfully');
                // Optionally, you can redirect the user or perform any other actions after successful creation
            } else {
                console.error('Failed to create note');
            }
        } catch (error) {
            console.error('Error creating note:', error);
        }
    };

    return (
        <form className="row g-3 m-5 createNewNotes" onSubmit={handleSubmit}>
            <div className="col-md-12">
                <input
                    type="text"
                    placeholder="Title"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className="col-md-12">
                <textarea
                    type="text"
                    placeholder="Content"
                    id="content"
                    className="form-control"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </div>
            <div className="col-md-12">
                <input
                    type="text"
                    placeholder="Type"
                    className="form-control"
                    id="type"
                    value={about}
                    onChange={(event) => setAbout(event.target.value)}
                />
            </div>
            <button type="submit" className="form-control">Submit</button>
        </form>
    );
}
