import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Kontak</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Beri masukkan</h3>
                    <p className="contact__details">kirim Email</p>
                </div>

                <form action="" className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input" placeholder="Masukkan nama"/>
                        </div>

                        <div className="contact__form-div">
                            <input type="email" className="contact__form-input" placeholder="Masukkan email"/>
                        </div>
                    </div>

                    <div className="contact__form-div">
                            <input type="text" className="contact__form-input" placeholder="Masukkan subjek"/>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <textarea name="" id="" cols="30" rows="10" className="contact__form-input" placeholder="Tulis pesan anda"></textarea>
                        </div>

                        <button className="btn">kirim</button>
                </form>
            </div>
        </section>
    )
}

export default Contact