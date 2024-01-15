import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import styles from "./media.module.css";

const Media: NextPage = () => {
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

  const onGroupClick = useCallback(() => {
    // Please sync "1-homepage" to the project
  }, []);

  const onGroupIconClick = useCallback(() => {
    // Please sync "1-homepage" to the project
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
      <div className={styles.media}>
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
                    src="/logo10@2x.png"
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
                <button className={styles.media1} onClick={onMediaClick}>
                  <div className={styles.linkPricing3}>Media</div>
                  <img
                    className={styles.mediaChild}
                    alt=""
                    src="/line-1@2x.png"
                  />
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
                    src="/logo10@2x.png"
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
                    src="/logo10@2x.png"
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
                    src="/logo11@2x.png"
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
                    src="/logo12@2x.png"
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
        <div className={styles.allheroMedia}>
          <header className={styles.whyWorkWithUs}>
            <div className={styles.whyWorkCard} data-animate-on-scroll>
              <section className={styles.galleryImages}>
                <img
                  className={styles.galleryImagesChild}
                  alt=""
                  src="/frame-112@2x.png"
                />
                <img
                  className={styles.galleryImagesItem}
                  alt=""
                  src="/frame-113@2x.png"
                />
                <img
                  className={styles.mrCastroAwards1}
                  alt=""
                  src="/mr-castro-awards-1@2x.png"
                />
                <img
                  className={styles.galleryImagesInner}
                  alt=""
                  src="/frame-114@2x.png"
                />
                <img
                  className={styles.frameIcon}
                  alt=""
                  src="/frame-115@2x.png"
                  data-animate-on-scroll
                />
              </section>
              <section className={styles.galleryImages1}>
                <img
                  className={styles.galleryImagesChild1}
                  alt=""
                  src="/frame-113@2x.png"
                />
                <img
                  className={styles.mrCastroAwards11}
                  alt=""
                  src="/mr-castro-awards-1@2x.png"
                />
                <img
                  className={styles.galleryImagesChild2}
                  alt=""
                  src="/frame-114@2x.png"
                />
              </section>
              <div className={styles.arrow}>
                <img
                  className={styles.arrowChild}
                  alt=""
                  src="/group-919.svg"
                />
              </div>
              <div className={styles.labels}>
                <div className={styles.games}>Games</div>
                <div className={styles.games}>Researches</div>
                <div className={styles.games}>Events</div>
                <b className={styles.awards}>Awards</b>
                <div className={styles.games}>Conferences</div>
                <div className={styles.games}>Seminars</div>
                <div className={styles.games}>Games</div>
              </div>
            </div>
          </header>
        </div>
        <header className={styles.header}>
          <section className={styles.galleryImages2}>
            <img
              className={styles.galleryImagesChild3}
              alt=""
              src="/frame-115@2x.png"
            />
            <img
              className={styles.mrCastroAwards12}
              alt=""
              src="/mr-castro-awards-1@2x.png"
            />
            <img
              className={styles.galleryImagesChild3}
              alt=""
              src="/frame-114@2x.png"
            />
          </section>
          <div className={styles.arrow1}>
            <img className={styles.arrowItem} alt="" src="/group-919.svg" />
          </div>
          <div className={styles.labels1}>
            <div className={styles.games}>Games</div>
            <div className={styles.games}>Researches</div>
            <div className={styles.games}>Events</div>
            <b className={styles.awards1}>Awards</b>
            <div className={styles.games}>Conferences</div>
            <div className={styles.games}>Seminars</div>
            <div className={styles.games}>Games</div>
          </div>
        </header>
        <div className={styles.blogpost}>
          <section className={styles.teamFaqCta}>
            <div className={styles.blogNewsParent}>
              <b className={styles.blogNews}>{`Blog & News`}</b>
              <b className={styles.learnRecentNewsContainer}>
                <p className={styles.learnRecentPractices}>
                  Learn Recent Practices
                </p>
                <p className={styles.learnRecentPractices}>News and Blogs</p>
              </b>
              <section className={styles.frameParent} data-animate-on-scroll>
                <section className={styles.frameGroup}>
                  <div className={styles.frameContainer} data-animate-on-scroll>
                    <div className={styles.baseParent}>
                      <img
                        className={styles.baseIcon}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.frameChild}
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className={styles.parent}>
                          <div className={styles.div}>25</div>
                          <div className={styles.dec}>DEC</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper}>
                      <div
                        className={styles.agrospectrumIsRevolutionizinParent}
                      >
                        <div
                          className={
                            styles.agrospectrumIsRevolutionizinContainer
                          }
                        >
                          <p
                            className={styles.learnRecentPractices}
                          >{`Agrospectrum is Revolutionizing `}</p>
                          <p className={styles.learnRecentPractices}>
                            Agriculture Through Digital Innovation
                          </p>
                        </div>
                        <div className={styles.inTheGhanaianContainer}>
                          <p className={styles.learnRecentPractices}>
                            In the Ghanaian space and beyond we at
                          </p>
                          <p className={styles.learnRecentPractices}>
                            Agropspectrum has equipped...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.baseGroup}>
                      <div className={styles.base} />
                      <div className={styles.byAudreyK}>By Audrey K</div>
                      <div className={styles.byAudreyK}>2 Comments</div>
                    </div>
                  </div>
                  <div className={styles.frameDiv} data-animate-on-scroll>
                    <div className={styles.baseContainer}>
                      <img
                        className={styles.baseIcon}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.vectorGroup}>
                        <img
                          className={styles.frameChild}
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className={styles.div1}>25</div>
                        <div className={styles.oct}>DEC</div>
                      </div>
                    </div>
                    <div className={styles.frameParent1}>
                      <div className={styles.howDigitalizationConnectsFaParent}>
                        <div
                          className={
                            styles.agrospectrumIsRevolutionizinContainer
                          }
                        >
                          <p
                            className={styles.learnRecentPractices}
                          >{`How Digitalization Connects Farmers `}</p>
                          <p className={styles.learnRecentPractices}>
                            with Global Opportunities"
                          </p>
                        </div>
                        <div className={styles.variusSeduMagnaContainer}>
                          <p className={styles.learnRecentPractices}>
                            Varius sedu. Magna sollicitud volutpat nim
                          </p>
                          <p className={styles.learnRecentPractices}>
                            quis. Sed sit leoys quis nibh...
                          </p>
                        </div>
                      </div>
                      <div className={styles.baseParent1}>
                        <div className={styles.base} />
                        <div className={styles.byAudreyK}>By Audrey K</div>
                        <div className={styles.byAudreyK}>2 Comments</div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className={styles.frameParent2}>
                  <div className={styles.frameParent3}>
                    <div className={styles.baseParent2}>
                      <img
                        className={styles.baseIcon}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.vectorContainer}>
                        <img
                          className={styles.frameChild}
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className={styles.div1}>25</div>
                        <div className={styles.oct}>DEC</div>
                      </div>
                    </div>
                    <div className={styles.aDeepDiveIntoTheImpactOfParent}>
                      <div
                        className={styles.agrospectrumIsRevolutionizinContainer}
                      >
                        <p
                          className={styles.learnRecentPractices}
                        >{`A Deep Dive into the Impact of `}</p>
                        <p className={styles.learnRecentPractices}>
                          Agrospectrum on Agricultural Operations
                        </p>
                      </div>
                      <div className={styles.variusSeduMagnaContainer}>
                        <p className={styles.learnRecentPractices}>
                          Varius sedu. Magna sollicitud volutpat nim
                        </p>
                        <p className={styles.learnRecentPractices}>
                          quis. Sed sit leoys quis nibh...
                        </p>
                      </div>
                    </div>
                    <div className={styles.baseParent3}>
                      <div className={styles.base} />
                      <div className={styles.byAudreyK}>By Big O</div>
                      <div className={styles.byAudreyK}>2 Comments</div>
                    </div>
                  </div>
                  <div className={styles.frameParent4}>
                    <div className={styles.baseParent2}>
                      <img
                        className={styles.baseIcon}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.vectorParent1}>
                        <img
                          className={styles.frameChild}
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className={styles.group}>
                          <div className={styles.div}>25</div>
                          <div className={styles.dec3}>DEC</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.aDeepDiveIntoTheImpactOfParent}>
                      <div
                        className={styles.agrospectrumIsRevolutionizinContainer}
                      >
                        <p
                          className={styles.learnRecentPractices}
                        >{`Enhancing Agricultural Resilience Through `}</p>
                        <p className={styles.learnRecentPractices}>
                          Ignitia's Climate Monitoring"
                        </p>
                      </div>
                      <div className={styles.variusSeduMagnaContainer}>
                        <p className={styles.learnRecentPractices}>
                          Varius sedu. Magna sollicitud volutpat nim
                        </p>
                        <p className={styles.learnRecentPractices}>
                          quis. Sed sit leoys quis nibh...
                        </p>
                      </div>
                    </div>
                    <div className={styles.baseGroup}>
                      <div className={styles.base} />
                      <div className={styles.byAudreyK}>Failu M.</div>
                      <div className={styles.byAudreyK}>2 Comments</div>
                    </div>
                  </div>
                </div>
                <section className={styles.frameSection}>
                  <div className={styles.frameParent5}>
                    <div className={styles.baseParent2}>
                      <img
                        className={styles.baseIcon}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.vectorParent2}>
                        <img
                          className={styles.frameChild}
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className={styles.div1}>25</div>
                        <div className={styles.oct}>OCT</div>
                      </div>
                    </div>
                    <div className={styles.aDeepDiveIntoTheImpactOfParent}>
                      <div
                        className={styles.agrospectrumIsRevolutionizinContainer}
                      >
                        <p className={styles.learnRecentPractices}>
                          Unveiling the Power of Data Analytics
                        </p>
                        <p className={styles.learnRecentPractices}>
                          in Agriculture with our platform
                        </p>
                      </div>
                      <div className={styles.variusSeduMagnaContainer}>
                        <p className={styles.learnRecentPractices}>
                          Varius sedu. Magna sollicitud volutpat nim
                        </p>
                        <p className={styles.learnRecentPractices}>
                          quis. Sed sit leoys quis nibh...
                        </p>
                      </div>
                    </div>
                    <div className={styles.baseParent7}>
                      <div className={styles.base} />
                      <div className={styles.byAudreyK}>Morenika</div>
                      <div className={styles.byAudreyK}>2 Comments</div>
                    </div>
                  </div>
                  <div className={styles.frameParent6}>
                    <div className={styles.baseParent2}>
                      <img
                        className={styles.baseIcon}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.vectorParent3}>
                        <img
                          className={styles.frameChild}
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className={styles.container}>
                          <div className={styles.div}>25</div>
                          <div className={styles.dec}>OCT</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.aDeepDiveIntoTheImpactOfParent}>
                      <div
                        className={styles.agrospectrumIsRevolutionizinContainer}
                      >
                        <p className={styles.learnRecentPractices}>
                          A Sustainable Future with Agrospectrum's
                        </p>
                        <p className={styles.learnRecentPractices}>
                          Environmental Impact Monitoring"
                        </p>
                      </div>
                      <div className={styles.variusSeduMagnaContainer}>
                        <p className={styles.learnRecentPractices}>
                          Varius sedu. Magna sollicitud volutpat nim
                        </p>
                        <p className={styles.learnRecentPractices}>
                          quis. Sed sit leoys quis nibh...
                        </p>
                      </div>
                    </div>
                    <div className={styles.baseGroup}>
                      <div className={styles.base} />
                      <div className={styles.byAudreyK}>Failu M.</div>
                      <div className={styles.byAudreyK}>2 Comments</div>
                    </div>
                  </div>
                </section>
              </section>
            </div>
            <img
              className={styles.groupIcon1}
              alt=""
              src="/group.svg"
              onClick={onGroupClick}
            />
          </section>
          <section className={styles.section}>
            <div className={styles.blogNewsGroup}>
              <b className={styles.blogNews1}>{`Blog & News`}</b>
              <b className={styles.learnRecentNewsContainer1}>
                <p className={styles.learnRecentPractices}>
                  Learn Recent Practices
                </p>
                <p className={styles.learnRecentPractices}>News and Blogs</p>
              </b>
              <section className={styles.frameWrapper1} data-animate-on-scroll>
                <section className={styles.frameParent7}>
                  <div className={styles.frameParent8} data-animate-on-scroll>
                    <div className={styles.baseParent10}>
                      <img
                        className={styles.baseIcon6}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.groupDiv}>
                        <img
                          className={styles.groupItem}
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className={styles.div6}>25</div>
                        <div className={styles.dec4}>DEC</div>
                      </div>
                    </div>
                    <div className={styles.frameParent9}>
                      <div className={styles.agrospectrumIsRevolutionizinGroup}>
                        <div
                          className={
                            styles.agrospectrumIsRevolutionizinContainer1
                          }
                        >
                          <p
                            className={styles.learnRecentPractices}
                          >{`Agrospectrum is Revolutionizing `}</p>
                          <p className={styles.learnRecentPractices}>
                            Agriculture Through Digital Innovation
                          </p>
                        </div>
                        <div className={styles.inTheGhanaianContainer1}>
                          <p className={styles.learnRecentPractices}>
                            In the Ghanaian space and beyond we at
                          </p>
                          <p className={styles.learnRecentPractices}>
                            Agropspectrum has equipped...
                          </p>
                        </div>
                      </div>
                      <div className={styles.baseParent11}>
                        <div className={styles.base6} />
                        <div className={styles.byAudreyK2}>By Audrey K</div>
                        <div className={styles.byAudreyK2}>2 Comments</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent8} data-animate-on-scroll>
                    <div className={styles.baseParent10}>
                      <img
                        className={styles.baseIcon6}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.groupDiv}>
                        <img
                          className={styles.groupItem}
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className={styles.div6}>25</div>
                        <div className={styles.dec4}>DEC</div>
                      </div>
                    </div>
                    <div className={styles.frameParent9}>
                      <div className={styles.agrospectrumIsRevolutionizinGroup}>
                        <div
                          className={
                            styles.agrospectrumIsRevolutionizinContainer1
                          }
                        >
                          How Digitalization Connects Farmers with Global
                          Opportunities"
                        </div>
                        <div className={styles.digitalisationHasBeing}>
                          Digitalisation has being a an huge ddevelopmental step
                          ....
                        </div>
                      </div>
                      <div className={styles.baseParent11}>
                        <div className={styles.base6} />
                        <div className={styles.byAudreyK2}>By Audrey K</div>
                        <div className={styles.byAudreyK2}>2 Comments</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent8} data-animate-on-scroll>
                    <div className={styles.baseParent10}>
                      <img
                        className={styles.baseIcon6}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.groupDiv}>
                        <img
                          className={styles.groupItem}
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className={styles.div6}>25</div>
                        <div className={styles.dec4}>DEC</div>
                      </div>
                    </div>
                    <div className={styles.frameParent9}>
                      <div className={styles.agrospectrumIsRevolutionizinGroup}>
                        <div
                          className={
                            styles.agrospectrumIsRevolutionizinContainer1
                          }
                        >
                          <p
                            className={styles.learnRecentPractices}
                          >{`A Deep Dive into the Impact of `}</p>
                          <p className={styles.learnRecentPractices}>
                            Agrospectrum on Agricultural Operations
                          </p>
                        </div>
                        <div className={styles.digitalisationHasBeing}>
                          Deep dive into Agrospectrum’s misson of
                          revolutioinalizing the Agriculture industry across
                          ....
                        </div>
                      </div>
                      <div className={styles.baseParent11}>
                        <div className={styles.base6} />
                        <div className={styles.byAudreyK2}>By Audrey K</div>
                        <div className={styles.byAudreyK2}>2 Comments</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent8} data-animate-on-scroll>
                    <div className={styles.baseParent10}>
                      <img
                        className={styles.baseIcon6}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.groupDiv}>
                        <img
                          className={styles.groupItem}
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className={styles.div6}>25</div>
                        <div className={styles.dec4}>DEC</div>
                      </div>
                    </div>
                    <div className={styles.frameParent9}>
                      <div className={styles.agrospectrumIsRevolutionizinGroup}>
                        <div
                          className={
                            styles.agrospectrumIsRevolutionizinContainer1
                          }
                        >
                          <p
                            className={styles.learnRecentPractices}
                          >{`Enhancing Agricultural Resilience Through `}</p>
                          <p className={styles.learnRecentPractices}>
                            Ignitia's Climate Monitoring"
                          </p>
                        </div>
                        <div className={styles.digitalisationHasBeing}>
                          Deep dive into Agrospectrum’s misson of
                          revolutioinalizing the Agriculture industry across
                          ....
                        </div>
                      </div>
                      <div className={styles.baseParent11}>
                        <div className={styles.base6} />
                        <div className={styles.byAudreyK2}>By Audrey K</div>
                        <div className={styles.byAudreyK2}>2 Comments</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent8} data-animate-on-scroll>
                    <div className={styles.baseParent10}>
                      <img
                        className={styles.baseIcon6}
                        alt=""
                        src="/base@2x.png"
                      />
                      <div className={styles.groupDiv}>
                        <img
                          className={styles.groupItem}
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className={styles.div6}>25</div>
                        <div className={styles.dec4}>DEC</div>
                      </div>
                    </div>
                    <div className={styles.frameParent9}>
                      <div className={styles.agrospectrumIsRevolutionizinGroup}>
                        <div
                          className={
                            styles.agrospectrumIsRevolutionizinContainer1
                          }
                        >
                          <p className={styles.learnRecentPractices}>
                            A Sustainable Future with Agrospectrum's
                          </p>
                          <p className={styles.learnRecentPractices}>
                            Environmental Impact Monitoring"
                          </p>
                        </div>
                        <div className={styles.digitalisationHasBeing}>
                          Deep dive into Agrospectrum’s misson of
                          revolutioinalizing the Agriculture industry across
                          ....
                        </div>
                      </div>
                      <div className={styles.baseParent11}>
                        <div className={styles.base6} />
                        <div className={styles.byAudreyK2}>By Audrey K</div>
                        <div className={styles.byAudreyK2}>2 Comments</div>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
              <img
                className={styles.groupIcon2}
                alt=""
                src="/group.svg"
                onClick={onGroupIconClick}
              />
            </div>
          </section>
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
                    className={styles.learnRecentPractices}
                  >{`Transform your agricultural practices and `}</p>
                  <p className={styles.learnRecentPractices}>
                    <span className={styles.cultivateSuccessWith}>
                      cultivate success with
                    </span>
                    <b className={styles.cultivateSuccessWith}>
                      {" "}
                      industry's best
                    </b>
                    <span>—empowering farmers, streamlining operations,</span>
                  </p>
                  <p className={styles.learnRecentPractices}>
                    <span>{`and fostering a connected `}</span>
                    <b className={styles.cultivateSuccessWith}>
                      global community
                    </b>
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
            <div className={styles.frameParent18}>
              <div className={styles.frameParent19}>
                <div className={styles.nowWereParent}>
                  <div className={styles.nowWere2}>business</div>
                  <div className={styles.frameParent20}>
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
              <div className={styles.vectorParent8}>
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
              <div className={styles.allheroMedia}>
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
                      className={styles.groupIcon3}
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
                  <div className={styles.frame}>
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.vectorFrame}>
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

export default Media;
