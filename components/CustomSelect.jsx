import { useState } from "react";
import './SASS/select.scss';
const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="select">
      <select
        value=""
        onClick={handleSelectClick}
        className={isOpen ? "open" : ""}
      >
        
        <option value="English">EN</option>
        <option value="Arabic">AR</option>
        <option value="Spanish">SP</option>
        <option value="Russain">Ru</option>

      </select>
      <span onClick={handleSelectClick}>
        <i className={`ri-arrow-${isOpen ? "drop-up-fill" : "drop-down-fill"}`}></i>
      </span>
    </div>
  );
}

export default CustomSelect