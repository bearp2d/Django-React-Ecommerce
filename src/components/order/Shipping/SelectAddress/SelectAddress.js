import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";

import CreateAddress from "../../../profile/Addresses/CreateAddress";
import SelectedAddress from "./SelectedAddress";
import ChangeAddress from "./ChangeAddress";

const SelectAddress = ({ address, addresses, setAddress }) => {
  const [change, setChange] = useState(false);
  const [create, setCreate] = useState(false);

  return (
    <React.Fragment>
      <Typography variant="h6">Select order delivery address</Typography>
      {change === false ? (
        <SelectedAddress
          setChange={setChange}
          addressesLength={addresses.length}
          address={address}
          setCreate={setCreate}
        />
      ) : (
        <ChangeAddress
          addresses={addresses}
          setOpen={setChange}
          setAddress={setAddress}
        />
      )}
      <CreateAddress open={create} setOpen={setCreate} />
    </React.Fragment>
  );
};

export default SelectAddress;
