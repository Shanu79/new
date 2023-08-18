import { v4 as uuidv4 } from "uuid";
import { DragDropContext } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import Card from "../components/card/Card"
import mockData from "../mockData";
import HeadCard from "./headcard/HeadCard";

const CardsList = () => {

  const getlocalItems = () => {
    let list = localStorage.getItem('lists');

    if (list) {
      return JSON.parse(localStorage.getItem('lists'));
    }
    else {
      return mockData;
    }
  }
  const [data, setData] = useState(getlocalItems());

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

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(data))
  }, [data]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        className="flex items-start overflow-x-auto overflow-y-hidden pl-11"
        style={{ height: 'calc(100vh - 142px)' }}
      >
        {data.map((section) => (
          <div><HeadCard
            key={section.id}
            section={section}
            addCard={addCard}
            addSubCard={addSubCard}
          />
            <Card
              key={section.id}
              section={section}
              addSubCard={addSubCard}
            /></div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default CardsList;
