import React from 'react';
import Link from 'next/link';

const blogData = [
  {
    id: 1,
    image: 'blog-four-image1.jpg',
    tag: '15 December,2025',
    user: 'By admin',
    comments: 'Comments (05)',
    title: 'We focus on the solutions not on the problems',
    link: '/news-details',
    btnTitle: 'Read More',
  },
  {
    id: 2,
    image: 'blog-four-image2.jpg',
    tag: '20 December,2025',
    user: 'By admin',
    comments: 'Comments (03)',
    title: 'How to Create Viral Content That Drives Sales',
    link: '/news-details',
    btnTitle: 'Read More',
  },
  {
    id: 3,
    image: 'blog-four-image3.jpg',
    tag: '15 December,2025',
    user: 'By admin',
    comments: 'Comments (03)',
    title: 'How AI is Changing the Future of Online Shopping',
    link: '/news-details',
    btnTitle: 'Read More',
  },
]

function News (){
  return (
    <>
    <section id="news" className="blog-section-four pt-120 have-padding">
      <div className="sec-shape">
        <img src="/assets/images/shape/blog-four-shape.png" alt="Image" />
      </div>
      <div className="container">
        <div className="sec-title mb-50">
          <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">New & Blogs</h6>
          <div className="flex-content">
            <h2 className="title wow splt-txt" data-splitting>Read All Our consulting <br /> News & Blogs</h2>
            <Link className="btn-one-light wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" href="/page-contact">contact us</Link>
          </div>
        </div>
        <div className="row g-4">
          {blogData.map(({ id, image, tag, user, comments, title, link, btnTitle }) => (
          <div key={id} className="col-md-6 col-xl-4 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
            <div className="blog-block-two">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <img src={`/assets/images/blog/${image}`} alt="Image" />
                    <span className="tag">{tag}</span>
                  </figure>
                </div>
                <div className="content-box">
                  <ul className="info">
                    <li>
                      <div className='icon'>
                        <img src="/assets/images/icon/user-icon.svg" />
                      </div>
                      <Link href="/">{user}</Link>
                    </li>
                    <li>
                      <div className='icon'>
                        <img src="/assets/images/icon/comment-icon.svg" />
                      </div>
                      <Link href="/">{comments}</Link>
                    </li>
                  </ul>
                  <h4 className="title"><Link href={link}>{title}</Link></h4>
                  <Link className="btn-one-rounded mt-30" href={link}>{btnTitle} <i className="fa-solid fa-arrow-right" /></Link>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default News;