import React, { useState, useEffect } from "react";

const StatsSec = () => {
  const [stats, setStats] = useState({
    activeUsers: 0,
    tasksCompleted: 0,
    activePartners: 0,
    servingCities: 0,
  });

  // Function to animate the count
  const animateCount = (targetValue, key) => {
    let count = 0;
    const increment = Math.ceil(targetValue / 100); // Speed adjustment
    const interval = setInterval(() => {
      count += increment;
      if (count >= targetValue) {
        clearInterval(interval);
        count = targetValue;
      }
      setStats(prevStats => ({ ...prevStats, [key]: count }));
    }, 20); // Speed adjustment
  };

  // Trigger the animations on component mount
  useEffect(() => {
    animateCount(2719, "activeUsers");
    animateCount(3215, "tasksCompleted");
    animateCount(364, "activePartners");
    animateCount(12, "servingCities");
  }, []);

  return (
    <section className="app-section bg-white mob_count py-120">
      <div className="container-fluid">
        {/* Section Heading */}
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center mb-5">
              <h2 className="site-title">
                Our <span>Stats</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Stats Content */}
        <div className="row">
          {/* Active Users */}
          <div className="col-lg-3 col-6">
            <div className="single-coutnerup">
              <div>
                <i className="fa-solid fa-users"></i>
              </div>
              <span className="count-num">{stats.activeUsers}</span>
              <span className="plus">+</span>
              <p>Active Users</p>
            </div>
          </div>

          {/* Tasks Completed */}
          <div className="col-lg-3 col-6">
            <div className="single-coutnerup">
              <div>
                <i className="fa-solid fa-file-shield"></i>
              </div>
              <span className="count-num">{stats.tasksCompleted}</span>
              <span className="plus">+</span>
              <p>Tasks Completed</p>
            </div>
          </div>

          {/* Active Partners */}
          <div className="col-lg-3 col-6">
            <div className="single-coutnerup">
              <div>
                <i className="fa-solid fa-handshake"></i>
              </div>
              <span className="count-num">{stats.activePartners}</span>
              <span className="plus">+</span>
              <p>Active Partners</p>
            </div>
          </div>

          {/* Serving Cities */}
          <div className="col-lg-3 col-6">
            <div className="single-coutnerup">
              <div>
                <i className="fa-solid fa-city"></i>
              </div>
              <span className="count-num">{stats.servingCities}</span>
              <span className="plus">+</span>
              <p>Serving Cities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSec;
