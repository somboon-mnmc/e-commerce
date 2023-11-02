import { BsCart4 } from "react-icons/bs";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import './Sidebar.css'

const Sidebar = ({handleChange}) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1><BsCart4 /></h1>
        </div>

        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
