import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import styles from "./about-u-s-page.module.css";

const AboutUSPage: NextPage = () => {
  const router = useRouter();
  const [isDrwawerMenuOpen, setDrwawerMenuOpen] = useState(false);
  const [isDrwawerMenu1Open, setDrwawerMenu1Open] = useState(false);
  const [isDrwawerMenu2Open, setDrwawerMenu2Open] = useState(false);
  const [isDrwawerMenu3Open, setDrwawerMenu3Open] = useState(false);

  const onClipPathGroupClick = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup1Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup2Click = useCallback(() => {
    window.open("https://sfl.com.gh/");
  }, []);

  const onHomeCContainerClick = useCallback(() => {
    router.push("/homepage");
  }, [router]);

  const onLinkAboutClick = useCallback(() => {
    window.open(
      "https://www.figma.com/proto/ymjBOyJAg9AcGffejgsKEs/agrospectrum_v1.1?type=design&node-id=333-397&t=2kfRSIykcEIvJooL-0&scaling=scale-down-width&page-id=333%3A395&starting-point-node-id=333%3A397&show-proto-sidebar=1&hide-ui=1"
    );
  }, []);

  const onAboutUsClick = useCallback(() => {
    router.push("/about-u-s-page");
  }, [router]);

  const onProducAndServicesClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onClientspartnersClick = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

  const onMediaClick = useCallback(() => {
    router.push("/media");
  }, [router]);

  const onContactUsContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onClipPathGroup3Click = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup12Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup22Click = useCallback(() => {
    window.open("https://sfl.com.gh/");
  }, []);

  const openDrwawerMenu = useCallback(() => {
    setDrwawerMenuOpen(true);
  }, []);

  const closeDrwawerMenu = useCallback(() => {
    setDrwawerMenuOpen(false);
  }, []);

  const onClipPathGroup4Click = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup13Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup23Click = useCallback(() => {
    window.open("https://sfl.com.gh/");
  }, []);

  const openDrwawerMenu1 = useCallback(() => {
    setDrwawerMenu1Open(true);
  }, []);

  const closeDrwawerMenu1 = useCallback(() => {
    setDrwawerMenu1Open(false);
  }, []);

  const onClipPathGroup5Click = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup14Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup24Click = useCallback(() => {
    window.open("https://sfl.com.gh/");
  }, []);

  const openDrwawerMenu2 = useCallback(() => {
    setDrwawerMenu2Open(true);
  }, []);

  const closeDrwawerMenu2 = useCallback(() => {
    setDrwawerMenu2Open(false);
  }, []);

  const onClipPathGroup6Click = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup15Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup25Click = useCallback(() => {
    window.open("https://sfl.com.gh/");
  }, []);

  const openDrwawerMenu3 = useCallback(() => {
    setDrwawerMenu3Open(true);
  }, []);

  const closeDrwawerMenu3 = useCallback(() => {
    setDrwawerMenu3Open(false);
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButtonClick = useCallback(() => {
    window.location.href = "https://bsl.com.gh/about/management";
  }, []);

  const onNowWereTextClick = useCallback(() => {
    // Please sync "5-careers" to the project
  }, []);

  const onArrowIconClick = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onNowWereContainerClick = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  return (
    <>
      <div className={styles.aboutusPage}>
        <section className={styles.herosec} id="aboutUs_herosection">
          <div className={styles.allnavs}>
            <nav className={styles.navdesktop} id="navBar">
              <div className={styles.logorightnavlink}>
                <div className={styles.logoasset}>
                  <button className={styles.arrowframe}>
                    <div
                      className={styles.oursubsidiarylogos}
                      id="ourSubsidiaries"
                    >
                      <img
                        className={styles.clipPathGroup}
                        alt=""
                        src="/clip-path-group.svg"
                        onClick={onClipPathGroupClick}
                      />
                      <img
                        className={styles.clipPathGroup1}
                        alt=""
                        src="/clip-path-group@2x.png"
                        onClick={onClipPathGroup1Click}
                      />
                      <img
                        className={styles.clipPathGroup2}
                        alt=""
                        src="/clip-path-group@2x.png"
                        onClick={onClipPathGroup2Click}
                      />
                      <img
                        className={styles.oursubsidiarylogosChild}
                        alt=""
                        src="/group-939.svg"
                      />
                    </div>
                    <img
                      className={styles.images21}
                      alt=""
                      src="/images-2-1@2x.png"
                    />
                  </button>
                  <div className={styles.lgoframe}>
                    <img
                      className={styles.logoIcon}
                      id="logo"
                      alt=""
                      src="/logo@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.rightnavlink}>
                  <div className={styles.homec} onClick={onHomeCContainerClick}>
                    <button className={styles.linkAbout}>
                      <div
                        className={styles.linkAbout1}
                        onClick={onLinkAboutClick}
                      >
                        Home
                      </div>
                    </button>
                    <img
                      className={styles.homecChild}
                      alt=""
                      src="/line-1@2x.png"
                    />
                  </div>
                  <button className={styles.aboutus} onClick={onAboutUsClick}>
                    <div className={styles.linkPricing}>About Us</div>
                    <img
                      className={styles.aboutusChild}
                      alt=""
                      src="/line-1@2x.png"
                    />
                  </button>
                  <button
                    className={styles.producAndServices}
                    onClick={onProducAndServicesClick}
                  >
                    <div
                      className={styles.linkPricing}
                    >{`Product & Services`}</div>
                  </button>
                  <button
                    className={styles.producAndServices}
                    onClick={onClientspartnersClick}
                  >
                    <div
                      className={styles.linkPricing}
                    >{`Clients & Partners`}</div>
                  </button>
                  <button
                    className={styles.producAndServices}
                    onClick={onMediaClick}
                  >
                    <div className={styles.linkPricing3}>Media</div>
                  </button>
                  <button
                    className={styles.contactusContainer}
                    onClick={onContactUsContainerClick}
                  >
                    <div className={styles.contactUs}>Contact Us</div>
                  </button>
                  <div className={styles.handburger}>
                    <div className={styles.handburgerChild} />
                    <div className={styles.handburgerItem} />
                    <div className={styles.handburgerInner} />
                  </div>
                </div>
              </div>
            </nav>
            <nav className={styles.nav} id="navBar">
              <div className={styles.logorightnavlink1}>
                <div className={styles.logoasset}>
                  <button className={styles.arrowframe1}>
                    <div
                      className={styles.oursubsidiarylogos}
                      id="ourSubsidiaries"
                    >
                      <img
                        className={styles.clipPathGroup}
                        alt=""
                        src="/clip-path-group.svg"
                        onClick={onClipPathGroup3Click}
                      />
                      <img
                        className={styles.clipPathGroup1}
                        alt=""
                        src="/clip-path-group@2x.png"
                        onClick={onClipPathGroup12Click}
                      />
                      <img
                        className={styles.clipPathGroup2}
                        alt=""
                        src="/clip-path-group@2x.png"
                        onClick={onClipPathGroup22Click}
                      />
                      <img
                        className={styles.oursubsidiarylogosChild}
                        alt=""
                        src="/group-939.svg"
                      />
                    </div>
                    <img
                      className={styles.images21}
                      alt=""
                      src="/images-2-1@2x.png"
                    />
                  </button>
                  <div className={styles.lgoframe}>
                    <img
                      className={styles.logoIcon}
                      id="logo"
                      alt=""
                      src="/logo@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.rightnavlink1}>
                  <button className={styles.contactusContainer1}>
                    <div className={styles.contactUs1}>Contact Us</div>
                  </button>
                  <div className={styles.handburger1} onClick={openDrwawerMenu}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.rectangleDiv} />
                    <div className={styles.handburgerChild2} />
                  </div>
                </div>
              </div>
            </nav>
            <nav className={styles.nav1} id="navBar">
              <div className={styles.logorightnavlink1}>
                <div className={styles.logoasset}>
                  <button className={styles.arrowframe2}>
                    <div
                      className={styles.oursubsidiarylogos}
                      id="ourSubsidiaries"
                    >
                      <img
                        className={styles.clipPathGroup}
                        alt=""
                        src="/clip-path-group.svg"
                        onClick={onClipPathGroup4Click}
                      />
                      <img
                        className={styles.clipPathGroup1}
                        alt=""
                        src="/clip-path-group@2x.png"
                        onClick={onClipPathGroup13Click}
                      />
                      <img
                        className={styles.clipPathGroup2}
                        alt=""
                        src="/clip-path-group@2x.png"
                        onClick={onClipPathGroup23Click}
                      />
                      <img
                        className={styles.oursubsidiarylogosChild}
                        alt=""
                        src="/group-939.svg"
                      />
                    </div>
                    <img
                      className={styles.images21}
                      alt=""
                      src="/images-2-1@2x.png"
                    />
                  </button>
                  <div className={styles.lgoframe}>
                    <img
                      className={styles.logoIcon}
                      id="logo"
                      alt=""
                      src="/logo@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.rightnavlink2}>
                  <div
                    className={styles.handburger1}
                    onClick={openDrwawerMenu1}
                  >
                    <div className={styles.rectangleDiv} />
                    <div className={styles.rectangleDiv} />
                    <div className={styles.handburgerChild2} />
                  </div>
                  <button className={styles.contactusContainer1}>
                    <div className={styles.contactUs1}>Contact Us</div>
                  </button>
                </div>
              </div>
            </nav>
            <nav className={styles.nav2} id="navBar">
              <div className={styles.logorightnavlink3}>
                <div className={styles.logoasset3}>
                  <div className={styles.lgoframe3}>
                    <img
                      className={styles.logoIcon}
                      id="logo"
                      alt=""
                      src="/logo1@2x.png"
                    />
                  </div>
                  <button className={styles.arrowframe3}>
                    <div
                      className={styles.oursubsidiarylogos3}
                      id="ourSubsidiaries"
                    >
                      <img
                        className={styles.clipPathGroup9}
                        alt=""
                        src="/clip-path-group.svg"
                        onClick={onClipPathGroup5Click}
                      />
                      <img
                        className={styles.clipPathGroup10}
                        alt=""
                        src="/clip-path-group@2x.png"
                        onClick={onClipPathGroup14Click}
                      />
                      <img
                        className={styles.clipPathGroup11}
                        alt=""
                        src="/clip-path-group@2x.png"
                        onClick={onClipPathGroup24Click}
                      />
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group-939.svg"
                      />
                    </div>
                    <img
                      className={styles.images213}
                      alt=""
                      src="/images-2-1@2x.png"
                    />
                  </button>
                </div>
                <div className={styles.rightnavlink3}>
                  <div
                    className={styles.handburger1}
                    onClick={openDrwawerMenu2}
                  >
                    <div className={styles.rectangleDiv} />
                    <div className={styles.rectangleDiv} />
                    <div className={styles.handburgerChild2} />
                  </div>
                </div>
              </div>
            </nav>
            <nav className={styles.nav3} id="navBar">
              <div className={styles.logorightnavlink1}>
                <div className={styles.logoasset4}>
                  <div className={styles.lgoframe4}>
                    <img
                      className={styles.logoIcon}
                      id="logo"
                      alt=""
                      src="/logo2@2x.png"
                    />
                  </div>
                  <button className={styles.arrowframe4}>
                    <div
                      className={styles.oursubsidiarylogos4}
                      id="ourSubsidiaries"
                    >
                      <img
                        className={styles.clipPathGroup12}
                        alt=""
                        src="/clip-path-group.svg"
                        onClick={onClipPathGroup6Click}
                      />
                      <img
                        className={styles.clipPathGroup13}
                        alt=""
                        src="/clip-path-group@2x.png"
                        onClick={onClipPathGroup15Click}
                      />
                      <img
                        className={styles.clipPathGroup14}
                        alt=""
                        src="/clip-path-group@2x.png"
                        onClick={onClipPathGroup25Click}
                      />
                      <img
                        className={styles.oursubsidiarylogosChild1}
                        alt=""
                        src="/group-939.svg"
                      />
                    </div>
                    <img
                      className={styles.images214}
                      alt=""
                      src="/images-2-1@2x.png"
                    />
                  </button>
                </div>
              </div>
              <div className={styles.handburger1} onClick={openDrwawerMenu3}>
                <div className={styles.rectangleDiv} />
                <div className={styles.rectangleDiv} />
                <div className={styles.handburgerChild2} />
              </div>
            </nav>
          </div>
          <div
            className={styles.weAreTransformingAfricanAgWrapper}
            data-animate-on-scroll
          >
            <div
              className={styles.weAreTransformingContainer}
              data-animate-on-scroll
            >
              <span>
                <p className={styles.weAreTransforming}>
                  <span className={styles.weAre}>{`We are `}</span>
                  <span className={styles.transforming}>Transforming</span>
                </p>
                <p className={styles.weAreTransforming}>
                  <span className={styles.transforming}>{` `}</span>
                  <span className={styles.africanAgricultureOne}>
                    {" "}
                    African agriculture, one innovation
                  </span>
                </p>
                <p className={styles.atATime}>{` at a time. `}</p>
              </span>
            </div>
          </div>
        </section>
        <section className={styles.container}>
          <div className={styles.frameParent}>
            <div className={styles.proudlyGhanaianParent}>
              <div className={styles.proudlyGhanaian} data-animate-on-scroll>
                Proudly Ghanaian
              </div>
              <div
                className={styles.agrospectrumLimitedIsALeadWrapper}
                data-animate-on-scroll
              >
                <div className={styles.agrospectrumLimitedIs}>
                  Agrospectrum Limited is a leading force in the agricultural
                  sector, is dedicated to transforming traditional agricultural
                  paradigms and empowering stakeholders across the value chain.
                  With a primary focus on Africa, the company endeavors to
                  create an inclusive marketplace that caters to the diverse
                  needs of farmers, government agencies, financial institutions,
                  and service providers. Through a comprehensive suite of
                  services and innovative solutions, Agrospectrum addresses
                  challenges faced by the sector, facilitating seamless
                  connections between farmers and markets, providing support
                  services for farmer well-being, leveraging technology for
                  informed decision-making, and promoting financial inclusion
                  and access to inputs.
                </div>
              </div>
              <div
                className={styles.agrospectrumsCommitmentExteWrapper}
                data-animate-on-scroll
              >
                <div className={styles.agrospectrumLimitedIs}>
                  <p className={styles.weAreTransforming}></p>
                  <p className={styles.weAreTransforming}>
                    Agrospectrum's commitment extends to sustainability and
                    innovation, emphasizing climate-smart agriculture to help
                    farmers adapt to changing weather patterns. The company
                    employs diverse delivery channels, including SMS, voice
                    messages, and other technological means, to ensure
                    widespread access to its services. In summary, Agrospectrum
                    stands as a catalyst for positive change, connecting futures
                    and reshaping the agricultural landscape with a holistic and
                    inclusive approach that empowers farmers and transforms the
                    sector.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.dronePalceholder} />
          </div>
          <img
            className={styles.droneIcon}
            alt=""
            src="/drone@2x.png"
            data-animate-on-scroll
          />
        </section>
        <section className={styles.leading}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div
                className={styles.leadingTheWayInInnovationWrapper}
                data-animate-on-scroll
              >
                <div
                  className={styles.leadingTheWay}
                >{`Leading the way in Innovation & technology in the Agriculture Space`}</div>
              </div>
              <div className={styles.frameDiv} data-animate-on-scroll>
                <div className={styles.inTheFertileFieldsOfInnovWrapper}>
                  <div className={styles.agrospectrumLimitedIs}>
                    In the fertile fields of innovation, we're sowing the seeds
                    of a smarter, more sustainable future for agriculture. We
                    harness cutting-edge technology to empower every stakeholder
                    – from farmer to financier – nurturing connections,
                    optimizing resources, and unlocking boundless potential.
                    With each bold stride, we lead the way, cultivating a
                    harvest of abundance and prosperity for generations to come.
                  </div>
                </div>
                <div className={styles.cta} data-animate-on-scroll>
                  <div className={styles.getInTouch}>GET IN TOUCH</div>
                </div>
              </div>
            </div>
            <img
              className={styles.unsplashyo5m9vczbcmIcon}
              alt=""
              src="/unsplashyo5m9vczbcm@2x.png"
              data-animate-on-scroll
            />
          </div>
        </section>
        <section className={styles.leadersections}>
          <img
            className={styles.leadersectionsChild}
            alt=""
            src="/vector-26.svg"
          />
          <div className={styles.leaderautolaout}>
            <div className={styles.leadershipteamParent}>
              <div className={styles.leadershipteam} data-animate-on-scroll>
                <h1 className={styles.leadershipTeam} data-animate-on-scroll>
                  Leadership Team
                </h1>
              </div>
              <div className={styles.cardCaurosol}>
                <div className={styles.card1}>
                  <div
                    className={styles.castroDansoTeamWrapper}
                    data-animate-on-scroll
                  >
                    <div className={styles.castroDansoTeam}>
                      <img
                        className={styles.baseIcon}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.castroDansoTeamInner}>
                        <div className={styles.frameWrapper}>
                          <div className={styles.block1Parent}>
                            <div className={styles.block1}>
                              <div className={styles.rectangle} />
                            </div>
                            <div className={styles.frameParent1}>
                              <div className={styles.razakawudulaiWrapper}>
                                <div className={styles.razakawudulai}>
                                  RazakAwudulai
                                </div>
                              </div>
                              <div className={styles.chiefExecutiveOfficer}>
                                Chief Executive Officer
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.razakIsAn} data-animate-on-scroll>
                    Razak is an accomplished business leader with 20+ years of
                    experience in creating enabling environments and building
                    high-performance teams. He is passionate about the
                    technology ecosystem and has helped to grow many tech
                    businesses both in the public and private sectors globally.
                    More specifically, he has extensive experience working with
                    and helping to provide unique and innovative digital
                    solutions to boost Africa’s digital economy.
                  </div>
                </div>
                <div className={styles.card2}>
                  <div className={styles.mrRazakWrapper} data-animate-on-scroll>
                    <div className={styles.mrRazak}>
                      <img
                        className={styles.baseIcon1}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.mrRazakInner}>
                        <div className={styles.groupDiv}>
                          <div className={styles.frameWrapper1}>
                            <div className={styles.block1Group}>
                              <div className={styles.block1}>
                                <div className={styles.rectangle} />
                              </div>
                              <div className={styles.frameParent2}>
                                <div className={styles.nanaBDwemohWrapper}>
                                  <div className={styles.nanaBDwemoh}>
                                    Nana B. Dwemoh
                                  </div>
                                </div>
                                <div className={styles.chairman}>Chairman</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.card2Inner} data-animate-on-scroll>
                    <div
                      className={styles.nanaHas20YearsOfLocalAnWrapper}
                      data-animate-on-scroll
                    >
                      <div className={styles.nanaHas20}>
                        Nana has 20+ years of local and international expertise
                        in banking in various management roles across several
                        countries in Africa and the UK. Nana has successfully
                        led the team in significantly growing market share and
                        profitability across the Bank’s Personal and Business
                        Banking franchises. In January 2021, Nana was appointed
                        Managing Director of UMB Bank
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className={styles.getInTouchWrapper}
                onClick={onFrameButtonClick}
                data-animate-on-scroll
              >
                <div className={styles.getInTouch1}>See Full Team</div>
              </button>
            </div>
          </div>
        </section>
        <section
          className={styles.containerOursubsidiar}
          id="AboutUS_ourSubsidiaries"
          data-animate-on-scroll
        >
          <div className={styles.frameParent3}>
            <div className={styles.frameParent4} data-animate-on-scroll>
              <div className={styles.ourSubaidiariesWrapper}>
                <h2
                  className={styles.ourSubaidiaries}
                  id="ourSubsidiaries_h2"
                  data-animate-on-scroll
                >
                  Our Subaidiaries
                </h2>
              </div>
              <p
                className={styles.broadspectrumPridesItselfInWrapper}
                id="paragrapgh"
              >
                <span
                  className={styles.broadspectrumPridesItself}
                  data-animate-on-scroll
                >
                  Broadspectrum prides itself in carrying out its mandate
                  through its various subsidiaries. With our qualified team of
                  experts, we offer you a full circle service experience with
                  the synergy of our subsidiaries in communication,
                  connectivity, and application software.
                </span>
              </p>
            </div>
            <div className={styles.instanceWrapper} data-animate-on-scroll>
              <div className={styles.bslMain1Parent}>
                <img
                  className={styles.bslMain1Icon}
                  alt=""
                  src="/bslmain-1@2x.png"
                />
                <div className={styles.broadspectrumLimitedIs}>
                  Broadspectrum Limited is a Ghanaian information and
                  communication technology company that plays a key role in the
                  technological industry. Broadspectrum has partnered with GCB
                  Bank Limited to launch the first bank-backed mobile money
                  service (G- Money) in Ghana.
                </div>
                <button className={styles.getInTouchContainer}>
                  <h3 className={styles.getInTouch2} data-animate-on-scroll>
                    Learn More
                  </h3>
                </button>
              </div>
            </div>
            <div className={styles.spectrumMain1Parent} data-animate-on-scroll>
              <img
                className={styles.spectrumMain1Icon}
                alt=""
                src="/spectrummain-1@2x.png"
              />
              <div className={styles.broadspectrumLimitedIs}>
                <p className={styles.weAreTransforming}>
                  Connecting you at the speed of light
                </p>
                <p className={styles.weAreTransforming}>
                  SFL has deployed and runs the second largest and most
                  extensive nonpareil fibre optic backbone network in Ghana
                  (+4000 Km).
                </p>
                <p className={styles.weAreTransforming}>
                  We are exclusively the backbone Fibre infrastructure the
                  Western Region and have 4000+km of Fibre optic cable
                </p>
              </div>
              <button className={styles.getInTouchFrame}>
                <h3 className={styles.getInTouch3} data-animate-on-scroll>
                  Learn More
                </h3>
              </button>
            </div>
            <div className={styles.frameWrapper2} data-animate-on-scroll>
              <div className={styles.instanceContainer}>
                <div className={styles.isgMain1Parent}>
                  <img
                    className={styles.isgMain1Icon}
                    alt=""
                    src="/isgmain-1@2x.png"
                  />
                  <div className={styles.broadspectrumLimitedIs}>
                    <p
                      className={styles.weAreTransforming}
                    >{`A well-resourced infrastructure service provider in IE & Telecoms
`}</p>
                    <p className={styles.weAreTransforming}>
                      Infra Services Ghana Ltd (ISG) is an infrastructure
                      service company providing logistic, deployment,
                      maintenance, and support services in the power,
                      telecommunication, and mining support service sectors of
                      Ghana. The services of ISG are internally leveraged by all
                      affiliates for efficiency and control. Our Services
                      include:
                    </p>
                    <p className={styles.weAreTransforming}>
                      - Fiber infrastructure Deployment
                    </p>
                    <p className={styles.weAreTransforming}>
                      - Microwave Radio Deployment
                    </p>
                    <p className={styles.weAreTransforming}>
                      - LAN infrastructure deployments
                    </p>
                    <p className={styles.weAreTransforming}>
                      - Data Centre build and management
                    </p>
                    <p className={styles.weAreTransforming}>
                      - Service Maintenance and Support
                    </p>
                  </div>
                  <button className={styles.frameButton}>
                    <h3 className={styles.getInTouch4}>Learn More</h3>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.bdpMain1Parent} data-animate-on-scroll>
              <img
                className={styles.bdpMain1Icon}
                alt=""
                src="/bdpmain-1@2x.png"
              />
              <div className={styles.broadspectrumLimitedIs}>
                <p
                  className={styles.weAreTransforming}
                >{`Fully integrated enhanced EPS provider with a 3-tier solution in EMI, Switching and UPG Broadspectrum Digital Payment Ltd (BDP) is an enhanced payment services provider and is licensed and regulated by the Central Bank of Ghana. BDP has deployed a 3- tier electronic solution covering payments, financial transactions switching and Electronic Money issuing solutions. BDP products offerings include Issuance of Electronic Wallets, Digital Banking, utility services, Remittances `}</p>
                <p
                  className={styles.weAreTransforming}
                >{`– Send and receive Cash, Airtime, and Internet Data top-up, Utility/Bill pay, Bank Direct `}</p>
                <p
                  className={styles.weAreTransforming}
                >{`–Bank 2 Wallet, Wallet 2 Bank, Bulk payment processing. B2B Payment Solutions development & Build `}</p>
                <p
                  className={styles.weAreTransforming}
                >{`– Apps and USSD solutions. `}</p>
                <p
                  className={styles.weAreTransforming}
                >{`BDP has deployed the widest power revenue collection application for the Northern Electricity Development `}</p>
                <p className={styles.weAreTransforming}>
                  Company covering Nine (9) regions of Ghana and serving over
                  1.5 million households.
                </p>
              </div>
              <button className={styles.getInTouchWrapper1}>
                <h3 className={styles.getInTouch5}>Learn More</h3>
              </button>
            </div>
          </div>
        </section>
        <div className={styles.footerlogo} data-animate-on-scroll>
          <div className={styles.partnersBanner}>
            <div className={styles.partnerLogosParent}>
              <div className={styles.partnerLogos}>
                <img
                  className={styles.download2Icon}
                  alt=""
                  src="/download-2@2x.png"
                />
                <img
                  className={styles.download5Icon}
                  alt=""
                  src="/download-5@2x.png"
                />
                <img
                  className={styles.downloadIcon}
                  alt=""
                  src="/download@2x.png"
                />
                <img
                  className={styles.download5Icon1}
                  alt=""
                  src="/download-5@2x.png"
                />
                <img
                  className={styles.download3Icon}
                  alt=""
                  src="/download-3@2x.png"
                />
                <img
                  className={styles.captureIcon}
                  alt=""
                  src="/capture@2x.png"
                />
                <img
                  className={styles.mofaColorIcon}
                  alt=""
                  src="/mofa-color@2x.png"
                />
                <img
                  className={styles.imagesIcon}
                  alt=""
                  src="/images@2x.png"
                />
                <img
                  className={styles.download6Icon}
                  alt=""
                  src="/download-6@2x.png"
                />
                <img
                  className={styles.images1Icon}
                  alt=""
                  src="/images-1@2x.png"
                />
                <img
                  className={styles.download1Icon}
                  alt=""
                  src="/download-1@2x.png"
                />
              </div>
              <div className={styles.partnerLogos1}>
                <img
                  className={styles.download2Icon}
                  alt=""
                  src="/download-2@2x.png"
                />
                <img
                  className={styles.download5Icon}
                  alt=""
                  src="/download-5@2x.png"
                />
                <img
                  className={styles.downloadIcon}
                  alt=""
                  src="/download@2x.png"
                />
                <img
                  className={styles.download5Icon1}
                  alt=""
                  src="/download-5@2x.png"
                />
                <img
                  className={styles.download3Icon}
                  alt=""
                  src="/download-3@2x.png"
                />
                <img
                  className={styles.captureIcon}
                  alt=""
                  src="/capture@2x.png"
                />
                <img
                  className={styles.mofaColorIcon}
                  alt=""
                  src="/mofa-color@2x.png"
                />
                <img
                  className={styles.imagesIcon}
                  alt=""
                  src="/images@2x.png"
                />
                <img
                  className={styles.download6Icon}
                  alt=""
                  src="/download-6@2x.png"
                />
                <img
                  className={styles.images1Icon}
                  alt=""
                  src="/images-1@2x.png"
                />
                <img
                  className={styles.download1Icon}
                  alt=""
                  src="/download-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <div
            className={styles.transformParent}
            id="footercontent"
            data-animate-on-scroll
          >
            <div className={styles.transform}>
              <div className={styles.nowWereWrapper}>
                <div className={styles.nowWere}>TRANSFORM with</div>
              </div>
              <div className={styles.nowWereContainer}>
                <div className={styles.nowWere1}>AGROSPECTRUM</div>
              </div>
              <div className={styles.nuncUltricesTellusWrapper}>
                <div className={styles.nuncUltricesTellusContainer}>
                  <p
                    className={styles.weAreTransforming}
                  >{`Transform your agricultural practices and `}</p>
                  <p className={styles.weAreTransforming}>
                    <span className={styles.cultivateSuccessWith}>
                      cultivate success with
                    </span>
                    <b className={styles.cultivateSuccessWith}>
                      {" "}
                      industry's best
                    </b>
                    <span>—empowering farmers, streamlining operations,</span>
                  </p>
                  <p className={styles.weAreTransforming}>
                    <span>{`and fostering a connected `}</span>
                    <b className={styles.cultivateSuccessWith}>
                      global community
                    </b>
                  </p>
                </div>
              </div>
              <button className={styles.transformInner} data-animate-on-scroll>
                <div className={styles.getInTouchWrapper2}>
                  <div className={styles.getInTouch6}>GET IN TOUCH</div>
                </div>
              </button>
            </div>
            <div className={styles.frameParent5} data-animate-on-scroll>
              <div className={styles.frameParent6}>
                <div className={styles.nowWereParent}>
                  <div className={styles.nowWere2}>business</div>
                  <div className={styles.frameParent7}>
                    <div className={styles.nowWereFrame}>
                      <b
                        className={styles.nowWere3}
                        onClick={onNowWereTextClick}
                      >
                        CAREERS
                      </b>
                    </div>
                    <div className={styles.nowWereFrame}>
                      <b className={styles.nowWere4}>{`ABOUT US `}</b>
                    </div>
                    <div className={styles.nowWereWrapper2}>
                      <b className={styles.nowWere4}>PRIVACY POLICY</b>
                    </div>
                    <div className={styles.ourSubaidiariesWrapper}>
                      <b className={styles.nowWere6}>PARTNERS</b>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent8}>
                  <div className={styles.nowWereGroup}>
                    <div className={styles.nowWere7}>{`CONTACT US `}</div>
                    <div className={styles.nowWere8}>Agrospectrum Ltd.</div>
                  </div>
                  <div className={styles.nowWereParent1}>
                    <div className={styles.nowWere9}>EAST LEGON office</div>
                    <div className={styles.nowWereParent2}>
                      <b className={styles.nowWere10}>No 24 Maseru St</b>
                      <b className={styles.nowWere10}>East Legon,</b>
                      <b className={styles.nowWere10}>Accra - ghana</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent9}>
                <div className={styles.nowWereParent3}>
                  <b className={styles.nowWere13}>BSL HEAD OFFICE</b>
                  <b className={styles.nowWere10}>No 24 Botwe</b>
                  <b className={styles.nowWere10}>Dzorwulu - Accra</b>
                </div>
                <div className={styles.nowWereParent4}>
                  <div className={styles.nowWere16}>TAMALE office</div>
                  <b className={styles.nowWere10}>Tamale.</b>
                  <b className={styles.nowWere18}>16 Dagomba Road,</b>
                </div>
              </div>
            </div>
            <div className={styles.frameParent10}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/arrow-6.svg"
                  onClick={onArrowIconClick}
                />
                <div
                  className={styles.nowWere19}
                  onClick={onNowWereContainerClick}
                >
                  <div className={styles.nowWere20}>GET DIRECTIONS</div>
                </div>
              </div>
              <div className={styles.nowWereParent5}>
                <div className={styles.nowWere21}>
                  <div className={styles.nowWere22}>{`PHONE `}</div>
                </div>
                <b className={styles.nowWere23}>+233(0) 593 808 064</b>
              </div>
              <div className={styles.nowWereParent6}>
                <div className={styles.nowWere24}>
                  <div className={styles.nowWere25}>EMAIL</div>
                </div>
                <div className={styles.nowWere26}>
                  <b className={styles.nowWere27}>customercare@bsl.com.gh</b>
                </div>
              </div>
              <div className={styles.nowWereParent7}>
                <div className={styles.nowWere28}>
                  <div className={styles.nowWere29}>{`FOLLOW US `}</div>
                </div>
                <div className={styles.instagramParent} data-animate-on-scroll>
                  <div className={styles.instagram}>
                    <img
                      className={styles.groupIcon1}
                      alt=""
                      src="/group.svg"
                    />
                  </div>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.frame}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.vectorContainer}>
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {isDrwawerMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeDrwawerMenu}
        >
          <DrwawerMenu onClose={closeDrwawerMenu} />
        </PortalDrawer>
      )}
      {isDrwawerMenu1Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeDrwawerMenu1}
        >
          <DrwawerMenu onClose={closeDrwawerMenu1} />
        </PortalDrawer>
      )}
      {isDrwawerMenu2Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeDrwawerMenu2}
        >
          <DrwawerMenu onClose={closeDrwawerMenu2} />
        </PortalDrawer>
      )}
      {isDrwawerMenu3Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeDrwawerMenu3}
        >
          <DrwawerMenu onClose={closeDrwawerMenu3} />
        </PortalDrawer>
      )}
    </>
  );
};

export default AboutUSPage;
