import React from "react";
import "./MostSearchedAreas.css"; // Add custom CSS for styling

const MostSearchedAreas = ({Areas}) => {
  const areas = [
    "Gomti Nagar",
    "Hazratganj",
    "Indira Nagar",
    "Aliganj",
    "Rajajipuram",
    "Jankipuram",
    "Mahanagar",
    "LDA Colony",
    "IIM Road",
    "Jankipuram",
    "Chinhat",
    "Krishna Nagar",
    "Ashiyana",
    "Vikas Nagar",
    "Alambagh",
    "Aminabad",
    "Kapoorthala",
    "Nishatganj",
    "Bakshi Ka Talab",
    "Aashiyana Colony",
    "Sarojini Nagar",
    "Telibagh",
    "Lucknow Chowk",
    "Charbagh",
    "Transport Nagar",
  ];

  const pincodes = [
    "226001",
    "226002",
    "226003",
    "226004",
    "226005",
    "226006",
    "226007",
    "226008",
    "226009",
    "226010",
    "226011",
    "226012",
    "226013",
    "226014",
    "226016",
    "226017",
    "226018",
    "226019",
    "226020",
    "226021",
    "226022",
    "226023",
    "226024",
    "226025",
    "226029",
    "226030",
    "226031",
  ];


  return (
    <section className="Area-Pincodes">
      <div className="container-fluid">
        <div className="section-header">
          <div className="main-title">
            Most Searched {Areas} in <span className="blue">Lucknow</span>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12 d-flex flex-column">
            <div className="row gx-4 serviceLinks">
              {
                Areas == "Areas"
                ? areas.map((area, index) => (
                <div className="col-auto" key={index}>
                  <h4 className="w-100 btn-grad">{area}</h4>
                </div>
              ))
              : pincodes.map((area, index) => (
                <div className="col-auto" key={index}>
                  <h4 className="w-100 btn-grad">{area}</h4>
                </div>))
            }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostSearchedAreas;
