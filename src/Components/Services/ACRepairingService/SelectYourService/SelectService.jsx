
import React, { useEffect, useState } from 'react';
import ServiceList from './ServiceList';
import './SelectService.css'; // Custom CSS for animations
import Category from './ServiceCategory ';

const SelectService = () => {
  const [categories, setCategories] = useState([
    { name: 'Window AC Repair', icon: 'images/icons/window-ac.jpg', isActive: true },
    { name: 'Split AC Repair', icon: 'images/icons/split-ac.jpg', isActive: false },
    { name: 'Ductlable AC Repair', icon: 'images/icons/ducate-ac.jpg', isActive: false },
    { name: 'Central AC Repair', icon: 'images/icons/central-ac.jpg', isActive: false },
    { name: 'Portable AC Repair', icon: 'images/icons/portable-ac.jpg', isActive: false },
  ]);
  const services = [
    {
      name: "Voltas AC Service And Repair",
      description:
        "Book #1 Voltas AC service & Voltas AC repair experts in Lucknow, India. Trusted professionals for Voltas AC servicing, AC repair, gas refill & AC installation. Book now and save up to ₹3000 on electricity bill!",
    },
    {
      name: "Whirlpool AC Service And Repair",
      description:
        "Book #1 Whirlpool AC service & Whirlpool AC repair experts in Lucknow, India. Trusted professionals for Whirlpool AC servicing, AC repair, gas refill & AC installation. Book now and save up to ₹3000 on electricity bill!",
    },
    {
      name: "Haier AC Service And Repair",
      description:
        "Book #1 Haier AC service & Haier AC repair experts in Lucknow, India. Trusted professionals for Haier AC servicing, AC repair, gas refill & AC installation. Book now and save up to ₹3000 on electricity bill!",
    },
    {
      name: "Godrej AC Service And Repair",
      description:
        "Book #1 Godrej AC service & Godrej AC repair experts in Lucknow, India. Trusted professionals for Godrej AC servicing, AC repair, gas refill & AC installation. Book now and save up to ₹3000 on electricity bill!",
    },
    {
      name: "O General AC Service And Repair",
      description:
        "Book #1 O General AC service & O General AC repair experts in Lucknow, India. Trusted professionals for O General AC servicing, AC repair, gas refill & AC installation. Book now and save up to ₹3000 on electricity bill!",
    },
    {
      name: "Samsung AC Service And Repair",
      description:
        "Book #1 Samsung AC service & Samsung AC repair experts in Lucknow, India. Trusted professionals for Samsung AC servicing, AC repair, gas refill & AC installation. Book now and save up to ₹3000 on electricity bill!",
    },
    {
      name: "Mitsubishi AC Service And Repair",
      description:
        "Book #1 Mitsubishi AC service & Mitsubishi AC repair experts in Lucknow, India. Trusted professionals for Mitsubishi AC servicing, AC repair, gas refill & AC installation. Book now and save up to ₹3000 on electricity bill!",
    },
    {
      name: "Lloyd AC Service And Repair",
      description:
        "Book #1 Lloyd AC service & Lloyd AC repair experts in Lucknow, India. Trusted professionals for Lloyd AC servicing, AC repair, gas refill & AC installation. Book now and save up to ₹3000 on electricity bill!",
    },
    {
      name: "Blue Star AC Service And Repair",
      description:
        "Book #1 Blue Star AC service & Blue Star AC repair experts in Lucknow, India. Trusted professionals for Blue Star AC servicing, AC repair, gas refill & AC installation. Book now and save up to ₹3000 on electricity bill!",
    },
    {
      name: "LG AC Service And Repair",
      description:
        "Book #1 LG AC service & LG AC repair experts in Lucknow, India. Trusted professionals for LG AC servicing, AC repair, gas refill & AC installation. Book now and save up to ₹3000 on electricity bill!",
    },
  ];

  const [allServices] = useState([
    {
      category: 'Window AC Repair',
      title: 'Window AC Repair',
      description: 'अगर आपका Window AC ठीक से कार्य नहीं कर रहा है तो यहाँ क्लिक करें',
      price: 296,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Split AC Repair',
      title: 'Split AC Repair',
      description: 'अगर आपका Split AC पर्याप्त ठण्डा नहीं कर रहा है तो यहाँ दबायें',
      price: 299,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Portable AC Repair',
      title: 'Cassette AC Installation',
      description: 'अगर आपको नया Cassette AC लगवाना है तो यहाँ क्लिक करें',
      price: 499,
      warranty: '30 Days Warranty',
    },
    {
      category: 'Ductlable AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Central AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Window AC Repair',
      title: 'Window AC Repair',
      description: 'अगर आपका Window AC ठीक से कार्य नहीं कर रहा है तो यहाँ क्लिक करें',
      price: 296,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Split AC Repair',
      title: 'Split AC Repair',
      description: 'अगर आपका Split AC पर्याप्त ठण्डा नहीं कर रहा है तो यहाँ दबायें',
      price: 299,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Portable AC Repair',
      title: 'Cassette AC Installation',
      description: 'अगर आपको नया Cassette AC लगवाना है तो यहाँ क्लिक करें',
      price: 499,
      warranty: '30 Days Warranty',
    },
    {
      category: 'Ductlable AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Central AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Window AC Repair',
      title: 'Window AC Repair',
      description: 'अगर आपका Window AC ठीक से कार्य नहीं कर रहा है तो यहाँ क्लिक करें',
      price: 296,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Split AC Repair',
      title: 'Split AC Repair',
      description: 'अगर आपका Split AC पर्याप्त ठण्डा नहीं कर रहा है तो यहाँ दबायें',
      price: 299,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Portable AC Repair',
      title: 'Cassette AC Installation',
      description: 'अगर आपको नया Cassette AC लगवाना है तो यहाँ क्लिक करें',
      price: 499,
      warranty: '30 Days Warranty',
    },
    {
      category: 'Ductlable AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Central AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Window AC Repair',
      title: 'Window AC Repair',
      description: 'अगर आपका Window AC ठीक से कार्य नहीं कर रहा है तो यहाँ क्लिक करें',
      price: 296,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Split AC Repair',
      title: 'Split AC Repair',
      description: 'अगर आपका Split AC पर्याप्त ठण्डा नहीं कर रहा है तो यहाँ दबायें',
      price: 299,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Portable AC Repair',
      title: 'Cassette AC Installation',
      description: 'अगर आपको नया Cassette AC लगवाना है तो यहाँ क्लिक करें',
      price: 499,
      warranty: '30 Days Warranty',
    },
    {
      category: 'Ductlable AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Central AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Window AC Repair',
      title: 'Window AC Repair',
      description: 'अगर आपका Window AC ठीक से कार्य नहीं कर रहा है तो यहाँ क्लिक करें',
      price: 296,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Split AC Repair',
      title: 'Split AC Repair',
      description: 'अगर आपका Split AC पर्याप्त ठण्डा नहीं कर रहा है तो यहाँ दबायें',
      price: 299,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Portable AC Repair',
      title: 'Cassette AC Installation',
      description: 'अगर आपको नया Cassette AC लगवाना है तो यहाँ क्लिक करें',
      price: 499,
      warranty: '30 Days Warranty',
    },
    {
      category: 'Ductlable AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Central AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Window AC Repair',
      title: 'Window AC Repair',
      description: 'अगर आपका Window AC ठीक से कार्य नहीं कर रहा है तो यहाँ क्लिक करें',
      price: 296,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Split AC Repair',
      title: 'Split AC Repair',
      description: 'अगर आपका Split AC पर्याप्त ठण्डा नहीं कर रहा है तो यहाँ दबायें',
      price: 299,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Portable AC Repair',
      title: 'Cassette AC Installation',
      description: 'अगर आपको नया Cassette AC लगवाना है तो यहाँ क्लिक करें',
      price: 499,
      warranty: '30 Days Warranty',
    },
    {
      category: 'Ductlable AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Central AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Window AC Repair',
      title: 'Window AC Repair',
      description: 'अगर आपका Window AC ठीक से कार्य नहीं कर रहा है तो यहाँ क्लिक करें',
      price: 296,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Split AC Repair',
      title: 'Split AC Repair',
      description: 'अगर आपका Split AC पर्याप्त ठण्डा नहीं कर रहा है तो यहाँ दबायें',
      price: 299,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Portable AC Repair',
      title: 'Cassette AC Installation',
      description: 'अगर आपको नया Cassette AC लगवाना है तो यहाँ क्लिक करें',
      price: 499,
      warranty: '30 Days Warranty',
    },
    {
      category: 'Ductlable AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Central AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Window AC Repair',
      title: 'Window AC Repair',
      description: 'अगर आपका Window AC ठीक से कार्य नहीं कर रहा है तो यहाँ क्लिक करें',
      price: 296,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Split AC Repair',
      title: 'Split AC Repair',
      description: 'अगर आपका Split AC पर्याप्त ठण्डा नहीं कर रहा है तो यहाँ दबायें',
      price: 299,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Portable AC Repair',
      title: 'Cassette AC Installation',
      description: 'अगर आपको नया Cassette AC लगवाना है तो यहाँ क्लिक करें',
      price: 499,
      warranty: '30 Days Warranty',
    },
    {
      category: 'Ductlable AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Central AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Window AC Repair',
      title: 'Window AC Repair',
      description: 'अगर आपका Window AC ठीक से कार्य नहीं कर रहा है तो यहाँ क्लिक करें',
      price: 296,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Split AC Repair',
      title: 'Split AC Repair',
      description: 'अगर आपका Split AC पर्याप्त ठण्डा नहीं कर रहा है तो यहाँ दबायें',
      price: 299,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Portable AC Repair',
      title: 'Cassette AC Installation',
      description: 'अगर आपको नया Cassette AC लगवाना है तो यहाँ क्लिक करें',
      price: 499,
      warranty: '30 Days Warranty',
    },
    {
      category: 'Ductlable AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Central AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Ductlable AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Central AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Window AC Repair',
      title: 'Window AC Repair',
      description: 'अगर आपका Window AC ठीक से कार्य नहीं कर रहा है तो यहाँ क्लिक करें',
      price: 296,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Split AC Repair',
      title: 'Split AC Repair',
      description: 'अगर आपका Split AC पर्याप्त ठण्डा नहीं कर रहा है तो यहाँ दबायें',
      price: 299,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Portable AC Repair',
      title: 'Cassette AC Installation',
      description: 'अगर आपको नया Cassette AC लगवाना है तो यहाँ क्लिक करें',
      price: 499,
      warranty: '30 Days Warranty',
    },
    {
      category: 'Ductlable AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Central AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Ductlable AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Central AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Window AC Repair',
      title: 'Window AC Repair',
      description: 'अगर आपका Window AC ठीक से कार्य नहीं कर रहा है तो यहाँ क्लिक करें',
      price: 296,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Split AC Repair',
      title: 'Split AC Repair',
      description: 'अगर आपका Split AC पर्याप्त ठण्डा नहीं कर रहा है तो यहाँ दबायें',
      price: 299,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Portable AC Repair',
      title: 'Cassette AC Installation',
      description: 'अगर आपको नया Cassette AC लगवाना है तो यहाँ क्लिक करें',
      price: 499,
      warranty: '30 Days Warranty',
    },
    {
      category: 'Ductlable AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Central AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Ductlable AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Central AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Window AC Repair',
      title: 'Window AC Repair',
      description: 'अगर आपका Window AC ठीक से कार्य नहीं कर रहा है तो यहाँ क्लिक करें',
      price: 296,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Split AC Repair',
      title: 'Split AC Repair',
      description: 'अगर आपका Split AC पर्याप्त ठण्डा नहीं कर रहा है तो यहाँ दबायें',
      price: 299,
      warranty: '15 Days Warranty',
    },
    {
      category: 'Portable AC Repair',
      title: 'Cassette AC Installation',
      description: 'अगर आपको नया Cassette AC लगवाना है तो यहाँ क्लिक करें',
      price: 499,
      warranty: '30 Days Warranty',
    },
    {
      category: 'Ductlable AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },
    {
      category: 'Central AC Repair',
      title: 'Central AC Maintenance',
      description: 'अगर आपके Central AC को सर्विसिंग की जरूरत है तो यहाँ दबायें',
      price: 999,
      warranty: '60 Days Warranty',
    },

  ]);



  const [filteredServices, setFilteredServices] = useState(
    allServices.filter((service) => service.category === 'Window AC Repair')
  );

  const [isTransitioning, setIsTransitioning] = useState(true);

  const handleCategorySelect = (selectedCategory) => {
    const updatedCategories = categories.map((category) =>
      category.name === selectedCategory.name
        ? { ...category, isActive: true }
        : { ...category, isActive: false }
    );
    setCategories(updatedCategories);

    // Smooth transition
    setIsTransitioning(true);
    setTimeout(() => {
      const relatedServices = allServices.filter(
        (service) => service.category === selectedCategory.name
      );
      setFilteredServices(relatedServices);
      setIsTransitioning(false);
    }, 300);

    // console.log(`Category Selected: ${selectedCategory.name}`);
  };

  return (
    <section className="all-services">
      <div className="container-fluid">
        <div className="section-header mb-4">
          <div className="main-title">
            Please Select Your <span className="blue">Service</span>
          </div>
        </div>
        <div className="d-flex service-container">
          {/* Category Section */}
          <div className="col-lg-2 container-left">
            <Category
              categories={categories}
              onSelectCategory={handleCategorySelect}
            />
          </div>

          {/* Services Section */}
          <div className='col-lg-10 container-right'>

            <div className={`service-list-container ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
              <ServiceList services={filteredServices} />

            </div>
            <div className="row mt-5">
              <div className="col-lg-12 col-sm-12">
                <div className="total-select">
                  <div className="bottom-warp">
                    <div className="total-value">
                      <h4>Total: ₹3,597</h4>
                      <p>( 3 services selected )</p>
                    </div>
                    <div className="c-button">
                      <a className="cart-btn" href="#" style={{textDecoration:"none"}}> Book Now</a>
                    </div>
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

export default SelectService;
