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
  const [step, setStep] = useState(0);
  const [address, setAddress] = useState(addresses[0] || "");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchAddresses());
  }, [dispatch]);

  useEffect(() => {
    setAddress(addresses[0] || "");
  }, [addresses]);

  const handleNext = () => {
    setStep(prevStep => prevStep + 1);
  };

  const handleBack = () => {
    setStep(prevStep => prevStep - 1);
  };

  switch (step) {
    case 0:
      return (
        <Shipping
          address={address}
          cart={cart}
          addresses={addresses}
          setAddress={setAddress}
        />
      );
    default:
      return null;
  }
};

export default Order;
