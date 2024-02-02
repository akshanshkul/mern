import React, { useState,useRef } from 'react';
import { Link } from 'react-router-dom'
import temp_profile_image from '../assets/profile_pic/download.jpg'
import Popup from 'reactjs-popup';
import CreateNewNotes from '../component/CreateNew';
import '../assets/css/style.css';
import { MdOutlineClose } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
// import { CiLogin } from "react-icons/ci";

export default function Header() {
    const profileStyle = {
        color: 'green',
        fontSize: '16px',
        width: '150px',
    };
    // init state of funtion(popup) is false 
    const [modalState, setIsOpen] = useState(false);

    const handleCloseModal = () => {
        setIsOpen(false);

    };
    const handleOpenModal = () => {
        setIsOpen(true);
    };
    return (
        <div>
            <Popup open={modalState} position="top center" closeOnDocumentClick={true}>
                <div className="popup-container">
                    <div className="inner-body">
                        <CreateNewNotes></CreateNewNotes>
                        <div className="close-btn">
                            <MdOutlineClose onClick={handleCloseModal} size={26} color='black' />
                        </div>
                    </div>
                </div>
            </Popup>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <div className="navbar-brand text-success" to="/">Keep Notes</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active text-warning d-flex align-items-center" aria-current="page" to="/"> <IoMdHome size={20} /> Home</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link text-warning d-flex align-items-center" onClick={handleOpenModal} ><IoCreateOutline size={20} /> Create New</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link text-warning d-flex align-items-center" to="/Login"> <CiLogin size={20} /> Login</Link>
                            </li> */}
                        </ul>
                    </div>
                    <div className="float-end" style={profileStyle}>
                        
                        <Link to="/Account" className="d-flex flex-row  justify-content-evenly text-decoration-none">
                            <img src={temp_profile_image} alt="" height="40px" />
                            <div className="text-decoration-none ml-2">John Doe</div>
                        </Link>
                    </div>
                </div>
            </nav ></div >
    )
}
