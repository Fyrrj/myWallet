import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

export const Header = (props) => {
  return (
    <h1>
      myWallet
      <FontAwesomeIcon icon={faWallet} className="logoIcon" />
    </h1>
  );
};
