import React from "react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  { name: "Jenny Wilson", role: "Trainer", photo: "/assets/images/resource/team1-1.png" },
  { name: "Jenny Wilson", role: "Trainer", photo: "/assets/images/resource/team1-2.png" },
  { name: "Jenny Wilson", role: "Trainer", photo: "/assets/images/resource/team1-3.png" },
  { name: "Jenny Wilson", role: "Trainer", photo: "/assets/images/resource/team1-4.png" },
  { name: "Jenny Wilson", role: "Trainer", photo: "/assets/images/resource/team1-5.png" },
  { name: "Jenny Wilson", role: "Trainer", photo: "/assets/images/resource/team1-6.png" },
];

const TeamSection = () => {
  return (
    <section className="team-section pb-0">
      <div className="auto-container">
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="team-block mb-50">
                <div className="inner-box text-center">
                  <div className="image-box">
                    <figure className="image mb-0">
                      <Link href="/page-team-details">
                          <Image
                            src={member.photo}
                            alt={member.name}
                            width={400}
                            height={400}
                          />
                      </Link>
                    </figure>
                    <div
                      className="bg bg-image"
                      style={{ backgroundImage: "url(/assets/images/resource/team-pattrn1.png)" }}
                    ></div>
                  </div>
                  <div className="content-box">
                    <h4 className="name">
                      <Link href="/page-team-details">{member.name}</Link>
                    </h4>
                    <span className="designation">{member.role}</span>
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

export default TeamSection;
