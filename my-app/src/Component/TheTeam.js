import React from 'react'
import './TheTeam.css'
// import MeetOurTeam from './MeetOurTeam'

import emily_front from '../img/profile/emily-front.png'
import emily_back from '../img/profile/emily-back.png'
import olivia_front from '../img/profile/olivia-front.png'
import olivia_back from '../img/profile/olivia-back.png'
import hannah_front from '../img/profile/hannah-front.png'
import hannah_back from '../img/profile/hannah-back.png'
import nick_front from '../img/profile/nick-front.png'
import nick_back from '../img/profile/nick-back.png'


function TheTeam() {
    return (
        <section className="section members">
            <div className="container">

                <header className="section-header text-center">
                    <h2 className="section-title">Meet our team</h2>
                </header>
                {/* <MeetOurTeam /> */}
                <div className="team" >
                    <div className="team-member">
                        <div className="card">
                            <div className="card-front">
                                <div className="team-member__image">
                                    <figure className="img-holder">
                                        <img src={emily_front} alt=""/>
                                    </figure>
                                </div>
                                <div className="team-member__body">
                                    <h3 className="team-member__title">Emily Youn</h3>
                                    <span className="team-member__subtitle">Project Manager</span>
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="team-member__image">
                                    <figure className="img-holder">
                                        <img src={emily_back} alt=""/>
                                    </figure>
                                </div>
                                <div className="team-member__body">
                                    <h3 className="team-member__title">Emily Youn</h3>
                                    <span className="team-member__subtitle">Wanted to be a psychiatrist</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-member">
                        <div className="card">
                            <div className="card-front">
                                <div className="team-member__image">
                                    <figure className="img-holder">
                                        <img src={olivia_front} alt=""/>
                                    </figure>
                                </div>
                                <div className="team-member__body">
                                    <h3 className="team-member__title">Jungwan Choi</h3>
                                    <span className="team-member__subtitle">Frontend Developer</span>
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="team-member__image">
                                    <figure className="img-holder">
                                        <img src={olivia_back} alt=""/>
                                    </figure>
                                </div>
                                <div className="team-member__body">
                                    <h3 className="team-member__title">Jungwan Choi</h3>
                                    <span className="team-member__subtitle">Wanted to be an astronaut</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-member">
                        <div className="card">
                            <div className="card-front">
                                <div className="team-member__image">
                                    <figure className="img-holder">
                                        <img src={nick_front} alt=""/>
                                    </figure>
                                </div>
                                <div className="team-member__body">
                                    <h3 className="team-member__title">Seunghwan Hyeon</h3>
                                    <span className="team-member__subtitle">Backend Developer</span>
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="team-member__image">
                                    <figure className="img-holder">
                                        <img src={nick_back} alt=""/>
                                    </figure>
                                </div>
                                <div className="team-member__body">
                                    <h3 className="team-member__title">Seunghwan Hyeon</h3>
                                    <span className="team-member__subtitle">Wanted to be a pilot</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-member">
                        <div className="card">
                            <div className="card-front">
                                <div className="team-member__image">
                                    <figure className="img-holder">
                                        <img src={hannah_front} alt=""/>
                                    </figure>
                                </div>
                                <div className="team-member__body">
                                    <h3 className="team-member__title">Seulji Jo</h3>
                                    <span className="team-member__subtitle">Backend Developer</span>
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="team-member__image">
                                    <figure className="img-holder">
                                        <img src={hannah_back} alt=""/>
                                    </figure>
                                </div>
                                <div className="team-member__body">
                                    <h3 className="team-member__title">Seulji Jo</h3>
                                    <span className="team-member__subtitle">Wanted to be a detective</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}

export default TheTeam
