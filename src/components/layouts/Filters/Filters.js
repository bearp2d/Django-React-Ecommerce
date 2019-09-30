import React from "react";

import PriceFilter from "./PriceFilter";
import OnlyAvailable from "./OnlyAvailable";
import MyExpansionPanel from "../../utils/MyExpansionPanel";

const Filters = () => {
  return (
    <React.Fragment>
      <OnlyAvailable />
      <MyExpansionPanel title="Price range">
        <PriceFilter />
      </MyExpansionPanel>
    </React.Fragment>
  );
};

export default Filters;
