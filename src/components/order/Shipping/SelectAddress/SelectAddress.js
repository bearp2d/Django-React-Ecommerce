import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useReactRouter from "use-react-router";
import Typography from "@material-ui/core/Typography";

import CreateAddress from "../../../profile/Addresses/CreateAddress";
import SelectedAddress from "./SelectedAddress";
import ChangeAddress from "./ChangeAddress";

const SelectAddress = ({ address, addresses, setAddress }) => {
  const { history } = useReactRouter();
  const [change, setChange] = useState(false);
  const [create, setCreate] = useState(false);
  const loading = useSelector(state => state.ui.loadingUI);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (addresses.length === 0) {
      setAdd(true);
    } else {
      setAdd(false);
    }
  }, [addresses]);

  const onSubmit = () => {
    setAdd(false);
    history.push("/order");
  };

  if (loading === true) {
    return null;
  }

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
      <CreateAddress open={create} handleClose={() => setCreate(false)} />
      <CreateAddress
        fullScreen
        open={add}
        onSubmit={onSubmit}
        handleClose={() => history.push("/cart")}
      />
    </React.Fragment>
  );
};

export default SelectAddress;
