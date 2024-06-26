import React from "react";
import Navbar from "../bridalnavbar/bridal";
import Pinkimg from "./blogimages/depositphotos_6354967-stock-photo-pink-flower.jpg";
import Pinkimgs from "./blogimages/depositphotos_6354967-stock-photo-pink-flower.jpg";
import Bookicon from "./blogimages/44621.png";
import Postbridalcare from "./blogimages/Post-bridal-care.png";
import Bride from "./blogimages/lip.png";
import Cam from "./blogimages/black.png";
import Makeup from "./blogimages/makeup.png";
import Mehandhi from "./blogimages/mehandhi.png";

import Bridesmaid from "./blogimages/Bridesmaid.jpg";
import Mother from "./blogimages/Mother-of-bride-or-groom.jpg";
import Postbride from "./blogimages/Post-bridal-care.webp";

import "./brideservices.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { div, Card, Col } from "react-bootstrap";
import img1 from "./blogimages/topquality.png";
import Bridalfooter from "./bridalfooter";

const services = () => {
  return (
    <div className="brideserv">
      <Navbar />
      <div className="brideSevice">
        <h1>Bridal Makeover</h1>
        <button className="servicebok">BookNow</button>
      </div>

      <div className="brideservice1">
        <div className="brideimages">
        <img src={Pinkimg} className="brideservimg" alt="" />
        <img src={Pinkimgs} className="brideservimgs" alt="" />
        </div>
        <div className="our-service-bride">
        <h6>Our services</h6>
        <h2>Bridal Services</h2>
        </div>
      </div>

      <section className="course-box">
        <div className="course-box1">
          <img src={Postbridalcare} className="post-icon" alt="" />
          <h4>Post bridal care </h4>
          <a href="/booknow">
            Book Now <img src={Bookicon} className="col-icon" alt="booknow" />
          </a>
        </div>
        <div className="course-box1">
          <img src={Cam} className="post-icon" alt="" />
          <h4>Pre bridal photoshoot</h4>
          <a href="/booknow">
            Book Now <img src={Bookicon} className="col-icon" alt="booknow" />
          </a>
        </div>
        <div className="course-box1">
          <img src={Bride} className="post-icon" alt="" />
          <h4>Bridal services</h4>
          <a href="/booknow">
            Book Now <img src={Bookicon} className="col-icon" alt="booknow" />
          </a>
        </div>
      </section>

      <div className="course-box2nd">
        <div className="course-cole">
          <img src={Makeup} className="post-icon" alt="" />
          <h4>Pre bridal</h4>
          <a href="/booknow">
            Book Now <img src={Bookicon} className="col-icon" alt="booknow" />
          </a>
        </div>
        <div className="course-cole">
          <img src={Mehandhi} className="post-icon" alt="" />
          <h4>Mehndi</h4>
          <a href="/booknow">
            Book Now <img src={Bookicon} className="col-icon" alt="booknow" />
          </a>
        </div>
      </div>
      <div class="bridal-head">
        <h1 class="makehead">Bridal Services Customized For You</h1>
      </div>

      {/*************************************** * table**************************************** */}
      {/* <table className="tabbride"> */}
      {/* <tr className="bridetable">
          <td className="bridecol">
          <img src={Topquality} className="topquality-icon" alt="" />
            <h2>Top Notch Quality</h2>
            <p>
              Topnotch quality in bridal service is by exceptional expertise.
            </p>
          </td>
        </tr>

       <tr className="bridetable">
          <td className="bridecol">
          <img src={Topquality} className="topquality-icon" alt="" />
            <h2>Personalized Makeup</h2>
            <p>
              A key component of superior quality in bridal services is
              customised makeup.
            </p>
          </td>
        </tr>

       <tr className="bridetable">
           <td className="bridecol">
           <img src={Topquality} className="topquality-icon" alt="" />
            <h2>Experienced Stylists</h2>
            <p>
              A professional stylist is essential to get excellent bridal
              services.
            </p>
          </td>
        </tr>

       <tr className="bridetable">
           <td className="bridecol">
           <img src={Topquality} className="topquality-icon" alt="" />
            <h2>Friends and Family</h2>
            <p>
              The involvement of friends and family is vital to the bridal
              service.
            </p>
          </td>
        </tr> */}

      {/* </table> */}

      <div className="table-service">
        <div className=" table-all1">
          <Col className="table-size" md="4">
            <Card classname="card-clor">
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Top Notch Quality
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  Topnotch quality in bridal service is by exceptional
                  expertise.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>

        <div className="p-1 table-all2">
          <Col className="table-size" md="4">
            <Card classname="card-clor">
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Personalized Makeup
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  A key component of superior quality in bridal services is
                  customised makeup.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>

        <div className="p-1 table-all3">
          <Col className="table-size" md="4">
            <Card classname="card-clor">
              <Card.Img variant="top" src={img1} />
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Title style={{ textAlign: "center" }}>
                  Experienced Stylists
                </Card.Title>
                <Card.Text>
                  A professional stylist is essential to get excellent bridal
                  services.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>

        <div className="p-1 table-all4">
          <Col className="table-size" md="4">
            <Card classname="card-clor">
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Friends and Family
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  The involvement of friends and family is vital to the bridal
                  service.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </div>

      <div className="bridal-service-quality">
        <h1>
          Bridal Service Quality At
          <br /> Its Best
        </h1>
        <h2>
          Enhance your unikaa beauty and radiate elegance on your special <br />
          day with our exquisite bridal makeup services
        </h2>

        <div className="bridal-service-quality-image">
          <div className="bridal-service-quality-image1">
            <img src={Bridesmaid} alt="" />
            <h4>Post bridal care </h4>
            <a href="/booknow">Book Now</a>
          </div>
          <div className="bridal-service-quality-image1">
            <img src={Mother} alt="" />
            <h4>Post bridal care </h4>
            <a href="/booknow">Book Now</a>
          </div>

          <div className="bridal-service-quality-image1">
            <img src={Postbride} alt="" />
            <h4>Post bridal care </h4>
            <a href="/booknow">Book Now</a>
          </div>
        </div>
      </div>

      <Bridalfooter />
    </div>
  );
};

export default services;
