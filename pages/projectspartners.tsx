import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import styles from "./projectspartners.module.css";

const Projectspartners: NextPage = () => {
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
    router.push("/");
  }, [router]);

  const onFrameButton1Click = useCallback(() => {
    router.push("/");
  }, [router]);

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
      <div className={styles.projectspartners}>
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
                    src="/logo7@2x.png"
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
                  className={styles.clientspartners}
                  onClick={onClientspartnersClick}
                >
                  <div
                    className={styles.linkPricing}
                  >{`Clients & Partners`}</div>
                  <img
                    className={styles.clientspartnersChild}
                    alt=""
                    src="/line-1@2x.png"
                  />
                </button>
                <button className={styles.media} onClick={onMediaClick}>
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
                    src="/logo7@2x.png"
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
                    src="/logo7@2x.png"
                  />
                </div>
              </div>
              <div className={styles.rightnavlink2}>
                <div className={styles.handburger1} onClick={openDrwawerMenu1}>
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
                    src="/logo8@2x.png"
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
                <div className={styles.handburger1} onClick={openDrwawerMenu2}>
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
                    src="/logo9@2x.png"
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
        <div className={styles.ourprojectframeParent}>
          <div className={styles.ourprojectframe} data-animate-on-scroll>
            <div className={styles.opf1}>
              <b className={styles.ourProjects}>Our Projects</b>
              <div className={styles.theNationssBest}>
                The nations’s best digital Agric Platform
              </div>
            </div>
            <div className={styles.projectArrow}>
              <img
                className={styles.projectArrowChild}
                alt=""
                src="/frame-1210.svg"
              />
              <div className={styles.navigation}>
                <div className={styles.divider} />
              </div>
            </div>
            <section className={styles.opf2} data-animate-on-scroll>
              <img className={styles.opf2Child} alt="" src="/vector-23.svg" />
              <img className={styles.opf2Item} alt="" src="/vector-23.svg" />
              <div className={styles.frameParent}>
                <div className={styles.nationwideParent}>
                  <div className={styles.nationwide}>@Nationwide</div>
                  <img className={styles.baseIcon} alt="" src="/base@2x.png" />
                  <div className={styles.aFlagshipProgram}>
                    A flagship program of the MoFA(Ghana) that used
                    Agrospectrum’s mobile application provide input Subsidy to
                    farmers.
                  </div>
                  <div className={styles.groupWrapper}>
                    <div className={styles.block1Parent}>
                      <div className={styles.block1Parent}>
                        <div className={styles.rectangle} />
                      </div>
                      <div className={styles.eSubsidy}>{`E-Subsidy `}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.nationwideGroup}>
                    <div className={styles.nationwide1}>@nationwide</div>
                    <img
                      className={styles.baseIcon}
                      alt=""
                      src="/base@2x.png"
                    />
                    <div className={styles.aCreditProgramContainer}>
                      <span
                        className={styles.aCreditProgram}
                      >{`A credit program spearheaded by `}</span>
                      <span className={styles.mayAndLotte}>May and Lotte,</span>
                      <span className={styles.aCreditProgram}>
                        {" "}
                        leveraged our cutting-edge solutions at the crucial
                        redemption stage for a streamlined process.
                      </span>
                    </div>
                    <div className={styles.groupContainer}>
                      <div className={styles.block1Group}>
                        <div className={styles.block1Group}>
                          <div className={styles.rectangle1} />
                        </div>
                        <div
                          className={styles.inputCreditMgt}
                        >{`Input Credit Mgt. `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.nationwideContainer}>
                  <div className={styles.nationwide2}>@Nationwide</div>
                  <img className={styles.baseIcon2} alt="" src="/base@2x.png" />
                  <div
                    className={styles.imagineAFuture}
                  >{`Imagine a future of digitization of the agribusiness were reliable technology become your allies for informed decision making `}</div>
                  <div className={styles.groupFrame}>
                    <div className={styles.block1Parent}>
                      <div className={styles.block1Parent}>
                        <div className={styles.rectangle} />
                      </div>
                      <div className={styles.farmerKyc}>FARMER KYC</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.nationwideGroup}>
                    <div className={styles.savanna}>@Savanna</div>
                    <img
                      className={styles.baseIcon}
                      alt=""
                      src="/base@2x.png"
                    />
                    <div className={styles.runByOurContainer}>
                      <p className={styles.runByOurClientsMayAndLot}>
                        <span
                          className={styles.runByOur}
                        >{`Run by our clients `}</span>
                        <span className={styles.mayAndLotte1}>
                          May and Lotte,
                        </span>
                        <span className={styles.aCreditProgram}>
                          {" "}
                          employed solutions from Agrospectum to streamline
                          purchases and payments for the aggregated commodities.
                        </span>
                      </p>
                    </div>
                    <div className={styles.frameDiv}>
                      <div className={styles.groupDiv}>
                        <div className={styles.groupDiv}>
                          <div className={styles.rectangle3} />
                        </div>
                        <div className={styles.aggregationProgram}>
                          Aggregation Program
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.nationwideParent}>
                  <div className={styles.northernGhana}>@Northern Ghana</div>
                  <img className={styles.baseIcon} alt="" src="/base@2x.png" />
                  <div className={styles.anEnumerationProgram}>
                    An enumeration program by the Government of Ghana through
                    the Ministry of Food and Agriculture that profiles farmers
                    for inclusion.
                  </div>
                  <div className={styles.projectCardInner}>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.farmerRegistrationWrapper}>
                        <div
                          className={styles.farmerRegistration}
                        >{`Farmer Registration   `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.nationwideContainer}>
                  <div className={styles.nationwide3}>@Nationwide</div>
                  <img className={styles.baseIcon} alt="" src="/base@2x.png" />
                  <div
                    className={styles.ourClimateSmartSolution}
                  >{`Our climate-smart solution empowers farmers across languages with vital information like weather forecasts, disaster preparedness & agro-advice.`}</div>
                  <div className={styles.groupWrapper1}>
                    <div className={styles.block1Parent1}>
                      <div className={styles.block1Parent1}>
                        <div className={styles.rectangle4} />
                      </div>
                      <div className={styles.climateSmartProgram}>
                        Climate Smart Program
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div
            className={styles.theRenownCompaniesThatTrusParent}
            data-animate-on-scroll
          >
            <div className={styles.theRenownCompaniesContainer}>
              <span>{`The renown companies that `}</span>
              <span className={styles.trustUs}>Trust Us</span>
            </div>
            <section className={styles.frameSection} id="partners_logos">
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <section className={styles.download5Parent}>
                    <img
                      className={styles.download5Icon}
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className={styles.download3Icon}
                      alt=""
                      src="/download-3@2x.png"
                    />
                  </section>
                  <section className={styles.captureParent}>
                    <img
                      className={styles.captureIcon}
                      alt=""
                      src="/capture@2x.png"
                    />
                    <img
                      className={styles.download6Icon}
                      alt=""
                      src="/download-6@2x.png"
                    />
                  </section>
                </div>
                <section className={styles.frameParent3}>
                  <section className={styles.download5Group}>
                    <img
                      className={styles.download5Icon1}
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className={styles.download2Icon}
                      alt=""
                      src="/download-2@2x.png"
                    />
                    <img
                      className={styles.imagesIcon}
                      alt=""
                      src="/images@2x.png"
                    />
                  </section>
                  <section className={styles.download1Parent}>
                    <img
                      className={styles.download1Icon}
                      alt=""
                      src="/download-1@2x.png"
                    />
                    <img
                      className={styles.images1Icon}
                      alt=""
                      src="/images-1@2x.png"
                    />
                    <div className={styles.agromiteParent}>
                      <div className={styles.agromite}>AGROMITE</div>
                      <img
                        className={styles.downloadIcon}
                        alt=""
                        src="/download@2x.png"
                      />
                    </div>
                  </section>
                </section>
                <section className={styles.mofaColorWrapper}>
                  <img
                    className={styles.mofaColorIcon}
                    alt=""
                    src="/mofa-color@2x.png"
                  />
                </section>
              </div>
            </section>
          </div>
        </div>
        <div className={styles.footerlogo}>
          <div className={styles.partnersBanner}>
            <div className={styles.partnerLogosParent}>
              <div className={styles.partnerLogos}>
                <img
                  className={styles.download2Icon1}
                  alt=""
                  src="/download-2@2x.png"
                />
                <img
                  className={styles.download5Icon2}
                  alt=""
                  src="/download-5@2x.png"
                />
                <img
                  className={styles.downloadIcon1}
                  alt=""
                  src="/download@2x.png"
                />
                <img
                  className={styles.download5Icon3}
                  alt=""
                  src="/download-5@2x.png"
                />
                <img
                  className={styles.download3Icon1}
                  alt=""
                  src="/download-3@2x.png"
                />
                <img
                  className={styles.captureIcon1}
                  alt=""
                  src="/capture@2x.png"
                />
                <img
                  className={styles.mofaColorIcon1}
                  alt=""
                  src="/mofa-color@2x.png"
                />
                <img
                  className={styles.imagesIcon1}
                  alt=""
                  src="/images@2x.png"
                />
                <img
                  className={styles.download6Icon1}
                  alt=""
                  src="/download-6@2x.png"
                />
                <img
                  className={styles.images1Icon1}
                  alt=""
                  src="/images-1@2x.png"
                />
                <img
                  className={styles.download1Icon1}
                  alt=""
                  src="/download-1@2x.png"
                />
              </div>
              <div className={styles.partnerLogos1}>
                <img
                  className={styles.download2Icon1}
                  alt=""
                  src="/download-2@2x.png"
                />
                <img
                  className={styles.download5Icon2}
                  alt=""
                  src="/download-5@2x.png"
                />
                <img
                  className={styles.downloadIcon1}
                  alt=""
                  src="/download@2x.png"
                />
                <img
                  className={styles.download5Icon3}
                  alt=""
                  src="/download-5@2x.png"
                />
                <img
                  className={styles.download3Icon1}
                  alt=""
                  src="/download-3@2x.png"
                />
                <img
                  className={styles.captureIcon1}
                  alt=""
                  src="/capture@2x.png"
                />
                <img
                  className={styles.mofaColorIcon1}
                  alt=""
                  src="/mofa-color@2x.png"
                />
                <img
                  className={styles.imagesIcon1}
                  alt=""
                  src="/images@2x.png"
                />
                <img
                  className={styles.download6Icon1}
                  alt=""
                  src="/download-6@2x.png"
                />
                <img
                  className={styles.images1Icon1}
                  alt=""
                  src="/images-1@2x.png"
                />
                <img
                  className={styles.download1Icon1}
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
                    className={styles.runByOurClientsMayAndLot}
                  >{`Transform your agricultural practices and `}</p>
                  <p className={styles.runByOurClientsMayAndLot}>
                    <span className={styles.cultivateSuccessWith}>
                      cultivate success with
                    </span>
                    <b className={styles.cultivateSuccessWith}>
                      {" "}
                      industry's best
                    </b>
                    <span>—empowering farmers, streamlining operations,</span>
                  </p>
                  <p className={styles.runByOurClientsMayAndLot}>
                    <span>{`and fostering a connected `}</span>
                    <b className={styles.cultivateSuccessWith}>
                      global community
                    </b>
                  </p>
                </div>
              </div>
              <button
                className={styles.transformInner}
                onClick={onFrameButtonClick}
                data-animate-on-scroll
              >
                <button
                  className={styles.getInTouchWrapper}
                  onClick={onFrameButton1Click}
                >
                  <div className={styles.getInTouch}>GET IN TOUCH</div>
                </button>
              </button>
            </div>
            <div className={styles.frameParent4}>
              <div className={styles.frameParent5}>
                <div className={styles.nowWereParent}>
                  <div className={styles.nowWere2}>business</div>
                  <div className={styles.frameParent6}>
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
                    <div className={styles.nowWereWrapper3}>
                      <b className={styles.nowWere6}>PARTNERS</b>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent7}>
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
              <div className={styles.frameParent8}>
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
            <div className={styles.frameParent9}>
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

export default Projectspartners;
