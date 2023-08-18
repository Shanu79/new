import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import SubCard from "../subcards/SubCard";
import "./card.css";

const Card = ({section, addSubCard}) => {
    return (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                className="card"
                ref={provided.innerRef}
              >
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
            )}
          </Droppable>
    );
};

export default Card;
