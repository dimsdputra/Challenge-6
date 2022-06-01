/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "../../assets/stylesheets/style.css";
import { Link, useNavigate } from "react-router-dom";
import ImgCar from '../../assets/images/img_car.png'
import Toggler from "../../assets/icons/Toggler.png";

function NavbarHome() {
  const token = localStorage.getItem("access_token")
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      window.location.href = "/login"
    }
  });

  if (!token) {
    return <div>Loading...</div>
  }

  const handleLogout = () => {
    localStorage.removeItem("access_token")
    navigate("/login", { replace: true })
  };
  return (
    <React.Fragment>
      <header>
        <nav className="navbar navbar-expand-lg navabr-light fixed-top">
          <div className="container">
            <div className="logo d-flex align-items-center"></div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <img src={Toggler} />
              </span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="nav nav-pills fs-6 text-center">
                <li className="nav-item">
                  <a className="nav-link" href='#' aria-current="page">
                    Our Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" aria-current="page">
                    Why Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" aria-current="page">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" aria-current="page">
                    FAQ
                  </a>
                </li>
                <button className="btn btn-success fw-bold fs-6 border-0" onClick={() => {handleLogout()}}>
                  Logout
                </button>
              </ul>
            </div>
          </div>
        </nav>
        <section className="cover container">
          <div className="cover-text mb-3 mt-5">
            <h1 className="fw-bold fs-4 w-75">Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
            <p className="fw-light fs-6 w-75">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <button className="btn btn-success fw-bold fs-6">Mulai Sewa Mobil</button>
          </div>
          <div className="cover-img mt-5">
            <img src={ImgCar} alt="" />
          </div>
        </section>
      </header>
    </React.Fragment>
  );
}

export default NavbarHome;
