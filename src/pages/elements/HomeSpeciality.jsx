import React from "react";
import Badge from "../../components/Badge";
import { FaCog } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import SpecialityData from "../../utils/speciality.json";
import SpecialityImage1 from "../../assets/img/spec1.png";
import SpecialityImage2 from "../../assets/img/spec2.png";
import SpecialityImage3 from "../../assets/img/spec3.png";
import SpecialityImage4 from "../../assets/img/spec4.png";
import SpecialityImage5 from "../../assets/img/spec5.png";
import SpecialityImage6 from "../../assets/img/spec6.png";

const HomeSpeciality = () => {
  const SpecialityImages = [
    SpecialityImage1,
    SpecialityImage2,
    SpecialityImage3,
    SpecialityImage4,
    SpecialityImage5,
    SpecialityImage6,
  ];
  return (
    <>
      <section className="my-5 py-5 bg__dark2">
        <div className="container">
          <div className="row mx-0 justify-content-center">
            <div className="col-lg-10 col-xxl-8 col-xxxl-7 ">
              <div className="d-flex gap-lg-3 gap-2 align-items-center">
                <div className="cogwheel__div">
                  <FaCog />
                </div>
                <div>
                  <Badge color="secondary" content="Our Specialities" />
                  <h1 className="text__light cabin mt-3">
                    NO COMPROMISES, <br className="d-lg-block d-none" />
                    ONLY RESULTS
                  </h1>
                </div>
              </div>
              <div className="row mx-0 mt-5 pt-lg-1">
                {SpecialityImages.map((image, index) => (
                  <div key={index} className="col-lg-4 mb-4">
                    <div className="card__speciality h-100">
                      <img src={image} alt="" />
                      <div>
                        <h5 className="text__light nunito fw-bold mt-4">
                          {SpecialityData[index].title}
                        </h5>
                        <p className="noto text__gray5 fw-light pb-2">
                          {SpecialityData[index].description}
                        </p>
                        <button type="button">
                          Read More <FaAngleRight />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSpeciality;
