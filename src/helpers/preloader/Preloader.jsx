import React from "react";
import Css from "./Preloader.module.css";

const Preloader = () => (
  <div className={Css.preloaderWrap}>
    <div className={Css.ldsEllipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Preloader;
