import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceList = ({ services }) => {
  // console.log(services)
  return (
    <div className="row">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          price={service.price}
          warranty={service.warranty}
          // onAdd={() => console.log(`${service.title} added`)}
        />
      ))}
    </div>
  );
};

export default ServiceList;
