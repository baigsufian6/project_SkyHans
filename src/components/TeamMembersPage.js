import React, { useState } from 'react';
import { UserCircle2, Facebook, Linkedin } from 'lucide-react';
import './TeamMembersPage.css'; // Import the CSS file
import moni from './images/monikaGupta-Director.jpg';
import hans from './images/HansrjGupta-ceo&founder.jpg';
import ankita from './images/AnkitaGupta-QA&eengineeringHead.jpg';
import dr from './images/DrAKJaiswal-globalMarketingHead.jpg';
import abhi from './images/abishekKumar-productManager.jpg';
import gow from './images/AparnaGowswami-HRhead.jpg';
import bl from './images/BLPraveen-techlead&manager.jpg';
import shams from './images/shamsher-ArVRhead.jpg';
import suresh from './images/sureshMishra-lgalAdvisor.jpg';
import Footer from './Footer'

const TeamMembersPage = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Monika Gupta",
      role: "Director",
      image: moni,
      facebook: "sarahj",
      linkedin: "sarahjohnson",
    },
    {
      id: 2,
      name: "Hansraj Gupta",
      role: "CEO & Founder",
      image: hans,
      facebook: "michaelc",
      linkedin: "michaelchen",
    },
    {
      id: 3,
      name: "Ankita Gupta",
      role: "QA & Engineering Head",
      image: ankita,
      facebook: "emmaw",
      linkedin: "emmawilliams",
    },
    {
      id: 4,
      name: "Dr. A.K. Jaiswal",
      role: "Global Marketing Head",
      image: dr,
      facebook: "davidk",
      linkedin: "davidkumar",
    },
    {
      id: 5,
      name: "Abhishek Kumar",
      role: "Product Manager",
      image: abhi,
      facebook: "davidk",
      linkedin: "davidkumar",
    },
    {
      id: 6,
      name: "Aparna Goswami",
      role: "HR Head",
      image: gow,
      facebook: "davidk",
      linkedin: "davidkumar",
    },
    {
      id: 7,
      name: "B L Praveen",
      role: "Tech Lead & Manager",
      image: dr,
      facebook: "davidk",
      linkedin: "davidkumar",
    },
    {
      id: 8,
      name: "Shamsher",
      role: "Graphics & AR-VR Head",
      image: shams,
      facebook: "davidk",
      linkedin: "davidkumar",
    },
    {
      id: 9,
      name: "Suresh Mishra",
      role: "Legal Advisor",
      image: suresh,
      facebook: "davidk",
      linkedin: "davidkumar",
    },
  ];

  return (
    <div className="team-container">
      {/* Header Section */}
      <div className="team-header">
        <h1>Meet Our Team</h1>
        <p>We're a group of passionate individuals working together to create amazing experiences.</p>
      </div>

      {/* Team Members Grid */}
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="team-member"
            onMouseEnter={() => setHoveredMember(member.id)}
            onMouseLeave={() => setHoveredMember(null)}
          >
            <div className="team-member-card">
              {/* Member Image */}
              <div className="team-member-image">
                <img src={member.image} alt={member.name} />
                <div className={`overlay ${hoveredMember === member.id ? 'show' : ''}`} />
              </div>

              {/* Member Info */}
              <div className={`team-member-info ${hoveredMember === member.id ? 'show' : ''}`}>
                <h3>{member.name}</h3>
                <p>{member.role}</p>

                {/* Social Links */}
                <div className="social-links">
                  <a href={`https://facebook.com/${member.facebook}`}><Facebook className="icon" /></a>
                  <a href={`https://linkedin.com/in/${member.linkedin}`}><Linkedin className="icon" /></a>
                </div>
              </div>
            </div>

            {/* Name and Role (Visible when not hovered) */}
            <div className={`team-member-text ${hoveredMember === member.id ? 'hide' : 'show'}`}>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default TeamMembersPage;
