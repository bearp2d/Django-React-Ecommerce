import React from "react";
import Button from "@material-ui/core/Button";
import AddLocationIcon from "../../../icons/AddLocation";

const CreateAddressButton = ({ noIcon, setOpen }) => {
  return (
    <Button
      style={{
        width: "100%",
        border: "4px dashed #b8b8b8",
        height: "100%",
        alignItems: "center",
        fontSize: "1.5rem",
        color: "rgba(0, 0, 0, 0.54)",
        fontWeight: "bold"
      }}
      onClick={() => setOpen(true)}
    >
      {noIcon === false && (
        <AddLocationIcon style={{ fontSize: "75px" }} color="action" />
      )}
      Add new address
    </Button>
  );
};
CreateAddressButton.defaultProps = {
  noIcon: false
};

export default CreateAddressButton;
