import React, { useContext, useEffect,useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import Link from "next/link";
import PageWrapper from "../../components/PageWrapper";
import ProfileSidebarAgent from "../../components/ProfileSidebar/ProfileSidebarAgent";
import {useRouter} from 'next/router'
import imgB1 from "../../assets/image/l2/png/featured-job-logo-1.png";
import imgB2 from "../../assets/image/l1/png/feature-brand-1.png";
import imgB3 from "../../assets/image/svg/harvard.svg";
import imgB4 from "../../assets/image/svg/mit.svg";

import imgT1 from "../../assets/image/l3/png/team-member-1.png";
import imgT2 from "../../assets/image/l3/png/team-member-2.png";
import imgT3 from "../../assets/image/l3/png/team-member-3.png";
import imgT4 from "../../assets/image/l3/png/team-member-4.png";
import imgT5 from "../../assets/image/l3/png/team-member-5.png";

import imgL from "../../assets/image/svg/icon-loaction-pin-black.svg";

const CandidateProfile = () => {
  const router = useRouter();
  const agentId = router.query.agentid;
  const [List, setList] = useState([]);
  useEffect(() =>  {

    async function fetchMyAPI() {
    try {

      const res = await fetch('https://ci-gsc.com/agents/1/?format=json');
  
      const todoList = await res.json();
      setList(todoList)
 
      // const user_list = await fetch('https://ci-gsc.com/user/?format=json')
        
      // const UserList = await user_list.json();
      // await setUserList(UserList)


      // for(var i = 0; i<userList.length; i++){
      //   if(userList[i]['email'] == authUser.email){
      //         await setUserType(userList[i]['usertype'])
              
      //   }
      //   }


      
    } catch (e) {
      console.log(e);
  }
    }
    
   

 fetchMyAPI()



  },[])


  return (
    <>
      <PageWrapper headerConfig={{ button: "profile" }}>
        <div className="bg-default-2 pt-22 pt-lg-25 pb-13 pb-xxl-32">
          <div className="container">
            {/* <!-- back Button --> */}
            <div className="row justify-content-center">
              <div className="col-12 dark-mode-texts">
                <div className="mb-9">
                  <Link href={`/dashboard-main-agents`}>
                    <a className="d-flex align-items-center ml-4">
                      <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                      <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                        Back
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- back Button End --> */}
            <div className="row">
              {/* <!-- Left Sidebar Start --> */}
              <div className="col-12 col-xxl-3 col-lg-4 col-md-5 mb-11 mb-lg-0">
                <ProfileSidebarAgent />
              </div>
              {/* <!-- Left Sidebar End --> */}
              {/* <!-- Middle Content --> */}
              <div className="col-12 col-xxl-6 col-lg-8 col-md-7 order-2 order-xl-1">
                <Tab.Container id="left-tabs-example" defaultActiveKey="one">
                  <div className="bg-white rounded-4 shadow-9">
                    {/* <!-- Tab Section Start --> */}
                    <Nav
                      className="nav border-bottom border-mercury pl-12"
                      role="tablist"
                    >
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="one"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Overview
                        </Nav.Link>
                      </li>
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="two"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Contact
                        </Nav.Link>
                      </li>
                    </Nav>
                    {/* <!-- Tab Content --> */}
                    <Tab.Content>
                      <Tab.Pane eventKey="one">
                        {/* <!-- Excerpt Start --> */}
                        <div className="pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                            Students 
                          </h4>
                          <p className="font-size-4 mb-8">
                            {List.number_of_staff}
                          </p>
                          
                        </div>
                   
                        {/* <!-- Excerpt End --> */}
                        {/* <!-- Skills --> */}
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                           Services
                          </h4>
                          <ul className="list-unstyled d-flex align-items-center flex-wrap">
                            <li>
                              <Link href="/#">
                                <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                                  Consultancy, Ticketing
                                </a>
                              </Link>
                            </li>
                          
                          </ul>
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                           Certifications
                          </h4>
                          <ul className="list-unstyled d-flex align-items-center flex-wrap">
                            <li>
                              <Link href="/#">
                                <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                                 Certificate 1
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/#">
                                <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                                 Certificate 2
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                           Services
                          </h4>
                          <ul className="list-unstyled d-flex align-items-center flex-wrap">
                            <li>
                              <Link href="/#">
                                <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                                  Consultancy, Ticketing
                                </a>
                              </Link>
                            </li>
                          
                          </ul>
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                          Associations
                          </h4>
                          <ul className="list-unstyled d-flex align-items-center flex-wrap">
                            <li>
                              <Link href="/#">
                                <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                                  FDBC, ARCB
                                </a>
                              </Link>
                            </li>
                          
                          </ul>
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                          Consultancy fee
                          </h4>
                          <ul className="list-unstyled d-flex align-items-center flex-wrap">
                            <li>
                              <Link href="/#">
                                <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                                  FDBC, ARCB
                                </a>
                              </Link>
                            </li>
                          
                          </ul>
                        </div>
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                          Students Sent Abroad
                          </h4>
                          <ul className="list-unstyled d-flex align-items-center flex-wrap">
                            <li>
                              <Link href="/#">
                                <a className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center">
                                  34
                                </a>
                              </Link>
                            </li>
                          
                          </ul>
                        </div>
                        {/* <!-- Skills End --> */}
                        {/* <!-- Card Section Start --> */}
                        {/* <div className="border-top p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                            Certifications
                          </h4>
                      
                          <div className="w-100">
                            <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                              <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                                <img src={imgB1} alt="" />
                              </div>
                              <div className="w-100 mt-n2">
                                <h3 className="mb-0">
                                  <Link href="/#">
                                    <a className="font-size-6 text-black-2 font-weight-semibold">
                                      Lead Product Designer
                                    </a>
                                  </Link>
                                </h3>
                                <Link href="/#">
                                  <a className="font-size-4 text-default-color line-height-2">
                                    Airabnb
                                  </a>
                                </Link>
                                <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                                  <Link href="/#">
                                    <a className="font-size-4 text-gray mr-5">
                                      Jun 2017 - April 2020- 3 years
                                    </a>
                                  </Link>
                                  <Link href="/#">
                                    <a className="font-size-3 text-gray">
                                      <span
                                        className="mr-4"
                                        css={`
                                          margin-top: -2px;
                                        `}
                                      >
                                        <img src={imgL} alt="" />
                                      </span>
                                      New York, USA
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                    
                        </div> */}
                        {/* <!-- Card Section End --> */}
                        {/* <!-- Card Section Start --> */}
                        {/* <div className="border-top p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                            Agency Groups
                          </h4>
                       
                          <div className="w-100">
                            <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                              <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                                <img src={imgB3} alt="" />
                              </div>
                              <div className="w-100 mt-n2">
                                <h3 className="mb-0">
                                  <Link href="/#">
                                    <a className="font-size-6 text-black-2">
                                      Masters in Art Design
                                    </a>
                                  </Link>
                                </h3>
                                <Link href="/#">
                                  <a className="font-size-4 text-default-color line-height-2">
                                    Harvard University
                                  </a>
                                </Link>
                                <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                                  <Link href="/#">
                                    <a className="font-size-3 text-gray mr-5">
                                      Jun 2017 - April 2020- 3 years
                                    </a>
                                  </Link>
                                  <Link href="/#">
                                    <a className="font-size-3 text-gray">
                                      <span
                                        className="mr-4"
                                        css={`
                                          margin-top: -2px;
                                        `}
                                      >
                                        <img src={imgL} alt="" />
                                      </span>
                                      Brylin, USA
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                     
                        </div> */}
                        {/* <!-- Card Section End --> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="two">
                        {/* <!-- Excerpt Start --> */}
                        <div className="pr-xl-11 p-5 pl-xs-12 pt-9 pb-11">
                          <form action="/">
                            <div className="row">
                              {/* <div className="col-12 mb-7">
                                <label
                                  htmlFor="name3"
                                  className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                >
                                  Your Name
                                </label>
                                <input
                                  id="name3"
                                  type="text"
                                  className="form-control"
                                  placeholder="Jhon Doe"
                                />
                              </div> */}
                              {/* <div className="col-lg-6 mb-7">
                                <label
                                  htmlFor="email3"
                                  className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                >
                                  E-mail
                                </label>
                                <input
                                  id="email3"
                                  type="email"
                                  className="form-control"
                                  placeholder="example@gmail.com"
                                />
                              </div> */}
                              <div className="col-lg-6 mb-7">
                                <label
                                  htmlFor="subject3"
                                  className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                >
                                  Subject
                                </label>
                                <input
                                  id="subject3"
                                  type="text"
                                  className="form-control"
                                  placeholder="Special contract"
                                />
                              </div>
                              <div className="col-lg-12 mb-7">
                                <label
                                  htmlFor="message3"
                                  className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                >
                                  Message
                                </label>
                                <textarea
                                  name="message"
                                  id="message3"
                                  placeholder="Type your message"
                                  className="form-control h-px-144"
                                ></textarea>
                              </div>
                              <div className="col-lg-12 pt-4">
                                <button className="btn btn-primary text-uppercase w-100 h-px-48">
                                  Send Now
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        {/* <!-- Excerpt End --> */}
                      </Tab.Pane>
                    </Tab.Content>
                    {/* <!-- Tab Content End --> */}
                    {/* <!-- Tab Section End --> */}
                  </div>
                </Tab.Container>
              </div>
              {/* <!-- Middle Content --> */}
              {/* <!-- Right Sidebar Start --> */}
              <div className="col-12 col-xxl-3 col-md-4 offset-xxl-0 offset-lg-4 offset-md-5 order-3 order-xl-2 mt-xxl-0 mt-md-12">
                <div className="pl-lg-5">
                  <h4 className="font-size-6 font-weight-semibold mb-0">
                    Other Agents
                  </h4>
                  <ul className="list-unstyled">
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link href="/#">
                        <a className="media align-items-center py-9 flex-wrap">
                          <div className="mr-7">
                            <img
                              className="square-72 rounded-3"
                              src={imgT1}
                              alt=""
                            />
                          </div>
                          <div className="">
                            <h4 className="mb-0 font-size-5 font-weight-semibold">
                              David Herison
                            </h4>
                            <p className="mb-0 font-size-3 heading-default-color">
                              ABC Consulting
                            </p>
                            <span className="font-size-3 text-smoke">
                              <img className="mr-2" src={imgL} alt="" />
                              New York, USA
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link href="/#">
                        <a className="media align-items-center py-9 flex-wrap">
                          <div className="mr-7">
                            <img
                              className="square-72 rounded-3"
                              src={imgT2}
                              alt=""
                            />
                          </div>
                          <div className="">
                            <h4 className="mb-0 font-size-5 font-weight-semibold">
                              Mark Zanitos
                            </h4>
                            <p className="mb-0 font-size-3 heading-default-color">
                              Gro fast Consulting
                            </p>
                            <span className="font-size-3 text-smoke">
                              <img className="mr-2" src={imgL} alt="" />
                              New York, USA
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link href="/#">
                        <a className="media align-items-center py-9 flex-wrap">
                          <div className="mr-7">
                            <img
                              className="square-72 rounded-3"
                              src={imgT3}
                              alt=""
                            />
                          </div>
                          <div className="">
                            <h4 className="mb-0 font-size-5 font-weight-semibold">
                              Anna Frankin
                            </h4>
                            <p className="mb-0 font-size-3 heading-default-color">
                              Visualize Consulting
                            </p>
                            <span className="font-size-3 text-smoke">
                              <img className="mr-2" src={imgL} alt="" />
                              New York, USA
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link href="/#">
                        <a className="media align-items-center py-9 flex-wrap">
                          <div className="mr-7">
                            <img
                              className="square-72 rounded-3"
                              src={imgT4}
                              alt=""
                            />
                          </div>
                          <div className="">
                            <h4 className="mb-0 font-size-5 font-weight-semibold">
                              Jhony Vino
                            </h4>
                            <p className="mb-0 font-size-3 heading-default-color">
                              Study Abroad ABC
                            </p>
                            <span className="font-size-3 text-smoke">
                              <img className="mr-2" src={imgL} alt="" />
                              New York, USA
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="">
                      <Link href="/#">
                        <a className="media align-items-center py-9 flex-wrap">
                          <div className="mr-7">
                            <img
                              className="square-72 rounded-3"
                              src={imgT5}
                              alt=""
                            />
                          </div>
                          <div className="">
                            <h4 className="mb-0 font-size-5 font-weight-semibold">
                              Aniasta Hemberg
                            </h4>
                            <p className="mb-0 font-size-3 heading-default-color">
                              GIC Consulting
                            </p>
                            <span className="font-size-3 text-smoke">
                              <img className="mr-2" src={imgL} alt="" />
                              New York, USA
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                  </ul>
                </div>
              </div>
              {/* <!-- Right Sidebar End --> */}
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default CandidateProfile;
