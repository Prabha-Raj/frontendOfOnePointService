import React from "react";

const BrandsWeRepair = () => {
  const brands = [
    "images/brands/1.png",
    "images/brands/2.png",
    "images/brands/3.png",
    "images/brands/4.png",
    "images/brands/5.png",
    "images/brands/6.png",
    "images/brands/7.png",
    "images/brands/8.png",
    "images/brands/9.png",
    "images/brands/10.png",
    "images/brands/11.png",
    "images/brands/12.png",
    "images/brands/13.png",
    "images/brands/14.png",
    "images/brands/15.png",
    "images/brands/16.png",
    "images/brands/17.png",
    "images/brands/18.png",
  ];

  return (
    <section className="all-service mob_brandss">
      <div className="container-fluid">
        <div
          className="main-title"
          style={{
            color: "#ff0022",
            textTransform: "capitalize",
            fontSize: "30px",
          }}
        >
          Brands <span> We Repair </span>
        </div>

        <div className="col-xl-12 col-lg-13">
          <div className="row justify-content-center gy-4 mt-3">
            {brands.map((brand, index) => (
              <div
                className="col-lg-2 col-md-3 col-sm-3 col-4 mt-2"
                key={index}
              >
                <div className="brand_logo">
                  <img src={brand} alt={`Brand ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsWeRepair;
