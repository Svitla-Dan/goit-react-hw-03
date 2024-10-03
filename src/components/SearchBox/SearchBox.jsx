import { useId } from "react";
import { FaSearch } from "react-icons/fa";
import style from "./SearchBox.module.css";

const SearchBox = ({ searchTerm, onChangeSearch }) => {
  const inputId = useId();

  return (
    <div className={style.searchWrapper}>
      <label htmlFor={inputId} className={style.label}>
        Search contacts
      </label>
      <div className={style.inputContainer}>
        <div className={style.icon}>
          <FaSearch size="20px" />
        </div>
        <input
          type="text"
          id={inputId}
          className={style.searchInput}
          value={searchTerm}
          onChange={onChangeSearch}
          placeholder="Search contacts..."
        />
      </div>
    </div>
  );
};

export default SearchBox;
