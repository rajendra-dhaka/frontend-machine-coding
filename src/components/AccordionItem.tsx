import React from "react";

const AccordionItem = ({ className, title, children }) => {
  return (
    <li className={className}>
      <h2>{title}</h2>
      <div>{children}</div>
    </li>
  );
};

export default AccordionItem;
