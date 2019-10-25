import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";

import SelectedAddress from "./SelectedAddress";
import ChangeAddress from "./ChangeAddress";

const SelectAddress = ({ address, addresses, setAddress }) => {
  const [change, setChange] = useState(false);

  return (
    <React.Fragment>
      <Typography variant="h6">Select order delivery address</Typography>
      {change === false ? (
        <SelectedAddress setChange={setChange} address={address} />
      ) : (
        <ChangeAddress
          addresses={addresses}
          setOpen={setChange}
          setAddress={setAddress}
        />
      )}
    </React.Fragment>
  );
};

export default SelectAddress;
