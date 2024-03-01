"use client";

import React from "react";
import Image from "next/image";
import ethLogo from "../assets/eth.png";
import { AiOutlineDown } from "react-icons/ai";

const FormInput = () => {
  const handleSubmit = () => {};
  const handleChange = () => {};

  return (
    <>
      <div className="transferPropContainer">
        <input
          type="text"
          className="transferPropInput"
          placeholder="0.0"
          pattern="^[0-9]*[.,]?[0-9]*$"
          onChange={handleChange}
        />
        <div className="currencySelector">
          <div className="currencySelectorContent">
            <div className="currencySelectorIcon">
              <Image src={ethLogo} alt="ethlogo" height={20} width={20} />
            </div>
            <div className="currencySelectorTicker">ETH</div>
            <AiOutlineDown className="currencySelectorArrow" />
          </div>
        </div>
      </div>
      <div className="transferPropContainer">
        <input
          type="text"
          className="transferPropInput"
          placeholder="0x..."
          onChange={handleChange}
        />
        <div className="currencySelector"></div>
      </div>
      <div onClick={handleSubmit} className="confirmButton">
        Confirm
      </div>
    </>
  );
};

export default FormInput;
