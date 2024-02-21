import React from "react";
import Brand1 from "../../assets/img/1.png";
import Brand2 from "../../assets/img/2.png";
import Brand3 from "../../assets/img/3.png";
import Brand4 from "../../assets/img/4.png";
import Brand5 from "../../assets/img/5.png";
import Brand6 from "../../assets/img/6.png";

const Brands = () => {
  const brandImages = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6];
  return (
    <>
      <section className="my-4">
        <div className="container-fluid">
        <div className="row align-items-center justify-content-lg-between justify-content-center mx-0">
          {brandImages.map((brand, index) => (
            <div key={index} className="col-12 col-md d-flex justify-content-center ">
              <a href="#">
                <img src={brand} className="brand__img mx-auto" alt={`Brand ${index + 1}`} />
              </a>
            </div>
          ))}
        </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
