import React from "react";
import { useSelector } from "react-redux";

import LoadingDialog from "./LoadingDialog";
import Header from "../Header";

const Loading = ({ inFetching }) => {
  if (inFetching) {
    const open = useSelector(state => state.ui.loadingUI);

    return <LoadingDialog open={open || false} />;
  }
  return (
    <Header>
      <LoadingDialog open={true} />
    </Header>
  );
};

export default Loading;
