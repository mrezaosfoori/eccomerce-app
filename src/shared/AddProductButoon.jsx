// import ProductForm from "@/_auth/forms/ProductForm";
import Popup from "reactjs-popup";
// import "./styles.css";

const AddProductButoon = () => {
  return (
    <>
      <Popup
        trigger={
          <div className="py-4 px-8 flex-center bg-[#8E6CEF] rounded-[100px] text-white h4-bold mt-[40px] w-fit">
            <p className=" ">add product</p>
            {/* <img className="w-5 h-5" src={downloadIcon} alt="download" /> */}
          </div>
        }
        modal
        nested>
        {(close) => (
          <div className="">
            asd
            {/* <ProductForm /> */}
          </div>
        )}
      </Popup>
    </>
  );
};

export default AddProductButoon;
