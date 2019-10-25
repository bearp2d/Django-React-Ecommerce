import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCart } from "../../../redux/actions/cartActions";
import { fetchAddresses } from "../../../redux/actions/profileActions/AddressActions";
import Shipping from "../Shipping";

const Order = () => {
  const {
    cart,
    profile: { addresses }
  } = useSelector(state => state);
  const [address, setAddress] = useState(addresses[0] || "");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchAddresses());
  }, [dispatch]);

  useEffect(() => {
    setAddress(addresses[0] || "");
  }, [addresses]);

  return (
    <Shipping
      address={address}
      cart={cart}
      addresses={addresses}
      setAddress={setAddress}
    />
  );
};

export default Order;
