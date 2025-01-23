import React, { useState } from "react";

const FAQSection = () => {
  const faqs1 = [
    {
      id: 1,
      question: "Which AC repair services are offered in Lucknow by One Point?",
      answer:
        "One Point provides window and split AC services in Lucknow. Services include: AC installation, gas recharging, and annual maintenance. If you're facing specific problems like lack of cooling, you can schedule an AC repair service starting at ₹399. Spare part costs are not included.",
    },
    {
      id: 2,
      question: "Which AC brands do you repair and service in Lucknow?",
      answer:
        "One Point air conditioner repair and service engineers are highly experienced and can handle repairs of many AC brands. This includes LG, Bluestar, Voltas, Samsung, Panasonic, Godrej, Bosch, Daikin, Carrier, Blue Star, IFB, Hitachi, and Haier.",
    },
    {
      id: 3,
      question: "How to book One Point's AC repair?",
      answer:
        "You can visit www.onepointservices.co.in, use the search bar to select the AC service you require, or click on the Device & Plans tab to see available services. Once you select your requirement, make an online payment after filling in your name, mobile number, and address. We'll take it from there.",
    },
    {
      id: 4,
      question: "Is it possible for me to get AC repairs for my old air conditioner?",
      answer:
        "Yes, you can book One Point AC repairs in Lucknow regardless of the brand or how long you've been using your air conditioner.",
    },
    {
      id: 5,
      question: "What if my AC needs replacement parts to start functioning again?",
      answer:
        "While we are pleased to assist you with air conditioner repair and maintenance, please note that the replacement parts will be charged separately.",
    },
  ];

  const faqs2 = [
    {
      id: 6,
      question: "What if my AC needs to be taken to the AC service center for repairs?",
      answer:
        "It might not be ideal to carry out cooling coil-related repairs at home. In such cases, our AC technicians might transport your AC unit to the service center for repairs, and you will be charged a flat rate of ₹500 for transportation.",
    },
    {
      id: 7,
      question: "What if One Point AC service engineer is not able to fix my AC?",
      answer:
        "We work with highly experienced AC technicians who have fixed hundreds of air conditioners like yours. However, in a rare case, if we are unable to fix your air conditioner on the first visit, we will schedule another repair visit at no extra cost to you.",
    },
    {
      id: 8,
      question: "Is there any warranty provided on the repairs done by One Point?",
      answer: "Yes, you get a 30-day warranty on repairs.",
    },
    {
      id: 9,
      question: "Is there any warranty provided on spare parts replaced by One Point?",
      answer: "Yes, you get a 90-day warranty on any spare part provided by One Point.",
    },

  ];

  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Frequently Asked <span style={{ color: "red" }}> Questions</span>
      </h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Left Column */}
        <div style={{ width: "50%" }}>
          {faqs1.map((faq) => (
            <div
              key={faq.id}
              style={{
                borderRadius: "5px",
                marginBottom: "10px",
                overflow: "hidden", // Ensure consistent size
                width: "100%",
              }}
            >
              <div
                style={{
                  padding: "10px 15px",
                  background: "#f9f9f9",
                  cursor: "pointer",
                  fontSize: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight:"300"
                }}
                onClick={() => toggleAccordion(faq.id)}
              >
                {faq.question}
                <span>{activeId === faq.id ? <i className='fa-solid fa-angle-up text-black'></i> : <i className='fa-solid fa-angle-down text-black'></i>}</span>
              </div>
              <div
                style={{
                  height: activeId === faq.id ? "auto" : 0,
                  overflow: "hidden",
                  transition: "height 0.3s ease, padding 0.3s ease",
                  padding: activeId === faq.id ? "15px" : "0px",
                  background: "#fff",
                  fontSize: "14px",
                  color: "#555",
                  fontWeight:"300",
                  border: activeId === faq.id ? "1px solid #f2f2f2" : "none",
                }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div style={{ width: "50%" }}>
          {faqs2.map((faq) => (
            <div
              key={faq.id}
              style={{
                borderRadius: "5px",
                marginBottom: "10px",
                overflow: "hidden", // Ensure consistent size
                width: "100%",
              }}
            >
              <div
                style={{
                  padding: "10px 15px",
                  background: "#f9f9f9",
                  cursor: "pointer",
                  fontSize: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight:"300"
                }}
                onClick={() => toggleAccordion(faq.id)}
              >
                {faq.question}
                <span>{activeId === faq.id ? <i className='fa-solid fa-angle-up text-black'></i> : <i className='fa-solid fa-angle-down text-black'></i>}</span>
              </div>
              <div
                style={{
                  height: activeId === faq.id ? "auto" : 0,
                  overflow: "hidden",
                  transition: "height 0.3s ease, padding 0.3s ease",
                  padding: activeId === faq.id ? "15px" : "0px",
                  background: "#fff",
                  fontSize: "15px",
                  color: "#555",
                  fontWeight:"300",
                  border: activeId === faq.id ? "1px solid #f2f2f2" : "none",
                }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
