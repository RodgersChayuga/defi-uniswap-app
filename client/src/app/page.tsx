import FormInput from "@/components/FormInput";
import React from "react";
import { RiSettings3Fill } from "react-icons/ri";

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
  return (
    <div className="wrapper">
      <div className="content">
        <div className="formHeader">
          <div>Swap</div>
          <div>
            <RiSettings3Fill />
          </div>
        </div>
        <FormInput />
      </div>
    </div>
  );
};

export default Home;
