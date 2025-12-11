import React from "react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Carol Danvers",
    role: "Senior Instructor",
    image: "/assets/images/resource/team3-1.jpg",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
    detailsLink: "/page-team-details",
    animationDelay: ".3s",
  },
  {
    name: "Lois Lane",
    role: "CO Founder",
    image: "/assets/images/resource/team3-2.jpg",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
    detailsLink: "/page-team-details",
    animationDelay: ".4s",
  },
  {
    name: "Diana Prince",
    role: "Meditation Guru",
    image: "/assets/images/resource/team3-3.jpg",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
    detailsLink: "/page-team-details",
    animationDelay: ".5s",
  },
  {
    name: "Karen Starr",
    role: "Senior Trainer",
    image: "/assets/images/resource/team3-4.jpg",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
    },
    detailsLink: "/page-team-details",
    animationDelay: ".5s",
  },
];

export default function TeamSection() {
  return (
    <section id="testimonial" className="team-section style-two">
      <div className="auto-container">
        <div className="sec-title">
          <div className="row align-items-end">
            <div className="col-lg-9 wow fadeInUp">
              <span className="sub-title">Our team</span>
              <h2 className="words-slide-up text-split">
                Get to Know Our <br />Skilled Trainers
              </h2>
            </div>
            <div className="col-lg-3 wow fadeInRight">
              <div className="btn-box">
                <Link
                  href="/page-team"
                  className="theme-btn btn-style-two btn pricing-btn mt-3 mt-lg-0">
                  <span className="btn-title">See all members</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`col-lg-3 col-sm-6 wow fadeInLeft`}
              data-wow-delay={member.animationDelay}>
              <div className="team-block-four">
                <div className="inner-box text-center">
                  <div className="image-box">
                    <figure className="image mb-0">
                      <Link href={member.detailsLink}>
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={300}
                          height={300}
                        />
                      </Link>
                    </figure>
                    <div className="icon-box">
                      <Link className="icon" href={member.social.twitter}>
                        <Image
                          src="/assets/images/icons/icon-x-twitter.png"
                          alt="Twitter"
                          width={24}
                          height={24}
                        />
                      </Link>
                      <Link className="icon" href={member.social.facebook}>
                        <Image
                          src="/assets/images/icons/icon-facebook.png"
                          alt="Facebook"
                          width={24}
                          height={24}
                        />
                      </Link>
                      <Link className="icon" href={member.social.instagram}>
                        <Image
                          src="/assets/images/icons/icon-instagram.png"
                          alt="Instagram"
                          width={24}
                          height={24}
                        />
                      </Link>
                    </div>
                  <div className="icon-box">
                    <Link className="icon" href="#/">
                      <img src="/assets/images/icons/icon-x-twitter.png" alt=""/>
                    </Link>
                    <Link className="icon" href="shop-product-details">
                      <img src="/assets/images/icons/icon-facebook.png" alt=""/>
                    </Link>
                    <Link className="icon" href="shop-cart">
                      <img src="/assets/images/icons/icon-instagram.png" alt=""/>
                    </Link>
                  </div>
                  </div>
                  <div className="content-box">
                    <span className="designation">{member.role}</span>
                    <h4 className="name">
                      <Link href={member.detailsLink}>{member.name}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
