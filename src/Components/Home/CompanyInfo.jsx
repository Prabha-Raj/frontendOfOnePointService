import React from 'react';

const CompanyInfo = () => {
    const companyInfo = [
            'images/services-1.jpg',
            'images/services-3.jpg',
            'images/services-2.jpg',
        ]

  return (
      <section className="Company-Info">
      <div className="container-fluid px-3">
        <div className="row align-items-center">
          {companyInfo.map((image, index) => (
            <div key={index} className="col-lg-4 mb-2">
              <div className="pro-img">
                <img src={image} alt={`Service ${index + 1}`} className="img-fluid" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
