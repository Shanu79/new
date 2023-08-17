import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import AddSubCard from "../subcards/AddSubCard";
import SubCard from "../subcards/SubCard";

const Card = ({section, addSubCard}) => {
    return (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                className="bg-[#FFF] pt-3 px-2 mx-1 rounded-md w-[350px] min-w-[350px] h-[150px] shadow-md overflow-y-auto overflow-x-hidden"
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
    );
};

export default Card;
