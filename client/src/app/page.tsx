"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { RiSettings3Fill } from "react-icons/ri";
import Modal from "react-modal";

import ethLogo from "../assets/eth.png";
import { AiOutlineDown } from "react-icons/ai";
import { useRouter } from "next/router";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#0a0b0d",
    padding: 0,
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(10, 11, 13, 0.75)",
  },
};

const Home = () => {
  const handleSubmit = () => {};
  const handleChange = () => {};

  return (
    <div className="wrapper">
      <div className="content">
        <div className="formHeader">
          <div>Swap</div>
          <div>
            <RiSettings3Fill />
          </div>
        </div>
        <div className="transferPropContainer">
          <input
            type="text"
            className="transferPropInput"
            placeholder="0.0"
            pattern="^[0-9]*[.,]?[0-9]*$"
            onChange={(e) => handleChange()}
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
            onChange={(e) => handleChange()}
          />
          <div className="currencySelector"></div>
        </div>
        <div onClick={(e) => handleSubmit()} className="confirmButton">
          Confirm
        </div>
      </div>
    </div>
  );
};

export default Home;
