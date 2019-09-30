import React from "react";

import PriceFilter from "./PriceFilter";
import MyExpansionPanel from "../../utils/MyExpansionPanel";

const Filters = ({ location }) => {
  return (
    <MyExpansionPanel title="Price range">
      <PriceFilter />
    </MyExpansionPanel>
  );
};

export default Filters;
