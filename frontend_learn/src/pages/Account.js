import React from 'react'
import Footer from '../component/Footer';
import Header from '../component/Header';
import temp_profile_image from '../assets/profile_pic/download.jpg'

export default function Account() {
    return (
        <>
            <Header></Header>
            <div className="container" style={{ marginTop: '50px', marginBottom: '50px' }}>
                <div className="row flex-lg-nowrap">
                    <div className="col">
                        <div className="row">
                            <div className="col mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="e-profile">
                                            <div className="row">
                                                <div className="col-12 col-sm-auto mb-3">
                                                    <div className="mx-auto" >
                                                        <div className="d-flex justify-content-center align-items-center rounded" >
                                                            <img src={temp_profile_image} alt="" />                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                                    <div className="text-center text-sm-left mb-2 mb-sm-0">
                                                        <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">John Smith</h4>
                                                        <p className="mb-0">@johnny.s</p>
                                                        <div className="text-muted"><small>Last seen 2 hours ago</small></div>
                                                        <div className="mt-2">
                                                            <button className="btn btn-primary" type="button">
                                                                <i className="fa fa-fw fa-camera"></i>
                                                                <span>Change Photo</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="text-center text-sm-right">
                                                        <span className="badge badge-secondary">administrator</span>
                                                        <div className="text-muted"><small>Joined 09 Dec 2017</small></div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
