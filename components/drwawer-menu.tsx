import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./drwawer-menu.module.css";

type DrwawerMenuType = {
  onClose?: () => void;
};

const DrwawerMenu: NextPage<DrwawerMenuType> = ({ onClose }) => {
  const router = useRouter();
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

  const onBdp1ImageClick = useCallback(() => {
    window.location.href = "https://bdp.com.gh/";
    onClose && onClose();
  }, []);

  const onSpectrum1ImageClick = useCallback(() => {
    window.location.href = "https://sfl.com.gh/";
    onClose && onClose();
  }, []);

  const onIsg1ImageClick = useCallback(() => {
    window.open("https://isg.com.gh/");
    onClose && onClose();
  }, []);

  const onAboutUsClick = useCallback(() => {
    router.push("/about-u-s-page");
  }, [router]);

  const onProductsSevicesClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onClientsPartnersClick = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

  const onMediaClick = useCallback(() => {
    router.push("/media");
  }, [router]);

  const onCareersClick = useCallback(() => {
    router.push("/careers");
  }, [router]);

  const onContactUsContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onBdp1Image1Click = useCallback(() => {
    window.location.href = "https://bdp.com.gh/";
    onClose && onClose();
  }, []);

  const onSpectrum1Image1Click = useCallback(() => {
    window.location.href = "https://sfl.com.gh/";
    onClose && onClose();
  }, []);

  const onIsg1Image1Click = useCallback(() => {
    window.open("https://isg.com.gh/");
    onClose && onClose();
  }, []);

  const onBslMain6IconClick = useCallback(() => {
    window.open("https://bsl.com.gh/");
    onClose && onClose();
  }, []);

  return (
    <div className={styles.drwawerMenu} data-animate-on-scroll>
      <div className={styles.frameParent}>
        <div className={styles.logoassetParent}>
          <div className={styles.logoasset}>
            <button className={styles.lgoframe}>
              <img
                className={styles.logoIcon}
                id="logo"
                alt=""
                src="/logo3@2x.png"
              />
            </button>
            <button className={styles.arrowframe}>
              <div className={styles.oursubsiadiries}>
                <img
                  className={styles.oursubsiadiriesChild}
                  alt=""
                  src="/group-939.svg"
                />
                <img
                  className={styles.bdp1Icon}
                  alt=""
                  src="/bdp-1@2x.png"
                  onClick={onClose}
                />
                <img
                  className={styles.spectrum1Icon}
                  alt=""
                  src="/spectrum-1@2x.png"
                  onClick={onClose}
                />
                <img
                  className={styles.isg1Icon}
                  alt=""
                  src="/isg-1@2x.png"
                  onClick={onClose}
                />
              </div>
              <img
                className={styles.images21}
                alt=""
                src="/images-2-1@2x.png"
              />
            </button>
          </div>
          <button className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <img className={styles.crossIcon} alt="" src="/cross.svg" />
          </button>
        </div>
        <div className={styles.homeParent}>
          <button className={styles.home}>{`Home `}</button>
          <button className={styles.home} onClick={onAboutUsClick}>
            About Us
          </button>
          <button
            className={styles.home}
            onClick={onProductsSevicesClick}
          >{`Products & Sevices`}</button>
          <button
            className={styles.home}
            onClick={onClientsPartnersClick}
          >{`Clients & Partners`}</button>
          <button className={styles.home} onClick={onMediaClick}>
            Media
          </button>
          <button className={styles.home} onClick={onCareersClick}>
            Careers
          </button>
        </div>
        <button
          className={styles.contactusContainer}
          onClick={onContactUsContainerClick}
        >
          <div className={styles.contactUs}>Contact Us</div>
        </button>
        <div className={styles.frameGroup}>
          <div className={styles.ourSubsidiariesParent}>
            <div className={styles.ourSubsidiaries}>Our Subsidiaries:</div>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.bdp1Parent}>
            <img
              className={styles.bdp1Icon}
              alt=""
              src="/bdp-1@2x.png"
              onClick={onClose}
            />
            <img
              className={styles.spectrum1Icon}
              alt=""
              src="/spectrum-1@2x.png"
              onClick={onClose}
            />
            <img
              className={styles.isg1Icon}
              alt=""
              src="/isg-1@2x.png"
              onClick={onClose}
            />
            <img
              className={styles.bslMain6Icon}
              alt=""
              src="/bslmain-6@2x.png"
              onClick={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrwawerMenu;
