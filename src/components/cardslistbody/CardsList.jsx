import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Card from "../card/Card";
import HeadCard from "../headcard/HeadCard";
import { useSelector } from "react-redux"; 
import "./cardslist.css"

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
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );

      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;

      setData(data);
      localStorage.setItem('lists', JSON.stringify(data))
    }
  };

  const addCard = (title) => {
    const newCard = {
      id: uuidv4(),
      title,
      tasks: [],
    };
    const newCards = [...data, newCard];
    setData(newCards);
    localStorage.setItem('lists', JSON.stringify(data))
  };

  const addSubCard = (title, cardId) => {
    const newSubCard = {
      id: uuidv4(),
      title,
    };
    const index = data.findIndex((item) => item.id === cardId);
    if (index < 0) return;
    const tempCards = [...data];
    tempCards[index].tasks.push(newSubCard);
    setData(tempCards);
    localStorage.setItem('lists', JSON.stringify(data))
  };
 
  const grouping = useSelector((state) => state.grouping);
  //grouping data for status/priority view
  const groupedData = {};
  data.map((ticket, index) => {
    const temp = grouping === "priority" ? ticket.priority : ticket.status;
    if (!groupedData[temp]) {
      groupedData[temp] = [];
    }
    ticket.id1=uuidv4()
    groupedData[temp].push(ticket);
  });

  console.log(groupedData)

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        className={`cardslistbody`}>
        {Object.entries(groupedData).map(([title, tickets]) => (
          <div key={title}>
            <HeadCard key={title} count={tickets.length} tickets={tickets} title={title} />
            
              <Card section={tickets}
                addSubCard={addSubCard} />
      
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default CardsList;
