import React, { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const submitCategoryValue = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={submitCategoryValue}>
      <input
        type="text"
        placeholder="buscar Gifs"
        onChange={onInputChange}
        value={inputValue}
      />
    </form>
  );
};

export default AddCategory;
