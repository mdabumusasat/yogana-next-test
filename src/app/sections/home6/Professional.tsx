import React from 'react';
import Link from 'next/link';
import CounterUp from '../../components/elements/CounterUp';

function Professional() {
  return (
    <>
    <section id='project' className="professional-area bg-theme-color7">
      <div className="floating-img2"><img src="/assets/images/icon/object-2.png" alt="" /></div>
      <div className="floating-img"><img src="/assets/images/icon/object-1.png" alt="" /></div>
      <div className="container-fluid">
        <div className="row g-0 align-items-center">
          <div className="col-xl-6 order-2">
            <div className="professional__image imageLeftToRight wow">
              <img src="/assets/images/resource/professional-image.jpg" alt="image" />
              <div className="content">
                <ul>
                  <li className="icon"> 
                    <img src="/assets/images/icon/user-icon-6.1.svg" alt="" />
                  </li>
                  <li className="info">
                    <h3 className="title"><span className="count"><CounterUp end={20} /></span>k+</h3>
                    <div className="text">Happy User</div>
                  </li>
                </ul>
                <ul className="last-item">
                  <li className="icon"> 
                    <img src="/assets/images/icon/badge-icon-6.1.svg" alt="" />
                  </li>
                  <li className="info">
                    <h3 className="title"><span className="count"><CounterUp end={100} /></span>+</h3>
                    <div className="text">Award Winer</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-5 offset-xl-1">
            <div className="professional__content">
              <div className="sec-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                <h6 className="sub-title style-red">we are consultez</h6>
                <h2 className="title wow splt-txt text-white" data-splitting>Passionate About Help You Achieve <span className="font-weight-300">professionals</span></h2>
                <div className="text text-white">Sed ut perspiciatis unde omnis iste natus voluptatem doloremque laudantium totames aperiam eaque quaesy inventore a tetar bikal architecto beatae vitae dicta.</div>
              </div>
              <div>
                <ul className="mb-40 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                  <li><i className="icon fa-solid fa-check" /> Real-time insights to drive results.</li>
                  <li><i className="icon fa-solid fa-check" /> Accept fast payments directly during meetings.</li>
                </ul>
                <Link className="btn-three text-center mt-1 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" href="/page-case-details">View all projects <span className="icon ps-3 far fa-angle-right" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Professional;