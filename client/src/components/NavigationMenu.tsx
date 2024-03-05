"use client";

import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const NavigationMenu = () => {
  const [selectedNav, setSelectedNav] = useState("swap");

  type MenuItem = {
    menuId: string;
    title: string;
    slang: string;
  };

  const menuItems: MenuItem[] = [
    {
      menuId: "1",
      title: "Swap",
      slang: "swap",
    },
    {
      menuId: "2",
      title: "Pool",
      slang: "pool",
    },
    {
      menuId: "3",
      title: "Vote",
      slang: "vote",
    },
  ];

  const handleMenuChange = (slang: string) => {
    setSelectedNav(slang);
  };

  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="flex bg-[#191B1F] rounded-3xl">
        {menuItems.map((menuItem: MenuItem) => (
          <div
            key={menuItem.menuId}
            onClick={() => handleMenuChange(menuItem.slang)}
            className={`px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl ${
              selectedNav === `${menuItem.slang}` && "bg-[#20242A]"
            }`}
          >
            {menuItem.title}
          </div>
        ))}
        <a href="https://info.uniswap.org/#/" target="_blank" rel="noreferrer">
          <div className="px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl">
            Charts <FiArrowUpRight />
          </div>
        </a>
      </div>
    </div>
  );
};

export default NavigationMenu;
