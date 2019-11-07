import React from "react";

import PriceFilter from "./PriceFilter";
import OnlyAvailable from "./OnlyAvailable";
import SearchInResults from "./SearchInResults";
import MyExpansionPanel from "../../utils/MyExpansionPanel";
import SubmittedFilters from "./SubmittedFilters";

const Filters = () => {
  return (
    <React.Fragment>
      <SubmittedFilters />
      <OnlyAvailable />
      <SearchInResults />
      <MyExpansionPanel title="Price range">
        <PriceFilter />
      </MyExpansionPanel>
    </React.Fragment>
  );
};

export default Filters;
