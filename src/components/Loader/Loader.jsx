import React from "react";
import { TailSpin } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";

function Loader() {
  return (
    <LoaderWrapper>
      <TailSpin color="#00BFFF" height={80} width={80} />
    </LoaderWrapper>
  );
}

export default Loader;
