"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const images = {
  img1: "/assets/images/resource/gallery1-1.jpg",
  img2: "/assets/images/resource/gallery1-2.jpg",
  img3: "/assets/images/resource/gallery1-3.jpg",
  img4: "/assets/images/resource/gallery1-4.jpg",
};

export default function GallerySection() {
  return (
    <section className="gallery-section pt-100">
      <div className="outer-box">

        {/* ROW 1 */}
        <div className="row">
          <div className="col-xl-6">
            <div className="row">
              <div className="gallery-block col-sm-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href={images.img4} className="lightbox-image">
                        <Image
                          src={images.img4}
                          alt="Gallery"
                          width={500}
                          height={500}
                        />
                      </Link>
                    </figure>
                    <Link href="/page-gallery" className="icon">
                      <i className="fa-sharp fa-light fa-eye"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="gallery-block col-sm-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href={images.img3} className="lightbox-image">
                        <Image src={images.img3} alt="Gallery" width={500} height={500} />
                      </Link>
                    </figure>
                    <Link href="/page-gallery" className="icon">
                      <i className="fa-sharp fa-light fa-eye"></i>
                    </Link>
                  </div>
                  <div className="image-box">
                    <figure className="image">
                      <Link href={images.img2} className="lightbox-image">
                        <Image src={images.img2} alt="Gallery" width={500} height={500} />
                      </Link>
                    </figure>
                    <Link href="/page-gallery" className="icon">
                      <i className="fa-sharp fa-light fa-eye"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery-block col-xl-6">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <Link href={images.img1} className="lightbox-image">
                    <Image src={images.img1} alt="Gallery" width={700} height={700} />
                  </Link>
                </figure>
                <Link href="/page-gallery" className="icon">
                  <i className="fa-sharp fa-light fa-eye"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="gallery-block col-xl-6">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <Link href={images.img1} className="lightbox-image">
                    <Image src={images.img1} alt="Gallery" width={700} height={700} />
                  </Link>
                </figure>
                <Link href="/page-gallery" className="icon">
                  <i className="fa-sharp fa-light fa-eye"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row">
              {/* Block */}
              <div className="gallery-block col-sm-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href={images.img4} className="lightbox-image">
                        <Image src={images.img4} alt="Gallery" width={500} height={500} />
                      </Link>
                    </figure>
                    <Link href="/page-gallery" className="icon">
                      <i className="fa-sharp fa-light fa-eye"></i>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Block */}
              <div className="gallery-block col-sm-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href={images.img3} className="lightbox-image">
                        <Image src={images.img3} alt="Gallery" width={500} height={500} />
                      </Link>
                    </figure>
                    <Link href="/page-gallery" className="icon">
                      <i className="fa-sharp fa-light fa-eye"></i>
                    </Link>
                  </div>
                  <div className="image-box">
                    <figure className="image">
                      <Link href={images.img2} className="lightbox-image">
                        <Image src={images.img2} alt="Gallery" width={500} height={500} />
                      </Link>
                    </figure>
                    <Link href="/page-gallery" className="icon">
                      <i className="fa-sharp fa-light fa-eye"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
