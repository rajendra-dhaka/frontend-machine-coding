import React from "react";

const Accordion = ({ className, children }) => {
  return <ul className={className}>{children}</ul>;
};

export default Accordion;
