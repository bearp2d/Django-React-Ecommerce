import React from "react";
import { useDispatch } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { updateQuantity } from "../../../redux/actions/cartActions";

const UpdateQuantity = ({ id, available_count, quantity }) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const renderMenuItems = () => {
    var MenuItems = [];
    for (var i = 1; i <= available_count; i++) {
      MenuItems.push(
        <MenuItem key={i} value={i}>
          {i}
        </MenuItem>
      );
    }

    return MenuItems;
  };
  const handleChange = event => {
    dispatch(updateQuantity(id, event.target.value));
  };

  return (
    <Select
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      value={quantity}
      onChange={handleChange}
    >
      {renderMenuItems()}
    </Select>
  );
};

export default UpdateQuantity;
