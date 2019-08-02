import React from "react";
import "./App.scss";
import ScrollHoriz from "../../components/ScrollHoriz/ScrollHoriz";
import Revealer from "../../components/Revealer/Revealer";
import ExpertisesView from "../ExpertisesView/ExpertisesView";
import BlogView from "../BlogView/BlogView";
import IntroductionView from "../IntroductionView/IntroductionView";
import TeamView from "../TeamView/TeamView";
import CsrHomeView from "../CsrHomeView/CsrHomeView";
import Footer from "../../components/Footer/Footer";
import { blendModeRevert, blendMode } from "../../index";
import Swiper from "swiper";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    document.getElementById("vid").play();
    blendModeRevert();

    var footer = document.querySelector("footer"),
      sliderName = document.querySelector(".swiper-container");

    const breakpoint = window.matchMedia("(max-width: 956px)");
    let swiper;

    const breakpointChecker = function() {
      if (breakpoint.matches === true) {
        if (swiper !== undefined) {
          swiper.destroy(true, true);
          footer.classList.remove("footer--fixed");
        }

        return;
      } else if (breakpoint.matches === false) {
        footer.classList.add("footer--fixed");
        sliderName.style.transition = "all .3s ease-in-out";
        footer.style.transition = "all .3s ease-in-out";
        return enableSwiper();
      }
    };

    const enableSwiper = function() {
      swiper = new Swiper(".swiper-container", {
        direction: "vertical",
        slidesPerView: 1,
        speed: 1000,
        autoHeight: true,
        spaceBetween: 0,
        mousewheel: true,
        a11y: true,
        keyboardControl: true,
        effect: "slide",
        parallax: true,
        navigation: {
          nextEl: ".scrolldown__horizontal"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true
        },
        breakpoints: {
          956: {
            noSwiping: true,
            parallax: false
          }
        }
      });

      swiper.on("slideChange", function() {
        if (swiper.activeIndex >= 1) {
          blendMode();
        } else if (swiper.activeIndex < 1) {
          blendModeRevert();
        }
        var scrollDown = document.querySelector(".scrolldown__horizontal");
        if (swiper.activeIndex < 4) {
          scrollDown.style.transform = "translate(0px, 0px)";
          scrollDown.style.opacity = "1";
        } else if (swiper.activeIndex >= 4) {
          scrollDown.style.transform = "translate(0px, 200px)";
          scrollDown.style.opacity = "0";
        }
      });

      swiper.on("slideChangeTransitionEnd", function() {
        var footerHeight = footer.offsetHeight + "px";
        if (swiper.activeIndex >= 4) {
          sliderName.style.transform = `translate(0px, -${footerHeight})`;
          footer.style.opacity = "1";
          footer.style.zIndex = "1";
        } else if (swiper.activeIndex < 4) {
          sliderName.style.transform = "translate(0px, 0px)";
          footer.style.opacity = "0";
          footer.style.zIndex = "-1";
        }
      });
    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  }

  render() {
    return (
      <React.Fragment>
        <Revealer />

        <div class="swiper-container">
          <div class="swiper-wrapper">
            {/* Home Intro */}
            <IntroductionView />

            {/* Home Expertises */}
            <ExpertisesView />

            {/* Home Testimonials */}

            {/*<TestimonialsView />*/}

            {/* Home Team */}
            <TeamView />

            {/* Home Blog */}
            <BlogView />

            {/* Home CSR */}
            <CsrHomeView />

            {/* HOME Footer */}
          </div>
          <ScrollHoriz label="Explore" />
          <div class="swiper-pagination" />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
