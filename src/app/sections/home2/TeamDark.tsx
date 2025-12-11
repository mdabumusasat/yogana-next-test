"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Lois Lane",
    role: "Yoga Instructor",
    img: "/assets/images/resource/team2-1.png",
  },
  {
    name: "Barbara Gordon",
    role: "Hatha Yoga",
    img: "/assets/images/resource/team2-1.png",
  },
  {
    name: "Harleen Quinzel",
    role: "Yoga Therapist",
    img: "/assets/images/resource/team2-1.png",
  },
  {
    name: "Paula Irving",
    role: "Awaken Yoga",
    img: "/assets/images/resource/team2-1.png",
  },
];

const TeamSectionTwo = () => {
  return (
    <section className="team-section-two">
      <div className="shape1 bounce-y">
        <Image
          src="/assets/images/icons/shape5-1.png"
          alt="shape"
          width={150}
          height={150}
        />
      </div>
      <div className="shape2 bounce-y">
        <Image
          src="/assets/images/icons/shape5-2.png"
          alt="shape"
          width={150}
          height={150}
        />
      </div>
      <div className="auto-container">
        <div
          className="sec-title text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".3s">
          <div className="title-stroke-text">Training</div>
          <span className="sub-title">Our team</span>
          <h2 className="words-slide-up text-split">Meet Certified Therapist</h2>
        </div>
        <div className="row">
          <div className="team-column col-xl-12 wow fadeInUp">
            <div className="inner-column">
              {teamMembers.map((member, index) => (
                <div className="team-block-two" key={index}>
                  <div className="inner-box">
                    <div className="info-box">
                      <h3 className="name">
                        <Link href="/page-team-details">
                          {member.name}
                        </Link>
                      </h3>
                      <span className="designation">{member.role}</span>
                    </div>
                    <Link href="/page-team-details" className="icon">
                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                    </Link>
                    <div
                      className="bg-image"
                      style={{
                        backgroundImage: `url(${member.img})`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSectionTwo;
