import React, { Children } from "react";

const Wrapper = ({ children }) => {
  return <div className="w-3/4 m-auto">{children}</div>;
};

export default Wrapper;
