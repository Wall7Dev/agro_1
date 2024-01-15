import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import styles from "./careers.module.css";

const Careers: NextPage = () => {
  const [frameInputValue, setFrameInputValue] = useState("");
  const [frameInput1Value, setFrameInput1Value] = useState("");
  const [frameInput2Value, setFrameInput2Value] = useState("");
  const [frameInput3Value, setFrameInput3Value] = useState("");
  const [noFileChosenValue, setNoFileChosenValue] = useState("");
  const [frameInput4Value, setFrameInput4Value] = useState("");
  const [frameInput5Value, setFrameInput5Value] = useState("");
  const [frameInput6Value, setFrameInput6Value] = useState("");
  const [frameInput7Value, setFrameInput7Value] = useState("");
  const [frameInput8Value, setFrameInput8Value] = useState("");
  const [noFileChosen1Value, setNoFileChosen1Value] = useState("");
  const [frameInput9Value, setFrameInput9Value] = useState("");
  const [frameInput10Value, setFrameInput10Value] = useState("");
  const [frameInput11Value, setFrameInput11Value] = useState("");
  const [frameInput12Value, setFrameInput12Value] = useState("");
  const [frameInput13Value, setFrameInput13Value] = useState("");
  const [noFileChosen2Value, setNoFileChosen2Value] = useState("");
  const [frameInput14Value, setFrameInput14Value] = useState("");
  const [frameInput15Value, setFrameInput15Value] = useState("");
  const [frameInput16Value, setFrameInput16Value] = useState("");
  const [frameInput17Value, setFrameInput17Value] = useState("");
  const [frameInput18Value, setFrameInput18Value] = useState("");
  const [noFileChosen3Value, setNoFileChosen3Value] = useState("");
  const [frameInput19Value, setFrameInput19Value] = useState("");
  const [frameInput20Value, setFrameInput20Value] = useState("");
  const [frameInput21Value, setFrameInput21Value] = useState("");
  const [frameInput22Value, setFrameInput22Value] = useState("");
  const [frameInput23Value, setFrameInput23Value] = useState("");
  const [noFileChosen4Value, setNoFileChosen4Value] = useState("");
  const [frameInput24Value, setFrameInput24Value] = useState("");
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

  const onFrameButton16Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/careers");
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

  const onFrameButton17Click = useCallback(() => {
    // Please sync "2-contactUs" to the project
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

  const onFrameButton18Click = useCallback(() => {
    // Please sync "2-contactUs" to the project
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
      <div className={styles.careers}>
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
                    src="/logo4@2x.png"
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
                    src="/logo4@2x.png"
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
                    src="/logo4@2x.png"
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
                    src="/logo5@2x.png"
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
                    src="/logo6@2x.png"
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
        <header className={styles.careersInner}>
          <div className={styles.careersParent}>
            <div className={styles.careers1} data-animate-on-scroll>
              <div className={styles.careers2} data-animate-on-scroll>
                Careers
              </div>
            </div>
            <div className={styles.rec}>
              <div className={styles.recChild} />
            </div>
          </div>
        </header>
        <div className={styles.allMakeAnEnquiry}>
          <div className={styles.desktopMakeEnquiry} data-animate-on-scroll>
            <div className={styles.bigBlur3} data-animate-on-scroll />
            <div className={styles.bgBlur2} data-animate-on-scroll />
            <img
              className={styles.bgBlurIcon}
              alt=""
              src="/bg-blur.svg"
              data-animate-on-scroll
            />
            <div className={styles.desktopMakeEnquirycomun}>
              <section className={styles.frameParent}>
                <div className={styles.workWithUsWrapper}>
                  <div className={styles.workWithUsContainer}>
                    <p className={styles.workWith}>{`Work with `}</p>
                    <p className={styles.us}>Us</p>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.careersWrapper}>
                    <h5 className={styles.careers3} data-animate-on-scroll>
                      CAREERS
                    </h5>
                  </div>
                  <p
                    className={styles.ourInnovativeGroupBelievesWrapper}
                    data-animate-on-scroll
                  >
                    <div className={styles.ourInnovativeGroup}>
                      Our innovative group believes in the value and talent in
                      team work. Join the ever growing team of creative minds
                      and talents. Browse through our available positions or
                      send an open application by attaching your CV
                    </div>
                  </p>
                </div>
              </section>
              <div className={styles.contactForm}>
                <div className={styles.enquiryTypeWrapper}>
                  <div className={styles.enquiryType}>Enquiry type</div>
                </div>
                <div className={styles.frameContainer}>
                  <button className={styles.generalWrapper}>
                    <div className={styles.general}>General</div>
                  </button>
                  <button className={styles.frameWrapper}>
                    <div className={styles.groupParent}>
                      <img
                        className={styles.frameChild}
                        alt=""
                        src="/group-902.svg"
                      />
                      <div className={styles.business}>Business</div>
                    </div>
                  </button>
                  <button className={styles.careersContainer}>
                    <div className={styles.careers4}>Careers</div>
                  </button>
                </div>
                <input
                  className={styles.contactFormChild}
                  placeholder="Name"
                  type="text"
                  value={frameInputValue}
                  onChange={(event) => setFrameInputValue(event.target.value)}
                />
                <input
                  className={styles.contactFormChild}
                  placeholder="Phone"
                  type="text"
                  value={frameInput1Value}
                  onChange={(event) => setFrameInput1Value(event.target.value)}
                />
                <input
                  className={styles.contactFormChild}
                  placeholder="Email"
                  type="text"
                  value={frameInput2Value}
                  onChange={(event) => setFrameInput2Value(event.target.value)}
                />
                <div className={styles.frameDiv}>
                  <input
                    className={styles.frameItem}
                    placeholder="Choose file"
                    type="text"
                    value={frameInput3Value}
                    onChange={(event) =>
                      setFrameInput3Value(event.target.value)
                    }
                  />
                  <input
                    className={styles.noFileChosen}
                    placeholder="No file chosen"
                    type="text"
                    value={noFileChosenValue}
                    onChange={(event) =>
                      setNoFileChosenValue(event.target.value)
                    }
                  />
                </div>
                <input
                  className={styles.frameInput}
                  placeholder="Type your message here"
                  type="text"
                  value={frameInput4Value}
                  onChange={(event) => setFrameInput4Value(event.target.value)}
                />
                <div className={styles.contactFormInner1}>
                  <div className={styles.sendWrapper}>
                    <div className={styles.send}>send</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.makeEnquiry}>
            <div className={styles.bigBlur31} data-animate-on-scroll />
            <div className={styles.bgBlur21} data-animate-on-scroll />
            <img
              className={styles.bgBlurIcon1}
              alt=""
              src="/bg-blur.svg"
              data-animate-on-scroll
            />
            <div className={styles.desktopMakeEnquirycomun1}>
              <section className={styles.frameSection}>
                <div className={styles.makeAnEnquiryWrapper}>
                  <div className={styles.workWithUsContainer}>
                    <span className={styles.makeAn}>{`Make an `}</span>
                    <span className={styles.enquiry}>enquiry</span>
                  </div>
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.contactUsWrapper}>
                    <h5 className={styles.careers3} data-animate-on-scroll>
                      CONTACT US
                    </h5>
                  </div>
                  <p
                    className={styles.agrospectrumLtdHeadOfficeWrapper}
                    data-animate-on-scroll
                  >
                    <div className={styles.ourInnovativeGroup}>
                      <p className={styles.agrospectrumLtd}>
                        Agrospectrum Ltd.
                      </p>
                      <p className={styles.agrospectrumLtd}>HEAD OFFICE</p>
                      <p className={styles.agrospectrumLtd}>No. 24 Maseru St</p>
                      <p className={styles.agrospectrumLtd}>East Legon, G/A</p>
                      <p className={styles.agrospectrumLtd}>Accra - Ghana</p>
                    </div>
                  </p>
                  <div className={styles.phoneParent}>
                    <div className={styles.phone}>PHONE</div>
                    <div className={styles.div}>+233(0) 593 808 064</div>
                  </div>
                  <div className={styles.phoneParent}>
                    <div className={styles.phone}>EMAIL</div>
                    <div className={styles.customercarebslcomgh}>
                      customercare@bsl.com.gh
                    </div>
                  </div>
                </div>
              </section>
              <div className={styles.contactForm1}>
                <div className={styles.enquiryTypeContainer}>
                  <div className={styles.enquiryType}>Enquiry type</div>
                </div>
                <div className={styles.frameContainer}>
                  <button className={styles.generalContainer}>
                    <div className={styles.general1}>General</div>
                  </button>
                  <button className={styles.frameButton}>
                    <div className={styles.groupContainer}>
                      <img
                        className={styles.frameInner}
                        alt=""
                        src="/group-902.svg"
                      />
                      <div className={styles.business1}>Business</div>
                    </div>
                  </button>
                  <button className={styles.careersFrame}>
                    <div className={styles.careers5}>Careers</div>
                  </button>
                </div>
                <input
                  className={styles.contactFormChild1}
                  placeholder="Name"
                  type="text"
                  value={frameInput5Value}
                  onChange={(event) => setFrameInput5Value(event.target.value)}
                />
                <input
                  className={styles.contactFormChild1}
                  placeholder="Phone"
                  type="text"
                  value={frameInput6Value}
                  onChange={(event) => setFrameInput6Value(event.target.value)}
                />
                <input
                  className={styles.contactFormChild1}
                  placeholder="Email"
                  type="text"
                  value={frameInput7Value}
                  onChange={(event) => setFrameInput7Value(event.target.value)}
                />
                <div className={styles.frameParent3}>
                  <input
                    className={styles.frameChild1}
                    placeholder="Choose file"
                    type="text"
                    value={frameInput8Value}
                    onChange={(event) =>
                      setFrameInput8Value(event.target.value)
                    }
                  />
                  <input
                    className={styles.noFileChosen1}
                    placeholder="No file chosen"
                    type="text"
                    value={noFileChosen1Value}
                    onChange={(event) =>
                      setNoFileChosen1Value(event.target.value)
                    }
                  />
                </div>
                <input
                  className={styles.contactFormChild4}
                  placeholder="Type your message here"
                  type="text"
                  value={frameInput9Value}
                  onChange={(event) => setFrameInput9Value(event.target.value)}
                />
                <div className={styles.contactFormInner2}>
                  <div className={styles.sendContainer}>
                    <div className={styles.send}>send</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.makeEnquiry1}>
            <div className={styles.bigBlur32} data-animate-on-scroll />
            <div className={styles.bgBlur22} data-animate-on-scroll />
            <img
              className={styles.bgBlurIcon2}
              alt=""
              src="/bg-blur.svg"
              data-animate-on-scroll
            />
            <div className={styles.desktopMakeEnquirycomun2}>
              <section className={styles.frameParent4}>
                <div className={styles.makeAnEnquiryFrame}>
                  <div className={styles.workWithUsContainer}>
                    <span className={styles.makeAn}>{`Make an `}</span>
                    <span className={styles.enquiry}>enquiry</span>
                  </div>
                </div>
                <div className={styles.frameParent5}>
                  <div className={styles.contactUsContainer}>
                    <h5 className={styles.careers3} data-animate-on-scroll>
                      CONTACT US
                    </h5>
                  </div>
                  <p
                    className={styles.agrospectrumLtdHeadOfficeContainer}
                    data-animate-on-scroll
                  >
                    <div className={styles.ourInnovativeGroup}>
                      <p className={styles.agrospectrumLtd}>
                        Agrospectrum Ltd.
                      </p>
                      <p className={styles.agrospectrumLtd}>HEAD OFFICE</p>
                      <p className={styles.agrospectrumLtd}>No. 24 Maseru St</p>
                      <p className={styles.agrospectrumLtd}>East Legon, G/A</p>
                      <p className={styles.agrospectrumLtd}>Accra - Ghana</p>
                    </div>
                  </p>
                  <div className={styles.phoneGroup}>
                    <div className={styles.phone}>PHONE</div>
                    <div className={styles.div1}>+233(0) 593 808 064</div>
                  </div>
                  <div className={styles.phoneGroup}>
                    <div className={styles.phone}>EMAIL</div>
                    <div className={styles.customercarebslcomgh1}>
                      customercare@bsl.com.gh
                    </div>
                  </div>
                </div>
              </section>
              <div className={styles.contactForm2}>
                <div className={styles.enquiryTypeFrame}>
                  <div className={styles.enquiryType}>Enquiry type</div>
                </div>
                <div className={styles.frameContainer}>
                  <button className={styles.generalFrame}>
                    <div className={styles.general2}>General</div>
                  </button>
                  <button className={styles.frameWrapper1}>
                    <div className={styles.groupParent1}>
                      <img
                        className={styles.frameChild2}
                        alt=""
                        src="/group-902.svg"
                      />
                      <div className={styles.business2}>Business</div>
                    </div>
                  </button>
                  <button className={styles.careersWrapper1}>
                    <div className={styles.careers6}>Careers</div>
                  </button>
                </div>
                <input
                  className={styles.contactFormChild5}
                  placeholder="Name"
                  type="text"
                  value={frameInput10Value}
                  onChange={(event) => setFrameInput10Value(event.target.value)}
                />
                <input
                  className={styles.contactFormChild5}
                  placeholder="Phone"
                  type="text"
                  value={frameInput11Value}
                  onChange={(event) => setFrameInput11Value(event.target.value)}
                />
                <input
                  className={styles.contactFormChild5}
                  placeholder="Email"
                  type="text"
                  value={frameInput12Value}
                  onChange={(event) => setFrameInput12Value(event.target.value)}
                />
                <div className={styles.frameParent7}>
                  <input
                    className={styles.frameChild3}
                    placeholder="Choose file"
                    type="text"
                    value={frameInput13Value}
                    onChange={(event) =>
                      setFrameInput13Value(event.target.value)
                    }
                  />
                  <input
                    className={styles.noFileChosen2}
                    placeholder="No file chosen"
                    type="text"
                    value={noFileChosen2Value}
                    onChange={(event) =>
                      setNoFileChosen2Value(event.target.value)
                    }
                  />
                </div>
                <input
                  className={styles.contactFormChild8}
                  placeholder="Type your message here"
                  type="text"
                  value={frameInput14Value}
                  onChange={(event) => setFrameInput14Value(event.target.value)}
                />
                <div className={styles.contactFormInner3}>
                  <div className={styles.sendFrame}>
                    <div className={styles.send}>send</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.makeAnEnquiry}>
            <div className={styles.frameParent8}>
              <section className={styles.frameParent9}>
                <div className={styles.makeAnEnquiryWrapper1}>
                  <div className={styles.workWithUsContainer}>
                    <span className={styles.makeAn}>{`Make an `}</span>
                    <span className={styles.enquiry}>enquiry</span>
                  </div>
                </div>
                <div className={styles.frameParent10}>
                  <div className={styles.contactUsFrame}>
                    <h5 className={styles.careers3} data-animate-on-scroll>
                      CONTACT US
                    </h5>
                  </div>
                  <p
                    className={styles.agrospectrumLtdHeadOfficeFrame}
                    data-animate-on-scroll
                  >
                    <div className={styles.ourInnovativeGroup}>
                      <p className={styles.agrospectrumLtd}>
                        Agrospectrum Ltd.
                      </p>
                      <p className={styles.agrospectrumLtd}>HEAD OFFICE</p>
                      <p className={styles.agrospectrumLtd}>No. 24 Maseru St</p>
                      <p className={styles.agrospectrumLtd}>East Legon, G/A</p>
                      <p className={styles.agrospectrumLtd}>Accra - Ghana</p>
                    </div>
                  </p>
                  <div className={styles.phoneContainer}>
                    <div className={styles.phone}>PHONE</div>
                    <div className={styles.div2}>+233(0) 593 808 064</div>
                  </div>
                  <div className={styles.phoneContainer}>
                    <div className={styles.phone}>EMAIL</div>
                    <div className={styles.customercarebslcomgh2}>
                      customercare@bsl.com.gh
                    </div>
                  </div>
                </div>
              </section>
              <img
                className={styles.bgBlurIcon3}
                alt=""
                src="/bg-blur.svg"
                data-animate-on-scroll
              />
              <div className={styles.contactForm3}>
                <div className={styles.enquiryTypeWrapper1}>
                  <div className={styles.enquiryType}>Enquiry type</div>
                </div>
                <div className={styles.frameContainer}>
                  <button className={styles.generalWrapper1}>
                    <div className={styles.general3}>General</div>
                  </button>
                  <button className={styles.frameWrapper2}>
                    <div className={styles.groupParent2}>
                      <img
                        className={styles.frameChild4}
                        alt=""
                        src="/group-902.svg"
                      />
                      <div className={styles.business3}>Business</div>
                    </div>
                  </button>
                  <button className={styles.careersWrapper2}>
                    <div className={styles.careers7}>Careers</div>
                  </button>
                </div>
                <input
                  className={styles.contactFormChild9}
                  placeholder="Name"
                  type="text"
                  value={frameInput15Value}
                  onChange={(event) => setFrameInput15Value(event.target.value)}
                />
                <input
                  className={styles.contactFormChild9}
                  placeholder="Phone"
                  type="text"
                  value={frameInput16Value}
                  onChange={(event) => setFrameInput16Value(event.target.value)}
                />
                <input
                  className={styles.contactFormChild9}
                  placeholder="Email"
                  type="text"
                  value={frameInput17Value}
                  onChange={(event) => setFrameInput17Value(event.target.value)}
                />
                <div className={styles.frameParent12}>
                  <input
                    className={styles.frameChild5}
                    placeholder="Choose file"
                    type="text"
                    value={frameInput18Value}
                    onChange={(event) =>
                      setFrameInput18Value(event.target.value)
                    }
                  />
                  <input
                    className={styles.noFileChosen3}
                    placeholder="No file chosen"
                    type="text"
                    value={noFileChosen3Value}
                    onChange={(event) =>
                      setNoFileChosen3Value(event.target.value)
                    }
                  />
                </div>
                <input
                  className={styles.contactFormChild12}
                  placeholder="Type your message here"
                  type="text"
                  value={frameInput19Value}
                  onChange={(event) => setFrameInput19Value(event.target.value)}
                />
                <div className={styles.contactFormInner4}>
                  <div className={styles.sendWrapper1}>
                    <div className={styles.send}>send</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bgBlur23} data-animate-on-scroll />
            <img
              className={styles.bgBlurIcon4}
              alt=""
              src="/bg-blur.svg"
              data-animate-on-scroll
            />
          </div>
          <div className={styles.makeAnEnquiry1}>
            <div className={styles.frameParent13}>
              <section className={styles.frameParent14}>
                <div className={styles.makeAnEnquiryWrapper2}>
                  <div className={styles.workWithUsContainer}>
                    <span className={styles.makeAn}>{`Make an `}</span>
                    <span className={styles.enquiry}>enquiry</span>
                  </div>
                </div>
                <div className={styles.frameParent15}>
                  <div className={styles.contactUsWrapper1}>
                    <h5 className={styles.careers3} data-animate-on-scroll>
                      CONTACT US
                    </h5>
                  </div>
                  <p className={styles.frameP} data-animate-on-scroll>
                    <div className={styles.ourInnovativeGroup}>
                      <p className={styles.agrospectrumLtd}>
                        Agrospectrum Ltd.
                      </p>
                      <p className={styles.agrospectrumLtd}>HEAD OFFICE</p>
                      <p className={styles.agrospectrumLtd}>No. 24 Maseru St</p>
                      <p className={styles.agrospectrumLtd}>East Legon, G/A</p>
                      <p className={styles.agrospectrumLtd}>Accra - Ghana</p>
                    </div>
                  </p>
                  <div className={styles.phoneParent1}>
                    <div className={styles.phone}>PHONE</div>
                    <div className={styles.div3}>+233(0) 593 808 064</div>
                  </div>
                  <div className={styles.phoneParent1}>
                    <div className={styles.phone}>EMAIL</div>
                    <div className={styles.customercarebslcomgh3}>
                      customercare@bsl.com.gh
                    </div>
                  </div>
                </div>
              </section>
              <img
                className={styles.bgBlurIcon5}
                alt=""
                src="/bg-blur.svg"
                data-animate-on-scroll
              />
              <div className={styles.contactForm4}>
                <div className={styles.enquiryTypeWrapper2}>
                  <div className={styles.enquiryType}>Enquiry type</div>
                </div>
                <div className={styles.frameContainer}>
                  <button className={styles.generalWrapper2}>
                    <div className={styles.general4}>General</div>
                  </button>
                  <button className={styles.frameWrapper3}>
                    <div className={styles.groupParent3}>
                      <img
                        className={styles.frameChild6}
                        alt=""
                        src="/group-902.svg"
                      />
                      <div className={styles.business4}>Business</div>
                    </div>
                  </button>
                  <button className={styles.careersWrapper3}>
                    <div className={styles.careers8}>Careers</div>
                  </button>
                </div>
                <input
                  className={styles.contactFormChild13}
                  placeholder="Name"
                  type="text"
                  value={frameInput20Value}
                  onChange={(event) => setFrameInput20Value(event.target.value)}
                />
                <input
                  className={styles.contactFormChild13}
                  placeholder="Phone"
                  type="text"
                  value={frameInput21Value}
                  onChange={(event) => setFrameInput21Value(event.target.value)}
                />
                <input
                  className={styles.contactFormChild13}
                  placeholder="Email"
                  type="text"
                  value={frameInput22Value}
                  onChange={(event) => setFrameInput22Value(event.target.value)}
                />
                <div className={styles.frameParent17}>
                  <input
                    className={styles.frameChild7}
                    placeholder="Choose file"
                    type="text"
                    value={frameInput23Value}
                    onChange={(event) =>
                      setFrameInput23Value(event.target.value)
                    }
                  />
                  <input
                    className={styles.noFileChosen4}
                    placeholder="No file chosen"
                    type="text"
                    value={noFileChosen4Value}
                    onChange={(event) =>
                      setNoFileChosen4Value(event.target.value)
                    }
                  />
                </div>
                <input
                  className={styles.contactFormChild16}
                  placeholder="Type your message here"
                  type="text"
                  value={frameInput24Value}
                  onChange={(event) => setFrameInput24Value(event.target.value)}
                />
                <div className={styles.contactFormInner5}>
                  <div className={styles.sendWrapper2}>
                    <div className={styles.send}>send</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bgBlur24} data-animate-on-scroll />
            <img
              className={styles.bgBlurIcon6}
              alt=""
              src="/bg-blur.svg"
              data-animate-on-scroll
            />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.dektopFooter} data-animate-on-scroll>
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
            <div className={styles.footer1}>
              <div
                className={styles.transformParent}
                id="footercontent"
                data-animate-on-scroll
              >
                <div className={styles.transform}>
                  <div className={styles.careersWrapper}>
                    <div className={styles.nowWere}>TRANSFORM with</div>
                  </div>
                  <div className={styles.nowWereContainer}>
                    <div className={styles.nowWere1}>AGROSPECTRUM</div>
                  </div>
                  <div className={styles.nuncUltricesTellusWrapper}>
                    <div className={styles.nuncUltricesTellusContainer}>
                      <p
                        className={styles.agrospectrumLtd}
                      >{`Transform your agricultural practices and `}</p>
                      <p className={styles.agrospectrumLtd}>
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
                      <p className={styles.agrospectrumLtd}>
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
                      onClick={onFrameButton16Click}
                    >
                      <div className={styles.getInTouch}>GET IN TOUCH</div>
                    </button>
                  </button>
                </div>
                <div className={styles.frameParent18}>
                  <div className={styles.frameParent19}>
                    <div className={styles.nowWereParent}>
                      <div className={styles.nowWere2}>business</div>
                      <div className={styles.frameParent20}>
                        <div
                          className={styles.nowWereFrame}
                          onClick={onFrameContainerClick}
                        >
                          <b
                            className={styles.nowWere3}
                            onClick={onNowWereTextClick}
                          >
                            CAREERS
                          </b>
                        </div>
                        <div className={styles.nowWereWrapper1}>
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
                    <div className={styles.frameParent21}>
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
                  <div className={styles.frameParent22}>
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
                <div className={styles.frameParent23}>
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
            </div>
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
          <div className={styles.div4} data-animate-on-scroll>
            <div className={styles.footerlogo1}>
              <div className={styles.partnersBanner1}>
                <div className={styles.partnerLogosGroup}>
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
                  <div className={styles.partnerLogos3}>
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
            </div>
            <div className={styles.footer2}>
              <div
                className={styles.transformGroup}
                id="footercontent"
                data-animate-on-scroll
              >
                <div className={styles.transform1}>
                  <div className={styles.nowWereWrapper4}>
                    <div className={styles.nowWere32}>TRANSFORM with</div>
                  </div>
                  <div className={styles.nowWereWrapper5}>
                    <div className={styles.nowWere33}>AGROSPECTRUM</div>
                  </div>
                  <div className={styles.nuncUltricesTellusFrame}>
                    <div className={styles.nuncUltricesTellusContainer1}>
                      <p
                        className={styles.agrospectrumLtd}
                      >{`Transform your agricultural practices and `}</p>
                      <p className={styles.agrospectrumLtd}>
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
                      <p className={styles.agrospectrumLtd}>
                        <span>{`and fostering a connected `}</span>
                        <b className={styles.cultivateSuccessWith}>
                          global community
                        </b>
                      </p>
                    </div>
                  </div>
                  <button
                    className={styles.transformChild}
                    onClick={onFrameButton17Click}
                    data-animate-on-scroll
                  >
                    <div className={styles.getInTouchContainer}>
                      <div className={styles.getInTouch1}>GET IN TOUCH</div>
                    </div>
                  </button>
                </div>
                <div className={styles.frameParent24}>
                  <div className={styles.frameParent25}>
                    <div className={styles.nowWereParent9}>
                      <div className={styles.nowWere34}>business</div>
                      <div className={styles.frameParent26}>
                        <div className={styles.nowWereWrapper6}>
                          <b className={styles.nowWere35}>CAREERS</b>
                        </div>
                        <div className={styles.nowWereWrapper6}>
                          <b className={styles.nowWere36}>{`ABOUT US `}</b>
                        </div>
                        <div className={styles.nowWereWrapper8}>
                          <b className={styles.nowWere36}>PRIVACY POLICY</b>
                        </div>
                        <div className={styles.nowWereWrapper3}>
                          <b className={styles.nowWere38}>PARTNERS</b>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent27}>
                      <div className={styles.nowWereParent10}>
                        <div className={styles.nowWere39}>{`CONTACT US `}</div>
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
                  <div className={styles.frameParent28}>
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
                <div className={styles.frameParent29}>
                  <div className={styles.vectorGroup}>
                    <img
                      className={styles.frameChild8}
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
                  <div className={styles.nowWereParent5}>
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
                          className={styles.vectorIcon3}
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className={styles.frame1}>
                        <img
                          className={styles.vectorIcon4}
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className={styles.vectorWrapper1}>
                        <img
                          className={styles.vectorIcon5}
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
                <div className={styles.frameChild9} />
              </div>
            </section>
          </div>
          <div className={styles.div5} data-animate-on-scroll>
            <div className={styles.footerlogo2}>
              <div className={styles.partnersBanner2}>
                <div className={styles.partnerLogosContainer}>
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
                  <div className={styles.partnerLogos5}>
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
            <div className={styles.footer3}>
              <div
                className={styles.transformContainer}
                id="footercontent"
                data-animate-on-scroll
              >
                <div className={styles.transform2}>
                  <div className={styles.nowWereWrapper10}>
                    <div className={styles.nowWere64}>TRANSFORM with</div>
                  </div>
                  <div className={styles.nowWereWrapper11}>
                    <div className={styles.nowWere65}>AGROSPECTRUM</div>
                  </div>
                  <div className={styles.nuncUltricesTellusWrapper1}>
                    <div className={styles.nuncUltricesTellusContainer2}>
                      <p
                        className={styles.agrospectrumLtd}
                      >{`Transform your agricultural practices and `}</p>
                      <p className={styles.agrospectrumLtd}>
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
                      <p className={styles.agrospectrumLtd}>
                        <span>{`and fostering a connected `}</span>
                        <b className={styles.cultivateSuccessWith}>
                          global community
                        </b>
                      </p>
                    </div>
                  </div>
                  <button
                    className={styles.transformInner1}
                    onClick={onFrameButton18Click}
                    data-animate-on-scroll
                  >
                    <div className={styles.getInTouchFrame}>
                      <div className={styles.getInTouch2}>GET IN TOUCH</div>
                    </div>
                  </button>
                </div>
                <div className={styles.frameParent30}>
                  <div className={styles.frameParent31}>
                    <div className={styles.nowWereParent19}>
                      <div className={styles.nowWere66}>business</div>
                      <div className={styles.frameParent32}>
                        <div className={styles.nowWereWrapper12}>
                          <b className={styles.nowWere67}>CAREERS</b>
                        </div>
                        <div className={styles.nowWereWrapper12}>
                          <b className={styles.nowWere68}>{`ABOUT US `}</b>
                        </div>
                        <div className={styles.nowWereWrapper14}>
                          <b className={styles.nowWere68}>PRIVACY POLICY</b>
                        </div>
                        <div className={styles.nowWereWrapper3}>
                          <b className={styles.nowWere70}>PARTNERS</b>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent33}>
                      <div className={styles.nowWereParent20}>
                        <div className={styles.nowWere71}>{`CONTACT US `}</div>
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
                  <div className={styles.frameParent34}>
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
                <div className={styles.frameParent35}>
                  <div className={styles.vectorParent1}>
                    <img
                      className={styles.frameChild10}
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
                  <div className={styles.nowWereParent5}>
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
                          className={styles.vectorIcon6}
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className={styles.frame2}>
                        <img
                          className={styles.vectorIcon7}
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className={styles.vectorWrapper3}>
                        <img
                          className={styles.vectorIcon8}
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
                <div className={styles.frameChild11} />
              </div>
            </section>
          </div>
          <div className={styles.div6} data-animate-on-scroll>
            <div className={styles.partnersBanner3}>
              <div className={styles.groupDiv}>
                <div className={styles.partnerLogos6}>
                  <img
                    className={styles.download2Icon6}
                    alt=""
                    src="/download-2@2x.png"
                  />
                  <img
                    className={styles.download5Icon12}
                    alt=""
                    src="/download-5@2x.png"
                  />
                  <img
                    className={styles.downloadIcon6}
                    alt=""
                    src="/download@2x.png"
                  />
                  <img
                    className={styles.download5Icon13}
                    alt=""
                    src="/download-5@2x.png"
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
                  <img
                    className={styles.mofaColorIcon6}
                    alt=""
                    src="/mofa-color@2x.png"
                  />
                  <img
                    className={styles.imagesIcon6}
                    alt=""
                    src="/images@2x.png"
                  />
                  <img
                    className={styles.download6Icon6}
                    alt=""
                    src="/download-6@2x.png"
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
                </div>
                <div className={styles.partnerLogos7}>
                  <img
                    className={styles.download2Icon6}
                    alt=""
                    src="/download-2@2x.png"
                  />
                  <img
                    className={styles.download5Icon12}
                    alt=""
                    src="/download-5@2x.png"
                  />
                  <img
                    className={styles.downloadIcon6}
                    alt=""
                    src="/download@2x.png"
                  />
                  <img
                    className={styles.download5Icon13}
                    alt=""
                    src="/download-5@2x.png"
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
                  <img
                    className={styles.mofaColorIcon6}
                    alt=""
                    src="/mofa-color@2x.png"
                  />
                  <img
                    className={styles.imagesIcon6}
                    alt=""
                    src="/images@2x.png"
                  />
                  <img
                    className={styles.download6Icon6}
                    alt=""
                    src="/download-6@2x.png"
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
              <div className={styles.frameParent36}>
                <div className={styles.allMakeAnEnquiry}>
                  <div className={styles.allMakeAnEnquiry}>
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
              <div className={styles.frameParent37}>
                <div className={styles.nowWereParent34}>
                  <div className={styles.nowWere114}>
                    <div className={styles.nowWere115}>business</div>
                  </div>
                  <b className={styles.nowWere116}>ABOUT US</b>
                  <b className={styles.nowWere116}>CAREERS</b>
                  <b className={styles.nowWere116}>PARTNERS</b>
                  <b className={styles.nowWere119}>PRIVACY POLICY</b>
                </div>
                <div className={styles.frameWrapper6}>
                  <div className={styles.nowWereParent35}>
                    <div className={styles.nowWere120}>
                      <div className={styles.nowWere121}>{`CONTACT US `}</div>
                    </div>
                    <div className={styles.nowWere122}>
                      <div className={styles.nowWere123}>Agrospectrum Ltd.</div>
                    </div>
                    <div className={styles.nowWere124}>
                      <div className={styles.nowWere125}>EAST LEGON office</div>
                    </div>
                    <div className={styles.nowWere126}>
                      <b className={styles.nowWere127}>East Legon,</b>
                    </div>
                    <b className={styles.nowWere128}>Accra - ghana</b>
                    <b className={styles.nowWere129}>No 24 Maseru St</b>
                  </div>
                </div>
              </div>
              <div className={styles.vectorParent2}>
                <img
                  className={styles.frameChild12}
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
                      className={styles.vectorIcon9}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.frame3}>
                    <img
                      className={styles.vectorIcon10}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.vectorWrapper5}>
                    <img
                      className={styles.vectorIcon11}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameParent38}>
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
                <div className={styles.frameParent39}>
                  <div className={styles.nowWereParent38}>
                    <div className={styles.nowWere136}>
                      Agrospectrum Ltd. All Rights Reserved.
                    </div>
                    <div className={styles.nowWere137}>© Copyright 2023</div>
                  </div>
                  <div className={styles.frameChild13} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div7}>
            <div className={styles.partnersBanner4}>
              <div className={styles.partnerLogosParent1}>
                <div className={styles.partnerLogos8}>
                  <img
                    className={styles.download2Icon8}
                    alt=""
                    src="/download-2@2x.png"
                  />
                  <img
                    className={styles.download5Icon16}
                    alt=""
                    src="/download-5@2x.png"
                  />
                  <img
                    className={styles.downloadIcon8}
                    alt=""
                    src="/download@2x.png"
                  />
                  <img
                    className={styles.download5Icon17}
                    alt=""
                    src="/download-5@2x.png"
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
                  <img
                    className={styles.mofaColorIcon8}
                    alt=""
                    src="/mofa-color@2x.png"
                  />
                  <img
                    className={styles.imagesIcon8}
                    alt=""
                    src="/images@2x.png"
                  />
                  <img
                    className={styles.download6Icon8}
                    alt=""
                    src="/download-6@2x.png"
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
                </div>
                <div className={styles.partnerLogos9}>
                  <img
                    className={styles.download2Icon8}
                    alt=""
                    src="/download-2@2x.png"
                  />
                  <img
                    className={styles.download5Icon16}
                    alt=""
                    src="/download-5@2x.png"
                  />
                  <img
                    className={styles.downloadIcon8}
                    alt=""
                    src="/download@2x.png"
                  />
                  <img
                    className={styles.download5Icon17}
                    alt=""
                    src="/download-5@2x.png"
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
                  <img
                    className={styles.mofaColorIcon8}
                    alt=""
                    src="/mofa-color@2x.png"
                  />
                  <img
                    className={styles.imagesIcon8}
                    alt=""
                    src="/images@2x.png"
                  />
                  <img
                    className={styles.download6Icon8}
                    alt=""
                    src="/download-6@2x.png"
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
              <div className={styles.frameParent40}>
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
              <div className={styles.vectorParent3}>
                <img
                  className={styles.frameChild14}
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
                      className={styles.vectorIcon12}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.frame4}>
                    <img
                      className={styles.vectorIcon13}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.vectorWrapper7}>
                    <img
                      className={styles.vectorIcon14}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameParent41}>
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
                <div className={styles.frameParent42}>
                  <div className={styles.nowWereParent49}>
                    <div className={styles.nowWere179}>
                      Agrospectrum Ltd. All Rights Reserved.
                    </div>
                    <div className={styles.nowWere180}>© Copyright 2023</div>
                  </div>
                  <div className={styles.frameChild15} />
                </div>
              </div>
            </div>
          </div>
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

export default Careers;
