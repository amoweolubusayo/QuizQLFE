import "@rainbow-me/rainbowkit/styles.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import React from "react";

const Header = ({ title }) => {
  return (
    <>
      <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-900">{title}</h2>
          <ConnectButton />
        </div>
      </header>
    </>
  );
};

export default Header;
