import React from "react";

import PriceFilter from "./PriceFilter";
import OnlyAvailable from "./OnlyAvailable";
import SearchInResults from "./SearchInResults";
import MyExpansionPanel from "../../utils/MyExpansionPanel";

const Filters = () => {
  return (
    <React.Fragment>
      <OnlyAvailable />
      <SearchInResults />
      <MyExpansionPanel title="Price range">
        <PriceFilter />
      </MyExpansionPanel>
    </React.Fragment>
  );
};

export default Filters;
