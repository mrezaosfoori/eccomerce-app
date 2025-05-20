import CategoryForm from "@/_auth/forms/CategoryForm";
import ProductForm from "@/_auth/forms/ProductForm";
import React, { useState } from "react";
import Popup from "reactjs-popup";
// import "./styles.css";

const AddCategory = () => {
  return (
    <>
      <Popup
        trigger={
          <div className="py-4 px-8 flex-center bg-[#8E6CEF] rounded-[100px] text-white h4-bold mt-[40px] w-fit">
            <p className=" ">add category</p>
            {/* <img className="w-5 h-5" src={downloadIcon} alt="download" /> */}
          </div>
        }
        modal
        nested>
        {(close) => (
          <div className="">
            <CategoryForm />
          </div>
        )}
      </Popup>
    </>
  );
};

export default AddCategory;
