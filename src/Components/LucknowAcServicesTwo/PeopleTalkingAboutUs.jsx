import React from "react";

const PeopleTalkingAboutUs = () => {
  const people = [
    { image: "images/services/01.jpg", name: "Mr. Shiv Lal" },
    { image: "images/services/02.jpg", name: "Mr. Anil Kumar" },
    { image: "images/services/03.jpg", name: "Mr. Ashish Dixit" },
    { image: "images/services/03.jpg", name: "Mr. Ashish Dixit" },
  ];

  return (
    <section className="all-service mob_brandss We-Do">
      <div className="container-fluid">
        <div
          className="main-title"
          style={{
            color: "#ff0022",
            textTransform: "capitalize",
            fontSize: "30px",
          }}
        >
          People Talking <span>About us</span>
        </div>
        <div className="row justify-content-center gy-4 mt-3">
          {people.map((person, index) => (
            <div className="col-lg-3 col-md-6 mt-2" key={index}>
              <div className="mob_people">
                <img src={person.image} alt={person.name} width="100%" />
                <h3>{person.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeopleTalkingAboutUs;
