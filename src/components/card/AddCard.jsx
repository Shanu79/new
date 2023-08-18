import React, { useState } from "react";
import AddCardBtn from "./AddCardBtn";
import "./card.css"

const AddCard = ({ handleAddCard }) => {
  const [title, setTitle] = useState("");
  const [isClicked, setClicked] = useState(false);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSaveClick = () => {
    handleAddCard(title);
    setTitle("");
    setClicked(!isClicked);
  };

  const handleIsClicked = () => {
    setClicked(!isClicked);
    setTitle("");
  };

  return (
    <>
      {isClicked ? (
        <>
        <div className="bg-[#EBECF0] px-2 pt-2.5 pb-2 ml-1 h-fit w-[272px] min-w-[272px] rounded-sm shadow-md mr-2">
          <form onSubmit={handleSaveClick}>
            <input
              className="px-3 py-2 text-sm border-blue-600 rounded-sm border-2 mb-2 focus:outline-0"
              type="text"
              required
              placeholder="Enter list title..."
              value={title}
              onChange={handleChange}
            />
            <div className="flex gap-2 items-center">
              <button
                className="px-4 py-2 w-fit text-sm text-white  bg-[#0079BF] hover:bg-[#0b6fa9] rounded-sm"
                type="submit"
              >
                Add list
              </button>
              <span
                className="material-symbols-outlined hover:cursor-pointer"
                onClick={handleIsClicked}
              >
                close
              </span>
            </div>
          </form>
          </div>
        </>
      ) : (
        <AddCardBtn isClick={handleIsClicked} />
      )}
    </>
  );
};

export default AddCard;
