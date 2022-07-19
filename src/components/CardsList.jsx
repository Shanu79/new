import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import AddSubCard from "../components/subcards/AddSubCard";
import AddCard from "../components/card/AddCard";
import SubCard from "../components/subcards/SubCard"
import mockData from "../mockData";

const CardsList = () => {

  const getlocalItems=()=>{
    let list=localStorage.getItem('lists');
    console.log(list);

    if(list) {
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
      localStorage.setItem('lists',JSON.stringify(data))
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
    localStorage.setItem('lists',JSON.stringify(data))
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
    localStorage.setItem('lists',JSON.stringify(data))
  };

  useEffect(()=>{
    localStorage.setItem('lists',JSON.stringify(data))
  },[data]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        className="flex items-start overflow-x-auto overflow-y-hidden scrollbar pb-2 ml-[44px]"
        style={{ height: "calc(100vh - 142px)" }}
      >
        {data.map((section) => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                className="bg-[#EBECF0] pt-3 px-2 mx-1 rounded-sm w-[272px] min-w-[272px] h-auto shadow-md overflow-y-auto overflow-x-hidden"
                style={{ maxHeight: "calc(100vh - 180px)" }}
                ref={provided.innerRef}
              >
                <div className="flex items-center justify-between">
                  <h1 className="font-medium p-1">{section.title}</h1>
                  <h1 className="hover:cursor-pointer font-black px-1">...</h1>
                </div>

                <div className="kanban__section__content">
                  {section.tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <SubCard
                          key={task.id}
                          title={task?.title}
                          id={task.id}
                          cardId={section.id}
                          innerRef={provided.innerRef}
                          provided={provided}
                        >
                          {task.title}
                        </SubCard>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
                <AddSubCard handleAddSubCard={addSubCard} cardId={section.id} />
              </div>
            )}
          </Droppable>
        ))}
        <AddCard handleAddCard={addCard} />
      </div>
    </DragDropContext>
  );
};

export default CardsList;
