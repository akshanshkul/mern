import React from 'react';
import '../assets/css/style.css';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Note from '../component/Notes';
export default function Home() {
   

    return (
        <>
            <Header />
            {/* <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
                <div className="modal-content">
                    <span className="close" onClick={onClose}>&times;</span>
                    <h2>Update Content</h2>
                    <textarea value={content} onChange={handleInputChange} />
                    <button onClick={handleUpdate}>Update</button>
                </div>
            </div> */}

            <div className="container text-center" style={{ marginTop: '50px', marginBottom: '50px' }}>
                <Note></Note>
            </div>
            <Footer />
        </>
    );
}
