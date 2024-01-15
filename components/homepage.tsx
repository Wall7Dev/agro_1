import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { LinearProgress, Box, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import styles from "./homepage.module.css";

const Homepage1: NextPage = () => {
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
    router.push("/homepage1");
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

  const onBaseClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onFrameButton1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFrameButton2Click = useCallback(() => {
    router.push("/careers");
  }, [router]);

  const onNowWereTextClick = useCallback(() => {
    // Please sync "5-careers" to the project
  }, []);

  const onFrameButton3Click = useCallback(() => {
    router.push("/about-u-s-page");
  }, [router]);

  const onFrameButton4Click = useCallback(() => {
    router.push("/about-u-s-page");
  }, [router]);

  const onFrameButton5Click = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

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

  const onNowWereClick = useCallback(() => {
    window.location.href = "tel:+2330593808064";
  }, []);

  const onFrameButton6Click = useCallback(() => {
    // Please sync "2-contactUs" to the project
  }, []);

  const onNowWereText2Click = useCallback(() => {
    // Please sync "5-careers" to the project
  }, []);

  const onArrowIcon2Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onNowWereContainer2Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onFrameButton7Click = useCallback(() => {
    // Please sync "2-contactUs" to the project
  }, []);

  const onNowWereText3Click = useCallback(() => {
    // Please sync "5-careers" to the project
  }, []);

  const onArrowIcon3Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onNowWereContainer3Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onArrowIcon4Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onNowWereContainer4Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onArrowIcon5Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onNowWereContainer5Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  return (
    <>
      <div className={styles.homepage}>
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
        <div className={styles.allhero}>
          <section className={styles.desktop1}>
            <b
              className={styles.digitalization}
              data-animate-on-scroll
            >{`Digitalization `}</b>
            <div className={styles.instanceParent} data-animate-on-scroll>
              <div className={styles.platformWrapper}>
                <b className={styles.platform}>Platform</b>
              </div>
              <b className={styles.forTheFuture}>{`for the  future `}</b>
            </div>
            <div
              className={styles.weProvideAnEcosystemForAlWrapper}
              data-animate-on-scroll
            >
              <div className={styles.weProvideAnContainer}>
                <p
                  className={styles.weProvideAn}
                >{`We provide an ecosystem for all the players in the agricultural supply chain to `}</p>
                <p
                  className={styles.weProvideAn}
                >{`function with ease. Agrospectrum Limited is a leading force in the sector `}</p>
                <p className={styles.weProvideAn}>
                  dedicated to transforming traditional agricultural paradigms.
                </p>
              </div>
            </div>
            <div className={styles.pageNumbers} data-animate-on-scroll>
              <div className={styles.paginations}>
                <Box className={styles.wrapper} sx={{ width: 47 }}>
                  <CircularProgress />
                </Box>
                <img
                  className={styles.paginationsChild}
                  alt=""
                  src="/group-188.svg"
                />
                <img
                  className={styles.paginationsItem}
                  alt=""
                  src="/group-188.svg"
                />
              </div>
              <div className={styles.pageNumbersInner}>
                <div className={styles.parent}>
                  <div className={styles.div}>1</div>
                  <b className={styles.b}>3</b>
                </div>
              </div>
            </div>
            <div className={styles.scrooldowncontainer}>
              <img
                className={styles.scrooldowncontainerChild}
                alt=""
                src="/frame-7.svg"
              />
            </div>
          </section>
          <section className={styles.section}>
            <b
              className={styles.digitalization1}
              data-animate-on-scroll
            >{`Digitalization `}</b>
            <div className={styles.instanceGroup} data-animate-on-scroll>
              <div className={styles.platformContainer}>
                <b className={styles.platform1}>Platform</b>
              </div>
              <b className={styles.forTheFuture1}>{`for the  future `}</b>
            </div>
            <div
              className={styles.weProvideAnEcosystemForAlContainer}
              data-animate-on-scroll
            >
              <div className={styles.weProvideAnContainer}>
                <p
                  className={styles.weProvideAn}
                >{`We provide an ecosystem for all the players in the agricultural supply chain to `}</p>
                <p
                  className={styles.weProvideAn}
                >{`function with ease. Agrospectrum Limited is a leading force in the sector `}</p>
                <p className={styles.weProvideAn}>
                  dedicated to transforming traditional agricultural paradigms.
                </p>
              </div>
            </div>
            <div className={styles.pageNumbers1} data-animate-on-scroll>
              <div className={styles.paginations1}>
                <Box className={styles.wrapper} sx={{ width: 44.6 }}>
                  <CircularProgress />
                </Box>
                <img
                  className={styles.paginationsInner}
                  alt=""
                  src="/group-188.svg"
                />
                <img
                  className={styles.paginationsChild1}
                  alt=""
                  src="/group-189.svg"
                />
              </div>
              <div className={styles.pageNumbersChild}>
                <div className={styles.group}>
                  <div className={styles.div}>1</div>
                  <b className={styles.b}>3</b>
                </div>
              </div>
            </div>
            <div className={styles.scrooldowncontainer1}>
              <img
                className={styles.scrooldowncontainerItem}
                alt=""
                src="/frame-7.svg"
                data-animate-on-scroll
              />
            </div>
          </section>
          <section className={styles.section1}>
            <b
              className={styles.digitalization2}
              data-animate-on-scroll
            >{`Digitalization `}</b>
            <div className={styles.instanceContainer} data-animate-on-scroll>
              <div className={styles.platformFrame}>
                <b className={styles.platform2}>Platform</b>
              </div>
              <b className={styles.forTheFuture2}>{`for the  future `}</b>
            </div>
            <div
              className={styles.weProvideAnEcosystemForAlFrame}
              data-animate-on-scroll
            >
              <div className={styles.weProvideAnContainer}>
                <p
                  className={styles.weProvideAn}
                >{`We provide an ecosystem for all the players in the agricultural supply chain to function with ease. Agrospectrum Limited is a leading force in the sector `}</p>
                <p className={styles.weProvideAn}>
                  dedicated to transforming traditional agricultural paradigms.
                </p>
              </div>
            </div>
            <div className={styles.pageNumbers2} data-animate-on-scroll>
              <div className={styles.paginations2}>
                <Box className={styles.wrapper} sx={{ width: 36.4 }}>
                  <CircularProgress />
                </Box>
                <img
                  className={styles.paginationsChild2}
                  alt=""
                  src="/group-188.svg"
                />
                <img
                  className={styles.paginationsChild3}
                  alt=""
                  src="/group-189.svg"
                />
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.frameDiv}>
                  <div className={styles.div}>1</div>
                  <b className={styles.b}>3</b>
                </div>
              </div>
            </div>
            <div className={styles.scrooldowncontainer2}>
              <img
                className={styles.scrooldowncontainerInner}
                alt=""
                src="/frame-7.svg"
                data-animate-on-scroll
              />
            </div>
          </section>
          <section className={styles.section2}>
            <b
              className={styles.digitalization3}
              data-animate-on-scroll
            >{`Digitalization `}</b>
            <div className={styles.instanceParent1} data-animate-on-scroll>
              <div className={styles.platformWrapper1}>
                <b className={styles.platform3}>Platform</b>
              </div>
              <b className={styles.forTheFuture3}>{`for the  future `}</b>
            </div>
            <div
              className={styles.agrospectrumLimitedIsALeadWrapper}
              data-animate-on-scroll
            >
              <div
                className={styles.agrospectrumLimitedIs}
              >{`Agrospectrum Limited is a leading force in the sector dedicated to transforming traditional agricultural paradigms.
We provide an ecosystem for all the players in the agricultural supply chain. `}</div>
            </div>
            <div className={styles.pageNumbers3} data-animate-on-scroll>
              <div className={styles.paginations3}>
                <Box className={styles.wrapper} sx={{ width: 15.9 }}>
                  <CircularProgress />
                </Box>
                <img
                  className={styles.paginationsChild4}
                  alt=""
                  src="/group-188.svg"
                />
                <img
                  className={styles.paginationsChild5}
                  alt=""
                  src="/group-189.svg"
                />
              </div>
              <div className={styles.pageNumbersInner1}>
                <div className={styles.parent1}>
                  <div className={styles.div}>1</div>
                  <b className={styles.b}>3</b>
                </div>
              </div>
            </div>
            <div className={styles.scrooldowncontainer3}>
              <img
                className={styles.frameIcon}
                alt=""
                src="/frame-7.svg"
                data-animate-on-scroll
              />
            </div>
          </section>
          <section className={styles.section3}>
            <b className={styles.digitalization4}>{`Digitalization `}</b>
            <div className={styles.instanceParent2} data-animate-on-scroll>
              <div className={styles.platformWrapper2}>
                <b className={styles.platform4}>Platform</b>
              </div>
              <b className={styles.forTheFuture4}>{`for the  future `}</b>
            </div>
            <section
              className={styles.agrospectrumLimitedIsALeadContainer}
              data-animate-on-scroll
            >
              <div
                className={styles.agrospectrumLimitedIs}
              >{`Agrospectrum Limited is a leading force in the sector dedicated to transforming traditional agricultural paradigms.
We provide an ecosystem for all the players in the agricultural supply chain. `}</div>
            </section>
            <div className={styles.pageNumbers4}>
              <div className={styles.paginations4}>
                <Box className={styles.wrapper} sx={{ width: 13.4 }}>
                  <CircularProgress />
                </Box>
                <img
                  className={styles.paginationsChild6}
                  alt=""
                  src="/group-188.svg"
                />
                <img
                  className={styles.paginationsChild7}
                  alt=""
                  src="/group-189.svg"
                />
              </div>
              <div className={styles.pageNumbersInner2}>
                <div className={styles.parent2}>
                  <div className={styles.div}>1</div>
                  <b className={styles.b}>3</b>
                </div>
              </div>
            </div>
            <div className={styles.scrooldowncontainer4}>
              <img
                className={styles.scrooldowncontainerChild1}
                alt=""
                src="/frame-7@2x.png"
                data-animate-on-scroll
              />
            </div>
          </section>
        </div>
        <div className={styles.allhero}>
          <div className={styles.dektopPartnersBanner}>
            <div className={styles.allhero}>
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
            </div>
          </div>
          <div className={styles.partnersBanner}>
            <div className={styles.allhero}>
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
          <div className={styles.partnersBanner1}>
            <div className={styles.partnerLogosFrame}>
              <div className={styles.partnerLogos2}>
                <img
                  className={styles.download2Icon2}
                  alt=""
                  src="/download-2@2x.png"
                />
                <img
                  className={styles.download5Icon4}
                  alt=""
                  src="/download-5@2x.png"
                />
                <img
                  className={styles.downloadIcon2}
                  alt=""
                  src="/download@2x.png"
                />
                <img
                  className={styles.download5Icon5}
                  alt=""
                  src="/download-5@2x.png"
                />
                <img
                  className={styles.download3Icon2}
                  alt=""
                  src="/download-3@2x.png"
                />
                <img
                  className={styles.captureIcon2}
                  alt=""
                  src="/capture@2x.png"
                />
                <img
                  className={styles.mofaColorIcon2}
                  alt=""
                  src="/mofa-color@2x.png"
                />
                <img
                  className={styles.imagesIcon2}
                  alt=""
                  src="/images@2x.png"
                />
                <img
                  className={styles.download6Icon2}
                  alt=""
                  src="/download-6@2x.png"
                />
                <img
                  className={styles.images1Icon2}
                  alt=""
                  src="/images-1@2x.png"
                />
                <img
                  className={styles.download1Icon2}
                  alt=""
                  src="/download-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.partnersBanner2}>
            <div className={styles.partnerLogosFrame}>
              <div className={styles.partnerLogos3}>
                <img
                  className={styles.download2Icon3}
                  alt=""
                  src="/download-2@2x.png"
                />
                <img
                  className={styles.download5Icon6}
                  alt=""
                  src="/download-5@2x.png"
                />
                <img
                  className={styles.downloadIcon3}
                  alt=""
                  src="/download@2x.png"
                />
                <img
                  className={styles.download5Icon7}
                  alt=""
                  src="/download-5@2x.png"
                />
                <img
                  className={styles.download3Icon3}
                  alt=""
                  src="/download-3@2x.png"
                />
                <img
                  className={styles.captureIcon3}
                  alt=""
                  src="/capture@2x.png"
                />
                <img
                  className={styles.mofaColorIcon3}
                  alt=""
                  src="/mofa-color@2x.png"
                />
                <img
                  className={styles.imagesIcon3}
                  alt=""
                  src="/images@2x.png"
                />
                <img
                  className={styles.download6Icon3}
                  alt=""
                  src="/download-6@2x.png"
                />
                <img
                  className={styles.images1Icon3}
                  alt=""
                  src="/images-1@2x.png"
                />
                <img
                  className={styles.download1Icon3}
                  alt=""
                  src="/download-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.div5}>
            <div className={styles.partnerLogosFrame}>
              <div className={styles.partnerLogos4}>
                <img
                  className={styles.download2Icon4}
                  alt=""
                  src="/download-2@2x.png"
                />
                <img
                  className={styles.download5Icon8}
                  alt=""
                  src="/download-5@2x.png"
                />
                <img
                  className={styles.downloadIcon4}
                  alt=""
                  src="/download@2x.png"
                />
                <img
                  className={styles.download5Icon9}
                  alt=""
                  src="/download-5@2x.png"
                />
                <img
                  className={styles.download3Icon4}
                  alt=""
                  src="/download-3@2x.png"
                />
                <img
                  className={styles.captureIcon4}
                  alt=""
                  src="/capture@2x.png"
                />
                <img
                  className={styles.mofaColorIcon4}
                  alt=""
                  src="/mofa-color@2x.png"
                />
                <img
                  className={styles.imagesIcon4}
                  alt=""
                  src="/images@2x.png"
                />
                <img
                  className={styles.download6Icon4}
                  alt=""
                  src="/download-6@2x.png"
                />
                <img
                  className={styles.images1Icon4}
                  alt=""
                  src="/images-1@2x.png"
                />
                <img
                  className={styles.download1Icon4}
                  alt=""
                  src="/download-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.allhero}>
          <section className={styles.desktopSection2}>
            <div className={styles.bigBlur3} data-animate-on-scroll />
            <img
              className={styles.bgBlurIcon}
              alt=""
              src="/bg-blur.svg"
              data-animate-on-scroll
            />
            <div className={styles.bgBlur2} data-animate-on-scroll />
            <div className={styles.introAgrospectrumParent}>
              <div className={styles.introAgrospectrum} data-animate-on-scroll>
                <div className={styles.theNationssBestDigitalAgrWrapper}>
                  <div className={styles.theNationssBest}>
                    The nations’s best digital Agric Platform
                  </div>
                </div>
                <div className={styles.agrospectrumLimitedIsALeadFrame}>
                  <div
                    className={styles.agrospectrumLimitedIs2}
                  >{`Agrospectrum Limited is a leading force in the agricultural sector, is dedicated to transforming traditional agricultural paradigms and empowering stakeholders across the value chain. With a primary focus on Africa, the company endeavors to create an inclusive marketplace that caters to the diverse needs of farmers, government agencies, financial institutions, and service providers. `}</div>
                </div>
              </div>
              <div
                className={styles.whyWorkWithContainer}
                data-animate-on-scroll
              >
                <span>Why</span>
                <span className={styles.workWith}>{` Work with `}</span>
                <span>us</span>
                <span className={styles.workWith}>{` `}</span>
                <span>?</span>
              </div>
              <div className={styles.featuresimages}>
                <div className={styles.groupParent}>
                  <div
                    className={styles.rectangleParent}
                    data-animate-on-scroll
                  >
                    <div className={styles.groupChild} />
                    <img
                      className={styles.groupItem}
                      alt=""
                      src="/rectangle-940@2x.png"
                    />
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.weOfferAComprehensiveSuiteParent}>
                      <div className={styles.weOfferA} data-animate-on-scroll>
                        We offer a Comprehensive Suite of Agriculture Supply
                        Chain Management tools.
                      </div>
                      <div
                        className={styles.inTheHeartContainer}
                        data-animate-on-scroll
                      >
                        <p
                          className={styles.weProvideAn}
                        >{`In the heart of Ghana's vibrant agricultural landscape, `}</p>
                        <p
                          className={styles.weProvideAn}
                        >{`Agrospectrum emerges as a beacon of innovation, `}</p>
                        <p className={styles.weProvideAn}>
                          poised to transform the industry through the power of
                          digitalization. We are committed promoting inclusivity
                          and granting farmers access to finances and markets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.unlockingGhanasAgriculturalParent}>
                    <div
                      className={styles.unlockingGhanasAgriculturalContainer}
                      data-animate-on-scroll
                    >
                      <p
                        className={styles.weProvideAn}
                      >{`Unlocking Ghana's Agricultural `}</p>
                      <p className={styles.weProvideAn}>Potential</p>
                    </div>
                    <div
                      className={styles.ghanasAgriculturalSector}
                      data-animate-on-scroll
                    >
                      Ghana's agricultural sector holds immense potential,
                      brimming with untapped opportunities. Agrospectrum is
                      committed to unlocking this potential by providing a
                      digital infrastructure that empowers all stakeholders,
                      from farmers to processors. Our platform is not merely a
                      tool; it is a catalyst for Ghana's agricultural
                      revolution.
                    </div>
                  </div>
                  <div className={styles.rectangleGroup} data-animate-on-scroll>
                    <div className={styles.groupChild} />
                    <img
                      className={styles.groupItem}
                      alt=""
                      src="/rectangle-940@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className={styles.section21}>
            <img className={styles.bgBlurIcon1} alt="" src="/bg-blur.svg" />
            <div className={styles.bigBlur31} />
            <div className={styles.bgBlur21} />
            <div className={styles.introAgrospectrumGroup}>
              <div className={styles.introAgrospectrum1} data-animate-on-scroll>
                <div className={styles.theNationssBestDigitalAgrContainer}>
                  <div className={styles.theNationssBest}>
                    The nations’s best digital Agric Platform
                  </div>
                </div>
                <div className={styles.agrospectrumLimitedIsALeadWrapper1}>
                  <div
                    className={styles.agrospectrumLimitedIs3}
                  >{`Agrospectrum Limited is a leading force in the agricultural sector, is dedicated to transforming traditional agricultural paradigms and empowering stakeholders across the value chain. With a primary focus on Africa, the company endeavors to create an inclusive marketplace that caters to the diverse needs of farmers, government agencies, financial institutions, and service providers. `}</div>
                </div>
              </div>
              <div
                className={styles.whyWorkWithContainer1}
                data-animate-on-scroll
              >
                <span>Why</span>
                <span className={styles.workWith}>{` Work with `}</span>
                <span>us</span>
                <span className={styles.workWith}>{` `}</span>
                <span>?</span>
              </div>
              <div className={styles.featuresimages1}>
                <div className={styles.groupContainer} data-animate-on-scroll>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.groupChild1} />
                    <img
                      className={styles.groupChild2}
                      alt=""
                      src="/rectangle-940@2x.png"
                    />
                  </div>
                  <div className={styles.frameContainer}>
                    <div className={styles.weOfferAComprehensiveSuiteGroup}>
                      <div className={styles.weOfferA1}>
                        We offer a Comprehensive Suite of Agriculture Supply
                        Chain Management tools.
                      </div>
                      <div className={styles.inTheHeartContainer1}>
                        <p
                          className={styles.weProvideAn}
                        >{`In the heart of Ghana's vibrant agricultural landscape, `}</p>
                        <p
                          className={styles.weProvideAn}
                        >{`Agrospectrum emerges as a beacon of innovation, `}</p>
                        <p className={styles.weProvideAn}>
                          poised to transform the industry through the power of
                          digitalization. We are committed promoting inclusivity
                          and granting farmers access to finances and markets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameGroup} data-animate-on-scroll>
                  <div className={styles.unlockingGhanasAgriculturalGroup}>
                    <div
                      className={styles.unlockingGhanasAgriculturalContainer1}
                    >
                      <p
                        className={styles.weProvideAn}
                      >{`Unlocking Ghana's Agricultural `}</p>
                      <p className={styles.weProvideAn}>Potential</p>
                    </div>
                    <div className={styles.ghanasAgriculturalSector1}>
                      Ghana's agricultural sector holds immense potential,
                      brimming with untapped opportunities. Agrospectrum is
                      committed to unlocking this potential by providing a
                      digital infrastructure that empowers all stakeholders,
                      from farmers to processors. Our platform is not merely a
                      tool; it is a catalyst for Ghana's agricultural
                      revolution.
                    </div>
                  </div>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.groupChild1} />
                    <img
                      className={styles.groupChild2}
                      alt=""
                      src="/rectangle-940@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section22}>
            <img className={styles.bgBlurIcon2} alt="" src="/bg-blur.svg" />
            <div className={styles.bigBlur32} />
            <div className={styles.bgBlur22} />
            <div className={styles.introAgrospectrumContainer}>
              <div className={styles.introAgrospectrum2} data-animate-on-scroll>
                <div className={styles.theNationssBestDigitalAgrFrame}>
                  <div className={styles.ourTeam}>
                    The nations’s best digital Agric Platform
                  </div>
                </div>
                <div className={styles.agrospectrumLimitedIsALeadWrapper2}>
                  <div
                    className={styles.agrospectrumLimitedIs4}
                  >{`Agrospectrum Limited is a leading force in the agricultural sector, is dedicated to transforming traditional agricultural paradigms and empowering stakeholders across the value chain. With a primary focus on Africa, the company endeavors to create an inclusive marketplace that caters to the diverse needs of farmers, government agencies, financial institutions, and service providers. `}</div>
                </div>
              </div>
              <div
                className={styles.whyWorkWithContainer2}
                data-animate-on-scroll
              >
                <span>Why</span>
                <span className={styles.workWith}>{` Work with `}</span>
                <span>us</span>
                <span className={styles.workWith}>{` `}</span>
                <span>?</span>
              </div>
              <div className={styles.featuresimages2}>
                <div className={styles.groupParent1} data-animate-on-scroll>
                  <div className={styles.rectangleParent2}>
                    <div className={styles.groupChild5} />
                    <img
                      className={styles.groupChild6}
                      alt=""
                      src="/rectangle-940@2x.png"
                    />
                  </div>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.weOfferAComprehensiveSuiteContainer}>
                      <div className={styles.weOfferA1}>
                        We offer a Comprehensive Suite of Agriculture Supply
                        Chain Management tools.
                      </div>
                      <div className={styles.inTheHeartContainer2}>
                        <p
                          className={styles.weProvideAn}
                        >{`In the heart of Ghana's vibrant agricultural landscape, `}</p>
                        <p
                          className={styles.weProvideAn}
                        >{`Agrospectrum emerges as a beacon of innovation, `}</p>
                        <p className={styles.weProvideAn}>
                          poised to transform the industry through the power of
                          digitalization. We are committed promoting inclusivity
                          and granting farmers access to finances and markets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent1} data-animate-on-scroll>
                  <div className={styles.unlockingGhanasAgriculturalParent1}>
                    <div
                      className={styles.unlockingGhanasAgriculturalContainer2}
                    >
                      <p
                        className={styles.weProvideAn}
                      >{`Unlocking Ghana's Agricultural `}</p>
                      <p className={styles.weProvideAn}>Potential</p>
                    </div>
                    <div className={styles.ghanasAgriculturalSector2}>
                      Ghana's agricultural sector holds immense potential,
                      brimming with untapped opportunities. Agrospectrum is
                      committed to unlocking this potential by providing a
                      digital infrastructure that empowers all stakeholders,
                      from farmers to processors. Our platform is not merely a
                      tool; it is a catalyst for Ghana's agricultural
                      revolution.
                    </div>
                  </div>
                  <div className={styles.rectangleParent2}>
                    <div className={styles.groupChild5} />
                    <img
                      className={styles.groupChild6}
                      alt=""
                      src="/rectangle-940@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div6}>
            <div className={styles.bigBlur33} />
            <div className={styles.introAgrospectrumParent1}>
              <div className={styles.introAgrospectrum3} data-animate-on-scroll>
                <div className={styles.theNationssBestDigitalAgrWrapper1}>
                  <div className={styles.ourTeam}>
                    The nations’s best digital Agric Platform
                  </div>
                </div>
                <div
                  className={styles.agrospectrumLimitedIs5}
                >{`Agrospectrum Limited is dedicated to transforming traditional agricultural paradigms and empowering stakeholders across the value chain, with a primary focus on Africa.  `}</div>
              </div>
              <div
                className={styles.whyWorkWithContainer3}
                data-animate-on-scroll
              >
                <span>Why</span>
                <span className={styles.workWith}>{` Work with `}</span>
                <span>us</span>
                <span className={styles.workWith}>{` `}</span>
                <span>?</span>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.groupParent2}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-880@2x.png"
                  data-animate-on-scroll
                />
                <div className={styles.frameWrapper2} data-animate-on-scroll>
                  <div className={styles.weOfferAComprehensiveSuiteParent1}>
                    <div className={styles.weOfferA1}>
                      We offer a Comprehensive Suite of Agriculture Supply Chain
                      Management tools.
                    </div>
                    <div className={styles.inTheHeartContainer3}>
                      <p
                        className={styles.weProvideAn}
                      >{`In the heart of Ghana's vibrant agricultural landscape, `}</p>
                      <p
                        className={styles.weProvideAn}
                      >{`Agrospectrum emerges as a beacon of innovation, `}</p>
                      <p className={styles.weProvideAn}>
                        poised to transform the industry through the power of
                        digitalization. We are committed promoting inclusivity
                        and granting farmers access to finances and markets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.groupParent3}>
                <div className={styles.rectangleParent4} data-animate-on-scroll>
                  <div className={styles.groupChild9} />
                  <img
                    className={styles.groupChild10}
                    alt=""
                    src="/rectangle-940@2x.png"
                  />
                </div>
                <div
                  className={styles.unlockingGhanasAgriculturalParent2}
                  data-animate-on-scroll
                >
                  <div className={styles.unlockingGhanasAgriculturalContainer3}>
                    <p
                      className={styles.weProvideAn}
                    >{`Unlocking Ghana's Agricultural `}</p>
                    <p className={styles.weProvideAn}>Potential</p>
                  </div>
                  <div className={styles.ghanasAgriculturalSector3}>
                    Ghana's agricultural sector holds immense potential,
                    brimming with untapped opportunities. Agrospectrum is
                    committed to unlocking this potential by providing a digital
                    infrastructure that empowers all stakeholders, from farmers
                    to processors. Our platform is not merely a tool; it is a
                    catalyst for Ghana's agricultural revolution.
                  </div>
                </div>
              </div>
            </div>
            <img className={styles.bgBlurIcon3} alt="" src="/bg-blur.svg" />
            <img className={styles.bgBlurIcon4} alt="" src="/bg-blur.svg" />
            <div className={styles.bgBlur23} />
          </div>
          <div className={styles.div7}>
            <div className={styles.bigBlur34} />
            <div className={styles.introAgrospectrumParent2}>
              <div className={styles.introAgrospectrum4} data-animate-on-scroll>
                <div className={styles.theNationssBestDigitalAgrWrapper2}>
                  <div className={styles.ourTeam}>
                    The nations’s best digital Agric Platform
                  </div>
                </div>
                <div
                  className={styles.agrospectrumLimitedIs6}
                >{`Agrospectrum Limited is dedicated to transforming traditional agricultural paradigms and empowering stakeholders across the value chain, with a primary focus on Africa.  `}</div>
              </div>
              <div className={styles.whyWorkWithContainer4}>
                <span>Why</span>
                <span className={styles.workWith}>{` Work with `}</span>
                <span>us</span>
                <span className={styles.workWith}>{` `}</span>
                <span>?</span>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.groupParent4}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/group-880@2x.png"
                  data-animate-on-scroll
                />
                <div className={styles.frameWrapper3} data-animate-on-scroll>
                  <div className={styles.weOfferAComprehensiveSuiteParent2}>
                    <div className={styles.weOfferA1}>
                      We offer a Comprehensive Suite of Agriculture Supply Chain
                      Management tools.
                    </div>
                    <div className={styles.inTheHeartContainer4}>
                      <p
                        className={styles.weProvideAn}
                      >{`In the heart of Ghana's vibrant agricultural landscape, `}</p>
                      <p
                        className={styles.weProvideAn}
                      >{`Agrospectrum emerges as a beacon of innovation, `}</p>
                      <p className={styles.weProvideAn}>
                        poised to transform the industry through the power of
                        digitalization. We are committed promoting inclusivity
                        and granting farmers access to finances and markets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.groupParent5}>
                <div className={styles.rectangleParent5} data-animate-on-scroll>
                  <div className={styles.groupChild11} />
                  <img
                    className={styles.groupChild12}
                    alt=""
                    src="/rectangle-940@2x.png"
                  />
                </div>
                <div
                  className={styles.unlockingGhanasAgriculturalParent3}
                  data-animate-on-scroll
                >
                  <div className={styles.weOfferA1}>
                    <p
                      className={styles.weProvideAn}
                    >{`Unlocking Ghana's Agricultural `}</p>
                    <p className={styles.weProvideAn}>Potential</p>
                  </div>
                  <div className={styles.ghanasAgriculturalSector4}>
                    Ghana's agricultural sector holds immense potential,
                    brimming with untapped opportunities. Agrospectrum is
                    committed to unlocking this potential by providing a digital
                    infrastructure that empowers all stakeholders, from farmers
                    to processors. Our platform is not merely a tool; it is a
                    catalyst for Ghana's agricultural revolution.
                  </div>
                </div>
              </div>
            </div>
            <img className={styles.bgBlurIcon5} alt="" src="/bg-blur.svg" />
            <img className={styles.bgBlurIcon6} alt="" src="/bg-blur.svg" />
            <div className={styles.bgBlur24} />
          </div>
        </div>
        <section className={styles.statsSection}>
          <div className={styles.desktopStatsSec3}>
            <div className={styles.componentParent} data-animate-on-scroll>
              <div className={styles.mParent}>
                <div className={styles.m} data-animate-on-scroll>
                  <div className={styles.m1}>1. 7 M+</div>
                </div>
                <div
                  className={styles.farmersRegistered}
                  data-animate-on-scroll
                >
                  <div className={styles.farmersRegistered1}>
                    Farmers Registered
                  </div>
                </div>
                <div className={styles.componentChild} />
                <div
                  className={styles.registratedAndKyc}
                  data-animate-on-scroll
                >
                  registrated and KYC for regular farmers, commercial farmers
                  outgrower farmer across the northern region
                </div>
              </div>
              <div className={styles.mParent}>
                <div className={styles.m} data-animate-on-scroll>
                  <div className={styles.m3} data-animate-on-scroll>
                    60+
                  </div>
                </div>
                <div
                  className={styles.farmersRegistered}
                  data-animate-on-scroll
                >
                  <div
                    className={styles.farmersRegistered3}
                    data-animate-on-scroll
                  >
                    Districts Covered
                  </div>
                </div>
                <div className={styles.componentChild} />
                <div
                  className={styles.registratedAndKycContainer}
                  data-animate-on-scroll
                >
                  <p className={styles.weProvideAn}>
                    With our technology, we have successfully
                  </p>
                  <p className={styles.weProvideAn}>
                    run several partner programs across
                  </p>
                  <p className={styles.weProvideAn}>sixty districts.</p>
                </div>
              </div>
              <div className={styles.mParent}>
                <div className={styles.m} data-animate-on-scroll>
                  <div className={styles.m3} data-animate-on-scroll>
                    20M+
                  </div>
                </div>
                <div
                  className={styles.farmersRegistered}
                  data-animate-on-scroll
                >
                  <div
                    className={styles.farmersRegistered1}
                  >{`Farming Acres `}</div>
                </div>
                <div className={styles.componentChild} />
                <div
                  className={styles.registratedAndKycContainer}
                  data-animate-on-scroll
                >
                  <p
                    className={styles.weProvideAn}
                  >{`We have documented millions of farming `}</p>
                  <p className={styles.weProvideAn}>
                    lands, detailing their per seasonal
                  </p>
                  <p className={styles.weProvideAn}>cultivation and yields.</p>
                </div>
              </div>
              <div className={styles.mParent1}>
                <div className={styles.m} data-animate-on-scroll>
                  <div className={styles.m7}>5 Acres</div>
                </div>
                <div
                  className={styles.farmersRegistered}
                  data-animate-on-scroll
                >
                  <div className={styles.farmersRegistered1}>
                    Average farm size
                  </div>
                </div>
                <div className={styles.componentChild} />
                <div
                  className={styles.registratedAndKyc}
                  data-animate-on-scroll
                >
                  We collected data on average farm size per farmer, including
                  thousands of livestock farmers covered.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.statsSec3}>
            <div className={styles.instanceParent3} data-animate-on-scroll>
              <div className={styles.mParent2}>
                <div className={styles.m8} data-animate-on-scroll>
                  <div className={styles.m9}>1. 7 M+</div>
                </div>
                <div
                  className={styles.farmersRegistered8}
                  data-animate-on-scroll
                >
                  <div className={styles.farmersRegistered9}>
                    Farmers Registered
                  </div>
                </div>
                <div className={styles.lineDiv} />
                <div
                  className={styles.registratedAndKyc2}
                  data-animate-on-scroll
                >
                  registrated and KYC for regular farmers, commercial farmers
                  outgrower farmer across the northern region
                </div>
              </div>
              <div className={styles.mParent2}>
                <div className={styles.m8} data-animate-on-scroll>
                  <div className={styles.m9}>60+</div>
                </div>
                <div
                  className={styles.farmersRegistered8}
                  data-animate-on-scroll
                >
                  <div className={styles.farmersRegistered9}>
                    Districts Covered
                  </div>
                </div>
                <div className={styles.lineDiv} />
                <div
                  className={styles.registratedAndKycContainer2}
                  data-animate-on-scroll
                >
                  <p className={styles.weProvideAn}>
                    With our technology, we have successfully
                  </p>
                  <p className={styles.weProvideAn}>
                    run several partner programs across
                  </p>
                  <p className={styles.weProvideAn}>sixty districts.</p>
                </div>
              </div>
              <div className={styles.mParent2}>
                <div className={styles.m8} data-animate-on-scroll>
                  <div className={styles.m9}>20M+</div>
                </div>
                <div
                  className={styles.farmersRegistered8}
                  data-animate-on-scroll
                >
                  <div
                    className={styles.farmersRegistered9}
                  >{`Farming Acres `}</div>
                </div>
                <div className={styles.lineDiv} />
                <div
                  className={styles.registratedAndKycContainer2}
                  data-animate-on-scroll
                >
                  <p
                    className={styles.weProvideAn}
                  >{`We have documented millions of farming `}</p>
                  <p className={styles.weProvideAn}>
                    lands, detailing their per seasonal
                  </p>
                  <p className={styles.weProvideAn}>cultivation and yields.</p>
                </div>
              </div>
              <div className={styles.mParent2}>
                <div className={styles.m8} data-animate-on-scroll>
                  <div className={styles.m9}>5 Acres</div>
                </div>
                <div
                  className={styles.farmersRegistered8}
                  data-animate-on-scroll
                >
                  <div className={styles.farmersRegistered9}>
                    Average farm size
                  </div>
                </div>
                <div className={styles.lineDiv} />
                <div
                  className={styles.registratedAndKyc2}
                  data-animate-on-scroll
                >
                  We collected data on average farm size per farmer, including
                  thousands of livestock farmers covered.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.statsSec31}>
            <div className={styles.instanceParent4} data-animate-on-scroll>
              <div className={styles.mParent6}>
                <div className={styles.m16} data-animate-on-scroll>
                  <div className={styles.m17}>1. 7 M+</div>
                </div>
                <div
                  className={styles.farmersRegistered16}
                  data-animate-on-scroll
                >
                  <div className={styles.farmersRegistered17}>
                    Farmers Registered
                  </div>
                </div>
                <div className={styles.instanceChild4} />
                <div
                  className={styles.registratedAndKyc4}
                  data-animate-on-scroll
                >
                  registrated and KYC for regular farmers, commercial farmers
                  outgrower farmer across the northern region
                </div>
              </div>
              <div className={styles.mParent6}>
                <div className={styles.m16} data-animate-on-scroll>
                  <div className={styles.m17}>60+</div>
                </div>
                <div
                  className={styles.farmersRegistered16}
                  data-animate-on-scroll
                >
                  <div className={styles.farmersRegistered17}>
                    Districts Covered
                  </div>
                </div>
                <div className={styles.instanceChild4} />
                <div
                  className={styles.registratedAndKycContainer4}
                  data-animate-on-scroll
                >
                  <p className={styles.weProvideAn}>
                    With our technology, we have successfully
                  </p>
                  <p className={styles.weProvideAn}>
                    run several partner programs across
                  </p>
                  <p className={styles.weProvideAn}>sixty districts.</p>
                </div>
              </div>
              <div className={styles.mParent6}>
                <div className={styles.m16} data-animate-on-scroll>
                  <div className={styles.m17}>20M+</div>
                </div>
                <div
                  className={styles.farmersRegistered16}
                  data-animate-on-scroll
                >
                  <div
                    className={styles.farmersRegistered17}
                  >{`Farming Acres `}</div>
                </div>
                <div className={styles.instanceChild4} />
                <div
                  className={styles.registratedAndKycContainer4}
                  data-animate-on-scroll
                >
                  <p
                    className={styles.weProvideAn}
                  >{`We have documented millions of farming `}</p>
                  <p className={styles.weProvideAn}>
                    lands, detailing their per seasonal
                  </p>
                  <p className={styles.weProvideAn}>cultivation and yields.</p>
                </div>
              </div>
              <div className={styles.mParent6}>
                <div className={styles.m16} data-animate-on-scroll>
                  <div className={styles.m17}>5 Acres</div>
                </div>
                <div
                  className={styles.farmersRegistered16}
                  data-animate-on-scroll
                >
                  <div className={styles.farmersRegistered17}>
                    Average farm size
                  </div>
                </div>
                <div className={styles.instanceChild4} />
                <div
                  className={styles.registratedAndKyc4}
                  data-animate-on-scroll
                >
                  We collected data on average farm size per farmer, including
                  thousands of livestock farmers covered.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div8}>
            <div className={styles.frameParent4} data-animate-on-scroll>
              <div className={styles.footerDesktop}>
                <div className={styles.instanceParent5}>
                  <div className={styles.mParent10}>
                    <div className={styles.m24} data-animate-on-scroll>
                      <div className={styles.m25}>20M+</div>
                    </div>
                    <div
                      className={styles.farmersRegistered24}
                      data-animate-on-scroll
                    >
                      <div
                        className={styles.farmersRegistered25}
                      >{`Farming Acres `}</div>
                    </div>
                    <div className={styles.instanceChild8} />
                    <div
                      className={styles.registratedAndKycContainer6}
                      data-animate-on-scroll
                    >
                      <p
                        className={styles.weProvideAn}
                      >{`We have documented millions of farming `}</p>
                      <p className={styles.weProvideAn}>
                        lands, detailing their per seasonal
                      </p>
                      <p className={styles.weProvideAn}>
                        cultivation and yields.
                      </p>
                    </div>
                  </div>
                  <div className={styles.mParent10}>
                    <div className={styles.m24} data-animate-on-scroll>
                      <div className={styles.m25}>5 Acres</div>
                    </div>
                    <div
                      className={styles.farmersRegistered24}
                      data-animate-on-scroll
                    >
                      <div className={styles.farmersRegistered25}>
                        Average farm size
                      </div>
                    </div>
                    <div className={styles.instanceChild8} />
                    <div
                      className={styles.registratedAndKyc6}
                      data-animate-on-scroll
                    >
                      We collected data on average farm size per farmer,
                      including thousands of livestock farmers covered.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.instanceParent6}>
                <div className={styles.mParent10}>
                  <div className={styles.m24} data-animate-on-scroll>
                    <div className={styles.m25}>1. 7 M+</div>
                  </div>
                  <div
                    className={styles.farmersRegistered24}
                    data-animate-on-scroll
                  >
                    <div className={styles.farmersRegistered25}>
                      Farmers Registered
                    </div>
                  </div>
                  <div className={styles.instanceChild8} />
                  <div
                    className={styles.registratedAndKyc6}
                    data-animate-on-scroll
                  >
                    registrated and KYC for regular farmers, commercial farmers
                    outgrower farmer across the northern region
                  </div>
                </div>
                <div className={styles.mParent10}>
                  <div className={styles.m24} data-animate-on-scroll>
                    <div className={styles.m25}>60+</div>
                  </div>
                  <div
                    className={styles.farmersRegistered24}
                    data-animate-on-scroll
                  >
                    <div className={styles.farmersRegistered25}>
                      Districts Covered
                    </div>
                  </div>
                  <div className={styles.instanceChild8} />
                  <div
                    className={styles.registratedAndKycContainer6}
                    data-animate-on-scroll
                  >
                    <p className={styles.weProvideAn}>
                      With our technology, we have successfully
                    </p>
                    <p className={styles.weProvideAn}>
                      run several partner programs across
                    </p>
                    <p className={styles.weProvideAn}>sixty districts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div9}>
            <div className={styles.frameParent5} data-animate-on-scroll>
              <div className={styles.footerDesktop}>
                <div className={styles.instanceParent7}>
                  <div className={styles.mParent14}>
                    <div className={styles.m32} data-animate-on-scroll>
                      <div className={styles.m33}>20M+</div>
                    </div>
                    <div
                      className={styles.farmersRegistered32}
                      data-animate-on-scroll
                    >
                      <div
                        className={styles.farmersRegistered17}
                      >{`Farming Acres `}</div>
                    </div>
                    <div className={styles.instanceChild12} />
                    <div
                      className={styles.registratedAndKycContainer8}
                      data-animate-on-scroll
                    >
                      <p
                        className={styles.weProvideAn}
                      >{`We have documented millions of farming `}</p>
                      <p className={styles.weProvideAn}>
                        lands, detailing their per seasonal
                      </p>
                      <p className={styles.weProvideAn}>
                        cultivation and yields.
                      </p>
                    </div>
                  </div>
                  <div className={styles.mParent14}>
                    <div className={styles.m32} data-animate-on-scroll>
                      <div className={styles.m33}>5 Acres</div>
                    </div>
                    <div
                      className={styles.farmersRegistered32}
                      data-animate-on-scroll
                    >
                      <div className={styles.farmersRegistered17}>
                        Average farm size
                      </div>
                    </div>
                    <div className={styles.instanceChild12} />
                    <div
                      className={styles.registratedAndKyc8}
                      data-animate-on-scroll
                    >
                      We collected data on average farm size per farmer,
                      including thousands of livestock farmers covered.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.instanceParent8}>
                <div className={styles.mParent14}>
                  <div className={styles.m32} data-animate-on-scroll>
                    <div className={styles.m33}>1. 7 M+</div>
                  </div>
                  <div
                    className={styles.farmersRegistered32}
                    data-animate-on-scroll
                  >
                    <div className={styles.farmersRegistered17}>
                      Farmers Registered
                    </div>
                  </div>
                  <div className={styles.instanceChild12} />
                  <div
                    className={styles.registratedAndKyc8}
                    data-animate-on-scroll
                  >
                    registrated and KYC for regular farmers, commercial farmers
                    outgrower farmer across the northern region
                  </div>
                </div>
                <div className={styles.mParent14}>
                  <div className={styles.m32} data-animate-on-scroll>
                    <div className={styles.m33}>60+</div>
                  </div>
                  <div
                    className={styles.farmersRegistered32}
                    data-animate-on-scroll
                  >
                    <div className={styles.farmersRegistered17}>
                      Districts Covered
                    </div>
                  </div>
                  <div className={styles.instanceChild12} />
                  <div
                    className={styles.registratedAndKycContainer8}
                    data-animate-on-scroll
                  >
                    <p className={styles.weProvideAn}>
                      With our technology, we have successfully
                    </p>
                    <p className={styles.weProvideAn}>
                      run several partner programs across
                    </p>
                    <p className={styles.weProvideAn}>sixty districts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.whatweofferSection}>
          <div className={styles.productAndServicesSec4}>
            <div className={styles.whatWeOffer}>
              <b className={styles.whatWeOffer1} data-animate-on-scroll>
                What we Offer
              </b>
              <div className={styles.theInputCredit} data-animate-on-scroll>
                the input credit management system allows VCEs and Aggregators
                to give farmers access to input on credit and pay back with
                produce
              </div>
              <div className={styles.whatWeOfferInner} data-animate-on-scroll>
                <div className={styles.inTheHeartOfGhanasVibranWrapper}>
                  <div className={styles.inTheHeartContainer5}>
                    <p
                      className={styles.weProvideAn}
                    >{`In the heart of Ghana's vibrant agricultural landscape, Agrospectrum emerges as `}</p>
                    <p className={styles.weProvideAn}>
                      beacon of innovation poised to transform the industry
                      through the power of digitalization.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className={styles.whatWeOfferChild}
                alt=""
                src="/frame-94@2x.png"
                data-animate-on-scroll
              />
              <div
                className={styles.thisProductDigitalisesTheIWrapper}
                data-animate-on-scroll
              >
                <div className={styles.thisProductDigitalises}>
                  This product digitalises the input-credit process while
                  promoting efficiency and productivity on the part of the
                  farmer. This solution ensures easy documentation and
                  management of inputs given at the beginning of the farming
                  season; gives insights to expected returns, provides farmers
                  with agronomic advice, allows agents to monitor farmers
                  progress during the season and adherence to timely schedules
                  of farm practices. It also documents and manages the recovery
                  process by the VCEs and aggregators.
                </div>
              </div>
              <div
                className={styles.inputCreditManagementSystemParent}
                data-animate-on-scroll
              >
                <b className={styles.inputCreditManagementSystem}>
                  input-Credit Management Systems
                </b>
                <div className={styles.groupChild13} />
              </div>
              <div className={styles.navigation}>
                <div className={styles.div10}></div>
                <div className={styles.divider} />
                <div className={styles.div11}></div>
              </div>
              <img
                className={styles.projectArrowIcon}
                alt=""
                src="/project-arrow.svg"
              />
            </div>
            <div
              className={styles.inputCreditManagementSystemGroup}
              data-animate-on-scroll
            >
              <b className={styles.inputCreditManagementSystem1}>
                input-Credit Management Systems
              </b>
              <div className={styles.thisProductAlsoContainer}>
                <p className={styles.weProvideAn}>
                  This product also determines and distinguishes farmers from
                  community aggregators by registering such value chain actors
                  and their businesses in a system.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.productAndServicesSec41}>
            <div className={styles.whatWeOffer2}>
              <b className={styles.whatWeOffer3} data-animate-on-scroll>
                What we Offer
              </b>
              <div className={styles.theInputCredit1} data-animate-on-scroll>
                the input credit management system allows VCEs and Aggregators
                to give farmers access to input on credit and pay back with
                produce
              </div>
              <div className={styles.whatWeOfferInner1}>
                <div
                  className={styles.inTheHeartOfGhanasVibranContainer}
                  data-animate-on-scroll
                >
                  <div className={styles.inTheHeartContainer5}>
                    <p
                      className={styles.weProvideAn}
                    >{`In the heart of Ghana's vibrant agricultural landscape, Agrospectrum emerges as `}</p>
                    <p className={styles.weProvideAn}>
                      beacon of innovation poised to transform the industry
                      through the power of digitalization.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className={styles.whatWeOfferItem}
                alt=""
                src="/frame-94@2x.png"
                data-animate-on-scroll
              />
              <div
                className={styles.thisProductDigitalisesTheIContainer}
                data-animate-on-scroll
              >
                <div className={styles.thisProductDigitalises1}>
                  This product digitalises the input-credit process while
                  promoting efficiency and productivity on the part of the
                  farmer. This solution ensures easy documentation and
                  management of inputs given at the beginning of the farming
                  season; gives insights to expected returns, provides farmers
                  with agronomic advice, allows agents to monitor farmers
                  progress during the season and adherence to timely schedules
                  of farm practices. It also documents and manages the recovery
                  process by the VCEs and aggregators.
                </div>
              </div>
              <div
                className={styles.inputCreditManagementSystemContainer}
                data-animate-on-scroll
              >
                <b className={styles.inputCreditManagementSystem}>
                  input-Credit Management Systems
                </b>
                <div className={styles.groupChild14} />
              </div>
              <div className={styles.navigation1}>
                <div className={styles.div12}></div>
                <div className={styles.divider1} />
                <div className={styles.div13}></div>
              </div>
              <div className={styles.projectArrow}>
                <div className={styles.paginations5}>
                  <img
                    className={styles.paginationsChild8}
                    alt=""
                    src="/group-185.svg"
                  />
                  <img
                    className={styles.paginationsChild9}
                    alt=""
                    src="/group-188.svg"
                  />
                  <img
                    className={styles.paginationsChild10}
                    alt=""
                    src="/group-189.svg"
                  />
                </div>
              </div>
            </div>
            <div
              className={styles.inputCreditManagementSystemParent1}
              data-animate-on-scroll
            >
              <b className={styles.inputCreditManagementSystem3}>
                input-Credit Management Systems
              </b>
              <div className={styles.thisProductAlsoContainer1}>
                <p className={styles.weProvideAn}>
                  This product also determines and distinguishes farmers from
                  community aggregators by registering such value chain actors
                  and their businesses in a system.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.productAndServicesSec42}>
            <div className={styles.whatWeOffer4}>
              <b className={styles.whatWeOffer5} data-animate-on-scroll>
                What we Offer
              </b>
              <div className={styles.theInputCredit2} data-animate-on-scroll>
                the input credit management system allows VCEs and Aggregators
                to give farmers access to input on credit and pay back with
                produce
              </div>
              <div className={styles.whatWeOfferInner2} data-animate-on-scroll>
                <div className={styles.inTheHeartOfGhanasVibranFrame}>
                  <div className={styles.inTheHeartContainer5}>
                    <p
                      className={styles.weProvideAn}
                    >{`In the heart of Ghana's vibrant agricultural landscape, Agrospectrum emerges as `}</p>
                    <p className={styles.weProvideAn}>
                      beacon of innovation poised to transform the industry
                      through the power of digitalization.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className={styles.whatWeOfferChild1}
                alt=""
                src="/frame-94@2x.png"
                data-animate-on-scroll
              />
              <div
                className={styles.thisProductDigitalisesTheIFrame}
                data-animate-on-scroll
              >
                <div className={styles.thisProductDigitalises2}>
                  This product digitalises the input-credit process while
                  promoting efficiency and productivity on the part of the
                  farmer. This solution ensures easy documentation and
                  management of inputs given at the beginning of the farming
                  season; gives insights to expected returns, provides farmers
                  with agronomic advice, allows agents to monitor farmers
                  progress during the season and adherence to timely schedules
                  of farm practices. It also documents and manages the recovery
                  process by the VCEs and aggregators.
                </div>
              </div>
              <div
                className={styles.inputCreditManagementSystemParent2}
                data-animate-on-scroll
              >
                <b className={styles.inputCreditManagementSystem}>
                  input-Credit Management Systems
                </b>
                <div className={styles.groupChild15} />
              </div>
              <div className={styles.navigation2} data-animate-on-scroll>
                <div className={styles.div14}></div>
                <div className={styles.divider2} />
                <div className={styles.div15}></div>
              </div>
              <img
                className={styles.projectArrowIcon1}
                alt=""
                src="/project-arrow.svg"
                data-animate-on-scroll
              />
            </div>
            <div
              className={styles.inputCreditManagementSystemParent3}
              data-animate-on-scroll
            >
              <b className={styles.inputCreditManagementSystem5}>
                input-Credit Management Systems
              </b>
              <div className={styles.thisProductAlsoContainer2}>
                <p className={styles.weProvideAn}>
                  This product also determines and distinguishes farmers from
                  community aggregators by registering such value chain actors
                  and their businesses in a system.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.productAndServicesSec43}>
            <div className={styles.whatWeOffer6}>
              <b className={styles.whatWeOffer7} data-animate-on-scroll>
                What we Offer
              </b>
              <div className={styles.frameParent6}>
                <div className={styles.inTheHeartOfGhanasVibranWrapper1}>
                  <div className={styles.whatWeOffer7} data-animate-on-scroll>
                    <p
                      className={styles.weProvideAn}
                    >{`In the heart of Ghana's vibrant agricultural landscape, Agrospectrum emerges as `}</p>
                    <p className={styles.weProvideAn}>
                      beacon of innovation poised to transform the industry
                      through the power of digitalization.
                    </p>
                  </div>
                </div>
                <div className={styles.frameParent7}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/frame-94@2x.png"
                    data-animate-on-scroll
                  />
                  <div className={styles.groupParent6} data-animate-on-scroll>
                    <div className={styles.inputCreditManagementSystemParent4}>
                      <b className={styles.inputCreditManagementSystem}>
                        input-Credit Management Systems
                      </b>
                      <div className={styles.groupChild16} />
                    </div>
                    <div className={styles.theInputCredit3}>
                      the input credit management system allows VCEs and
                      Aggregators to give farmers access to input on credit and
                      pay back with produce
                    </div>
                    <div className={styles.thisProductDigitalisesTheIWrapper1}>
                      <div className={styles.thisProductDigitalises3}>
                        This product digitalises the input-credit process while
                        promoting efficiency and productivity on the part of the
                        farmer. This solution ensures easy documentation and
                        management of inputs given at the beginning of the
                        farming season.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.navigationParent}>
              <div className={styles.navigation3}>
                <div className={styles.div16}></div>
                <div className={styles.divider3} />
                <div className={styles.div17}></div>
              </div>
              <img
                className={styles.projectArrowIcon2}
                alt=""
                src="/project-arrow.svg"
              />
            </div>
            <div
              className={styles.inputCreditManagementSystemParent5}
              data-animate-on-scroll
            >
              <b className={styles.inputCreditManagementSystem7}>
                input-Credit Management Systems
              </b>
              <div className={styles.thisProductAlsoContainer3}>
                <p className={styles.weProvideAn}>
                  This product also determines and distinguishes farmers from
                  community aggregators by registering such value chain actors
                  and their businesses in a system.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.productAndServicesSec44}>
            <div className={styles.whatWeOffer8}>
              <b className={styles.whatWeOffer7} data-animate-on-scroll>
                What we Offer
              </b>
              <div className={styles.frameParent8}>
                <div className={styles.inTheHeartOfGhanasVibranWrapper2}>
                  <div className={styles.inTheHeartContainer5}>
                    <p
                      className={styles.weProvideAn}
                    >{`In the heart of Ghana's vibrant agricultural landscape, Agrospectrum emerges as `}</p>
                    <p className={styles.weProvideAn}>
                      beacon of innovation poised to transform the industry
                      through the power of digitalization.
                    </p>
                  </div>
                </div>
                <div className={styles.frameParent9}>
                  <img
                    className={styles.frameChild1}
                    alt=""
                    src="/frame-94@2x.png"
                    data-animate-on-scroll
                  />
                  <div className={styles.groupParent7} data-animate-on-scroll>
                    <div className={styles.inputCreditManagementSystemParent6}>
                      <b className={styles.inputCreditManagementSystem}>
                        input-Credit Management Systems
                      </b>
                      <div className={styles.groupChild17} />
                    </div>
                    <div className={styles.theInputCredit4}>
                      the input credit management system allows VCEs and
                      Aggregators to give farmers access to input on credit and
                      pay back with produce
                    </div>
                    <div className={styles.thisProductDigitalisesTheIWrapper2}>
                      <div className={styles.thisProductDigitalises4}>
                        This product digitalises the input-credit process while
                        promoting efficiency and productivity on the part of the
                        farmer. This solution ensures easy documentation and
                        management of inputs given at the beginning of the
                        farming season.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.navigationGroup}>
              <div className={styles.navigation4}>
                <div className={styles.div18}></div>
                <div className={styles.divider4} />
                <div className={styles.div19}></div>
              </div>
              <img
                className={styles.projectArrowIcon3}
                alt=""
                src="/project-arrow.svg"
              />
            </div>
            <div
              className={styles.inputCreditManagementSystemParent7}
              data-animate-on-scroll
            >
              <b className={styles.inputCreditManagementSystem9}>
                input-Credit Management Systems
              </b>
              <div className={styles.thisProductAlsoContainer4}>
                <p className={styles.weProvideAn}>
                  This product also determines and distinguishes farmers from
                  community aggregators by registering such value chain actors
                  and their businesses in a system.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.nissionSection}>
          <div className={styles.component411Wrapper}>
            <div className={styles.component411}>
              <div className={styles.div20}>
                <div className={styles.leftGroupParent} data-animate-on-scroll>
                  <img
                    className={styles.leftGroupIcon}
                    alt=""
                    src="/left-group.svg"
                  />
                  <div className={styles.missionParent}>
                    <div className={styles.mission}>Mission</div>
                    <div className={styles.toExtendDigitalization}>
                      To extend digitalization and innovation to agriculture
                      through diverse technological channels
                    </div>
                  </div>
                  <img
                    className={styles.leftGroupIcon1}
                    alt=""
                    src="/left-group@2x.png"
                  />
                </div>
              </div>
              <div className={styles.div21}>
                <div className={styles.leftGroupGroup}>
                  <img
                    className={styles.leftGroupIcon}
                    alt=""
                    src="/left-group.svg"
                  />
                  <div className={styles.missionParent}>
                    <div className={styles.mission}>Resourceful</div>
                    <div className={styles.weOfferAContainer}>
                      <span className={styles.weOfferAContainer1}>
                        <p className={styles.weProvideAn}>
                          We offer a huge arsenal of logistics and expertise to
                        </p>
                        <p className={styles.weProvideAn}>
                          strategize and tackle most agro challenges
                        </p>
                      </span>
                    </div>
                  </div>
                  <img
                    className={styles.leftGroupIcon1}
                    alt=""
                    src="/left-group@2x.png"
                  />
                </div>
              </div>
              <div className={styles.div22}>
                <div className={styles.leftGroupGroup}>
                  <img
                    className={styles.leftGroupIcon}
                    alt=""
                    src="/left-group.svg"
                  />
                  <div className={styles.missionParent}>
                    <div className={styles.mission}>Innovation</div>
                    <div className={styles.weOfferAContainer}>
                      <span className={styles.weOfferAContainer1}>
                        <p className={styles.weProvideAn}>
                          We offer a huge arsenal of logistics and expertise to
                        </p>
                        <p className={styles.weProvideAn}>
                          strategize and tackle most agro challenges
                        </p>
                      </span>
                    </div>
                  </div>
                  <img
                    className={styles.leftGroupIcon1}
                    alt=""
                    src="/left-group@2x.png"
                  />
                </div>
              </div>
              <div className={styles.div23}>
                <div className={styles.leftGroupGroup}>
                  <img
                    className={styles.leftGroupIcon}
                    alt=""
                    src="/left-group.svg"
                  />
                  <div className={styles.integrityParent}>
                    <div className={styles.mission}>Integrity</div>
                    <div className={styles.ourCredibilityAs}>
                      Our credibility as a brand is not only evident in the
                      authenticity of our products but, also in the numerous
                      partnerships with renowned local and international
                      industry players.
                    </div>
                  </div>
                  <img
                    className={styles.leftGroupIcon1}
                    alt=""
                    src="/left-group@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.component411Container}>
            <div className={styles.component4111}>
              <div className={styles.div24}>
                <div className={styles.leftGroupParent2} data-animate-on-scroll>
                  <img
                    className={styles.leftGroupIcon8}
                    alt=""
                    src="/left-group.svg"
                  />
                  <div className={styles.missionGroup}>
                    <div className={styles.mission}>Mission</div>
                    <div className={styles.toExtendDigitalization1}>
                      To extend digitalization and innovation to agriculture
                      through diverse technological channels
                    </div>
                  </div>
                  <img
                    className={styles.leftGroupIcon9}
                    alt=""
                    src="/left-group@2x.png"
                  />
                </div>
              </div>
              <div className={styles.div25}>
                <div className={styles.leftGroupGroup}>
                  <img
                    className={styles.leftGroupIcon8}
                    alt=""
                    src="/left-group.svg"
                  />
                  <div className={styles.missionGroup}>
                    <div className={styles.mission}>Resourceful</div>
                    <div className={styles.weOfferAContainer4}>
                      <span className={styles.weOfferAContainer1}>
                        <p className={styles.weProvideAn}>
                          We offer a huge arsenal of logistics and expertise to
                        </p>
                        <p className={styles.weProvideAn}>
                          strategize and tackle most agro challenges
                        </p>
                      </span>
                    </div>
                  </div>
                  <img
                    className={styles.leftGroupIcon9}
                    alt=""
                    src="/left-group@2x.png"
                  />
                </div>
              </div>
              <div className={styles.div26}>
                <div className={styles.leftGroupGroup}>
                  <img
                    className={styles.leftGroupIcon8}
                    alt=""
                    src="/left-group.svg"
                  />
                  <div className={styles.missionGroup}>
                    <div className={styles.mission}>Innovation</div>
                    <div className={styles.weOfferAContainer4}>
                      <span className={styles.weOfferAContainer1}>
                        <p className={styles.weProvideAn}>
                          We offer a huge arsenal of logistics and expertise to
                        </p>
                        <p className={styles.weProvideAn}>
                          strategize and tackle most agro challenges
                        </p>
                      </span>
                    </div>
                  </div>
                  <img
                    className={styles.leftGroupIcon9}
                    alt=""
                    src="/left-group@2x.png"
                  />
                </div>
              </div>
              <div className={styles.div27}>
                <div className={styles.leftGroupGroup}>
                  <img
                    className={styles.leftGroupIcon8}
                    alt=""
                    src="/left-group.svg"
                  />
                  <div className={styles.integrityGroup}>
                    <div className={styles.mission}>Integrity</div>
                    <div className={styles.ourCredibilityAs1}>
                      Our credibility as a brand is not only evident in the
                      authenticity of our products but, also in the numerous
                      partnerships with renowned local and international
                      industry players.
                    </div>
                  </div>
                  <img
                    className={styles.leftGroupIcon9}
                    alt=""
                    src="/left-group@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.component411Frame}>
            <div className={styles.component4112}>
              <div className={styles.div28}>
                <div className={styles.leftGroupParent6} data-animate-on-scroll>
                  <img
                    className={styles.leftGroupIcon16}
                    alt=""
                    src="/left-group.svg"
                  />
                  <div className={styles.missionContainer}>
                    <div className={styles.mission}>Mission</div>
                    <div className={styles.toExtendDigitalization2}>
                      To extend digitalization and innovation to agriculture
                      through diverse technological channels
                    </div>
                  </div>
                  <img
                    className={styles.leftGroupIcon17}
                    alt=""
                    src="/left-group@2x.png"
                  />
                </div>
              </div>
              <div className={styles.div29}>
                <div className={styles.leftGroupGroup}>
                  <img
                    className={styles.leftGroupIcon16}
                    alt=""
                    src="/left-group.svg"
                  />
                  <div className={styles.missionContainer}>
                    <div className={styles.mission}>Resourceful</div>
                    <div className={styles.weOfferAContainer8}>
                      <span className={styles.weOfferAContainer1}>
                        <p className={styles.weProvideAn}>
                          We offer a huge arsenal of logistics and expertise to
                        </p>
                        <p className={styles.weProvideAn}>
                          strategize and tackle most agro challenges
                        </p>
                      </span>
                    </div>
                  </div>
                  <img
                    className={styles.leftGroupIcon17}
                    alt=""
                    src="/left-group@2x.png"
                  />
                </div>
              </div>
              <div className={styles.div30}>
                <div className={styles.leftGroupGroup}>
                  <img
                    className={styles.leftGroupIcon16}
                    alt=""
                    src="/left-group.svg"
                  />
                  <div className={styles.missionContainer}>
                    <div className={styles.mission}>Innovation</div>
                    <div className={styles.weOfferAContainer8}>
                      <span className={styles.weOfferAContainer1}>
                        <p className={styles.weProvideAn}>
                          We offer a huge arsenal of logistics and expertise to
                        </p>
                        <p className={styles.weProvideAn}>
                          strategize and tackle most agro challenges
                        </p>
                      </span>
                    </div>
                  </div>
                  <img
                    className={styles.leftGroupIcon17}
                    alt=""
                    src="/left-group@2x.png"
                  />
                </div>
              </div>
              <div className={styles.div31}>
                <div className={styles.leftGroupGroup}>
                  <img
                    className={styles.leftGroupIcon16}
                    alt=""
                    src="/left-group.svg"
                  />
                  <div className={styles.integrityContainer}>
                    <div className={styles.mission}>Integrity</div>
                    <div className={styles.ourCredibilityAs2}>
                      Our credibility as a brand is not only evident in the
                      authenticity of our products but, also in the numerous
                      partnerships with renowned local and international
                      industry players.
                    </div>
                  </div>
                  <img
                    className={styles.leftGroupIcon17}
                    alt=""
                    src="/left-group@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div32}>
            <div className={styles.component4113}>
              <div className={styles.div33}>
                <div
                  className={styles.leftGroupParent10}
                  data-animate-on-scroll
                >
                  <img
                    className={styles.leftGroupIcon24}
                    alt=""
                    src="/left-group.svg"
                  />
                  <div className={styles.missionParent1}>
                    <div className={styles.mission}>Mission</div>
                    <div className={styles.toExtendDigitalization3}>
                      To extend digitalization and innovation to agriculture
                      through diverse technological channels
                    </div>
                  </div>
                  <img
                    className={styles.leftGroupIcon25}
                    alt=""
                    src="/left-group@2x.png"
                  />
                </div>
              </div>
              <div className={styles.div34}>
                <div className={styles.leftGroupGroup}>
                  <img
                    className={styles.leftGroupIcon24}
                    alt=""
                    src="/left-group.svg"
                  />
                  <div className={styles.missionParent1}>
                    <div className={styles.mission}>Resourceful</div>
                    <div className={styles.weOfferAContainer12}>
                      <span className={styles.weOfferAContainer1}>
                        <p className={styles.weProvideAn}>
                          We offer a huge arsenal of logistics and expertise to
                        </p>
                        <p className={styles.weProvideAn}>
                          strategize and tackle most agro challenges
                        </p>
                      </span>
                    </div>
                  </div>
                  <img
                    className={styles.leftGroupIcon25}
                    alt=""
                    src="/left-group@2x.png"
                  />
                </div>
              </div>
              <div className={styles.div35}>
                <div className={styles.leftGroupGroup}>
                  <img
                    className={styles.leftGroupIcon24}
                    alt=""
                    src="/left-group.svg"
                  />
                  <div className={styles.missionParent1}>
                    <div className={styles.mission}>Innovation</div>
                    <div className={styles.weOfferAContainer12}>
                      <span className={styles.weOfferAContainer1}>
                        <p className={styles.weProvideAn}>
                          We offer a huge arsenal of logistics and expertise to
                        </p>
                        <p className={styles.weProvideAn}>
                          strategize and tackle most agro challenges
                        </p>
                      </span>
                    </div>
                  </div>
                  <img
                    className={styles.leftGroupIcon25}
                    alt=""
                    src="/left-group@2x.png"
                  />
                </div>
              </div>
              <div className={styles.div36}>
                <div className={styles.leftGroupGroup}>
                  <img
                    className={styles.leftGroupIcon24}
                    alt=""
                    src="/left-group.svg"
                  />
                  <div className={styles.integrityParent1}>
                    <div className={styles.mission}>Integrity</div>
                    <div className={styles.ourCredibilityAs3}>
                      Our credibility as a brand is not only evident in the
                      authenticity of our products but, also in the numerous
                      partnerships with renowned local and international
                      industry players.
                    </div>
                  </div>
                  <img
                    className={styles.leftGroupIcon25}
                    alt=""
                    src="/left-group@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div37}>
            <div className={styles.component411Wrapper1}>
              <div className={styles.component4114}>
                <div className={styles.div38}>
                  <div
                    className={styles.leftGroupParent14}
                    data-animate-on-scroll
                  >
                    <img
                      className={styles.leftGroupIcon32}
                      alt=""
                      src="/left-group.svg"
                    />
                    <div className={styles.missionParent2}>
                      <div className={styles.mission}>Mission</div>
                      <div className={styles.toExtendDigitalization4}>
                        To extend digitalization and innovation to agriculture
                        through diverse technological channels
                      </div>
                    </div>
                    <img
                      className={styles.leftGroupIcon33}
                      alt=""
                      src="/left-group@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.div39}>
                  <div className={styles.leftGroupGroup}>
                    <img
                      className={styles.leftGroupIcon32}
                      alt=""
                      src="/left-group.svg"
                    />
                    <div className={styles.missionParent2}>
                      <div className={styles.mission}>Resourceful</div>
                      <div className={styles.weOfferAContainer16}>
                        <span className={styles.weOfferAContainer1}>
                          <p className={styles.weProvideAn}>
                            We offer a huge arsenal of logistics and expertise
                            to
                          </p>
                          <p className={styles.weProvideAn}>
                            strategize and tackle most agro challenges
                          </p>
                        </span>
                      </div>
                    </div>
                    <img
                      className={styles.leftGroupIcon33}
                      alt=""
                      src="/left-group@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.div40}>
                  <div className={styles.leftGroupGroup}>
                    <img
                      className={styles.leftGroupIcon32}
                      alt=""
                      src="/left-group.svg"
                    />
                    <div className={styles.missionParent2}>
                      <div className={styles.mission}>Innovation</div>
                      <div className={styles.weOfferAContainer16}>
                        <span className={styles.weOfferAContainer1}>
                          <p className={styles.weProvideAn}>
                            We offer a huge arsenal of logistics and expertise
                            to
                          </p>
                          <p className={styles.weProvideAn}>
                            strategize and tackle most agro challenges
                          </p>
                        </span>
                      </div>
                    </div>
                    <img
                      className={styles.leftGroupIcon33}
                      alt=""
                      src="/left-group@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.div41}>
                  <div className={styles.leftGroupGroup}>
                    <img
                      className={styles.leftGroupIcon32}
                      alt=""
                      src="/left-group.svg"
                    />
                    <div className={styles.integrityParent2}>
                      <div className={styles.mission}>Integrity</div>
                      <div className={styles.ourCredibilityAs4}>
                        Our credibility as a brand is not only evident in the
                        authenticity of our products but, also in the numerous
                        partnerships with renowned local and international
                        industry players.
                      </div>
                    </div>
                    <img
                      className={styles.leftGroupIcon33}
                      alt=""
                      src="/left-group@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div42}>
              <div className={styles.leftGroupGroup}>
                <img
                  className={styles.leftGroupIcon40}
                  alt=""
                  src="/left-group.svg"
                />
                <div className={styles.integrityParent3}>
                  <div className={styles.mission}>Integrity</div>
                  <div className={styles.ourCredibilityAs5}>
                    Our credibility as a brand is not only evident in the
                    authenticity of our products but, also in the numerous
                    partnerships with renowned local and international industry
                    players.
                  </div>
                </div>
                <img
                  className={styles.leftGroupIcon41}
                  alt=""
                  src="/left-group@2x.png"
                />
              </div>
            </div>
            <div className={styles.div43}>
              <div className={styles.leftGroupGroup}>
                <img
                  className={styles.leftGroupIcon40}
                  alt=""
                  src="/left-group.svg"
                />
                <div className={styles.resourcefulnessParent}>
                  <div className={styles.mission}>Resourcefulness</div>
                  <div className={styles.weOfferAContainer20}>
                    <span className={styles.weOfferAContainer1}>
                      <p className={styles.weProvideAn}>
                        We offer a huge arsenal of logistics and expertise to
                      </p>
                      <p className={styles.weProvideAn}>
                        strategize and tackle most agro challenges
                      </p>
                    </span>
                  </div>
                </div>
                <img
                  className={styles.leftGroupIcon41}
                  alt=""
                  src="/left-group@2x.png"
                />
              </div>
            </div>
            <div className={styles.div44}>
              <div className={styles.leftGroupGroup}>
                <img
                  className={styles.leftGroupIcon40}
                  alt=""
                  src="/left-group.svg"
                />
                <div className={styles.resourcefulnessParent}>
                  <div className={styles.mission}>Innovation</div>
                  <div className={styles.weOfferAContainer20}>
                    <span className={styles.weOfferAContainer1}>
                      <p className={styles.weProvideAn}>
                        We offer a huge arsenal of logistics and expertise to
                      </p>
                      <p className={styles.weProvideAn}>
                        strategize and tackle most agro challenges
                      </p>
                    </span>
                  </div>
                </div>
                <img
                  className={styles.leftGroupIcon41}
                  alt=""
                  src="/left-group@2x.png"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.outprojects}>
          <div className={styles.ourProjects}>
            <img
              className={styles.ourProjectsChild}
              alt=""
              src="/vector-21.svg"
            />
            <img
              className={styles.ourProjectsItem}
              alt=""
              src="/vector-22.svg"
            />
            <div className={styles.introAgrospectrum5}>
              <div className={styles.projectCardParent} data-animate-on-scroll>
                <div className={styles.projectCard} data-animate-on-scroll>
                  <div className={styles.northernGhana}>@Northern Ghana</div>
                  <img className={styles.baseIcon} alt="" src="/base@2x.png" />
                  <div className={styles.anEnumerationProgram}>
                    An enumeration program by the Government of Ghana through
                    the Ministry of Food and Agriculture that profiles farmers
                    for inclusion.
                  </div>
                </div>
                <div className={styles.nationwideParent} data-animate-on-scroll>
                  <div className={styles.nationwide}>@Nationwide</div>
                  <img className={styles.baseIcon} alt="" src="/base@2x.png" />
                  <div className={styles.aFlagshipProgram}>
                    A flagship program of the MoFA(Ghana) that used
                    Agrospectrum’s mobile application provide input Subsidy to
                    farmers.
                  </div>
                  <div className={styles.block1Parent}>
                    <div className={styles.block1}>
                      <div className={styles.rectangle} />
                    </div>
                    <div className={styles.eSubsidy}>{`E-Subsidy `}</div>
                  </div>
                </div>
                <div className={styles.nationwideGroup} data-animate-on-scroll>
                  <div className={styles.nationwide1}>@nationwide</div>
                  <img className={styles.baseIcon} alt="" src="/base@2x.png" />
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
                  <div className={styles.block1Group}>
                    <div className={styles.block11}>
                      <div className={styles.rectangle1} />
                    </div>
                    <div
                      className={styles.inputCreditMgt}
                    >{`Input Credit Mgt. `}</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent10} data-animate-on-scroll>
                <div
                  className={styles.nationwideContainer}
                  data-animate-on-scroll
                >
                  <div className={styles.nationwide2}>@Nationwide</div>
                  <img className={styles.baseIcon} alt="" src="/base@2x.png" />
                  <div
                    className={styles.ourClimateSmartSolution}
                  >{`Our climate-smart solution empowers farmers across languages with vital information like weather forecasts, disaster preparedness & agro-advice.`}</div>
                  <div className={styles.block1Container}>
                    <div className={styles.block12}>
                      <div className={styles.rectangle2} />
                    </div>
                    <div className={styles.climateSmartProgram}>
                      Climate Smart Program
                    </div>
                  </div>
                </div>
                <div className={styles.nationwideParent} data-animate-on-scroll>
                  <div className={styles.savanna}>@Savanna</div>
                  <img className={styles.baseIcon} alt="" src="/base@2x.png" />
                  <div className={styles.runByOurContainer}>
                    <p className={styles.weProvideAn}>
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
                  <div className={styles.block1Parent1}>
                    <div className={styles.block13}>
                      <div className={styles.rectangle3} />
                    </div>
                    <div className={styles.aggregationProgram}>
                      Aggregation Program
                    </div>
                  </div>
                </div>
                <div
                  className={styles.nationwideParent1}
                  data-animate-on-scroll
                >
                  <div className={styles.nationwide3}>@Nationwide</div>
                  <img className={styles.baseIcon5} alt="" src="/base@2x.png" />
                  <div
                    className={styles.imagineAFuture}
                  >{`Imagine a future of digitization of the agribusiness were reliable technology become your allies for informed decision making `}</div>
                  <div className={styles.block1Parent2}>
                    <div className={styles.block1}>
                      <div className={styles.rectangle} />
                    </div>
                    <div className={styles.farmerKyc}>FARMER KYC</div>
                  </div>
                </div>
              </div>
              <div className={styles.theNationssBest5}>
                The nations’s best digital Agric Platform
              </div>
              <b className={styles.ourProjects1} data-animate-on-scroll>
                Our Projects
              </b>
              <div className={styles.introAgrospectrumInner}>
                <div className={styles.farmerRegistrationWrapper}>
                  <div
                    className={styles.farmerRegistration}
                  >{`Farmer Registration   `}</div>
                </div>
              </div>
              <div className={styles.projectArrow1}>
                <div className={styles.navigation5}>
                  <div className={styles.div45}></div>
                  <div className={styles.divider5} />
                  <div className={styles.div46}></div>
                </div>
                <img
                  className={styles.paginationsIcon}
                  alt=""
                  src="/paginations.svg"
                />
              </div>
            </div>
            <div className={styles.introAgrospectrum6}>
              <div
                className={styles.theRenownCompaniesThatTrusParent}
                data-animate-on-scroll
              >
                <div className={styles.theRenownCompaniesContainer}>
                  <span>{`The renown companies that `}</span>
                  <span className={styles.trustUs}>Trust Us</span>
                </div>
                <b className={styles.ourPartners}>Our Partners</b>
              </div>
              <img
                className={styles.projectArrowIcon4}
                alt=""
                src="/project-arrow.svg"
              />
            </div>
            <img
              className={styles.ourProjectsInner}
              alt=""
              src="/vector-21.svg"
            />
            <img
              className={styles.navRightsvgFillIcon}
              alt=""
              src="/navrightsvg-fill.svg"
            />
            <div className={styles.partners} data-animate-on-scroll>
              <div className={styles.download5Parent}>
                <img
                  className={styles.download5Icon10}
                  alt=""
                  src="/download-5@2x.png"
                />
                <img
                  className={styles.download6Icon5}
                  alt=""
                  src="/download-6@2x.png"
                />
                <img
                  className={styles.download3Icon5}
                  alt=""
                  src="/download-3@2x.png"
                />
                <img
                  className={styles.captureIcon5}
                  alt=""
                  src="/capture@2x.png"
                />
              </div>
              <div className={styles.imagesParent}>
                <img
                  className={styles.imagesIcon5}
                  alt=""
                  src="/images@2x.png"
                />
                <img
                  className={styles.images1Icon5}
                  alt=""
                  src="/images-1@2x.png"
                />
                <img
                  className={styles.download1Icon5}
                  alt=""
                  src="/download-1@2x.png"
                />
                <img
                  className={styles.download5Icon11}
                  alt=""
                  src="/download-5@2x.png"
                />
                <img
                  className={styles.download2Icon5}
                  alt=""
                  src="/download-2@2x.png"
                />
                <div className={styles.agromiteParent}>
                  <div className={styles.agromite}>AGROMITE</div>
                  <img
                    className={styles.downloadIcon5}
                    alt=""
                    src="/download@2x.png"
                  />
                </div>
              </div>
              <img
                className={styles.partnersChild}
                alt=""
                src="/group-915@2x.png"
              />
            </div>
            <img className={styles.vectorIcon} alt="" src="/vector-23.svg" />
          </div>
          <div className={styles.ourProjects2}>
            <img
              className={styles.ourProjectsChild1}
              alt=""
              src="/vector-21.svg"
            />
            <img
              className={styles.ourProjectsChild2}
              alt=""
              src="/vector-22.svg"
            />
            <img
              className={styles.ourProjectsChild3}
              alt=""
              src="/vector-23.svg"
            />
            <div className={styles.frameParent11}>
              <div className={styles.frameParent12}>
                <div
                  className={styles.theNationssBestDigitalAgrParent}
                  data-animate-on-scroll
                >
                  <div className={styles.ourTeam}>
                    The nations’s best digital Agric Platform
                  </div>
                  <b className={styles.ourProjects3}>Our Projects</b>
                </div>
                <div className={styles.frameParent13}>
                  <div className={styles.frameParent14}>
                    <div
                      className={styles.projectCardGroup}
                      data-animate-on-scroll
                    >
                      <div className={styles.projectCard1}>
                        <div className={styles.northernGhana1}>
                          @Northern Ghana
                        </div>
                        <img
                          className={styles.baseIcon6}
                          alt=""
                          src="/base@2x.png"
                        />
                        <div className={styles.anEnumerationProgram1}>
                          An enumeration program by the Government of Ghana
                          through the Ministry of Food and Agriculture that
                          profiles farmers for inclusion.
                        </div>
                      </div>
                      <div className={styles.frameWrapper6}>
                        <div className={styles.farmerRegistrationContainer}>
                          <div
                            className={styles.farmerRegistration1}
                          >{`Farmer Registration   `}</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.nationwideParent2}
                      data-animate-on-scroll
                    >
                      <div className={styles.nationwide4}>@Nationwide</div>
                      <img
                        className={styles.baseIcon6}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.aFlagshipProgram1}>
                        A flagship program of the MoFA(Ghana) that used
                        Agrospectrum’s mobile application provide input Subsidy
                        to farmers.
                      </div>
                      <div className={styles.block1Parent3}>
                        <div className={styles.block15}>
                          <div className={styles.rectangle5} />
                        </div>
                        <div className={styles.eSubsidy1}>{`E-Subsidy `}</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent15}>
                    <div
                      className={styles.nationwideParent3}
                      data-animate-on-scroll
                    >
                      <div className={styles.nationwide5}>@Nationwide</div>
                      <img
                        className={styles.baseIcon6}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div
                        className={styles.ourClimateSmartSolution1}
                      >{`Our climate-smart solution empowers farmers across languages with vital information like weather forecasts, disaster preparedness & agro-advice.`}</div>
                      <div className={styles.block1Parent4}>
                        <div className={styles.block16}>
                          <div className={styles.rectangle6} />
                        </div>
                        <div className={styles.climateSmartProgram1}>
                          Climate Smart Program
                        </div>
                      </div>
                    </div>
                    <div className={styles.savannaGroup} data-animate-on-scroll>
                      <div className={styles.savanna1}>@Savanna</div>
                      <img
                        className={styles.baseIcon6}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.runByOurContainer1}>
                        <p className={styles.weProvideAn}>
                          <span
                            className={styles.runByOur}
                          >{`Run by our clients `}</span>
                          <span className={styles.mayAndLotte1}>
                            May and Lotte,
                          </span>
                          <span className={styles.aCreditProgram}>
                            {" "}
                            employed solutions from Agrospectum to streamline
                            purchases and payments for the aggregated
                            commodities.
                          </span>
                        </p>
                      </div>
                      <div className={styles.block1Parent5}>
                        <div className={styles.block17}>
                          <div className={styles.rectangle7} />
                        </div>
                        <div className={styles.aggregationProgram1}>
                          Aggregation Program
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent15}>
                    <div
                      className={styles.nationwideParent4}
                      data-animate-on-scroll
                    >
                      <div className={styles.nationwide6}>@nationwide</div>
                      <img
                        className={styles.baseIcon6}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.aCreditProgramContainer1}>
                        <span
                          className={styles.aCreditProgram}
                        >{`A credit program spearheaded by `}</span>
                        <span className={styles.mayAndLotte}>
                          May and Lotte,
                        </span>
                        <span className={styles.aCreditProgram}>
                          {" "}
                          leveraged our cutting-edge solutions at the crucial
                          redemption stage for a streamlined process.
                        </span>
                      </div>
                      <div className={styles.block1Parent6}>
                        <div className={styles.block18}>
                          <div className={styles.rectangle8} />
                        </div>
                        <div
                          className={styles.inputCreditMgt1}
                        >{`Input Credit Mgt. `}</div>
                      </div>
                    </div>
                    <div
                      className={styles.nationwideParent5}
                      data-animate-on-scroll
                    >
                      <div className={styles.nationwide7}>@Nationwide</div>
                      <img
                        className={styles.baseIcon11}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div
                        className={styles.imagineAFuture1}
                      >{`Imagine a future of digitization of the agribusiness were reliable technology become your allies for informed decision making `}</div>
                      <div className={styles.block1Parent7}>
                        <div className={styles.block15}>
                          <div className={styles.rectangle5} />
                        </div>
                        <div className={styles.farmerKyc1}>FARMER KYC</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.groupParent8} data-animate-on-scroll>
                <div className={styles.theRenownCompaniesThatTrusGroup}>
                  <div className={styles.theRenownCompaniesContainer1}>
                    <span>{`The renown companies that `}</span>
                    <span className={styles.trustUs1}>Trust Us</span>
                  </div>
                  <b className={styles.ourPartners1}>Our Partners</b>
                </div>
                <div className={styles.partners1}>
                  <div className={styles.imagesGroup}>
                    <img
                      className={styles.imagesIcon6}
                      alt=""
                      src="/images@2x.png"
                    />
                    <img
                      className={styles.images1Icon6}
                      alt=""
                      src="/images-1@2x.png"
                    />
                    <img
                      className={styles.download1Icon6}
                      alt=""
                      src="/download-1@2x.png"
                    />
                    <img
                      className={styles.download2Icon6}
                      alt=""
                      src="/download-2@2x.png"
                    />
                    <div className={styles.agromiteGroup}>
                      <div className={styles.agromite1}>AGROMITE</div>
                      <img
                        className={styles.downloadIcon6}
                        alt=""
                        src="/download@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.download5Group}>
                    <img
                      className={styles.download5Icon12}
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className={styles.download6Icon6}
                      alt=""
                      src="/download-6@2x.png"
                    />
                    <img
                      className={styles.download3Icon6}
                      alt=""
                      src="/download-3@2x.png"
                    />
                    <img
                      className={styles.captureIcon6}
                      alt=""
                      src="/capture@2x.png"
                    />
                  </div>
                  <img
                    className={styles.partnersItem}
                    alt=""
                    src="/group-915@2x.png"
                  />
                </div>
              </div>
              <img
                className={styles.projectArrowIcon5}
                alt=""
                src="/project-arrow.svg"
              />
            </div>
          </div>
          <div className={styles.ourProjects4}>
            <img
              className={styles.ourProjectsChild4}
              alt=""
              src="/vector-21.svg"
            />
            <img
              className={styles.ourProjectsChild5}
              alt=""
              src="/vector-22.svg"
            />
            <div className={styles.introAgrospectrum7}>
              <div
                className={styles.projectCardContainer}
                data-animate-on-scroll
              >
                <div className={styles.projectCard2}>
                  <div className={styles.northernGhana2}>@Northern Ghana</div>
                  <img
                    className={styles.baseIcon12}
                    alt=""
                    src="/base@2x.png"
                  />
                  <div className={styles.anEnumerationProgram2}>
                    An enumeration program by the Government of Ghana through
                    the Ministry of Food and Agriculture that profiles farmers
                    for inclusion.
                  </div>
                </div>
                <div className={styles.savannaContainer}>
                  <div className={styles.nationwide8}>@Nationwide</div>
                  <img
                    className={styles.baseIcon12}
                    alt=""
                    src="/base@2x.png"
                  />
                  <div className={styles.aFlagshipProgram2}>
                    A flagship program of the MoFA(Ghana) that used
                    Agrospectrum’s mobile application provide input Subsidy to
                    farmers.
                  </div>
                  <div className={styles.block1Parent8}>
                    <div className={styles.block110}>
                      <div className={styles.rectangle10} />
                    </div>
                    <div className={styles.eSubsidy2}>{`E-Subsidy `}</div>
                  </div>
                </div>
                <div className={styles.nationwideParent7}>
                  <div className={styles.nationwide9}>@nationwide</div>
                  <img
                    className={styles.baseIcon12}
                    alt=""
                    src="/base@2x.png"
                  />
                  <div className={styles.aCreditProgramContainer2}>
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
                  <div className={styles.block1Parent9}>
                    <div className={styles.block111}>
                      <div className={styles.rectangle11} />
                    </div>
                    <div
                      className={styles.inputCreditMgt2}
                    >{`Input Credit Mgt. `}</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent17} data-animate-on-scroll>
                <div className={styles.nationwideParent8}>
                  <div className={styles.nationwide10}>@Nationwide</div>
                  <img
                    className={styles.baseIcon12}
                    alt=""
                    src="/base@2x.png"
                  />
                  <div
                    className={styles.ourClimateSmartSolution2}
                  >{`Our climate-smart solution empowers farmers across languages with vital information like weather forecasts, disaster preparedness & agro-advice.`}</div>
                  <div className={styles.block1Parent10}>
                    <div className={styles.block112}>
                      <div className={styles.rectangle12} />
                    </div>
                    <div className={styles.climateSmartProgram2}>
                      Climate Smart Program
                    </div>
                  </div>
                </div>
                <div className={styles.savannaContainer}>
                  <div className={styles.savanna2}>@Savanna</div>
                  <img
                    className={styles.baseIcon12}
                    alt=""
                    src="/base@2x.png"
                  />
                  <div className={styles.runByOurContainer2}>
                    <p className={styles.weProvideAn}>
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
                  <div className={styles.block1Parent11}>
                    <div className={styles.block113}>
                      <div className={styles.rectangle13} />
                    </div>
                    <div className={styles.aggregationProgram2}>
                      Aggregation Program
                    </div>
                  </div>
                </div>
                <div className={styles.nationwideParent7}>
                  <div className={styles.nationwide11}>@Nationwide</div>
                  <img
                    className={styles.baseIcon17}
                    alt=""
                    src="/base@2x.png"
                  />
                  <div
                    className={styles.imagineAFuture2}
                  >{`Imagine a future of digitization of the agribusiness were reliable technology become your allies for informed decision making `}</div>
                  <div className={styles.block1Parent12}>
                    <div className={styles.block110}>
                      <div className={styles.rectangle10} />
                    </div>
                    <div className={styles.farmerKyc2}>FARMER KYC</div>
                  </div>
                </div>
              </div>
              <div className={styles.theNationssBest7}>
                The nations’s best digital Agric Platform
              </div>
              <b className={styles.ourProjects5} data-animate-on-scroll>
                Our Projects
              </b>
              <div className={styles.introAgrospectrumChild}>
                <div className={styles.farmerRegistrationFrame}>
                  <div
                    className={styles.farmerRegistration2}
                  >{`Farmer Registration   `}</div>
                </div>
              </div>
              <div className={styles.projectArrow2}>
                <div className={styles.navigation6}>
                  <div className={styles.div47}></div>
                  <div className={styles.divider6} />
                  <div className={styles.div48}></div>
                </div>
                <div className={styles.paginations6}>
                  <img
                    className={styles.paginationsChild11}
                    alt=""
                    src="/group-185.svg"
                  />
                  <img
                    className={styles.paginationsChild12}
                    alt=""
                    src="/group-188.svg"
                  />
                  <img
                    className={styles.paginationsChild13}
                    alt=""
                    src="/group-189.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.introAgrospectrum8}>
              <div
                className={styles.theRenownCompaniesThatTrusContainer}
                data-animate-on-scroll
              >
                <div className={styles.theRenownCompaniesContainer2}>
                  <span className={styles.weOfferAContainer1}>
                    <span>{`The renown companies that `}</span>
                    <span className={styles.trustUs2}>Trust Us</span>
                  </span>
                </div>
                <b className={styles.ourPartners2}>Our Partners</b>
              </div>
              <div className={styles.projectArrow3}>
                <div className={styles.paginations6}>
                  <img
                    className={styles.paginationsChild11}
                    alt=""
                    src="/group-185.svg"
                  />
                  <img
                    className={styles.paginationsChild12}
                    alt=""
                    src="/group-188.svg"
                  />
                  <img
                    className={styles.paginationsChild13}
                    alt=""
                    src="/group-189.svg"
                  />
                </div>
              </div>
            </div>
            <img
              className={styles.ourProjectsChild6}
              alt=""
              src="/vector-21.svg"
            />
            <div className={styles.partners2} data-animate-on-scroll>
              <div className={styles.imagesContainer}>
                <img
                  className={styles.imagesIcon7}
                  alt=""
                  src="/images@2x.png"
                />
                <img
                  className={styles.images1Icon7}
                  alt=""
                  src="/images-1@2x.png"
                />
                <img
                  className={styles.download1Icon7}
                  alt=""
                  src="/download-1@2x.png"
                />
                <img
                  className={styles.download5Icon13}
                  alt=""
                  src="/download-5@2x.png"
                />
                <img
                  className={styles.download2Icon7}
                  alt=""
                  src="/download-2@2x.png"
                />
                <div className={styles.agromiteContainer}>
                  <div className={styles.agromite2}>AGROMITE</div>
                  <img
                    className={styles.downloadIcon7}
                    alt=""
                    src="/download@2x.png"
                  />
                </div>
              </div>
              <div className={styles.download5Container}>
                <img
                  className={styles.download5Icon14}
                  alt=""
                  src="/download-5@2x.png"
                />
                <img
                  className={styles.download6Icon7}
                  alt=""
                  src="/download-6@2x.png"
                />
                <img
                  className={styles.download3Icon7}
                  alt=""
                  src="/download-3@2x.png"
                />
                <img
                  className={styles.captureIcon7}
                  alt=""
                  src="/capture@2x.png"
                />
              </div>
              <img
                className={styles.partnersInner}
                alt=""
                src="/group-915@2x.png"
              />
            </div>
          </div>
          <div className={styles.ourProjects6}>
            <img
              className={styles.ourProjectsChild7}
              alt=""
              src="/vector-21.svg"
            />
            <img
              className={styles.ourProjectsChild8}
              alt=""
              src="/vector-21.svg"
            />
            <div className={styles.vectorParent}>
              <img className={styles.frameChild2} alt="" src="/vector-22.svg" />
              <div className={styles.frameParent18}>
                <div
                  className={styles.theNationssBestDigitalAgrParent}
                  data-animate-on-scroll
                >
                  <div className={styles.ourTeam}>
                    The nations’s best digital Agric Platform
                  </div>
                  <b className={styles.ourProjects7}>Our Projects</b>
                </div>
                <div className={styles.frameParent19}>
                  <div className={styles.frameParent20} data-animate-on-scroll>
                    <div className={styles.projectCardParent1}>
                      <div className={styles.projectCard3}>
                        <div className={styles.northernGhana3}>
                          @Northern Ghana
                        </div>
                        <img
                          className={styles.baseIcon18}
                          alt=""
                          src="/base@2x.png"
                        />
                        <div className={styles.anEnumerationProgram3}>
                          An enumeration program by the Government of Ghana
                          through the Ministry of Food and Agriculture that
                          profiles farmers for inclusion.
                        </div>
                      </div>
                      <div className={styles.frameWrapper7}>
                        <div className={styles.farmerRegistrationWrapper1}>
                          <div
                            className={styles.farmerRegistration3}
                          >{`Farmer Registration   `}</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.nationwideParent10}>
                      <div className={styles.nationwide12}>@Nationwide</div>
                      <img
                        className={styles.baseIcon18}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.aFlagshipProgram3}>
                        A flagship program of the MoFA(Ghana) that used
                        Agrospectrum’s mobile application provide input Subsidy
                        to farmers.
                      </div>
                      <div className={styles.block1Parent13}>
                        <div className={styles.block115}>
                          <div className={styles.rectangle15} />
                        </div>
                        <div className={styles.eSubsidy3}>{`E-Subsidy `}</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent21} data-animate-on-scroll>
                    <div className={styles.nationwideParent11}>
                      <div className={styles.nationwide13}>@Nationwide</div>
                      <img
                        className={styles.baseIcon18}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div
                        className={styles.ourClimateSmartSolution3}
                      >{`Our climate-smart solution empowers farmers across languages with vital information like weather forecasts, disaster preparedness & agro-advice.`}</div>
                      <div className={styles.block1Parent14}>
                        <div className={styles.block116}>
                          <div className={styles.rectangle16} />
                        </div>
                        <div className={styles.climateSmartProgram3}>
                          Climate Smart Program
                        </div>
                      </div>
                    </div>
                    <div className={styles.nationwideParent11}>
                      <div className={styles.savanna3}>@Savanna</div>
                      <img
                        className={styles.baseIcon18}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.runByOurContainer3}>
                        <p className={styles.weProvideAn}>
                          <span
                            className={styles.runByOur}
                          >{`Run by our clients `}</span>
                          <span className={styles.mayAndLotte1}>
                            May and Lotte,
                          </span>
                          <span className={styles.aCreditProgram}>
                            {" "}
                            employed solutions from Agrospectum to streamline
                            purchases and payments for the aggregated
                            commodities.
                          </span>
                        </p>
                      </div>
                      <div className={styles.block1Parent15}>
                        <div className={styles.block117}>
                          <div className={styles.rectangle17} />
                        </div>
                        <div className={styles.aggregationProgram3}>
                          Aggregation Program
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent22} data-animate-on-scroll>
                    <div className={styles.nationwideParent11}>
                      <div className={styles.nationwide14}>@nationwide</div>
                      <img
                        className={styles.baseIcon18}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.aCreditProgramContainer3}>
                        <span
                          className={styles.aCreditProgram}
                        >{`A credit program spearheaded by `}</span>
                        <span className={styles.mayAndLotte}>
                          May and Lotte,
                        </span>
                        <span className={styles.aCreditProgram}>
                          {" "}
                          leveraged our cutting-edge solutions at the crucial
                          redemption stage for a streamlined process.
                        </span>
                      </div>
                      <div className={styles.block1Parent16}>
                        <div className={styles.block118}>
                          <div className={styles.rectangle18} />
                        </div>
                        <div
                          className={styles.inputCreditMgt3}
                        >{`Input Credit Mgt. `}</div>
                      </div>
                    </div>
                    <div className={styles.nationwideParent11}>
                      <div className={styles.nationwide15}>@Nationwide</div>
                      <img
                        className={styles.baseIcon23}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div
                        className={styles.imagineAFuture3}
                      >{`Imagine a future of digitization of the agribusiness were reliable technology become your allies for informed decision making `}</div>
                      <div className={styles.block1Parent17}>
                        <div className={styles.block115}>
                          <div className={styles.rectangle15} />
                        </div>
                        <div className={styles.farmerKyc3}>FARMER KYC</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.groupParent9} data-animate-on-scroll>
                <div className={styles.theRenownCompaniesThatTrusParent1}>
                  <div className={styles.theRenownCompaniesContainer4}>
                    <span>{`The renown companies that `}</span>
                    <span className={styles.trustUs3}>Trust Us</span>
                  </div>
                  <b className={styles.ourPartners3}>Our Partners</b>
                </div>
                <div className={styles.partners3}>
                  <div className={styles.imagesParent1}>
                    <img
                      className={styles.imagesIcon8}
                      alt=""
                      src="/images@2x.png"
                    />
                    <img
                      className={styles.images1Icon8}
                      alt=""
                      src="/images-1@2x.png"
                    />
                    <img
                      className={styles.download1Icon8}
                      alt=""
                      src="/download-1@2x.png"
                    />
                    <img
                      className={styles.download5Icon15}
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className={styles.download2Icon8}
                      alt=""
                      src="/download-2@2x.png"
                    />
                    <div className={styles.agromiteParent1}>
                      <div className={styles.agromite3}>AGROMITE</div>
                      <img
                        className={styles.downloadIcon8}
                        alt=""
                        src="/download@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.download5Parent1}>
                    <img
                      className={styles.download5Icon16}
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className={styles.download6Icon8}
                      alt=""
                      src="/download-6@2x.png"
                    />
                    <img
                      className={styles.download3Icon8}
                      alt=""
                      src="/download-3@2x.png"
                    />
                    <img
                      className={styles.captureIcon8}
                      alt=""
                      src="/capture@2x.png"
                    />
                  </div>
                  <img
                    className={styles.partnersChild1}
                    alt=""
                    src="/group-915@2x.png"
                  />
                </div>
              </div>
              <div className={styles.projectArrow4}>
                <div className={styles.paginations5}>
                  <img
                    className={styles.paginationsChild8}
                    alt=""
                    src="/group-185.svg"
                  />
                  <img
                    className={styles.paginationsChild9}
                    alt=""
                    src="/group-188.svg"
                  />
                  <img
                    className={styles.paginationsChild10}
                    alt=""
                    src="/group-189.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div49}>
            <img className={styles.child} alt="" src="/vector-21.svg" />
            <img className={styles.item} alt="" src="/vector-22.svg" />
            <img className={styles.inner} alt="" src="/vector-23.svg" />
            <div className={styles.frameParent23}>
              <div className={styles.frameParent24}>
                <div
                  className={styles.theNationssBestDigitalAgrParent}
                  data-animate-on-scroll
                >
                  <div className={styles.ourTeam}>
                    The nations’s best digital Agric Platform
                  </div>
                  <b className={styles.ourProjects8}>Our Projects</b>
                </div>
                <div className={styles.frameParent25}>
                  <div className={styles.frameParent26}>
                    <div
                      className={styles.projectCardParent2}
                      data-animate-on-scroll
                    >
                      <div className={styles.projectCard4}>
                        <div className={styles.northernGhana4}>
                          @Northern Ghana
                        </div>
                        <img
                          className={styles.baseIcon24}
                          alt=""
                          src="/base@2x.png"
                        />
                        <div className={styles.anEnumerationProgram4}>
                          An enumeration program by the Government of Ghana
                          through the Ministry of Food and Agriculture that
                          profiles farmers for inclusion.
                        </div>
                      </div>
                      <div className={styles.frameWrapper8}>
                        <div className={styles.farmerRegistrationWrapper2}>
                          <div
                            className={styles.farmerRegistration4}
                          >{`Farmer Registration   `}</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.nationwideParent14}
                      data-animate-on-scroll
                    >
                      <div className={styles.nationwide16}>@Nationwide</div>
                      <img
                        className={styles.baseIcon24}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.aFlagshipProgram4}>
                        A flagship program of the MoFA(Ghana) that used
                        Agrospectrum’s mobile application provide input Subsidy
                        to farmers.
                      </div>
                      <div className={styles.block1Parent18}>
                        <div className={styles.block120}>
                          <div className={styles.rectangle20} />
                        </div>
                        <div className={styles.eSubsidy4}>{`E-Subsidy `}</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent27}>
                    <div
                      className={styles.nationwideParent15}
                      data-animate-on-scroll
                    >
                      <div className={styles.nationwide17}>@Nationwide</div>
                      <img
                        className={styles.baseIcon24}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div
                        className={styles.ourClimateSmartSolution4}
                      >{`Our climate-smart solution empowers farmers across languages with vital information like weather forecasts, disaster preparedness & agro-advice.`}</div>
                      <div className={styles.block1Parent19}>
                        <div className={styles.block121}>
                          <div className={styles.rectangle21} />
                        </div>
                        <div className={styles.climateSmartProgram4}>
                          Climate Smart Program
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.savannaParent2}
                      data-animate-on-scroll
                    >
                      <div className={styles.savanna4}>@Savanna</div>
                      <img
                        className={styles.baseIcon24}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.runByOurContainer4}>
                        <p className={styles.weProvideAn}>
                          <span
                            className={styles.runByOur}
                          >{`Run by our clients `}</span>
                          <span className={styles.mayAndLotte1}>
                            May and Lotte,
                          </span>
                          <span className={styles.aCreditProgram}>
                            {" "}
                            employed solutions from Agrospectum to streamline
                            purchases and payments for the aggregated
                            commodities.
                          </span>
                        </p>
                      </div>
                      <div className={styles.block1Parent20}>
                        <div className={styles.block122}>
                          <div className={styles.rectangle22} />
                        </div>
                        <div className={styles.aggregationProgram4}>
                          Aggregation Program
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent27}>
                    <div
                      className={styles.nationwideParent16}
                      data-animate-on-scroll
                    >
                      <div className={styles.nationwide18}>@nationwide</div>
                      <img
                        className={styles.baseIcon24}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.aCreditProgramContainer4}>
                        <span
                          className={styles.aCreditProgram}
                        >{`A credit program spearheaded by `}</span>
                        <span className={styles.mayAndLotte}>
                          May and Lotte,
                        </span>
                        <span className={styles.aCreditProgram}>
                          {" "}
                          leveraged our cutting-edge solutions at the crucial
                          redemption stage for a streamlined process.
                        </span>
                      </div>
                      <div className={styles.block1Parent21}>
                        <div className={styles.block123}>
                          <div className={styles.rectangle23} />
                        </div>
                        <div
                          className={styles.inputCreditMgt4}
                        >{`Input Credit Mgt. `}</div>
                      </div>
                    </div>
                    <div
                      className={styles.nationwideParent17}
                      data-animate-on-scroll
                    >
                      <div className={styles.nationwide19}>@Nationwide</div>
                      <img
                        className={styles.baseIcon29}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div
                        className={styles.imagineAFuture4}
                      >{`Imagine a future of digitization of the agribusiness were reliable technology become your allies for informed decision making `}</div>
                      <div className={styles.block1Parent22}>
                        <div className={styles.block120}>
                          <div className={styles.rectangle20} />
                        </div>
                        <div className={styles.farmerKyc4}>FARMER KYC</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.groupParent10} data-animate-on-scroll>
                <div className={styles.theRenownCompaniesThatTrusParent2}>
                  <div className={styles.theRenownCompaniesContainer5}>
                    <span>{`The renown companies that `}</span>
                    <span className={styles.trustUs4}>Trust Us</span>
                  </div>
                  <b className={styles.ourPartners4}>Our Partners</b>
                </div>
                <div className={styles.partners4}>
                  <div className={styles.imagesParent2}>
                    <img
                      className={styles.imagesIcon9}
                      alt=""
                      src="/images@2x.png"
                    />
                    <img
                      className={styles.images1Icon9}
                      alt=""
                      src="/images-1@2x.png"
                    />
                    <img
                      className={styles.download1Icon9}
                      alt=""
                      src="/download-1@2x.png"
                    />
                    <img
                      className={styles.download2Icon9}
                      alt=""
                      src="/download-2@2x.png"
                    />
                    <div className={styles.agromiteParent2}>
                      <div className={styles.agromite4}>AGROMITE</div>
                      <img
                        className={styles.downloadIcon9}
                        alt=""
                        src="/download@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.download5Parent2}>
                    <img
                      className={styles.download5Icon17}
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className={styles.download6Icon9}
                      alt=""
                      src="/download-6@2x.png"
                    />
                    <img
                      className={styles.download3Icon9}
                      alt=""
                      src="/download-3@2x.png"
                    />
                    <img
                      className={styles.captureIcon9}
                      alt=""
                      src="/capture@2x.png"
                    />
                  </div>
                  <img
                    className={styles.partnersChild2}
                    alt=""
                    src="/group-915@2x.png"
                  />
                </div>
              </div>
              <img
                className={styles.projectArrowIcon6}
                alt=""
                src="/project-arrow.svg"
              />
            </div>
          </div>
        </section>
        <section className={styles.faqTeamFaqCta}>
          <div className={styles.teamFaqCta}>
            <img
              className={styles.teamFaqCtaChild}
              alt=""
              src="/vector-21.svg"
            />
            <img
              className={styles.teamFaqCtaItem}
              alt=""
              src="/vector-21.svg"
            />
            <div className={styles.outteam}>
              <div className={styles.ourTeam}>
                Our Team - The big brains behind Agrospectrum
              </div>
              <b className={styles.ourTeamsContainer}>
                <span>{`Our Teams & `}</span>
                <span className={styles.experts}>Experts</span>
              </b>
            </div>
            <div className={styles.cardgropupo} data-animate-on-scroll>
              <div className={styles.xorse}>
                <div className={styles.xoseAhlijaTeam}>
                  <img
                    className={styles.baseIcon30}
                    alt=""
                    src="/base@2x.png"
                  />
                  <div className={styles.block1Parent23}>
                    <div className={styles.block125}>
                      <div className={styles.rectangle25} />
                    </div>
                    <div className={styles.xoseAhlijahSweParent}>
                      <div className={styles.xoseAhlijahSwe}>
                        Xose Ahlijah, SWE
                      </div>
                      <div className={styles.snrTechnologyLead}>
                        Snr Technology Lead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.castro}>
                <img className={styles.baseIcon31} alt="" src="/base@2x.png" />
                <div className={styles.block126}>
                  <div className={styles.rectangle26} />
                </div>
                <div className={styles.castroAntwiDansoParent}>
                  <div className={styles.castroAntwiDanso}>
                    Castro Antwi-Danso
                  </div>
                  <div className={styles.generalManager}>General Manager</div>
                </div>
              </div>
              <div className={styles.ottisApalooTeam}>
                <img className={styles.baseIcon32} alt="" src="/base@2x.png" />
                <div className={styles.block1Parent24}>
                  <div className={styles.block127}>
                    <div className={styles.rectangle27} />
                  </div>
                  <div className={styles.otisAApalooParent}>
                    <div className={styles.otisAApaloo}>Otis A. Apaloo</div>
                    <div className={styles.dataAnalyst}>{`Data Analyst `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.nav4}>
              <div className={styles.navChild} />
              <div className={styles.navItem} />
              <div className={styles.navChild} />
            </div>
            <img
              className={styles.teamFaqCtaInner}
              alt=""
              src="/vector-21.svg"
            />
            <div className={styles.cta}>
              <div className={styles.base} data-animate-on-scroll />
              <button className={styles.base1} onClick={onBaseClick} />
              <div className={styles.buttonArrow}>
                <img className={styles.baseIcon33} alt="" src="/base.svg" />
                <img
                  className={styles.arrowRightIcon}
                  alt=""
                  src="/arrowright.svg"
                />
              </div>
              <div className={styles.viewProducts}>view produCts</div>
              <div className={styles.base2} />
              <b
                className={styles.weSupportAgribusinessContainer}
                data-animate-on-scroll
              >
                <p className={styles.weProvideAn}>
                  We support Agribusiness Industry
                </p>
                <p className={styles.weProvideAn}>
                  To Utilize modern Equipments
                </p>
                <p className={styles.weProvideAn}>for a Better Result.</p>
              </b>
              <img
                className={styles.gradientsIcon}
                alt=""
                src="/gradients@2x.png"
                data-animate-on-scroll
              />
            </div>
            <div className={styles.faqParent} data-animate-on-scroll>
              <b className={styles.faq}>FAQ</b>
              <div className={styles.frequentlyAskedQueParent}>
                <b className={styles.frequentlyAskedQueContainer}>
                  <p className={styles.weProvideAn}>{`Frequently `}</p>
                  <p className={styles.weProvideAn}>Asked Questions</p>
                </b>
                <div className={styles.allowsOrganizations}>
                  <p
                    className={styles.weProvideAn}
                  >{`Browse through our mostly asked questions and `}</p>
                  <p className={styles.weProvideAn}>
                    enquiries for fast response.
                  </p>
                </div>
                <div className={styles.whatIsMeanByHostParent}>
                  <b className={styles.whatIsMean}>What does the platform do</b>
                  <b className={styles.whatIsHosting}>
                    How can I access the platform ?
                  </b>
                  <b className={styles.isWebHosting}>Is the platform free ?</b>
                  <b className={styles.canIHost}>
                    What do i stand to benefit ?
                  </b>
                </div>
              </div>
              <div className={styles.iconParent}>
                <img className={styles.icon} alt="" src="/icon@2x.png" />
                <div className={styles.rectangle28} />
                <img className={styles.icon1} alt="" src="/icon@2x.png" />
                <div className={styles.rectangle29} />
                <img className={styles.icon2} alt="" src="/icon@2x.png" />
                <div className={styles.rectangle30} />
                <img className={styles.icon3} alt="" src="/icon@2x.png" />
                <div className={styles.rectangle31} />
              </div>
            </div>
          </div>
          <div className={styles.teamFaqCta1}>
            <img
              className={styles.teamFaqCtaChild1}
              alt=""
              src="/vector-23.svg"
            />
            <div className={styles.outteam1}>
              <div className={styles.ourTeam}>
                Our Team - The big brains behind Agrospectrum
              </div>
              <b className={styles.ourTeamsContainer1}>
                <span>{`Our Teams & `}</span>
                <span className={styles.experts}>Experts</span>
              </b>
            </div>
            <div className={styles.cardgropupo1}>
              <div className={styles.xorse1} data-animate-on-scroll>
                <div className={styles.xoseAhlijaTeam1}>
                  <img
                    className={styles.baseIcon34}
                    alt=""
                    src="/base@2x.png"
                  />
                  <div className={styles.block1Parent25}>
                    <div className={styles.block128}>
                      <div className={styles.rectangle32} />
                    </div>
                    <div className={styles.xoseAhlijahSweGroup}>
                      <div className={styles.xoseAhlijahSwe1}>
                        Xose Ahlijah, SWE
                      </div>
                      <div className={styles.snrTechnologyLead1}>
                        Snr Technology Lead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.castro1} data-animate-on-scroll>
                <img className={styles.baseIcon35} alt="" src="/base@2x.png" />
                <div className={styles.block129}>
                  <div className={styles.rectangle33} />
                </div>
                <div className={styles.castroAntwiDansoGroup}>
                  <div className={styles.castroAntwiDanso1}>
                    Castro Antwi-Danso
                  </div>
                  <div className={styles.generalManager1}>General Manager</div>
                </div>
              </div>
              <div className={styles.ottisApalooTeam1} data-animate-on-scroll>
                <img className={styles.baseIcon36} alt="" src="/base@2x.png" />
                <div className={styles.block1Parent26}>
                  <div className={styles.block130}>
                    <div className={styles.rectangle34} />
                  </div>
                  <div className={styles.otisAApalooGroup}>
                    <div className={styles.otisAApaloo1}>Otis A. Apaloo</div>
                    <div className={styles.dataAnalyst1}>{`Data Analyst `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.nav5}>
              <div className={styles.navChild1} />
              <div className={styles.navChild2} />
              <div className={styles.navChild1} />
            </div>
            <img
              className={styles.teamFaqCtaChild2}
              alt=""
              src="/vector-21.svg"
            />
            <img
              className={styles.teamFaqCtaChild3}
              alt=""
              src="/vector-22.svg"
            />
            <div className={styles.cta1}>
              <div className={styles.base3} data-animate-on-scroll />
              <div className={styles.base4} />
              <div className={styles.buttonArrow1}>
                <img className={styles.baseIcon37} alt="" src="/base.svg" />
                <img
                  className={styles.arrowRightIcon1}
                  alt=""
                  src="/arrowright.svg"
                />
              </div>
              <div className={styles.viewProducts1}>view produCts</div>
              <div className={styles.base5} />
              <b
                className={styles.weSupportAgribusinessContainer1}
                data-animate-on-scroll
              >
                <p className={styles.weProvideAn}>
                  We support Agribusiness Industry
                </p>
                <p className={styles.weProvideAn}>
                  To Utilize modern Equipments
                </p>
                <p className={styles.weProvideAn}>for a Better Result.</p>
              </b>
              <img
                className={styles.gradientsIcon1}
                alt=""
                src="/gradients@2x.png"
                data-animate-on-scroll
              />
            </div>
            <div className={styles.faqGroup} data-animate-on-scroll>
              <b className={styles.faq1}>FAQ</b>
              <div className={styles.frequentlyAskedQueGroup}>
                <b className={styles.frequentlyAskedQueContainer1}>
                  <p className={styles.weProvideAn}>{`Frequently `}</p>
                  <p className={styles.weProvideAn}>Asked Questions</p>
                </b>
                <div className={styles.allowsOrganizations1}>
                  <p
                    className={styles.weProvideAn}
                  >{`Browse through our mostly asked questions and `}</p>
                  <p className={styles.weProvideAn}>
                    enquiries for fast response.
                  </p>
                </div>
                <div className={styles.whatIsMeanByHostGroup}>
                  <b className={styles.whatIsMean1}>
                    What does the platform do
                  </b>
                  <b className={styles.whatIsHosting1}>
                    How can I access the platform ?
                  </b>
                  <b className={styles.isWebHosting1}>Is the platform free ?</b>
                  <b className={styles.canIHost1}>
                    What do i stand to benefit ?
                  </b>
                </div>
              </div>
              <div className={styles.iconGroup}>
                <img className={styles.icon4} alt="" src="/icon@2x.png" />
                <div className={styles.rectangle35} />
                <img className={styles.icon5} alt="" src="/icon@2x.png" />
                <div className={styles.rectangle36} />
                <img className={styles.icon6} alt="" src="/icon@2x.png" />
                <div className={styles.rectangle37} />
                <img className={styles.icon7} alt="" src="/icon@2x.png" />
                <div className={styles.rectangle38} />
              </div>
            </div>
          </div>
          <div className={styles.teamFaqCta2}>
            <img
              className={styles.teamFaqCtaChild4}
              alt=""
              src="/vector-23.svg"
            />
            <div className={styles.outteam2}>
              <div className={styles.ourTeam}>
                Our Team - The big brains behind Agrospectrum
              </div>
              <b className={styles.ourTeamsContainer2}>
                <span>{`Our Teams & `}</span>
                <span className={styles.experts}>Experts</span>
              </b>
            </div>
            <div className={styles.cardgropupo2}>
              <div className={styles.xorse2} data-animate-on-scroll>
                <div className={styles.xoseAhlijaTeam2}>
                  <img
                    className={styles.baseIcon38}
                    alt=""
                    src="/base@2x.png"
                  />
                  <div className={styles.block1Parent27}>
                    <div className={styles.block131}>
                      <div className={styles.rectangle39} />
                    </div>
                    <div className={styles.xoseAhlijahSweContainer}>
                      <div className={styles.xoseAhlijahSwe2}>
                        Xose Ahlijah, SWE
                      </div>
                      <div className={styles.snrTechnologyLead2}>
                        Snr Technology Lead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.castro2} data-animate-on-scroll>
                <img className={styles.baseIcon39} alt="" src="/base@2x.png" />
                <div className={styles.block132}>
                  <div className={styles.rectangle40} />
                </div>
                <div className={styles.castroAntwiDansoContainer}>
                  <div className={styles.castroAntwiDanso2}>
                    Castro Antwi-Danso
                  </div>
                  <div className={styles.generalManager2}>General Manager</div>
                </div>
              </div>
              <div className={styles.ottisApalooTeam2} data-animate-on-scroll>
                <img className={styles.baseIcon40} alt="" src="/base@2x.png" />
                <div className={styles.block1Parent28}>
                  <div className={styles.block133}>
                    <div className={styles.rectangle41} />
                  </div>
                  <div className={styles.otisAApalooContainer}>
                    <div className={styles.otisAApaloo2}>Otis A. Apaloo</div>
                    <div className={styles.dataAnalyst2}>{`Data Analyst `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.nav6}>
              <div className={styles.navChild4} />
              <div className={styles.navChild5} />
              <div className={styles.navChild4} />
            </div>
            <img
              className={styles.teamFaqCtaChild5}
              alt=""
              src="/vector-21.svg"
            />
            <img
              className={styles.teamFaqCtaChild6}
              alt=""
              src="/vector-22.svg"
            />
            <div className={styles.cta2}>
              <div className={styles.base6} data-animate-on-scroll />
              <div className={styles.base7} data-animate-on-scroll />
              <div className={styles.buttonArrow2}>
                <img className={styles.baseIcon41} alt="" src="/base.svg" />
                <img
                  className={styles.arrowRightIcon2}
                  alt=""
                  src="/arrowright.svg"
                />
              </div>
              <div className={styles.viewProducts2}>view produCts</div>
              <div className={styles.base8} />
              <b
                className={styles.weSupportAgribusinessContainer2}
                data-animate-on-scroll
              >
                <p className={styles.weProvideAn}>
                  We support Agribusiness Industry
                </p>
                <p className={styles.weProvideAn}>
                  To Utilize modern Equipments
                </p>
                <p className={styles.weProvideAn}>for a Better Result.</p>
              </b>
              <img
                className={styles.gradientsIcon2}
                alt=""
                src="/gradients@2x.png"
                data-animate-on-scroll
              />
            </div>
            <div className={styles.faqContainer} data-animate-on-scroll>
              <b className={styles.faq2}>FAQ</b>
              <div className={styles.frequentlyAskedQueParent1}>
                <b className={styles.frequentlyAskedQueContainer2}>
                  <p className={styles.weProvideAn}>{`Frequently `}</p>
                  <p className={styles.weProvideAn}>Asked Questions</p>
                </b>
                <div className={styles.allowsOrganizations2}>
                  <p
                    className={styles.weProvideAn}
                  >{`Browse through our mostly asked questions and `}</p>
                  <p className={styles.weProvideAn}>
                    enquiries for fast response.
                  </p>
                </div>
                <div className={styles.whatIsMeanByHostContainer}>
                  <b className={styles.whatIsMean2}>
                    What does the platform do
                  </b>
                  <b className={styles.whatIsHosting2}>
                    How can I access the platform ?
                  </b>
                  <b className={styles.isWebHosting2}>Is the platform free ?</b>
                  <b className={styles.canIHost2}>
                    What do i stand to benefit ?
                  </b>
                </div>
              </div>
              <div className={styles.iconContainer}>
                <img className={styles.icon8} alt="" src="/icon@2x.png" />
                <div className={styles.rectangle42} />
                <img className={styles.icon9} alt="" src="/icon@2x.png" />
                <div className={styles.rectangle43} />
                <img className={styles.icon10} alt="" src="/icon@2x.png" />
                <div className={styles.rectangle44} />
                <img className={styles.icon11} alt="" src="/icon@2x.png" />
                <div className={styles.rectangle45} />
              </div>
            </div>
          </div>
          <div className={styles.teamFaqCta3}>
            <img
              className={styles.teamFaqCtaChild7}
              alt=""
              src="/vector-23.svg"
            />
            <div className={styles.outteam3}>
              <div className={styles.ourTeam}>
                Our Team - The big brains behind Agrospectrum
              </div>
              <b className={styles.ourTeamsContainer3}>
                <span>{`Our Teams & `}</span>
                <span className={styles.experts}>Experts</span>
              </b>
            </div>
            <div className={styles.cardgropupo3} data-animate-on-scroll>
              <div className={styles.xorse3} data-animate-on-scroll>
                <div className={styles.xoseAhlijaTeam3}>
                  <img
                    className={styles.baseIcon42}
                    alt=""
                    src="/base@2x.png"
                  />
                  <div className={styles.block1Parent29}>
                    <div className={styles.block134}>
                      <div className={styles.rectangle46} />
                    </div>
                    <div className={styles.xoseAhlijahSweParent1}>
                      <div className={styles.xoseAhlijahSwe3}>
                        Xose Ahlijah, SWE
                      </div>
                      <div className={styles.snrTechnologyLead3}>
                        Snr Technology Lead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.castro3} data-animate-on-scroll>
                <img className={styles.baseIcon43} alt="" src="/base@2x.png" />
                <div className={styles.block135}>
                  <div className={styles.rectangle47} />
                </div>
                <div className={styles.castroAntwiDansoParent1}>
                  <div className={styles.castroAntwiDanso3}>
                    Castro Antwi-Danso
                  </div>
                  <div className={styles.generalManager3}>General Manager</div>
                </div>
              </div>
              <div className={styles.ottisApalooTeam3} data-animate-on-scroll>
                <img className={styles.baseIcon44} alt="" src="/base@2x.png" />
                <div className={styles.block1Parent30}>
                  <div className={styles.block136}>
                    <div className={styles.rectangle48} />
                  </div>
                  <div className={styles.otisAApalooParent1}>
                    <div className={styles.otisAApaloo3}>Otis A. Apaloo</div>
                    <div className={styles.dataAnalyst3}>{`Data Analyst `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.nav7}>
              <div className={styles.navChild7} />
              <div className={styles.navChild8} />
              <div className={styles.navChild7} />
            </div>
            <img
              className={styles.teamFaqCtaChild8}
              alt=""
              src="/vector-21.svg"
            />
            <img
              className={styles.teamFaqCtaChild9}
              alt=""
              src="/vector-22.svg"
            />
            <div className={styles.cta3}>
              <div className={styles.base9} data-animate-on-scroll />
              <div className={styles.baseParent} data-animate-on-scroll>
                <div className={styles.base10} />
                <img className={styles.baseIcon45} alt="" src="/base.svg" />
                <img
                  className={styles.arrowRightIcon3}
                  alt=""
                  src="/arrowright.svg"
                />
                <div className={styles.viewProducts3}>view produCts</div>
              </div>
              <div className={styles.base11} />
              <b
                className={styles.weSupportAgribusinessContainer3}
                data-animate-on-scroll
              >
                <p className={styles.weProvideAn}>
                  We support Agribusiness Industry
                </p>
                <p className={styles.weProvideAn}>
                  To Utilize modern Equipments
                </p>
                <p className={styles.weProvideAn}>for a Better Result.</p>
              </b>
              <img
                className={styles.gradientsIcon3}
                alt=""
                src="/gradients@2x.png"
                data-animate-on-scroll
              />
            </div>
            <div className={styles.faqParent1} data-animate-on-scroll>
              <b className={styles.faq3}>FAQ</b>
              <div className={styles.frequentlyAskedQueParent2}>
                <b className={styles.frequentlyAskedQueContainer3}>
                  <p className={styles.weProvideAn}>{`Frequently `}</p>
                  <p className={styles.weProvideAn}>Asked Questions</p>
                </b>
                <div className={styles.allowsOrganizations3}>
                  <p
                    className={styles.weProvideAn}
                  >{`Browse through our mostly asked questions and `}</p>
                  <p className={styles.weProvideAn}>
                    enquiries for fast response.
                  </p>
                </div>
                <div className={styles.whatIsMeanByHostParent1}>
                  <b className={styles.whatIsMean3}>
                    What does the platform do
                  </b>
                  <b className={styles.whatIsHosting3}>
                    How can I access the platform ?
                  </b>
                  <b className={styles.isWebHosting3}>Is the platform free ?</b>
                  <b className={styles.canIHost3}>
                    What do i stand to benefit ?
                  </b>
                </div>
              </div>
              <img
                className={styles.frameChild3}
                alt=""
                src="/group-893@2x.png"
              />
            </div>
          </div>
          <div className={styles.teamFaqCta4}>
            <img
              className={styles.teamFaqCtaChild10}
              alt=""
              src="/vector-23.svg"
            />
            <div className={styles.outteam4}>
              <div className={styles.ourTeam}>
                Our Team - The big brains behind Agrospectrum
              </div>
              <b className={styles.ourTeamsContainer4}>
                <span>{`Our Teams & `}</span>
                <span className={styles.experts}>Experts</span>
              </b>
            </div>
            <div className={styles.cardgropupo4}>
              <div className={styles.xorse4} data-animate-on-scroll>
                <div className={styles.xoseAhlijaTeam4}>
                  <img
                    className={styles.baseIcon46}
                    alt=""
                    src="/base@2x.png"
                  />
                  <div className={styles.block1Parent31}>
                    <div className={styles.block137}>
                      <div className={styles.rectangle49} />
                    </div>
                    <div className={styles.xoseAhlijahSweParent2}>
                      <div className={styles.xoseAhlijahSwe4}>
                        Xose Ahlijah, SWE
                      </div>
                      <div className={styles.snrTechnologyLead4}>
                        Snr Technology Lead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.castro4} data-animate-on-scroll>
                <img className={styles.baseIcon47} alt="" src="/base@2x.png" />
                <div className={styles.block138}>
                  <div className={styles.rectangle50} />
                </div>
                <div className={styles.castroAntwiDansoParent2}>
                  <div className={styles.castroAntwiDanso4}>
                    Castro Antwi-Danso
                  </div>
                  <div className={styles.generalManager4}>General Manager</div>
                </div>
              </div>
              <div className={styles.ottisApalooTeam4} data-animate-on-scroll>
                <img className={styles.baseIcon48} alt="" src="/base@2x.png" />
                <div className={styles.block1Parent32}>
                  <div className={styles.block139}>
                    <div className={styles.rectangle51} />
                  </div>
                  <div className={styles.otisAApalooParent2}>
                    <div className={styles.otisAApaloo4}>Otis A. Apaloo</div>
                    <div className={styles.dataAnalyst4}>{`Data Analyst `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.nav8}>
              <div className={styles.navChild10} />
              <div className={styles.navChild11} />
              <div className={styles.navChild10} />
            </div>
            <img
              className={styles.teamFaqCtaChild11}
              alt=""
              src="/vector-21.svg"
            />
            <img
              className={styles.teamFaqCtaChild12}
              alt=""
              src="/vector-22.svg"
            />
            <div className={styles.cta4}>
              <div className={styles.base12} data-animate-on-scroll />
              <div className={styles.baseGroup}>
                <div className={styles.base13} />
                <img className={styles.baseIcon49} alt="" src="/base.svg" />
                <img
                  className={styles.arrowRightIcon4}
                  alt=""
                  src="/arrowright.svg"
                />
                <div className={styles.viewProducts4}>view produCts</div>
              </div>
              <div className={styles.base14} />
              <b
                className={styles.weSupportAgribusinessContainer4}
                data-animate-on-scroll
              >
                <p className={styles.weProvideAn}>
                  We support Agribusiness Industry
                </p>
                <p className={styles.weProvideAn}>
                  To Utilize modern Equipments
                </p>
                <p className={styles.weProvideAn}>for a Better Result.</p>
              </b>
              <img
                className={styles.gradientsIcon4}
                alt=""
                src="/gradients@2x.png"
                data-animate-on-scroll
              />
            </div>
            <div className={styles.faqParent2} data-animate-on-scroll>
              <b className={styles.faq4}>FAQ</b>
              <div className={styles.frequentlyAskedQueParent3}>
                <b className={styles.frequentlyAskedQueContainer4}>
                  <p className={styles.weProvideAn}>{`Frequently `}</p>
                  <p className={styles.weProvideAn}>Asked Questions</p>
                </b>
                <div className={styles.allowsOrganizations4}>
                  <p
                    className={styles.weProvideAn}
                  >{`Browse through our mostly asked questions and `}</p>
                  <p className={styles.weProvideAn}>
                    enquiries for fast response.
                  </p>
                </div>
                <div className={styles.whatIsMeanByHostParent2}>
                  <b className={styles.whatIsMean4}>
                    What does the platform do
                  </b>
                  <b className={styles.whatIsHosting4}>
                    How can I access the platform ?
                  </b>
                  <b className={styles.isWebHosting4}>Is the platform free ?</b>
                  <b className={styles.canIHost4}>
                    What do i stand to benefit ?
                  </b>
                </div>
              </div>
              <img
                className={styles.frameChild4}
                alt=""
                src="/group-893@2x.png"
              />
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <div className={styles.footerDesktop}>
            <div className={styles.dektopFooter} data-animate-on-scroll>
              <div className={styles.footerlogo}>
                <div className={styles.partnersBanner3}>
                  <div className={styles.partnerLogosParent}>
                    <div className={styles.partnerLogos5}>
                      <img
                        className={styles.download2Icon10}
                        alt=""
                        src="/download-2@2x.png"
                      />
                      <img
                        className={styles.download5Icon18}
                        alt=""
                        src="/download-5@2x.png"
                      />
                      <img
                        className={styles.downloadIcon10}
                        alt=""
                        src="/download@2x.png"
                      />
                      <img
                        className={styles.download5Icon19}
                        alt=""
                        src="/download-5@2x.png"
                      />
                      <img
                        className={styles.download3Icon10}
                        alt=""
                        src="/download-3@2x.png"
                      />
                      <img
                        className={styles.captureIcon10}
                        alt=""
                        src="/capture@2x.png"
                      />
                      <img
                        className={styles.mofaColorIcon5}
                        alt=""
                        src="/mofa-color@2x.png"
                      />
                      <img
                        className={styles.imagesIcon10}
                        alt=""
                        src="/images@2x.png"
                      />
                      <img
                        className={styles.download6Icon10}
                        alt=""
                        src="/download-6@2x.png"
                      />
                      <img
                        className={styles.images1Icon10}
                        alt=""
                        src="/images-1@2x.png"
                      />
                      <img
                        className={styles.download1Icon10}
                        alt=""
                        src="/download-1@2x.png"
                      />
                    </div>
                    <div className={styles.partnerLogos6}>
                      <img
                        className={styles.download2Icon10}
                        alt=""
                        src="/download-2@2x.png"
                      />
                      <img
                        className={styles.download5Icon18}
                        alt=""
                        src="/download-5@2x.png"
                      />
                      <img
                        className={styles.downloadIcon10}
                        alt=""
                        src="/download@2x.png"
                      />
                      <img
                        className={styles.download5Icon19}
                        alt=""
                        src="/download-5@2x.png"
                      />
                      <img
                        className={styles.download3Icon10}
                        alt=""
                        src="/download-3@2x.png"
                      />
                      <img
                        className={styles.captureIcon10}
                        alt=""
                        src="/capture@2x.png"
                      />
                      <img
                        className={styles.mofaColorIcon5}
                        alt=""
                        src="/mofa-color@2x.png"
                      />
                      <img
                        className={styles.imagesIcon10}
                        alt=""
                        src="/images@2x.png"
                      />
                      <img
                        className={styles.download6Icon10}
                        alt=""
                        src="/download-6@2x.png"
                      />
                      <img
                        className={styles.images1Icon10}
                        alt=""
                        src="/images-1@2x.png"
                      />
                      <img
                        className={styles.download1Icon10}
                        alt=""
                        src="/download-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.footer1}>
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
                          className={styles.weProvideAn}
                        >{`Transform your agricultural practices and `}</p>
                        <p className={styles.weProvideAn}>
                          <span className={styles.cultivateSuccessWith}>
                            cultivate success with
                          </span>
                          <b className={styles.cultivateSuccessWith}>
                            {" "}
                            industry's best
                          </b>
                          <span>
                            —empowering farmers, streamlining operations,
                          </span>
                        </p>
                        <p className={styles.weProvideAn}>
                          <span>{`and fostering a connected `}</span>
                          <b className={styles.cultivateSuccessWith}>
                            global community
                          </b>
                        </p>
                      </div>
                    </div>
                    <button
                      className={styles.transformInner}
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
                  <div className={styles.frameParent29}>
                    <div className={styles.frameParent30}>
                      <div className={styles.nowWereParent}>
                        <div className={styles.nowWere2}>business</div>
                        <div className={styles.frameParent31}>
                          <button
                            className={styles.nowWereFrame}
                            onClick={onFrameButton2Click}
                          >
                            <b
                              className={styles.nowWere3}
                              onClick={onNowWereTextClick}
                            >
                              CAREERS
                            </b>
                          </button>
                          <button
                            className={styles.nowWereFrame}
                            onClick={onFrameButton3Click}
                          >
                            <b className={styles.nowWere4}>{`ABOUT US `}</b>
                          </button>
                          <button
                            className={styles.nowWereWrapper1}
                            onClick={onFrameButton4Click}
                          >
                            <b className={styles.nowWere4}>PRIVACY POLICY</b>
                          </button>
                          <button
                            className={styles.nowWereWrapper2}
                            onClick={onFrameButton5Click}
                          >
                            <b className={styles.nowWere6}>PARTNERS</b>
                          </button>
                        </div>
                      </div>
                      <div className={styles.frameParent32}>
                        <div className={styles.nowWereGroup}>
                          <div className={styles.nowWere7}>{`CONTACT US `}</div>
                          <div className={styles.nowWere8}>
                            Agrospectrum Ltd.
                          </div>
                        </div>
                        <div className={styles.nowWereParent1}>
                          <div className={styles.nowWere9}>
                            EAST LEGON office
                          </div>
                          <div className={styles.nowWereParent2}>
                            <b className={styles.nowWere10}>No 24 Maseru St</b>
                            <b className={styles.nowWere10}>East Legon,</b>
                            <b className={styles.nowWere10}>Accra - ghana</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent33}>
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
                  <div className={styles.frameParent34}>
                    <div className={styles.vectorGroup}>
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
                    <div className={styles.partnerLogosFrame}>
                      <div className={styles.nowWere21}>
                        <div className={styles.nowWere22}>{`PHONE `}</div>
                      </div>
                      <button
                        className={styles.nowWere23}
                        onClick={onNowWereClick}
                      >
                        +233(0) 593 808 064
                      </button>
                    </div>
                    <div className={styles.nowWereParent6}>
                      <div className={styles.nowWere24}>
                        <div className={styles.nowWere25}>EMAIL</div>
                      </div>
                      <div className={styles.nowWere26}>
                        <b className={styles.nowWere27}>
                          customercare@bsl.com.gh
                        </b>
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
                            className={styles.vectorIcon1}
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                        <div className={styles.frame1}>
                          <img
                            className={styles.vectorIcon2}
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                        <div className={styles.vectorContainer}>
                          <img
                            className={styles.vectorIcon3}
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section className={styles.copyright}>
                <div className={styles.copyrightInner}>
                  <div className={styles.frameChild5} />
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
            <div className={styles.div50} data-animate-on-scroll>
              <div className={styles.footerlogo1}>
                <div className={styles.partnersBanner4}>
                  <div className={styles.partnerLogosGroup}>
                    <div className={styles.partnerLogos7}>
                      <img
                        className={styles.download2Icon12}
                        alt=""
                        src="/download-2@2x.png"
                      />
                      <img
                        className={styles.download5Icon22}
                        alt=""
                        src="/download-5@2x.png"
                      />
                      <img
                        className={styles.downloadIcon12}
                        alt=""
                        src="/download@2x.png"
                      />
                      <img
                        className={styles.download5Icon23}
                        alt=""
                        src="/download-5@2x.png"
                      />
                      <img
                        className={styles.download3Icon12}
                        alt=""
                        src="/download-3@2x.png"
                      />
                      <img
                        className={styles.captureIcon12}
                        alt=""
                        src="/capture@2x.png"
                      />
                      <img
                        className={styles.mofaColorIcon7}
                        alt=""
                        src="/mofa-color@2x.png"
                      />
                      <img
                        className={styles.imagesIcon12}
                        alt=""
                        src="/images@2x.png"
                      />
                      <img
                        className={styles.download6Icon12}
                        alt=""
                        src="/download-6@2x.png"
                      />
                      <img
                        className={styles.images1Icon12}
                        alt=""
                        src="/images-1@2x.png"
                      />
                      <img
                        className={styles.download1Icon12}
                        alt=""
                        src="/download-1@2x.png"
                      />
                    </div>
                    <div className={styles.partnerLogos8}>
                      <img
                        className={styles.download2Icon12}
                        alt=""
                        src="/download-2@2x.png"
                      />
                      <img
                        className={styles.download5Icon22}
                        alt=""
                        src="/download-5@2x.png"
                      />
                      <img
                        className={styles.downloadIcon12}
                        alt=""
                        src="/download@2x.png"
                      />
                      <img
                        className={styles.download5Icon23}
                        alt=""
                        src="/download-5@2x.png"
                      />
                      <img
                        className={styles.download3Icon12}
                        alt=""
                        src="/download-3@2x.png"
                      />
                      <img
                        className={styles.captureIcon12}
                        alt=""
                        src="/capture@2x.png"
                      />
                      <img
                        className={styles.mofaColorIcon7}
                        alt=""
                        src="/mofa-color@2x.png"
                      />
                      <img
                        className={styles.imagesIcon12}
                        alt=""
                        src="/images@2x.png"
                      />
                      <img
                        className={styles.download6Icon12}
                        alt=""
                        src="/download-6@2x.png"
                      />
                      <img
                        className={styles.images1Icon12}
                        alt=""
                        src="/images-1@2x.png"
                      />
                      <img
                        className={styles.download1Icon12}
                        alt=""
                        src="/download-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.footer2}>
                <div
                  className={styles.transformGroup}
                  id="footercontent"
                  data-animate-on-scroll
                >
                  <div className={styles.transform1}>
                    <div className={styles.nowWereWrapper3}>
                      <div className={styles.nowWere32}>TRANSFORM with</div>
                    </div>
                    <div className={styles.nowWereWrapper4}>
                      <div className={styles.nowWere33}>AGROSPECTRUM</div>
                    </div>
                    <div className={styles.nuncUltricesTellusFrame}>
                      <div className={styles.nuncUltricesTellusContainer1}>
                        <p
                          className={styles.weProvideAn}
                        >{`Transform your agricultural practices and `}</p>
                        <p className={styles.weProvideAn}>
                          <span className={styles.cultivateSuccessWith}>
                            cultivate success with
                          </span>
                          <b className={styles.cultivateSuccessWith}>
                            {" "}
                            industry's best
                          </b>
                          <span>
                            —empowering farmers, streamlining operations,
                          </span>
                        </p>
                        <p className={styles.weProvideAn}>
                          <span>{`and fostering a connected `}</span>
                          <b className={styles.cultivateSuccessWith}>
                            global community
                          </b>
                        </p>
                      </div>
                    </div>
                    <button
                      className={styles.transformChild}
                      onClick={onFrameButton6Click}
                      data-animate-on-scroll
                    >
                      <div className={styles.getInTouchContainer}>
                        <div className={styles.getInTouch1}>GET IN TOUCH</div>
                      </div>
                    </button>
                  </div>
                  <div className={styles.frameParent35}>
                    <div className={styles.frameParent36}>
                      <div className={styles.nowWereParent9}>
                        <div className={styles.nowWere34}>business</div>
                        <div className={styles.frameParent37}>
                          <div className={styles.nowWereWrapper5}>
                            <b
                              className={styles.nowWere35}
                              onClick={onNowWereText2Click}
                            >
                              CAREERS
                            </b>
                          </div>
                          <div className={styles.nowWereWrapper5}>
                            <b className={styles.nowWere36}>{`ABOUT US `}</b>
                          </div>
                          <div className={styles.nowWereWrapper7}>
                            <b className={styles.nowWere36}>PRIVACY POLICY</b>
                          </div>
                          <div className={styles.nowWereWrapper8}>
                            <b className={styles.nowWere38}>PARTNERS</b>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent38}>
                        <div className={styles.nowWereParent10}>
                          <div
                            className={styles.nowWere39}
                          >{`CONTACT US `}</div>
                          <div className={styles.nowWere40}>
                            Agrospectrum Ltd.
                          </div>
                        </div>
                        <div className={styles.nowWereParent11}>
                          <div className={styles.nowWere41}>
                            EAST LEGON office
                          </div>
                          <div className={styles.nowWereParent12}>
                            <b className={styles.nowWere42}>No 24 Maseru St</b>
                            <b className={styles.nowWere42}>East Legon,</b>
                            <b className={styles.nowWere42}>Accra - ghana</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent39}>
                      <div className={styles.nowWereParent13}>
                        <b className={styles.nowWere45}>BSL HEAD OFFICE</b>
                        <b className={styles.nowWere42}>No 24 Botwe</b>
                        <b className={styles.nowWere42}>Dzorwulu - Accra</b>
                      </div>
                      <div className={styles.nowWereParent14}>
                        <div className={styles.nowWere48}>TAMALE office</div>
                        <b className={styles.nowWere42}>Tamale.</b>
                        <b className={styles.nowWere50}>16 Dagomba Road,</b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent40}>
                    <div className={styles.vectorParent1}>
                      <img
                        className={styles.frameChild6}
                        alt=""
                        src="/arrow-6.svg"
                        onClick={onArrowIcon2Click}
                      />
                      <div
                        className={styles.nowWere51}
                        onClick={onNowWereContainer2Click}
                      >
                        <div className={styles.nowWere52}>GET DIRECTIONS</div>
                      </div>
                    </div>
                    <div className={styles.partnerLogosFrame}>
                      <div className={styles.nowWere53}>
                        <div className={styles.nowWere54}>{`PHONE `}</div>
                      </div>
                      <b className={styles.nowWere55}>+233(0) 593 808 064</b>
                    </div>
                    <div className={styles.nowWereParent16}>
                      <div className={styles.nowWere56}>
                        <div className={styles.nowWere57}>EMAIL</div>
                      </div>
                      <div className={styles.nowWere58}>
                        <b className={styles.nowWere59}>
                          customercare@bsl.com.gh
                        </b>
                      </div>
                    </div>
                    <div className={styles.nowWereParent17}>
                      <div className={styles.nowWere60}>
                        <div className={styles.nowWere61}>{`FOLLOW US `}</div>
                      </div>
                      <div className={styles.instagramGroup}>
                        <div className={styles.instagram1}>
                          <img
                            className={styles.groupIcon2}
                            alt=""
                            src="/group.svg"
                          />
                        </div>
                        <div className={styles.vectorFrame}>
                          <img
                            className={styles.vectorIcon4}
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                        <div className={styles.frame2}>
                          <img
                            className={styles.vectorIcon5}
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                        <div className={styles.vectorWrapper1}>
                          <img
                            className={styles.vectorIcon6}
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.nowWereParent18}>
                <b className={styles.nowWere62}>
                  No 24 Maseru Street,East Legon -Accra
                </b>
                <b className={styles.nowWere62}>
                  © Copyright 2023 Agrospectrum Ltd. All Rights Reserved.
                </b>
              </div>
              <section className={styles.copyright1}>
                <div className={styles.copyrightChild}>
                  <div className={styles.frameChild7} />
                </div>
              </section>
            </div>
            <div className={styles.div51} data-animate-on-scroll>
              <div className={styles.footerlogo2}>
                <div className={styles.partnersBanner5}>
                  <div className={styles.partnerLogosParent1}>
                    <div className={styles.partnerLogos9}>
                      <img
                        className={styles.download2Icon14}
                        alt=""
                        src="/download-2@2x.png"
                      />
                      <img
                        className={styles.download5Icon26}
                        alt=""
                        src="/download-5@2x.png"
                      />
                      <img
                        className={styles.downloadIcon14}
                        alt=""
                        src="/download@2x.png"
                      />
                      <img
                        className={styles.download5Icon27}
                        alt=""
                        src="/download-5@2x.png"
                      />
                      <img
                        className={styles.download3Icon14}
                        alt=""
                        src="/download-3@2x.png"
                      />
                      <img
                        className={styles.captureIcon14}
                        alt=""
                        src="/capture@2x.png"
                      />
                      <img
                        className={styles.mofaColorIcon9}
                        alt=""
                        src="/mofa-color@2x.png"
                      />
                      <img
                        className={styles.imagesIcon14}
                        alt=""
                        src="/images@2x.png"
                      />
                      <img
                        className={styles.download6Icon14}
                        alt=""
                        src="/download-6@2x.png"
                      />
                      <img
                        className={styles.images1Icon14}
                        alt=""
                        src="/images-1@2x.png"
                      />
                      <img
                        className={styles.download1Icon14}
                        alt=""
                        src="/download-1@2x.png"
                      />
                    </div>
                    <div className={styles.partnerLogos10}>
                      <img
                        className={styles.download2Icon14}
                        alt=""
                        src="/download-2@2x.png"
                      />
                      <img
                        className={styles.download5Icon26}
                        alt=""
                        src="/download-5@2x.png"
                      />
                      <img
                        className={styles.downloadIcon14}
                        alt=""
                        src="/download@2x.png"
                      />
                      <img
                        className={styles.download5Icon27}
                        alt=""
                        src="/download-5@2x.png"
                      />
                      <img
                        className={styles.download3Icon14}
                        alt=""
                        src="/download-3@2x.png"
                      />
                      <img
                        className={styles.captureIcon14}
                        alt=""
                        src="/capture@2x.png"
                      />
                      <img
                        className={styles.mofaColorIcon9}
                        alt=""
                        src="/mofa-color@2x.png"
                      />
                      <img
                        className={styles.imagesIcon14}
                        alt=""
                        src="/images@2x.png"
                      />
                      <img
                        className={styles.download6Icon14}
                        alt=""
                        src="/download-6@2x.png"
                      />
                      <img
                        className={styles.images1Icon14}
                        alt=""
                        src="/images-1@2x.png"
                      />
                      <img
                        className={styles.download1Icon14}
                        alt=""
                        src="/download-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.footer3}>
                <div
                  className={styles.transformContainer}
                  id="footercontent"
                  data-animate-on-scroll
                >
                  <div className={styles.transform2}>
                    <div className={styles.nowWereWrapper9}>
                      <div className={styles.nowWere64}>TRANSFORM with</div>
                    </div>
                    <div className={styles.nowWereWrapper10}>
                      <div className={styles.nowWere65}>AGROSPECTRUM</div>
                    </div>
                    <div className={styles.nuncUltricesTellusWrapper1}>
                      <div className={styles.nuncUltricesTellusContainer2}>
                        <p
                          className={styles.weProvideAn}
                        >{`Transform your agricultural practices and `}</p>
                        <p className={styles.weProvideAn}>
                          <span className={styles.cultivateSuccessWith}>
                            cultivate success with
                          </span>
                          <b className={styles.cultivateSuccessWith}>
                            {" "}
                            industry's best
                          </b>
                          <span>
                            —empowering farmers, streamlining operations,
                          </span>
                        </p>
                        <p className={styles.weProvideAn}>
                          <span>{`and fostering a connected `}</span>
                          <b className={styles.cultivateSuccessWith}>
                            global community
                          </b>
                        </p>
                      </div>
                    </div>
                    <button
                      className={styles.transformInner1}
                      onClick={onFrameButton7Click}
                      data-animate-on-scroll
                    >
                      <div className={styles.getInTouchFrame}>
                        <div className={styles.getInTouch2}>GET IN TOUCH</div>
                      </div>
                    </button>
                  </div>
                  <div className={styles.frameParent41}>
                    <div className={styles.frameParent42}>
                      <div className={styles.nowWereParent19}>
                        <div className={styles.nowWere66}>business</div>
                        <div className={styles.frameParent43}>
                          <div className={styles.nowWereWrapper11}>
                            <b
                              className={styles.nowWere67}
                              onClick={onNowWereText3Click}
                            >
                              CAREERS
                            </b>
                          </div>
                          <div className={styles.nowWereWrapper11}>
                            <b className={styles.nowWere68}>{`ABOUT US `}</b>
                          </div>
                          <div className={styles.nowWereWrapper13}>
                            <b className={styles.nowWere68}>PRIVACY POLICY</b>
                          </div>
                          <div className={styles.nowWereWrapper8}>
                            <b className={styles.nowWere70}>PARTNERS</b>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent44}>
                        <div className={styles.nowWereParent20}>
                          <div
                            className={styles.nowWere71}
                          >{`CONTACT US `}</div>
                          <div className={styles.nowWere72}>
                            Agrospectrum Ltd.
                          </div>
                        </div>
                        <div className={styles.nowWereParent21}>
                          <div className={styles.nowWere73}>
                            EAST LEGON office
                          </div>
                          <div className={styles.nowWereParent22}>
                            <b className={styles.nowWere74}>No 24 Maseru St</b>
                            <b className={styles.nowWere74}>East Legon,</b>
                            <b className={styles.nowWere74}>Accra - ghana</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent45}>
                      <div className={styles.nowWereParent23}>
                        <b className={styles.nowWere77}>BSL HEAD OFFICE</b>
                        <b className={styles.nowWere74}>No 24 Botwe</b>
                        <b className={styles.nowWere74}>Dzorwulu - Accra</b>
                      </div>
                      <div className={styles.nowWereParent24}>
                        <div className={styles.nowWere80}>TAMALE office</div>
                        <b className={styles.nowWere74}>Tamale.</b>
                        <b className={styles.nowWere82}>16 Dagomba Road,</b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent46}>
                    <div className={styles.vectorParent2}>
                      <img
                        className={styles.frameChild8}
                        alt=""
                        src="/arrow-6.svg"
                        onClick={onArrowIcon3Click}
                      />
                      <div
                        className={styles.nowWere83}
                        onClick={onNowWereContainer3Click}
                      >
                        <div className={styles.nowWere84}>GET DIRECTIONS</div>
                      </div>
                    </div>
                    <div className={styles.partnerLogosFrame}>
                      <div className={styles.nowWere85}>
                        <div className={styles.nowWere86}>{`PHONE `}</div>
                      </div>
                      <b className={styles.nowWere87}>+233(0) 593 808 064</b>
                    </div>
                    <div className={styles.nowWereParent26}>
                      <div className={styles.nowWere88}>
                        <div className={styles.nowWere89}>EMAIL</div>
                      </div>
                      <div className={styles.nowWere90}>
                        <b className={styles.nowWere91}>
                          customercare@bsl.com.gh
                        </b>
                      </div>
                    </div>
                    <div className={styles.nowWereParent27}>
                      <div className={styles.nowWere92}>
                        <div className={styles.nowWere93}>{`FOLLOW US `}</div>
                      </div>
                      <div className={styles.instagramContainer}>
                        <div className={styles.instagram2}>
                          <img
                            className={styles.groupIcon3}
                            alt=""
                            src="/group.svg"
                          />
                        </div>
                        <div className={styles.vectorWrapper2}>
                          <img
                            className={styles.vectorIcon7}
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                        <div className={styles.frame3}>
                          <img
                            className={styles.vectorIcon8}
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                        <div className={styles.vectorWrapper3}>
                          <img
                            className={styles.vectorIcon9}
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.nowWereParent28}>
                <b className={styles.nowWere94}>
                  No 24 Maseru Street,East Legon -Accra
                </b>
                <b className={styles.nowWere94}>
                  © Copyright 2023 Agrospectrum Ltd. All Rights Reserved.
                </b>
              </div>
              <section className={styles.copyright2}>
                <div className={styles.copyrightInner1}>
                  <div className={styles.frameChild9} />
                </div>
              </section>
            </div>
            <div className={styles.div52} data-animate-on-scroll>
              <div className={styles.partnersBanner6}>
                <div className={styles.partnerLogosParent2}>
                  <div className={styles.partnerLogos11}>
                    <img
                      className={styles.download2Icon16}
                      alt=""
                      src="/download-2@2x.png"
                    />
                    <img
                      className={styles.download5Icon30}
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className={styles.downloadIcon16}
                      alt=""
                      src="/download@2x.png"
                    />
                    <img
                      className={styles.download5Icon31}
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className={styles.download3Icon16}
                      alt=""
                      src="/download-3@2x.png"
                    />
                    <img
                      className={styles.captureIcon16}
                      alt=""
                      src="/capture@2x.png"
                    />
                    <img
                      className={styles.mofaColorIcon11}
                      alt=""
                      src="/mofa-color@2x.png"
                    />
                    <img
                      className={styles.imagesIcon16}
                      alt=""
                      src="/images@2x.png"
                    />
                    <img
                      className={styles.download6Icon16}
                      alt=""
                      src="/download-6@2x.png"
                    />
                    <img
                      className={styles.images1Icon16}
                      alt=""
                      src="/images-1@2x.png"
                    />
                    <img
                      className={styles.download1Icon16}
                      alt=""
                      src="/download-1@2x.png"
                    />
                  </div>
                  <div className={styles.partnerLogos12}>
                    <img
                      className={styles.download2Icon16}
                      alt=""
                      src="/download-2@2x.png"
                    />
                    <img
                      className={styles.download5Icon30}
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className={styles.downloadIcon16}
                      alt=""
                      src="/download@2x.png"
                    />
                    <img
                      className={styles.download5Icon31}
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className={styles.download3Icon16}
                      alt=""
                      src="/download-3@2x.png"
                    />
                    <img
                      className={styles.captureIcon16}
                      alt=""
                      src="/capture@2x.png"
                    />
                    <img
                      className={styles.mofaColorIcon11}
                      alt=""
                      src="/mofa-color@2x.png"
                    />
                    <img
                      className={styles.imagesIcon16}
                      alt=""
                      src="/images@2x.png"
                    />
                    <img
                      className={styles.download6Icon16}
                      alt=""
                      src="/download-6@2x.png"
                    />
                    <img
                      className={styles.images1Icon16}
                      alt=""
                      src="/images-1@2x.png"
                    />
                    <img
                      className={styles.download1Icon16}
                      alt=""
                      src="/download-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.footerForSmallerscreen}>
                <div className={styles.nowWereParent29}>
                  <div className={styles.nowWere96}>
                    <div className={styles.nowWere97}>EMAIL</div>
                  </div>
                  <div className={styles.nowWere98}>
                    <b className={styles.nowWere99}>customercare@bsl.com.gh</b>
                  </div>
                </div>
                <div className={styles.footerForSmallerscreenChild} />
                <div className={styles.nowWere100} />
                <div className={styles.frameParent47}>
                  <div className={styles.allhero}>
                    <div className={styles.allhero}>
                      <div className={styles.nowWereParent30}>
                        <b className={styles.nowWere101}>BSL HEAD OFFICE</b>
                        <b className={styles.nowWere102}>No 24 Botwe</b>
                        <b className={styles.nowWere103}>Dzorwulu - Accra</b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.nowWereParent31}>
                    <div className={styles.nowWere104}>
                      <div className={styles.nowWere105}>TAMALE office</div>
                    </div>
                    <div className={styles.nowWereParent32}>
                      <div className={styles.nowWere106}>
                        <b className={styles.nowWere107}>16 Dagomba Road,</b>
                      </div>
                      <b className={styles.nowWere108}>Tamale.</b>
                    </div>
                  </div>
                </div>
                <div className={styles.nowWere109}>
                  <div className={styles.nowWereParent33}>
                    <div className={styles.nowWere110}>
                      <div className={styles.nowWere111}>{`PHONE `}</div>
                    </div>
                    <div className={styles.nowWere98}>
                      <b className={styles.nowWere113}>+233(0) 593 808 064</b>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent48}>
                  <div className={styles.nowWereParent34}>
                    <div className={styles.nowWere114}>
                      <div className={styles.nowWere115}>business</div>
                    </div>
                    <b className={styles.nowWere116}>ABOUT US</b>
                    <b className={styles.nowWere116}>CAREERS</b>
                    <b className={styles.nowWere116}>PARTNERS</b>
                    <b className={styles.nowWere119}>PRIVACY POLICY</b>
                  </div>
                  <div className={styles.frameWrapper11}>
                    <div className={styles.nowWereParent35}>
                      <div className={styles.nowWere120}>
                        <div className={styles.nowWere121}>{`CONTACT US `}</div>
                      </div>
                      <div className={styles.nowWere122}>
                        <div className={styles.nowWere123}>
                          Agrospectrum Ltd.
                        </div>
                      </div>
                      <div className={styles.nowWere124}>
                        <div className={styles.nowWere125}>
                          EAST LEGON office
                        </div>
                      </div>
                      <div className={styles.nowWere126}>
                        <b className={styles.nowWere127}>East Legon,</b>
                      </div>
                      <b className={styles.nowWere128}>Accra - ghana</b>
                      <b className={styles.nowWere129}>No 24 Maseru St</b>
                    </div>
                  </div>
                </div>
                <div className={styles.vectorParent3}>
                  <img
                    className={styles.frameChild10}
                    alt=""
                    src="/arrow-6.svg"
                    onClick={onArrowIcon4Click}
                  />
                  <div
                    className={styles.nowWere130}
                    onClick={onNowWereContainer4Click}
                  >
                    <div className={styles.nowWere131}>GET DIRECTIONS</div>
                  </div>
                </div>
                <div className={styles.nowWereParent36}>
                  <div className={styles.nowWere132}>
                    <div className={styles.nowWere133}>{`FOLLOW US `}</div>
                  </div>
                  <div className={styles.instagramParent1}>
                    <div className={styles.instagram3}>
                      <img
                        className={styles.groupIcon4}
                        alt=""
                        src="/group.svg"
                      />
                    </div>
                    <div className={styles.vectorWrapper4}>
                      <img
                        className={styles.vectorIcon10}
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <div className={styles.frame4}>
                      <img
                        className={styles.vectorIcon11}
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <div className={styles.vectorWrapper5}>
                      <img
                        className={styles.vectorIcon12}
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent49}>
                  <div className={styles.nowWereParent37}>
                    <div className={styles.nowWere134}>TRANSFORM with</div>
                    <div className={styles.nowWere135}>AGROSPECTRUM</div>
                    <div className={styles.nuncUltricesTellusWrapper2}>
                      <div className={styles.nuncUltricesTellusContainer3}>
                        <span>
                          Transform your agricultural practices and cultivate
                          success with
                        </span>
                        <b> industry's best</b>
                        <span>{`—empowering farmers, streamlining operations, and fostering a connected `}</span>
                        <b>global community</b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.getInTouchWrapper1}>
                    <div className={styles.getInTouch3}>GET IN TOUCH</div>
                  </div>
                </div>
                <div className={styles.footerForSmallerscreenInner}>
                  <div className={styles.frameParent50}>
                    <div className={styles.nowWereParent38}>
                      <div className={styles.nowWere136}>
                        Agrospectrum Ltd. All Rights Reserved.
                      </div>
                      <div className={styles.nowWere137}>© Copyright 2023</div>
                    </div>
                    <div className={styles.frameChild11} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div53}>
              <div className={styles.partnersBanner7}>
                <div className={styles.partnerLogosParent3}>
                  <div className={styles.partnerLogos13}>
                    <img
                      className={styles.download2Icon18}
                      alt=""
                      src="/download-2@2x.png"
                    />
                    <img
                      className={styles.download5Icon34}
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className={styles.downloadIcon18}
                      alt=""
                      src="/download@2x.png"
                    />
                    <img
                      className={styles.download5Icon35}
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className={styles.download3Icon18}
                      alt=""
                      src="/download-3@2x.png"
                    />
                    <img
                      className={styles.captureIcon18}
                      alt=""
                      src="/capture@2x.png"
                    />
                    <img
                      className={styles.mofaColorIcon13}
                      alt=""
                      src="/mofa-color@2x.png"
                    />
                    <img
                      className={styles.imagesIcon18}
                      alt=""
                      src="/images@2x.png"
                    />
                    <img
                      className={styles.download6Icon18}
                      alt=""
                      src="/download-6@2x.png"
                    />
                    <img
                      className={styles.images1Icon18}
                      alt=""
                      src="/images-1@2x.png"
                    />
                    <img
                      className={styles.download1Icon18}
                      alt=""
                      src="/download-1@2x.png"
                    />
                  </div>
                  <div className={styles.partnerLogos14}>
                    <img
                      className={styles.download2Icon18}
                      alt=""
                      src="/download-2@2x.png"
                    />
                    <img
                      className={styles.download5Icon34}
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className={styles.downloadIcon18}
                      alt=""
                      src="/download@2x.png"
                    />
                    <img
                      className={styles.download5Icon35}
                      alt=""
                      src="/download-5@2x.png"
                    />
                    <img
                      className={styles.download3Icon18}
                      alt=""
                      src="/download-3@2x.png"
                    />
                    <img
                      className={styles.captureIcon18}
                      alt=""
                      src="/capture@2x.png"
                    />
                    <img
                      className={styles.mofaColorIcon13}
                      alt=""
                      src="/mofa-color@2x.png"
                    />
                    <img
                      className={styles.imagesIcon18}
                      alt=""
                      src="/images@2x.png"
                    />
                    <img
                      className={styles.download6Icon18}
                      alt=""
                      src="/download-6@2x.png"
                    />
                    <img
                      className={styles.images1Icon18}
                      alt=""
                      src="/images-1@2x.png"
                    />
                    <img
                      className={styles.download1Icon18}
                      alt=""
                      src="/download-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.footerForSmallerscreen1}>
                <div className={styles.nowWereParent39}>
                  <div className={styles.nowWere138}>
                    <div className={styles.nowWere139}>EMAIL</div>
                  </div>
                  <div className={styles.nowWere140}>
                    <b className={styles.nowWere141}>customercare@bsl.com.gh</b>
                  </div>
                </div>
                <div className={styles.footerForSmallerscreenItem} />
                <div className={styles.nowWereParent40}>
                  <b className={styles.nowWere142}>BSL HEAD OFFICE</b>
                  <div className={styles.nowWereParent41}>
                    <b className={styles.nowWere143}>No 24 Botwe</b>
                    <b className={styles.nowWere144}>Dzorwulu - Accra</b>
                  </div>
                </div>
                <div className={styles.nowWere145} />
                <div className={styles.nowWereParent42}>
                  <div className={styles.nowWere146}>
                    <div className={styles.nowWere147}>TAMALE office</div>
                  </div>
                  <div className={styles.nowWereParent43}>
                    <div className={styles.nowWere148}>
                      <b className={styles.nowWere149}>16 Dagomba Road,</b>
                    </div>
                    <b className={styles.nowWere150}>Tamale.</b>
                  </div>
                </div>
                <div className={styles.nowWere151}>
                  <div className={styles.nowWereParent44}>
                    <div className={styles.nowWere152}>
                      <div className={styles.nowWere153}>{`PHONE `}</div>
                    </div>
                    <div className={styles.nowWere140}>
                      <b className={styles.nowWere155}>+233(0) 593 808 064</b>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent51}>
                  <div className={styles.nowWereParent45}>
                    <div className={styles.nowWere156}>
                      <div className={styles.nowWere157}>{`CONTACT US `}</div>
                    </div>
                    <div className={styles.nowWere158}>
                      <div className={styles.nowWere159}>Agrospectrum Ltd.</div>
                    </div>
                    <div className={styles.nowWere160}>
                      <div className={styles.nowWere161}>EAST LEGON office</div>
                    </div>
                    <div className={styles.nowWere162}>
                      <b className={styles.nowWere163}>East Legon,</b>
                    </div>
                    <b className={styles.nowWere164}>Accra - ghana</b>
                  </div>
                  <b className={styles.nowWere165}>No 24 Maseru St</b>
                </div>
                <div className={styles.nowWereParent46}>
                  <div className={styles.nowWere166}>
                    <div className={styles.nowWere167}>business</div>
                  </div>
                  <div className={styles.nowWere168}>
                    <b className={styles.nowWere169}>{`ABOUT US `}</b>
                  </div>
                  <b className={styles.nowWere170}>CAREERS</b>
                  <b className={styles.nowWere170}>PARTNERS</b>
                  <b className={styles.nowWere172}>PRIVACY POLICY</b>
                </div>
                <div className={styles.vectorParent4}>
                  <img
                    className={styles.frameChild12}
                    alt=""
                    src="/arrow-6.svg"
                    onClick={onArrowIcon5Click}
                  />
                  <div
                    className={styles.nowWere173}
                    onClick={onNowWereContainer5Click}
                  >
                    <div className={styles.nowWere174}>GET DIRECTIONS</div>
                  </div>
                </div>
                <div className={styles.nowWereParent47}>
                  <div className={styles.nowWere175}>
                    <div className={styles.nowWere176}>{`FOLLOW US `}</div>
                  </div>
                  <div className={styles.instagramParent2}>
                    <div className={styles.instagram4}>
                      <img
                        className={styles.groupIcon5}
                        alt=""
                        src="/group.svg"
                      />
                    </div>
                    <div className={styles.vectorWrapper6}>
                      <img
                        className={styles.vectorIcon13}
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <div className={styles.frame5}>
                      <img
                        className={styles.vectorIcon14}
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <div className={styles.vectorWrapper7}>
                      <img
                        className={styles.vectorIcon15}
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent52}>
                  <div className={styles.nowWereParent48}>
                    <div className={styles.nowWere177}>TRANSFORM with</div>
                    <div className={styles.nowWere178}>AGROSPECTRUM</div>
                    <div className={styles.nuncUltricesTellusWrapper3}>
                      <div className={styles.nuncUltricesTellusContainer4}>
                        <span>
                          Transform your agricultural practices and cultivate
                          success with
                        </span>
                        <b> industry's best</b>
                        <span>{`—empowering farmers, streamlining operations, and fostering a connected `}</span>
                        <b>global community</b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.getInTouchWrapper2}>
                    <div className={styles.getInTouch4}>GET IN TOUCH</div>
                  </div>
                </div>
                <div className={styles.footerForSmallerscreenInner1}>
                  <div className={styles.frameParent53}>
                    <div className={styles.nowWereParent49}>
                      <div className={styles.nowWere179}>
                        Agrospectrum Ltd. All Rights Reserved.
                      </div>
                      <div className={styles.nowWere180}>© Copyright 2023</div>
                    </div>
                    <div className={styles.frameChild13} />
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

export default Homepage1;
