"use client";

import React from "react";
import Image from "next/image";

import { AiOutlineDown } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";

import { useConnect, useAccount, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";

import ethLogo from "../assets/eth.png";
import uniswapLogo from "../assets/uniswap.png";
import NavigationMenu from "./NavigationMenu";
import { shortenAddress } from "@/helpers/shortedAddress";

const button = `flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`;

const Header = () => {
  const { connect } = useConnect();
  const account = useAccount();
  const { disconnect } = useDisconnect();

  // convert Address to shortened Address.
  let shortAddress = shortenAddress(account.address);

  console.log(`Logged account: ${account.address}`);
  console.log(typeof account.address);

  return (
    <div className="p-4 w-screen flex justify-between items-center">
      <div className="flex w-1/4 items-center justify-start">
        <Image src={uniswapLogo} alt="uniswap" height={40} width={40} />
      </div>
      <NavigationMenu />
      <div className="flex justify-end items-center">
        <div className="flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer gap-2 p-2">
          <div className="h-8 flex items-center">
            <Image src={ethLogo} alt="eth logo" height={20} width={20} />
          </div>
          <p>Ethereum</p>
          <div className="h-8 flex items-center">
            <AiOutlineDown />
          </div>
        </div>
        {account.address ? (
          <div
            onClick={() => disconnect()}
            className="flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer gap-2 p-2"
          >
            <div className="h-8 flex items-center px-2 text-[#5dec4e]">
              {shortAddress}
            </div>
          </div>
        ) : (
          <div
            onClick={() => connect({ connector: injected() })}
            className="flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer gap-2 p-2"
          >
            <div className="bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA] p-2">
              Connect
            </div>
          </div>
        )}
        <div className="flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer gap-2 p-2">
          <div className="flex items-center justify-center w-8 h-8 mx-2">
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
