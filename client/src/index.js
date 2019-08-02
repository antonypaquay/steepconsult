import React from "react";
import ReactDOM from "react-dom";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import "./index.scss";
import App from "./view/App/App";

import ContactView from "./view/ContactView/ContactView";
import Notfound from "./view/Notfound";
import JobsView from "./view/JobsView/JobsView";
import SingleJob from "./view/SingleJob/SingleJob";
import CaseStudiesView from "./view/CaseStudiesview/CaseStudiesView";
import JoinUsView from "./view/JoinUsView/JoinUsView";
import SingleBlog from "./view/SingleBlog/SingleBlog";
import ExpertisesView from "./view/ExpertisesView/ExpertisesView";
import BlogView from "./view/BlogView/BlogView";
import PrivacyPolicyView from "./view/PricavyPolicyView/PrivacyPolicy";
import FormWhitePaperView from "./view/FormWhitePaperView/FormWhitePaperView";
import Navigation from "./components/Navigation/Navigation";
import SingleCaseStudies from "./view/SingleCaseStudies/SingleCaseStudies";
import VideoView from "./view/VideoView/VideoView";
import CsrView from "./view/CsrView/CsrView";
import AboutView from "./view/AboutView/AboutView";
import SingleExpertise from "./view/SingleExpertise/SingleExpertise";
import ListMemberView from "./view/ListMemberView/ListMemberView";
import TermsView from "./view/TermsView/TermsView";

export const resetTop = () => {
  window.scrollTo(0, 0);
};

// blend all the fixed elements
export const blendMode = () => {
  var topBar = document.querySelector(".top__bar"),
    scrollDown = document.querySelector(".scrolldown__horizontal"),
    pagination = document.querySelector(".swiper-pagination");
  topBar.classList.add("blend");

  if (scrollDown) {
    scrollDown.classList.add("blend");
  }
  if (pagination) {
    pagination.classList.add("blend");
  }
};

export const blendModeRevert = () => {
  var topBar = document.querySelector(".top__bar"),
    scrollDown = document.querySelector(".scrolldown__horizontal"),
    pagination = document.querySelector(".swiper-pagination");
  topBar.classList.remove("blend");
  if (pagination) {
    pagination.classList.remove("blend");
  }
  if (scrollDown) {
    scrollDown.classList.remove("blend");
  }
};

const routing = (
  <Router>
    <header className="header sticky--fluid" id="header">
      <Navigation />
      <TopBar />
    </header>
    <Switch>
      {/* Home Page Views */}
      <Route exact path="/" component={App} />
      <Route path="/expertises/:id" component={SingleExpertise} />
      <Route path="/expertises" component={ExpertisesView} />
      <Route path="/about" component={AboutView} />
      <Route path="/join-us" component={JoinUsView} />
      <Route path="/jobs/:id" component={SingleJob} />
      <Route path="/jobs" component={JobsView} />
      {/* About Views */}
      <Route path="/teamlist" component={ListMemberView} />
      <Route path="/case-studies/white-paper" component={FormWhitePaperView} />
      <Route path="/case-studies/:id" component={SingleCaseStudies} />
      <Route path="/case-studies" component={CaseStudiesView} />
      <Route path="/blog/:id" component={SingleBlog} />
      <Route path="/blog" component={BlogView} />
      <Route path="/contact" component={ContactView} />
      {/*Other pages*/}
      <Route path="/legal-terms" component={TermsView} />
      <Route path="/csr" component={CsrView} />
      <Route path="/video" component={VideoView} />
      <Route path="/privacy-policy" component={PrivacyPolicyView} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
