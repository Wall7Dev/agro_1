import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import styles from "./product-services.module.css";

const ProductServices: NextPage = () => {
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
      <div className={styles.productServices}>
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
                    src="/logo13@2x.png"
                  />
                </div>
              </div>
              <div className={styles.rightnavlink}>
                <div className={styles.homec}>
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
                  <img
                    className={styles.producAndServicesChild}
                    alt=""
                    src="/line-1@2x.png"
                  />
                </button>
                <button
                  className={styles.clientspartners}
                  onClick={onClientspartnersClick}
                >
                  <div
                    className={styles.linkPricing}
                  >{`Clients & Partners`}</div>
                </button>
                <button
                  className={styles.clientspartners}
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
                    src="/logo13@2x.png"
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
                    src="/logo13@2x.png"
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
                    src="/logo14@2x.png"
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
                    src="/logo15@2x.png"
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
        <div className={styles.allherops}>
          <div className={styles.div}>
            <div className={styles.whyWorkWithUs}>
              <img className={styles.bgBlurIcon} alt="" src="/bg-blur.svg" />
              <div className={styles.bgBlur2} />
              <img className={styles.bgBlurIcon1} alt="" src="/bg-blur.svg" />
              <img className={styles.bgBlurIcon2} alt="" src="/bg-blur.svg" />
              <div className={styles.text} />
              <div className={styles.whyWorkCard}>
                <img
                  className={styles.scrollDownIcon}
                  alt=""
                  src="/scroll-down.svg"
                />
                <div className={styles.empoweringFarmersAndUnlockWrapper}>
                  <div className={styles.empoweringFarmersAndContainer}>
                    <span className={styles.empoweringFarmersAndContainer1}>
                      <span className={styles.empowering}>{`Empowering `}</span>
                      <span className={styles.farmers}>Farmers</span>
                      <span className={styles.empowering}>{`, and `}</span>
                      <span className={styles.farmers}>Unlocking Ghana's</span>
                      <span className={styles.empowering}>{` `}</span>
                      <span className={styles.farmers}>Agricultural</span>
                      <span className={styles.empowering}> Potential</span>
                    </span>
                  </div>
                </div>
                <div className={styles.aRevolutionaryDigitalInnoWrapper}>
                  <div
                    className={styles.aRevolutionaryDigital}
                  >{`A revolutionary digital & innovative platform, Agrospectrum connects farmers, traders, processors, and other stakeholders, creating a seamless and efficient agro ecosystem.`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div1}>
            <div className={styles.whyWorkWithUs1}>
              <img className={styles.bgBlurIcon3} alt="" src="/bg-blur.svg" />
              <div className={styles.bigBlur3} />
              <div className={styles.bgBlur21} />
              <img className={styles.bgBlurIcon4} alt="" src="/bg-blur.svg" />
              <img className={styles.bgBlurIcon5} alt="" src="/bg-blur.svg" />
              <div className={styles.text1} />
              <div className={styles.whyWorkCard1}>
                <img
                  className={styles.scrollDownIcon1}
                  alt=""
                  src="/scroll-down.svg"
                />
                <div className={styles.empoweringFarmersAndUnlockContainer}>
                  <div className={styles.empoweringFarmersAndContainer2}>
                    <span className={styles.empoweringFarmersAndContainer1}>
                      <span className={styles.empowering}>{`Empowering `}</span>
                      <span className={styles.farmers}>Farmers</span>
                      <span className={styles.empowering}>{`, and `}</span>
                      <span className={styles.farmers}>Unlocking Ghana's</span>
                      <span className={styles.empowering}>{` `}</span>
                      <span className={styles.farmers}>Agricultural</span>
                      <span className={styles.empowering}> Potential</span>
                    </span>
                  </div>
                </div>
                <div className={styles.aRevolutionaryDigitalInnoContainer}>
                  <div
                    className={styles.aRevolutionaryDigital1}
                  >{`A revolutionary digital & innovative platform, Agrospectrum connects farmers, traders, processors, and other stakeholders, creating a seamless and efficient agro ecosystem.`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div2}>
            <div className={styles.whyWorkWithUs2}>
              <img className={styles.bgBlurIcon6} alt="" src="/bg-blur.svg" />
              <div className={styles.bigBlur31} />
              <div className={styles.bgBlur22} />
              <img className={styles.bgBlurIcon7} alt="" src="/bg-blur.svg" />
              <img className={styles.bgBlurIcon8} alt="" src="/bg-blur.svg" />
              <div className={styles.text2} />
              <div className={styles.whyWorkCard2}>
                <img
                  className={styles.scrollDownIcon2}
                  alt=""
                  src="/scroll-down.svg"
                />
                <div className={styles.empoweringFarmersAndUnlockFrame}>
                  <div className={styles.empoweringFarmersAndContainer4}>
                    <span className={styles.empoweringFarmersAndContainer1}>
                      <span className={styles.empowering}>{`Empowering `}</span>
                      <span className={styles.farmers}>Farmers</span>
                      <span className={styles.empowering}>{`, and `}</span>
                      <span className={styles.farmers}>Unlocking Ghana's</span>
                      <span className={styles.empowering}>{` `}</span>
                      <span className={styles.farmers}>Agricultural</span>
                      <span className={styles.empowering}> Potential</span>
                    </span>
                  </div>
                </div>
                <div className={styles.aRevolutionaryDigitalInnoFrame}>
                  <div
                    className={styles.aRevolutionaryDigital2}
                  >{`A revolutionary digital & innovative platform, Agrospectrum connects farmers, traders, processors, and other stakeholders, creating a seamless and efficient agro ecosystem.`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div3}>
            <div className={styles.whyWorkWithUs3}>
              <img className={styles.bgBlurIcon9} alt="" src="/bg-blur.svg" />
              <div className={styles.bigBlur32} />
              <div className={styles.bgBlur23} />
              <img className={styles.bgBlurIcon10} alt="" src="/bg-blur.svg" />
              <img className={styles.bgBlurIcon11} alt="" src="/bg-blur.svg" />
              <div className={styles.text3} />
              <div className={styles.whyWorkCard3}>
                <img
                  className={styles.scrollDownIcon3}
                  alt=""
                  src="/scroll-down.svg"
                />
                <div className={styles.frameDiv}>
                  <div className={styles.empoweringFarmersAndContainer6}>
                    <span className={styles.empoweringFarmersAndContainer1}>
                      <span className={styles.empowering}>{`Empowering `}</span>
                      <span className={styles.farmers}>Farmers</span>
                      <span className={styles.empowering}>{`, and `}</span>
                      <span className={styles.farmers}>Unlocking Ghana's</span>
                      <span className={styles.empowering}>{` `}</span>
                      <span className={styles.farmers}>Agricultural</span>
                      <span className={styles.empowering}> Potential</span>
                    </span>
                  </div>
                </div>
                <div className={styles.aRevolutionaryDigitalInnoWrapper1}>
                  <div
                    className={styles.aRevolutionaryDigital3}
                  >{`A revolutionary digital & innovative platform, Agrospectrum connects farmers, traders, processors, and other stakeholders, creating a seamless and efficient agro ecosystem.`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subsidiary}>
          <div className={styles.desktopOttis}>
            <div className={styles.desktopOttisInner}>
              <div className={styles.ottisimageParent}>
                <img
                  className={styles.ottisimageIcon}
                  alt=""
                  src="/ottisimage@2x.png"
                />
                <div className={styles.subsidyProgramParent}>
                  <div className={styles.subsidyProgram}>
                    <p className={styles.transformYourAgricultural}>
                      <b className={styles.subsidy}>Subsidy</b>
                      <span className={styles.program}> Program</span>
                    </p>
                  </div>
                  <div className={styles.theSubsidyIs}>
                    The Subsidy is a 7step process; which begins with
                    Registration or on-boarding of farmers who are not already
                    registered in the system, after which there is the
                    establishment of the subsidy rate and allocation to
                    beneficiaries.
                  </div>
                  <div className={styles.thereafterAReconciliation}>
                    Thereafter, a reconciliation and settlement system is also
                    established to determine how beneficiaries will get access
                    to the inputs. The subsidy module registers input supply
                    chain members or providers like wholesalers and retailers to
                    track the redemption process.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ottis}>
            <div className={styles.ottisInner}>
              <div className={styles.ottisimageGroup}>
                <img
                  className={styles.ottisimageIcon}
                  alt=""
                  src="/ottisimage@2x.png"
                />
                <div className={styles.subsidyProgramGroup}>
                  <div className={styles.subsidyProgram2}>
                    <p className={styles.transformYourAgricultural}>
                      <b className={styles.subsidy}>Subsidy</b>
                      <span className={styles.program}> Program</span>
                    </p>
                  </div>
                  <div className={styles.theSubsidyIs1}>
                    The Subsidy is a 7step process; which begins with
                    Registration or on-boarding of farmers who are not already
                    registered in the system, after which there is the
                    establishment of the subsidy rate and allocation to
                    beneficiaries.
                  </div>
                  <div className={styles.thereafterAReconciliation1}>
                    Thereafter, a reconciliation and settlement system is also
                    established to determine how beneficiaries will get access
                    to the inputs. The subsidy module registers input supply
                    chain members or providers like wholesalers and retailers to
                    track the redemption process.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ottisChild}>
              <div className={styles.ottisimageContainer}>
                <img
                  className={styles.ottisimageIcon}
                  alt=""
                  src="/ottisimage@2x.png"
                />
                <div className={styles.subsidyProgramContainer}>
                  <div className={styles.subsidyProgram4}>
                    <p className={styles.transformYourAgricultural}>
                      <b className={styles.subsidy}>Subsidy</b>
                      <span className={styles.program}> Program</span>
                    </p>
                  </div>
                  <div className={styles.theSubsidyIs2}>
                    The Subsidy is a 7step process; which begins with
                    Registration or on-boarding of farmers who are not already
                    registered in the system, after which there is the
                    establishment of the subsidy rate and allocation to
                    beneficiaries.
                  </div>
                  <div className={styles.thereafterAReconciliation2}>
                    Thereafter, a reconciliation and settlement system is also
                    established to determine how beneficiaries will get access
                    to the inputs. The subsidy module registers input supply
                    chain members or providers like wholesalers and retailers to
                    track the redemption process.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ottisInner1}>
              <div className={styles.ottisimageParent1}>
                <img
                  className={styles.ottisimageIcon3}
                  alt=""
                  src="/ottisimage@2x.png"
                />
                <div className={styles.subsidyProgramParent1}>
                  <div className={styles.subsidyProgram6}>
                    <p className={styles.transformYourAgricultural}>
                      <b className={styles.subsidy}>Subsidy</b>
                      <span className={styles.program}> Program</span>
                    </p>
                  </div>
                  <div className={styles.theSubsidyIs3}>
                    The Subsidy is a 7step process; which begins with
                    Registration or on-boarding of farmers who are not already
                    registered in the system, after which there is the
                    establishment of the subsidy rate and allocation to
                    beneficiaries.
                  </div>
                  <div className={styles.thereafterAReconciliation3}>
                    Thereafter, a reconciliation and settlement system is also
                    established to determine how beneficiaries will get access
                    to the inputs. The subsidy module registers input supply
                    chain members or providers like wholesalers and retailers to
                    track the redemption process.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ottis1}>
            <div className={styles.ottisInner2}>
              <div className={styles.ottisimageParent2}>
                <img
                  className={styles.ottisimageIcon}
                  alt=""
                  src="/ottisimage@2x.png"
                />
                <div className={styles.subsidyProgramParent2}>
                  <div className={styles.subsidyProgram8}>
                    <p className={styles.transformYourAgricultural}>
                      <b className={styles.subsidy}>Subsidy</b>
                      <span className={styles.program}> Program</span>
                    </p>
                  </div>
                  <div className={styles.theSubsidyIs4}>
                    The Subsidy is a 7step process; which begins with
                    Registration or on-boarding of farmers who are not already
                    registered in the system, after which there is the
                    establishment of the subsidy rate and allocation to
                    beneficiaries.
                  </div>
                  <div className={styles.thereafterAReconciliation4}>
                    Thereafter, a reconciliation and settlement system is also
                    established to determine how beneficiaries will get access
                    to the inputs. The subsidy module registers input supply
                    chain members or providers like wholesalers and retailers to
                    track the redemption process.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ottisInner3}>
              <div className={styles.ottisimageParent3}>
                <img
                  className={styles.ottisimageIcon}
                  alt=""
                  src="/ottisimage@2x.png"
                />
                <div className={styles.subsidyProgramParent3}>
                  <div className={styles.subsidyProgram10}>
                    <p className={styles.transformYourAgricultural}>
                      <b className={styles.subsidy}>Subsidy</b>
                      <span className={styles.program}> Program</span>
                    </p>
                  </div>
                  <div className={styles.theSubsidyIs5}>
                    The Subsidy is a 7step process; which begins with
                    Registration or on-boarding of farmers who are not already
                    registered in the system, after which there is the
                    establishment of the subsidy rate and allocation to
                    beneficiaries.
                  </div>
                  <div className={styles.thereafterAReconciliation5}>
                    Thereafter, a reconciliation and settlement system is also
                    established to determine how beneficiaries will get access
                    to the inputs. The subsidy module registers input supply
                    chain members or providers like wholesalers and retailers to
                    track the redemption process.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ottisInner4}>
              <div className={styles.ottisimageParent4}>
                <img
                  className={styles.ottisimageIcon6}
                  alt=""
                  src="/ottisimage@2x.png"
                />
                <div className={styles.subsidyProgramParent4}>
                  <div className={styles.subsidyProgram12}>
                    <p className={styles.transformYourAgricultural}>
                      <b className={styles.subsidy}>Subsidy</b>
                      <span className={styles.program}> Program</span>
                    </p>
                  </div>
                  <div className={styles.theSubsidyIs6}>
                    The Subsidy is a 7step process; which begins with
                    Registration or on-boarding of farmers who are not already
                    registered in the system, after which there is the
                    establishment of the subsidy rate and allocation to
                    beneficiaries.
                  </div>
                  <div className={styles.thereafterAReconciliation6}>
                    Thereafter, a reconciliation and settlement system is also
                    established to determine how beneficiaries will get access
                    to the inputs. The subsidy module registers input supply
                    chain members or providers like wholesalers and retailers to
                    track the redemption process.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ottis2}>
            <div className={styles.ottisInner5}>
              <div className={styles.ottisimageParent5}>
                <img
                  className={styles.ottisimageIcon7}
                  alt=""
                  src="/ottisimage@2x.png"
                />
                <div className={styles.subsidyProgramParent5}>
                  <div className={styles.subsidyProgram14}>
                    <p className={styles.transformYourAgricultural}>
                      <b className={styles.subsidy}>Subsidy</b>
                      <span className={styles.program}> Program</span>
                    </p>
                  </div>
                  <div className={styles.theSubsidyIs7}>
                    The Subsidy is a 7step process; which begins with
                    Registration or on-boarding of farmers who are not already
                    registered in the system, after which there is the
                    establishment of the subsidy rate and allocation to
                    beneficiaries.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ottisInner6}>
              <div className={styles.ottisimageParent6}>
                <img
                  className={styles.ottisimageIcon}
                  alt=""
                  src="/ottisimage@2x.png"
                />
                <div className={styles.subsidyProgramParent6}>
                  <div className={styles.subsidyProgram16}>
                    <p className={styles.transformYourAgricultural}>
                      <b className={styles.subsidy}>Subsidy</b>
                      <span className={styles.program}> Program</span>
                    </p>
                  </div>
                  <div className={styles.theSubsidyIs6}>
                    The Subsidy is a 7step process; which begins with
                    Registration or on-boarding of farmers who are not already
                    registered in the system, after which there is the
                    establishment of the subsidy rate and allocation to
                    beneficiaries.
                  </div>
                  <div className={styles.thereafterAReconciliation7}>
                    Thereafter, a reconciliation and settlement system is also
                    established to determine how beneficiaries will get access
                    to the inputs. The subsidy module registers input supply
                    chain members or providers like wholesalers and retailers to
                    track the redemption process.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ottisInner7}>
              <div className={styles.ottisimageParent7}>
                <img
                  className={styles.ottisimageIcon9}
                  alt=""
                  src="/ottisimage@2x.png"
                />
                <div className={styles.subsidyProgramParent7}>
                  <div className={styles.subsidyProgram18}>
                    <p className={styles.transformYourAgricultural}>
                      <b className={styles.subsidy}>Subsidy</b>
                      <span className={styles.program}> Program</span>
                    </p>
                  </div>
                  <div className={styles.theSubsidyIs9}>
                    The Subsidy is a 7step process; which begins with
                    Registration or on-boarding of farmers who are not already
                    registered in the system, after which there is the
                    establishment of the subsidy rate and allocation to
                    beneficiaries.
                  </div>
                  <div className={styles.thereafterAReconciliation8}>
                    Thereafter, a reconciliation and settlement system is also
                    established to determine how beneficiaries will get access
                    to the inputs. The subsidy module registers input supply
                    chain members or providers like wholesalers and retailers to
                    track the redemption process.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.inputCredit}>
          <div className={styles.desktop} data-animate-on-scroll>
            <div className={styles.frameParent}>
              <div className={styles.groupChild} />
              <div className={styles.frameWrapper}>
                <div className={styles.inputCreditManagementSytemParent}>
                  <div className={styles.inputCreditManagementSytemContainer}>
                    <b>{`Input-Credit `}</b>
                    <span className={styles.empowering}>management sytem</span>
                  </div>
                  <div className={styles.theInputCreditManagementSyParent}>
                    <div
                      className={styles.theInputCredit}
                    >{`The input credit management system allows VCEs and Aggregators to give farmers access to input on credit and pay back with produce. This product digitalises the input-credit process while promoting efficiency and productivity on the part of the farmer. `}</div>
                    <div className={styles.theProductAllows}>
                      The product allows for easy documentation and management
                      of inputs given at the beginning of the farming season;
                      expected returns, provides farmers with agronomic advice,
                      allows agents to monitor farmers progress during the
                      season and adherence to timely schedules of farm
                      practices.
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.groupItem}
                alt=""
                src="/frame-108@2x.png"
              />
            </div>
          </div>
          <div className={styles.div4}>
            <div className={styles.frameGroup}>
              <div className={styles.groupInner} />
              <div className={styles.frameContainer}>
                <div className={styles.inputCreditManagementSytemGroup}>
                  <div className={styles.inputCreditManagementSytemContainer1}>
                    <b>{`Input-Credit `}</b>
                    <span className={styles.empowering}>management sytem</span>
                  </div>
                  <div className={styles.theInputCreditManagementSyGroup}>
                    <div
                      className={styles.theInputCredit1}
                    >{`The input credit management system allows VCEs and Aggregators to give farmers access to input on credit and pay back with produce. This product digitalises the input-credit process while promoting efficiency and productivity on the part of the farmer. `}</div>
                    <div className={styles.theProductAllows1}>
                      The product allows for easy documentation and management
                      of inputs given at the beginning of the farming season;
                      expected returns, provides farmers with agronomic advice,
                      allows agents to monitor farmers progress during the
                      season and adherence to timely schedules of farm
                      practices.
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.frameIcon}
                alt=""
                src="/frame-108@2x.png"
              />
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.groupChild1} />
              <div className={styles.frameWrapper1}>
                <div className={styles.inputCreditManagementSytemParent1}>
                  <div className={styles.inputCreditManagementSytemContainer2}>
                    <b>{`Input-Credit `}</b>
                    <span className={styles.empowering}>management sytem</span>
                  </div>
                  <div className={styles.theInputCreditManagementSyContainer}>
                    <div
                      className={styles.theInputCredit2}
                    >{`The input credit management system allows VCEs and Aggregators to give farmers access to input on credit and pay back with produce. This product digitalises the input-credit process while promoting efficiency and productivity on the part of the farmer. `}</div>
                    <div className={styles.theProductAllows2}>
                      The product allows for easy documentation and management
                      of inputs given at the beginning of the farming season;
                      expected returns, provides farmers with agronomic advice,
                      allows agents to monitor farmers progress during the
                      season and adherence to timely schedules of farm
                      practices.
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.groupChild2}
                alt=""
                src="/frame-108@2x.png"
              />
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.groupChild3} />
              <div className={styles.groupParent}>
                <div className={styles.frameWrapper2}>
                  <div className={styles.inputCreditManagementSytemParent2}>
                    <div
                      className={styles.inputCreditManagementSytemContainer3}
                    >
                      <b>{`Input-Credit `}</b>
                      <span className={styles.empowering}>
                        management sytem
                      </span>
                    </div>
                    <div className={styles.theInputCreditManagementSyParent1}>
                      <div
                        className={styles.theInputCredit3}
                      >{`The input credit management system allows VCEs and Aggregators to give farmers access to input on credit and pay back with produce. This product digitalises the input-credit process while promoting efficiency and productivity on the part of the farmer. `}</div>
                      <div className={styles.theProductAllows3}>
                        The product allows for easy documentation and management
                        of inputs given at the beginning of the farming season;
                        expected returns, provides farmers with agronomic
                        advice, allows agents to monitor farmers progress during
                        the season and adherence to timely schedules of farm
                        practices.
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-108@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.div5}>
            <div className={styles.inputCreditManagementSytemParent3}>
              <div className={styles.inputCreditManagementSytemContainer4}>
                <b>{`Input-Credit `}</b>
                <span className={styles.empowering}>management sytem</span>
              </div>
              <div
                className={styles.theInputCredit4}
              >{`The input credit management system allows VCEs and Aggregators to give farmers access to input on credit and pay back with produce. This product digitalises the input-credit process while promoting efficiency and productivity on the part of the farmer. `}</div>
              <div className={styles.thisSolutionBy}>
                The product allows for easy documentation and management of
                inputs given at the beginning of the farming season; expected
                returns, provides farmers with agronomic advice, allows agents
                to monitor farmers progress during the season and adherence to
                timely schedules of farm practices.
              </div>
            </div>
            <img className={styles.child} alt="" src="/frame-108@2x.png" />
          </div>
          <div className={styles.div6}>
            <div className={styles.inputCreditManagementSytemParent4}>
              <div className={styles.inputCreditManagementSytemContainer5}>
                <b>{`Input-Credit `}</b>
                <span className={styles.empowering}>management sytem</span>
              </div>
              <div
                className={styles.theInputCredit5}
              >{`The input credit management system allows VCEs and Aggregators to give farmers access to input on credit and pay back with produce. This product digitalises the input-credit process while promoting efficiency and productivity on the part of the farmer. `}</div>
              <div className={styles.thisSolutionBy}>
                The product allows for easy documentation and management of
                inputs given at the beginning of the farming season; expected
                returns, provides farmers with agronomic advice, allows agents
                to monitor farmers progress during the season and adherence to
                timely schedules of farm practices.
              </div>
            </div>
            <img className={styles.item} alt="" src="/frame-108@2x.png" />
          </div>
        </div>
        <div className={styles.subsidiary}>
          <div className={styles.destop}>
            <div className={styles.frameParent2}>
              <img
                className={styles.frameItem}
                alt=""
                src="/frame-108@2x.png"
              />
              <div className={styles.climateSmartAgricProgramParent}>
                <div className={styles.climateSmartAgricContainer}>
                  <p className={styles.transformYourAgricultural}>
                    <b className={styles.subsidy}>Climate</b>
                    <span className={styles.program}>{` Smart `}</span>
                  </p>
                  <p className={styles.agricProgram}>Agric program</p>
                </div>
                <div className={styles.thisSolutionBy}>
                  This solution by Agrospectrum limited focuses on providing
                  climate friendly agricultural information, predict weather,
                  disaster risk mitigation and agronomic advice through channels
                  like Interactive Voice Recognition (IVR), a call centre and
                  SMS a to farmers intermittently in various languages.
                </div>
                <div className={styles.currentlyItIs}>
                  Currently, it is run in 9 local languages, English and French.
                  It currently provides cultivation advice for twelve crops with
                  plans underway to integrate many other crops.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div7}>
            <div className={styles.frameParent3}>
              <img
                className={styles.frameItem}
                alt=""
                src="/frame-108@2x.png"
              />
              <div className={styles.climateSmartAgricProgramGroup}>
                <div className={styles.climateSmartAgricContainer1}>
                  <p className={styles.transformYourAgricultural}>
                    <b className={styles.subsidy}>Climate</b>
                    <span className={styles.program}>{` Smart `}</span>
                  </p>
                  <p className={styles.agricProgram}>Agric program</p>
                </div>
                <div className={styles.thisSolutionBy}>
                  This solution by Agrospectrum limited focuses on providing
                  climate friendly agricultural information, predict weather,
                  disaster risk mitigation and agronomic advice through channels
                  like Interactive Voice Recognition (IVR), a call centre and
                  SMS a to farmers intermittently in various languages.
                </div>
                <div className={styles.currentlyItIs1}>
                  Currently, it is run in 9 local languages, English and French.
                  It currently provides cultivation advice for twelve crops with
                  plans underway to integrate many other crops.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div8}>
            <div className={styles.frameParent4}>
              <img
                className={styles.frameItem}
                alt=""
                src="/frame-108@2x.png"
              />
              <div className={styles.climateSmartAgricProgramContainer}>
                <div className={styles.climateSmartAgricContainer2}>
                  <p className={styles.transformYourAgricultural}>
                    <b className={styles.subsidy}>Climate</b>
                    <span className={styles.program}>{` Smart `}</span>
                  </p>
                  <p className={styles.agricProgram}>Agric program</p>
                </div>
                <div className={styles.thisSolutionBy}>
                  This solution by Agrospectrum limited focuses on providing
                  climate friendly agricultural information, predict weather,
                  disaster risk mitigation and agronomic advice through channels
                  like Interactive Voice Recognition (IVR), a call centre and
                  SMS a to farmers intermittently in various languages.
                </div>
                <div className={styles.currentlyItIs2}>
                  Currently, it is run in 9 local languages, English and French.
                  It currently provides cultivation advice for twelve crops with
                  plans underway to integrate many other crops.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div9}>
            <div className={styles.frameParent5}>
              <img
                className={styles.frameChild2}
                alt=""
                src="/frame-108@2x.png"
              />
              <div className={styles.climateSmartAgricProgramParent1}>
                <div className={styles.climateSmartAgricContainer3}>
                  <p className={styles.transformYourAgricultural}>
                    <b className={styles.subsidy}>Climate</b>
                    <span className={styles.program}>{` Smart `}</span>
                  </p>
                  <p className={styles.agricProgram}>Agric program</p>
                </div>
                <div className={styles.thisSolutionBy3}>
                  This solution by Agrospectrum limited focuses on providing
                  climate friendly agricultural information, predict weather,
                  disaster risk mitigation and agronomic advice through channels
                  like Interactive Voice Recognition (IVR), a call centre and
                  SMS a to farmers intermittently in various languages.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.aggregation}>
          <div className={styles.desktop1}>
            <div className={styles.groupContainer}>
              <div className={styles.aggregationProgrammedSystemParent}>
                <div className={styles.aggregationProgrammedSystemContainer}>
                  <b>{`Aggregation `}</b>
                  <span className={styles.empowering}>programmed system</span>
                </div>
                <div className={styles.theAggregationModuleLooksAParent}>
                  <div className={styles.theAggregationModule}>
                    The Aggregation module looks at ensuring convenience in the
                    produce aggregation process. It allows aggregators to
                    purchase produce from both Farmers and community aggregators
                    at the market rate. The module uses an internet- of things
                    (IOT) system.
                  </div>
                  <div
                    className={styles.thusItIs}
                  >{`Thus it is integrated with hardware components to ensure that both the quality and quantity meets the right pricing. This solution is linked to the Broadspectrum digital payments platform which is integrated with Telco’s to facilitate the payments been made to the farmers. `}</div>
                </div>
              </div>
              <img
                className={styles.frameChild3}
                alt=""
                src="/frame-108@2x.png"
              />
            </div>
          </div>
          <div className={styles.div10}>
            <div className={styles.inner}>
              <div className={styles.groupParent1}>
                <div className={styles.aggregationProgrammedSystemGroup}>
                  <div className={styles.aggregationProgrammedSystemContainer1}>
                    <b>{`Aggregation `}</b>
                    <span className={styles.empowering}>programmed system</span>
                  </div>
                  <div className={styles.theAggregationModuleLooksAGroup}>
                    <div className={styles.theAggregationModule1}>
                      The Aggregation module looks at ensuring convenience in
                      the produce aggregation process. It allows aggregators to
                      purchase produce from both Farmers and community
                      aggregators at the market rate. The module uses an
                      internet- of things (IOT) system.
                    </div>
                    <div
                      className={styles.thusItIs1}
                    >{`Thus it is integrated with hardware components to ensure that both the quality and quantity meets the right pricing. This solution is linked to the Broadspectrum digital payments platform which is integrated with Telco’s to facilitate the payments been made to the farmers. `}</div>
                  </div>
                </div>
                <img
                  className={styles.frameChild4}
                  alt=""
                  src="/frame-108@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.div11}>
            <div className={styles.inner1}>
              <div className={styles.groupParent2}>
                <div className={styles.aggregationProgrammedSystemParent1}>
                  <div className={styles.aggregationProgrammedSystemContainer2}>
                    <b>{`Aggregation `}</b>
                    <span className={styles.empowering}>programmed system</span>
                  </div>
                  <div className={styles.theAggregationModuleLooksAContainer}>
                    <div className={styles.theAggregationModule2}>
                      The Aggregation module looks at ensuring convenience in
                      the produce aggregation process. It allows aggregators to
                      purchase produce from both Farmers and community
                      aggregators at the market rate. The module uses an
                      internet- of things (IOT) system.
                    </div>
                    <div
                      className={styles.thusItIs2}
                    >{`Thus it is integrated with hardware components to ensure that both the quality and quantity meets the right pricing. This solution is linked to the Broadspectrum digital payments platform which is integrated with Telco’s to facilitate the payments been made to the farmers. `}</div>
                  </div>
                </div>
                <img
                  className={styles.frameChild5}
                  alt=""
                  src="/frame-108@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.div12}>
            <div className={styles.inner2}>
              <div className={styles.groupParent3}>
                <div className={styles.aggregationProgrammedSystemParent2}>
                  <div className={styles.aggregationProgrammedSystemContainer3}>
                    <b>{`Aggregation `}</b>
                    <span className={styles.empowering}>programmed system</span>
                  </div>
                  <div className={styles.theAggregationModuleLooksAWrapper}>
                    <div className={styles.theAggregationModule3}>
                      The Aggregation module looks at ensuring convenience in
                      the produce aggregation process. It allows aggregators to
                      purchase produce from both Farmers and community
                      aggregators at the market rate. The module uses an
                      internet- of things (IOT) system.
                    </div>
                  </div>
                </div>
                <img
                  className={styles.frameChild6}
                  alt=""
                  src="/frame-108@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerlogo}>
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
                    className={styles.transformYourAgricultural}
                  >{`Transform your agricultural practices and `}</p>
                  <p className={styles.transformYourAgricultural}>
                    <span className={styles.subsidy}>
                      cultivate success with
                    </span>
                    <b className={styles.subsidy}> industry's best</b>
                    <span>—empowering farmers, streamlining operations,</span>
                  </p>
                  <p className={styles.transformYourAgricultural}>
                    <span>{`and fostering a connected `}</span>
                    <b className={styles.subsidy}>global community</b>
                  </p>
                </div>
              </div>
              <button className={styles.transformInner} data-animate-on-scroll>
                <button
                  className={styles.getInTouchWrapper}
                  onClick={onFrameButton1Click}
                >
                  <div className={styles.getInTouch}>GET IN TOUCH</div>
                </button>
              </button>
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.frameParent7}>
                <div className={styles.nowWereParent}>
                  <div className={styles.nowWere2}>business</div>
                  <div className={styles.frameParent8}>
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
                <div className={styles.frameParent9}>
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
              <div className={styles.frameParent10}>
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
            <div className={styles.frameParent11}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.arrowIcon}
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
                <div className={styles.instagramParent}>
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
        <section className={styles.copyright}>
          <div className={styles.copyrightInner}>
            <div className={styles.lineDiv} />
          </div>
        </section>
        <div className={styles.nowWereParent8}>
          <b className={styles.nowWere30}>
            No 24 Maseru Street,East Legon -Accra
          </b>
          <b className={styles.nowWere31}>
            © Copyright 2023 Agrospectrum Ltd. All Rights Reserved.
          </b>
        </div>
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

export default ProductServices;
