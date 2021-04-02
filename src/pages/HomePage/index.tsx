// TODO create some Home page with Feeds
import { Carousel } from "antd";
import React from "react";
import { Feed } from "../../features/Feeds/index";
import "./home.css";

function HomePage() {
  return (
    <div className="home">
      <Carousel autoplay className="carosel">
        <div className="carosel-content">1</div>
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
      <Feed />
    </div>
  );
}

export default HomePage;
