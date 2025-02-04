import React from "react";
import Link from "next/link";
import imgC1 from "../../assets/image/l3/png/content-1-img1.png";
import imgC2 from "../../assets/image/l3/png/content-1-img2.png";
import imgM from "../../assets/image/l3/png/media-img1.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area -->  */}
      <section className="pt-13 pt-lg-30 pb-lg-30">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-xl-6 col-lg-6 col-md-8 col-xs-10"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="position-relative px-xl-20 pr-md-15 pr-9">
                {/* <!-- content img start --> */}
                <img src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1622069499/5c2bf693001d062db6106b8ae68dccdf_tsxbs4.jpg" alt="" className="w-100 rounded-4" />
                {/* <!-- content img end --> */}
                {/* <!-- abs-content start --> */}
               
                {/* <!-- abs-content end --> */}
              </div>
            </div>
            <div
              className="col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-11"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              {/* <!-- content-2 start --> */}
              <div className="content-2 pl-xl-10 d-flex flex-column justify-content-center h-100 pt-lg-0 pt-15 pr-xl-10 pr-xxl-0">
                {/* <!-- content section title start --> */}
                <h2 className="font-size-8 mb-7 pr-xs-13  pr-md-0 pr-sm-8">
                  Over <span className="text-green">200+ Universities</span> recruit from<div>Global Study Contacts</div>
                </h2>
                <p className="text-default-color font-size-5 mb-7 mb-lg-12 pr-xxl-13 pr-lg-0 pr-md-10">
                 Universities from 15+ Countries have reached their annual intake goals after joining hands with GSC 
                </p>
                {/* <!-- content section title end --> */}
                {/* <!-- content-2 btn start --> */}
                <Link href="/#">
                  <a className="text-green font-weight-bold text-uppercase font-size-3">
                    Learn More <i className="fas fa-arrow-right ml-3"></i>
                  </a>
                </Link>
                {/* <!-- content-2 btn end --> */}
                {/* <!-- media start --> */}
                <div className="media mb-9 mt-9 mt-lg-15 pr-sm-10 pr-md-18 pr-xl-20">
                  {/* <!-- media img start --> */}
                  <div className="media-img">
                    <img src={imgM} alt="" className="circle-48" />
                  </div>
                  {/* <!-- media img start --> */}
                  {/* <!-- media body start --> */}
                  <div className="media-body pl-7">
                    <p className="mb-0 font-size-4 heading-default-color mb-7">
                      “At first it was quite daunting, moving to a new country, finding a job, understanding their 
                      accent. But GSC connected me with all the right people that made the transition the smoothest journey ever”
                    </p>
                    <h6 className="mb-0 font-size-4">Davis Jones</h6>
                    <p className="font-size-3 text-default-color">
                      York University Alumni
                    </p>
                  </div>
                  {/* <!-- media body start --> */}
                </div>
                {/* <!-- media end --> */}
              </div>
              {/* <!-- content-2 end --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
