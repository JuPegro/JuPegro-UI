import React from "react";
import '../../Style.css'

const Buttom = ({ variant, children, ...props }) => {
  const style = `buttom-buttom-${variant}`;
  return <button className={style}>{children}</button>;
};

export default Buttom;
