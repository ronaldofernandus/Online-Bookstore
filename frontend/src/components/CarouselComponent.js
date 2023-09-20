import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import buku1 from "../assets/images/buku1.jpeg";
import buku2 from "../assets/images/buku1.jpeg";
import buku3 from "../assets/images/buku3.jpeg";
const dummyImg = [
  {
    image: buku1,
    label: "Everything for your biking needs, all in one place!",
  },
  {
    image: buku2,
    label:
      "Find your desired bike parts here, whether it's new or used but still durable",
  },
  {
    image: buku3,
    label: "Your used bike parts might be useful for anyone else!",
  },
];

const CarouselComponent = () => {
  return (
    <>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
      >
        {dummyImg.map((img, index) => {
          return (
            <div key={index}>
              <img
                className="object-cover"
                alt=""
                src={img.image}
                style={{ maxHeight: "80vh" }}
              ></img>
              <p
                className="legend"
                style={{
                  padding: 10,
                  backgroundColor: "rgba(255, 255, 255, 0.81)",
                  color: "rgba(0, 0, 0, 1)",
                  fontWeight: "bold",
                  fontSize: 18,
                  borderRadius: "0.375rem",
                }}
              >
                {img.label}
              </p>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselComponent;
