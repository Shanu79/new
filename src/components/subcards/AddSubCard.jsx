import React, { useState } from "react";
import AddSubCardBtn from "./AddSubCardBtn";

const AddSubCard = ({handleAddSubCard, cardId}) => {
  const [isClicked, setClicked] = useState(false);
  const [cardTitle,setTitle]=useState('');
 

  const handleChange=(event)=>{
    setTitle(event.target.value)
  };

  const handleIsClicked = () => {
    setClicked(!isClicked);
  };

  const handleSaveClick =()=>{
    handleAddSubCard(cardTitle,cardId);
    setTitle('');
    setClicked(!isClicked);
    
  }

  return (
    <>
      {isClicked ? (
        <div className="bg-[#EBECF0] rounded-sm pb-2">
          <form onSubmit={handleSaveClick}>
            <input
              className="px-3 py-2 text-sm border-blue-600 rounded-sm border-2 mb-2 focus:outline-0"
              type="text"
              required
              placeholder="Enter a title for this card..."
              value={cardTitle}
              onChange={handleChange}
            />
            <div className="flex gap-2 items-center">
              <button
                className="px-4 py-2 w-fit text-sm text-white  bg-[#0079BF] hover:bg-[#0b6fa9] rounded-sm"
                type="submit"
              >
                Add card
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
      ) : (
        <AddSubCardBtn isClick={handleIsClicked} />
      )}
    </>
  );
};

export default AddSubCard;
