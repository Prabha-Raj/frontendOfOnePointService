import React from 'react';

const NewlyJoinedServicePartners = () => {
  const teamMembers = [
    {
      name: 'Faraz',
      location: 'Rampa Road, Sitapur -261001',
      imgSrc: 'images/team/technician1.jpg',
      socialLinks: {
        facebook: '#',
        whatsapp: '#',
        linkedin: '#',
        youtube: '#',
      },
    },
    {
      name: 'Mansoof',
      location: 'Green Park, Bareilly -243005',
      imgSrc: 'images/team/technician2.jpg',
      socialLinks: {
        facebook: '#',
        whatsapp: '#',
        linkedin: '#',
        youtube: '#',
      },
    },
    {
      name: 'Gyan Sharma',
      location: 'Gomti Nagar, Lucknow -226011',
      imgSrc: 'images/team/technician3.jpg',
      socialLinks: {
        facebook: '#',
        whatsapp: '#',
        linkedin: '#',
        youtube: '#',
      },
    },
    {
      name: 'Faraz',
      location: 'Rampa Road, Sitapur -261001',
      imgSrc: 'images/team/technician1.jpg',
      socialLinks: {
        facebook: '#',
        whatsapp: '#',
        linkedin: '#',
        youtube: '#',
      },
    },
  ];

  return (
    <section className="team-area py-120">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center mb-5">
              <h2 className="site-title">
                Newly Joined <span>Service Partners</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-3 col-6">
              <div
                className="team-item wow fadeInUp"
                data-wow-delay={`${0.25 * (index + 1)}s`}
                style={{
                  visibility: 'visible',
                  animationDelay: `${0.25 * (index + 1)}s`,
                  animationName: 'fadeInUp',
                }}
              >
                <div className="team-img">
                  <img src={member.imgSrc} alt={member.name} />
                </div>
                <div className="team-social">
                  <a href={member.socialLinks.facebook}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href={member.socialLinks.whatsapp}>
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href={member.socialLinks.linkedin}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href={member.socialLinks.youtube}>
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
                <div className="team-content">
                  <div className="team-bio">
                    <h5>
                      <a href="#">{member.name}</a>
                    </h5>
                    <span>{member.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewlyJoinedServicePartners;
