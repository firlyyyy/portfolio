import React from 'react';
import "./About.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from './AboutBox';

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">Tentang saya</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">Hai, aku Firly, aku adalah siswa kelas 11 pplg dari sekolah SMKTI Airlangga, yang saat ini sedang mempelajari dan memperdalam ilmu UI/UX Designer</p>
                        <a href="" className="btn">Klik</a>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar development">
                                <span className="skills__percentage "></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">65%</span>
                            </div>

                            <div className="skills__bar ui__design">
                                <span className="skills__percentage"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">65%</span>
                            </div>

                            <div className="skills__bar photography">
                                <span className="skills__percentage"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About