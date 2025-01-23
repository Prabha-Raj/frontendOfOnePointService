import React from 'react';

const RatingBottomServices = () => {
  return (
    <section className="rating_bottom-services">
      <div className="container-fluid">
        <div className="row">

          {/* Service Rating */}
          <div className="col-md-4">
            <div className="lan">
              <div className="d-flex1">
                <div>
                  <h4 className="Verified">4.5</h4>
                  <p className="warrenty">
                    ⭐⭐⭐⭐<br />
                    Services Rating
                  </p>
                </div>

                <div>
                  <div className="subServicePrice lh-1">
                    <img src="./images/servicesrating.png" alt="Rating" style={{ width: '120px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customers Globally */}
          <div className="col-md-4">
            <div className="lan">
              <div className="d-flex1">
                <div>
                  <h4 className="Verified">10M +</h4>
                  <p className="warrenty">Customers Globally</p>
                </div>

                <div>
                  <div className="subServicePrice lh-1">
                    <img src="./images/CG.png" alt="Customers Globally" style={{ width: '120px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Discount Offer */}
          <div className="col-md-4">
            <div className="lan">
              <div className="d-flex1">
                <div>
                  <h4 className="Verified">20% off</h4>
                  <p className="warrenty">1st Service Upto 20% OFF</p>
                </div>

                <div>
                  <div className="subServicePrice lh-1">
                    <img src="./images/off.png" alt="Discount Offer" style={{ width: '120px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RatingBottomServices;
