// TODO create some Home page with Feeds
import { Carousel } from "antd";
import React from "react";
import "./home.css";

function HomePage() {
  return (
    <div className="home">
      <Carousel autoplay>
        <div>
          <h3 className="carosel-content">1</h3>
        </div>
        <div>
          <h3 className="carosel-content">2</h3>
        </div>
        <div>
          <h3 className="carosel-content">3</h3>
        </div>
        <div>
          <h3 className="carosel-content">4</h3>
        </div>
      </Carousel>
    </div>
  );
}

export default HomePage;
