import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Card from "../components/card/Card";
import HeadCard from "./headcard/HeadCard";

const CardsList = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  useEffect(() => {
    fetchDataFromAPI().then((response) => {
      if (response) {
        setData(response.tickets);
        setUsers(response.users);
      }
    });
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedData = [...data];
    const sourceIndex = updatedData.findIndex(
      (item) => item.id === result.source.droppableId
    );
    const destinationIndex = updatedData.findIndex(
      (item) => item.id === result.destination.droppableId
    );

    if (sourceIndex !== -1 && destinationIndex !== -1) {
      const [movedItem] = updatedData[sourceIndex].tasks.splice(
        result.source.index,
        1
      );
      updatedData[destinationIndex].tasks.splice(
        result.destination.index,
        0,
        movedItem
      );
      setData(updatedData);
    }
  };

  const addCard = (title) => {
    const newCard = {
      id: `CAM-${data.length + 1}`,
      title,
      tasks: [],
    };
    const newCards = [...data, newCard];
    setData(newCards);
  };

  const addSubCard = (title, cardId) => {
    const index = data.findIndex((item) => item.id === cardId);
    if (index < 0) return;
    const tempCards = [...data];
    const newSubCard = {
      id: uuidv4(),
      title,
    };
    tempCards[index].tasks.push(newSubCard);
    setData(tempCards);
  };

  //grouping data for status view
  const groupedData = {};
  data.map((ticket, index) => {
    const temp = ticket.status;
    if (!groupedData[temp]) {
      groupedData[temp] = [];
    }
    groupedData[temp].push(ticket);
  });

  //grouping data for priority view
  const pGroupedData = {};
  data.map((ticket, index) => {
    const temp = ticket.priority;
    if (!pGroupedData[temp]) {
      pGroupedData[temp] = [];
    }
    pGroupedData[temp].push(ticket);
  });

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        className="flex items-start overflow-x-auto overflow-y-hidden pl-11"
        style={{ height: "calc(100vh - 142px)" }}
      >
        {Object.entries(pGroupedData).map(([title, tickets]) => (
          <div key={title}>
            <HeadCard key={title} count={tickets.length} tickets={tickets} title={title} />
            {tickets.map((ticket) => (
              <Card section={ticket} key={ticket.id}
                addSubCard={addSubCard} />
            ))}
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default CardsList;
