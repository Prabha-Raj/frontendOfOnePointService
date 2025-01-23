import React from 'react'

const SelectYourService = () => {
  return (
    <div>
<section className="all-services">
  <div className="container-fluid">
    <div className="row text-left">
      <div className="col-lg-12">
        <div className="section-header mb-4">
          <div className="main-title">
            Please Select Your
            <span className="blue">Service</span>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-2 col-md-2 col-sm-2 col-4">
        <div className="left-menu-ser">
          <div className="nav-main booking-form">
            <div className="nav-body">
              <div className="main-service">
                <ul className="nav-tabs">
                  <li className="tab active" data-tab="home">
                    <img
                      src="images/icons/window-ac.jpg"
                      alt="Home"
                      className="icon"
                    />
                    <span>Window AC Repair</span>
                  </li>
                  <li className="tab" data-tab="profile">
                    <img
                      src="images/icons/split-ac.jpg"
                      alt="Profile"
                      className="icon"
                    />
                    <span>Split AC Repair</span>
                  </li>
                  <li className="tab" data-tab="settings">
                    <img
                      src="images/icons/central-ac.jpg"
                      alt="Settings"
                      className="icon"
                    />
                    <span>Central AC Repair</span>
                  </li>
                  <li className="tab" data-tab="ductlable">
                    <img
                      src="images/icons/ducate-ac.jpg"
                      alt="Settings"
                      className="icon"
                    />
                    <span>Ductlable AC Repair</span>
                  </li>
                  <li className="tab" data-tab="portable">
                    <img
                      src="images/icons/portable-ac.jpg"
                      alt="Settings"
                      className="icon"
                    />
                    <span>Portable AC Repair</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-10 col-md-10 col-sm-10 col-8">
        <div className="main-services">
          <div className="tab-content" id="v-pills-tabContent">
            <div className="content active" id="home">
              <div className="row">
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="container-fluid">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Not Working - Window AC
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आपका Window AC ठीक से कार्य नहीं कर रहा है
                                तो यहाँ क्लिक करें
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>296
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Not Working (Window AC)"
                        data-price={296}
                        data-id={101}
                        id="service_101"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow firstButton button"
                          data-servicee-id={154}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <div className="d-inline-flex ">
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-minus"
                              id="decrement"
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              id="number"
                              className="form-control form-control-sm text-center count"
                              min={0}
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-plus"
                              id="increment"
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Cooling Issue - Window AC
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आपका Window AC पर्याप्त ठण्डा नहीं कर रहा है
                                तो यहाँ दबायें
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>296
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Cooling Issue (Window AC)"
                        data-price={296}
                        data-id={102}
                        id="service_102"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow firstButton button"
                          data-servicee-id={154}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <div className="d-inline-flex ">
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-minus "
                              data-servicee-id={154}
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center count"
                              min={0}
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-plus"
                              data-servicee-id={154}
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Water Leakage Issue - Window AC
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                क्या आपके Window AC से पानी निकल रहा है, तो
                                कृपया इस ऑप्शन को चुने
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>296
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Water Leakage Issue ((Window AC)"
                        data-price={296}
                        data-id={103}
                        id="service_103"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow firstButton button"
                          data-servicee-id={154}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <div className="d-inline-flex ">
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-minus "
                              data-servicee-id={154}
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center count"
                              min={0}
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-plus"
                              data-servicee-id={154}
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Normal Servicing Window AC
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                Normal Servicing हाथ और ब्रश की मदद से की जाती
                                है| तो यह सर्विस आपके लिये उपयुक्त है
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>365
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Normal Servicing (Window AC)"
                        data-price={365}
                        data-id={104}
                        id="service_104"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow firstButton button"
                          data-servicee-id={154}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <div className="d-inline-flex ">
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-minus "
                              data-servicee-id={154}
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center count"
                              min={0}
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-plus"
                              data-servicee-id={154}
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Jet Pump Servicing - Window AC
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                हम High Pressure पम्प का उपयोग गहराई और बेहतर
                                तरीके से सफाई के लिए इस्तेमाल करते हैं
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>415
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Jet Pump Servicing (Window AC)"
                        data-price={415}
                        data-id={105}
                        id="service_105"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow firstButton button"
                          data-servicee-id={154}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <div className="d-inline-flex ">
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-minus "
                              data-servicee-id={154}
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center count"
                              min={0}
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-plus"
                              data-servicee-id={154}
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Gas Filling - Window AC
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अब पाएं अपने Window AC Gas Filling पर 30 दिन की
                                सर्विस वारंटी
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>2140
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Gas Filling (Window AC)"
                        data-price={2140}
                        data-id={106}
                        id="service_106"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow firstButton button"
                          data-servicee-id={154}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <div className="d-inline-flex ">
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-minus "
                              data-servicee-id={154}
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center count"
                              min={0}
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-plus"
                              data-servicee-id={154}
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Installation - Window AC
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आप अपने Window AC को लगवाना चाहते हैं कृपया
                                यह ऑप्शन दबायें|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>439
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Installation (Window AC)"
                        data-price={439}
                        data-id={107}
                        id="service_107"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow firstButton button"
                          data-servicee-id={154}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <div className="d-inline-flex ">
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-minus "
                              data-servicee-id={154}
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center count"
                              min={0}
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-plus"
                              data-servicee-id={154}
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Un-Installation - Window AC
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आप अपने Window AC को निकलवाना चाहते हैं
                                कृपया यह ऑप्शन दबायें
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>349
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Un-Installation (Window AC)"
                        data-price={349}
                        data-id={108}
                        id="service_108"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow firstButton button"
                          data-servicee-id={154}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <div className="d-inline-flex ">
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-minus "
                              data-servicee-id={154}
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center count"
                              min={0}
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-plus"
                              data-servicee-id={154}
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Re-Installation - Window AC
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अपने Window AC को एक जगह से निकालकर दूसरे जगह
                                लगवाने के लिए यहाँ दबायें
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>729
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Re-Installation (Window AC)"
                        data-price={729}
                        data-id={109}
                        id="service_109"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow firstButton button"
                          data-servicee-id={154}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <div className="d-inline-flex ">
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-minus "
                              data-servicee-id={154}
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center count"
                              min={0}
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-plus"
                              data-servicee-id={154}
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Any other Issue
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आपके Window AC से जुडी समस्या कोई अन्य
                                समस्या है यह तो यह ऑप्शन चुने
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>99
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Any other Issue"
                        data-price={99}
                        data-id={110}
                        id="service_110"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow firstButton button"
                          data-servicee-id={154}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <div className="d-inline-flex ">
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-minus "
                              data-servicee-id={154}
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center count"
                              min={0}
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-plus"
                              data-servicee-id={154}
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div className="total-select">
                    <div className="bottom-warp">
                      <div className="total-value">
                        <h4>Total: ₹3,597</h4>
                        <p>( 3 services selected )</p>
                      </div>
                      <div className="c-button">
                        <a className="cart-btn" href="#">
                          {" "}
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content" id="profile">
              <div className="row g-3">
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Not Working - Split AC
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आपका Split AC ठीक से कार्य नहीं कर रहा है तो
                                यहाँ क्लिक करें
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>299
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Not Working - Split AC"
                        data-price={299}
                        data-id={111}
                        id="service_111"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow firstButton button"
                          data-servicee-id={155}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <div className="d-inline-flex ">
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-minus "
                              data-servicee-id={155}
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center count"
                              min={0}
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-plus"
                              data-servicee-id={155}
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Cooling Issue - Split AC
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आपका Split AC पर्याप्त ठण्डा नहीं कर रहा है
                                तो यहाँ दबायें
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>299
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Cooling Issue - Split AC"
                        data-price={299}
                        data-id={112}
                        id="service_112"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow firstButton button"
                          data-servicee-id={155}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <div className="d-inline-flex ">
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-minus "
                              data-servicee-id={155}
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center count"
                              min={0}
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-plus"
                              data-servicee-id={155}
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Water Leakage Issue - Split AC
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                क्या आपके Split AC से पानी निकल रहा है, तो कृपया
                                इस ऑप्शन को चुने
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>299
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Water Leakage Issue ((Split AC)"
                        data-price={299}
                        data-id={113}
                        id="service_113"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow firstButton button"
                          data-servicee-id={155}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <div className="d-inline-flex ">
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-minus "
                              data-servicee-id={155}
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center count"
                              min={0}
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-plus"
                              data-servicee-id={155}
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Normal Servicing - Split AC
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                Normal Servicing हाथ और ब्रश की मदद से की जाती
                                है| तो यह सर्विस आपके लिये उपयुक्त है
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>449.0
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Normal Servicing - Split AC"
                        data-price={449.0}
                        data-id={114}
                        id="service_114"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow firstButton button"
                          data-servicee-id={155}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <div className="d-inline-flex ">
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-minus "
                              data-servicee-id={155}
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center count"
                              min={0}
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-plus"
                              data-servicee-id={155}
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Jet Pump Servicing - Split AC
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                हम High Pressure पम्प का उपयोग गहराई और बेहतर
                                तरीके से सफाई के लिए इस्तेमाल करते हैं
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>499
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Jet Pump Servicing - Split AC"
                        data-price={499}
                        data-id={115}
                        id="service_115"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow firstButton button"
                          data-servicee-id={155}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <div className="d-inline-flex ">
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-minus "
                              data-servicee-id={155}
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center count"
                              min={0}
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-plus"
                              data-servicee-id={155}
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Gas Filling - Split AC
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अब पाएं अपने Split AC Gas Filling पर 30 दिन की
                                सर्विस वारंटी|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>2340
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Gas Filling - Split AC"
                        data-price={2340}
                        data-id={116}
                        id="service_116"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow firstButton button"
                          data-servicee-id={155}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <div className="d-inline-flex ">
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-minus "
                              data-servicee-id={155}
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center count"
                              min={0}
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-plus"
                              data-servicee-id={155}
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Installation - Split AC
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आप अपने Split AC को लगवाना चाहते हैं कृपया
                                यह ऑप्शन दबायें|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>1045
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Installation - Split AC"
                        data-price={1045.0}
                        data-id={117}
                        id="service_117"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow firstButton button"
                          data-servicee-id={155}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <div className="d-inline-flex ">
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-minus "
                              data-servicee-id={155}
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center count"
                              min={0}
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-plus"
                              data-servicee-id={155}
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Un-Installation - Split AC
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आप अपने Split AC को निकलवाना चाहते हैं कृपया
                                यह ऑप्शन दबायें|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>499
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Un-Installation - Split AC"
                        data-price={499}
                        data-id={118}
                        id="service_118"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow firstButton button"
                          data-servicee-id={155}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <div className="d-inline-flex ">
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-minus "
                              data-servicee-id={155}
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center count"
                              min={0}
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-plus"
                              data-servicee-id={155}
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Re-Installation - Split AC
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अपने Split AC को एक जगह से निकालकर दूसरे जगह
                                लगवाने के लिए यहाँ दबायें
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>1640
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Re-Installation - Split AC"
                        data-price={1640}
                        data-id={119}
                        id="service_119"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow firstButton button"
                          data-servicee-id={155}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <div className="d-inline-flex ">
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-minus "
                              data-servicee-id={155}
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center count"
                              min={0}
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-plus"
                              data-servicee-id={155}
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Any other Issue
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आपके Split AC से जुडी समस्या कोई अन्य समस्या
                                है यह तो यह ऑप्शन चुने|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>99
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Any other Issue"
                        data-price={99}
                        data-id={120}
                        id="service_120"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow firstButton button"
                          data-servicee-id={155}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <div className="d-inline-flex ">
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-minus "
                              data-servicee-id={155}
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center count"
                              min={0}
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-plus"
                              data-servicee-id={155}
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div className="total-select">
                    <div className="bottom-warp">
                      <div className="total-value">
                        <h4>Total: ₹3,597</h4>
                        <p>( 3 services selected )</p>
                      </div>
                      <div className="c-button">
                        <a className="cart-btn" href="#">
                          {" "}
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content" id="settings">
              <div className="row g-3">
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                AC Not Working
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आपका AC ठीक से कार्य नहीं कर रहा है तो यहाँ
                                क्लिक करें|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>649
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="AC Not Working"
                        data-price={649}
                        data-id={121}
                        id="service_121"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow firstButton button"
                          data-servicee-id={271}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <div className="d-inline-flex ">
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-minus "
                              data-servicee-id={271}
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center count"
                              min={0}
                              defaultValue={0}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-link px-2 qt-plus"
                              data-servicee-id={271}
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                AC Cooling Issue
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आपका AC पर्याप्त ठण्डा नहीं कर रहा है तो
                                यहाँ दबायें|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>649
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="AC Cooling Issue"
                        data-price={649}
                        data-id={122}
                        id="service_122"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={271}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={271}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={271}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                AC Water Leakage Issue
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                क्या आपके AC से पानी निकल रहा है, तो कृपया इस
                                ऑप्शन को चुने|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>649
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="AC Water Leakage Issue"
                        data-price={649}
                        data-id={123}
                        id="service_123"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={271}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={271}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={271}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Normal Servicing
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                Normal Servicing हाथ और ब्रश की मदद से की जाती
                                है| तो यह सर्विस आपके लिये उपयुक्त है
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>2449
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Normal Servicing"
                        data-price={2449}
                        data-id={124}
                        id="service_124"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={271}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={271}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={271}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Jet Pump Servicing
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                हम High Pressure पम्प का उपयोग गहराई और बेहतर
                                तरीके से सफाई के लिए इस्तेमाल करते हैं
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>2449
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Jet Pump Servicing"
                        data-price={2449}
                        data-id={125}
                        id="service_125"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={271}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="secondButton button mb-1"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={271}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={271}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                AC Installation
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आप अपने AC को लगवाना चाहते हैं कृपया यह
                                ऑप्शन दबायें|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>2649
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="AC Installation"
                        data-price={2649}
                        data-id={127}
                        id="service_127"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={271}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={271}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={271}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                AC Un-Installation
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आप अपने AC को निकलवाना चाहते हैं कृपया यह
                                ऑप्शन दबायें
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>649
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="AC Un-Installation"
                        data-price={649}
                        data-id={128}
                        id="service_128"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={271}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={271}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={271}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                AC Re-Installation
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अपने AC को एक जगह से निकालकर दूसरे जगह लगवाने के
                                लिए यहाँ दबायें|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>3649
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="AC Re-Installation"
                        data-price={3649}
                        data-id={129}
                        id="service_129"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={271}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={271}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={271}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Any other Issue
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आपके AC से जुडी समस्या ऊपर अंकित नहीं यह तो
                                यह ऑप्शन चुने|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>100
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Any other Issue"
                        data-price={100}
                        data-id={130}
                        id="service_130"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={271}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={271}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={271}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div className="total-select">
                    <div className="bottom-warp">
                      <div className="total-value">
                        <h4>Total: ₹3,597</h4>
                        <p>( 3 services selected )</p>
                      </div>
                      <div className="c-button">
                        <a className="cart-btn" href="#">
                          {" "}
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content" id="ductlable">
              <div className="row g-3">
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-white px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                AC Not Working
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आपका AC ठीक से कार्य नहीं कर रहा है तो यहाँ
                                क्लिक करें|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>649
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="AC Not Working"
                        data-price={649}
                        data-id={131}
                        id="service_131"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={272}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={272}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={272}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                AC Cooling Issue
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आपका AC पर्याप्त ठण्डा नहीं कर रहा है तो
                                यहाँ दबायें|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>649
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="AC Cooling Issue"
                        data-price={649.0}
                        data-id={132}
                        id="service_132"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={272}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={272}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={272}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                AC Water Leakage Issue
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                क्या आपके AC से पानी निकल रहा है, तो कृपया इस
                                ऑप्शन को चुने|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>649
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="AC Water Leakage Issue"
                        data-price={649.0}
                        data-id={133}
                        id="service_133"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={272}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={272}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={272}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Normal Servicing
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                Normal Servicing हाथ और ब्रश की मदद से की जाती
                                है| तो यह सर्विस आपके लिये उपयुक्त है
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>649
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Normal Servicing"
                        data-price={649}
                        data-id={134}
                        id="service_134"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={272}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={272}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={272}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Jet Pump Servicing
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                हम High Pressure पम्प का उपयोग गहराई और बेहतर
                                तरीके से सफाई के लिए इस्तेमाल करते हैं
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>649
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Jet Pump Servicing"
                        data-price={649}
                        data-id={135}
                        id="service_135"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={272}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={272}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={272}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                AC Installation
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आप अपने AC को लगवाना चाहते हैं कृपया यह
                                ऑप्शन दबायें|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>4649
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="AC Installation"
                        data-price={4649}
                        data-id={137}
                        id="service_137"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={272}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={272}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={272}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                AC Un-Installation
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आप अपने AC को निकलवाना चाहते हैं कृपया यह
                                ऑप्शन दबायें
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>1649
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="AC Un-Installation"
                        data-price={1649}
                        data-id={138}
                        id="service_138"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={272}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={272}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={272}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                AC Re-Installation
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अपने AC को एक जगह से निकालकर दूसरे जगह लगवाने के
                                लिए यहाँ दबायें|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>6449
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="AC Re-Installation"
                        data-price={6449}
                        data-id={139}
                        id="service_139"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={272}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={272}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={272}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Any other Issue
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आपके AC से जुडी समस्या ऊपर अंकित नहीं यह तो
                                यह ऑप्शन चुने|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>100
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Any other Issue"
                        data-price={100}
                        data-id={140}
                        id="service_140"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={272}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={272}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={272}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div className="total-select">
                    <div className="bottom-warp">
                      <div className="total-value">
                        <h4>Total: ₹3,597</h4>
                        <p>( 3 services selected )</p>
                      </div>
                      <div className="c-button">
                        <a className="cart-btn" href="#">
                          {" "}
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content" id="portable">
              <div className="row g-3">
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                AC Not Working
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आपका AC ठीक से कार्य नहीं कर रहा है तो यहाँ
                                क्लिक करें|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>296
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="AC Not Working"
                        data-price={296}
                        data-id={141}
                        id="service_141"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={273}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={273}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={273}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                AC Cooling Issue
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आपका AC पर्याप्त ठण्डा नहीं कर रहा है तो
                                यहाँ दबायें|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>296
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="AC Cooling Issue"
                        data-price={296}
                        data-id={142}
                        id="service_142"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={273}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={273}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={273}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normalbg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                AC Water Leakage Issue
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                क्या आपके AC से पानी निकल रहा है, तो कृपया इस
                                ऑप्शन को चुने|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>296
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="AC Water Leakage Issue"
                        data-price={296}
                        data-id={143}
                        id="service_143"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={273}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={273}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={273}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Normal Servicing
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                Normal Servicing हाथ और ब्रश की मदद से की जाती
                                है| तो यह सर्विस आपके लिये उपयुक्त है
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>399
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Normal Servicing"
                        data-price={399}
                        data-id={144}
                        id="service_144"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={273}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={273}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={273}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Jet Pump Servicing
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                हम High Pressure पम्प का उपयोग गहराई और बेहतर
                                तरीके से सफाई के लिए इस्तेमाल करते हैं
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>535
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Jet Pump Servicing"
                        data-price={535}
                        data-id={145}
                        id="service_145"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={273}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={273}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={273}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                AC Gas Filling
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अब पाएं किसी भी तरह की AC Gas Filling पर 30 दिन
                                की सर्विस वारंटी
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>345.0
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="AC Gas Filling"
                        data-price={345.0}
                        data-id={146}
                        id="service_146"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={273}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={273}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={273}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                AC Un-Installation
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आप अपने AC को निकलवाना चाहते हैं कृपया यह
                                ऑप्शन दबायें
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>349
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="AC Un-Installation"
                        data-price={349}
                        data-id={148}
                        id="service_148"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={273}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={273}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={273}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normalbg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                AC Re-Installation
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अपने AC को एक जगह से निकालकर दूसरे जगह लगवाने के
                                लिए यहाँ दबायें|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>799
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="AC Re-Installation"
                        data-price={799}
                        data-id={149}
                        id="service_149"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={273}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={273}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={273}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Any other Issue
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आपके AC से जुडी समस्या ऊपर अंकित नहीं यह तो
                                यह ऑप्शन चुने|
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>100
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Any other Issue"
                        data-price={100}
                        data-id={150}
                        id="service_150"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={273}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={273}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={273}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mb-4">
                  <div className="card subServiceCard rounded-3 h-100">
                    <div className="card-body p-2 p-md-2">
                      <div className="row">
                        <div className="container-fluid">
                          <div className="row flex-nowarp h-100 align-items-center">
                            <div className="col pe-0">
                              <div className="text-right">
                                <div className="task-badge badge fw-normal bg-opacity-25 text-black px-2 mb-1">
                                  15 Days Warranty
                                </div>
                              </div>
                              <div className="card-title text-black fw-bold mt-2 mb-0">
                                Un-Installation - Window AC
                                <span
                                  className="ms-1 d-none badge bg-warning rounded-circle p-1"
                                  data-bs-placement="top"
                                  data-bs-toggle="tooltip"
                                  data-bs-title="Service Explanation"
                                >
                                  <i className="fa-solid fa-exclamation" />
                                </span>
                              </div>
                              <p className="card-text text-muted mt-1 mb-0">
                                अगर आप अपने Window AC को निकलवाना चाहते हैं
                                कृपया यह ऑप्शन दबायें
                              </p>
                              <div className="result" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2 p-md-2 border-top-0 d-flex align-items-center justify-content-between">
                      <div className="subServicePrice lh-1">
                        <span>₹</span>549
                        <p className="small d-none text-muted fs-normal mt-1 mb-0">
                          (Tax Included)
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        data-name="Un-Installation (Window AC)"
                        data-price={549}
                        data-id={147}
                        id="service_147"
                        data-desc="Best Service Availabe in the town"
                      >
                        <button
                          className="btn-add btn btn-outline-danger mb-1 btn-sm  ms-auto fw-bold addNow"
                          data-servicee-id={273}
                        >
                          Add{" "}
                        </button>
                        <div
                          className="qtyGroup mb-0"
                          role="group"
                          style={{ display: "none" }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-minus "
                            data-servicee-id={273}
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center count"
                            min={0}
                            defaultValue={0}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-link px-2 qt-plus"
                            data-servicee-id={273}
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div className="total-select">
                    <div className="bottom-warp">
                      <div className="total-value">
                        <h4>Total: ₹3,597</h4>
                        <p>( 3 services selected )</p>
                      </div>
                      <div className="c-button">
                        <a className="cart-btn" href="#">
                          {" "}
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
    </div>
  )
}

export default SelectYourService
