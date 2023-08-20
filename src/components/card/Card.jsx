import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import SubCard from "../subcards/SubCard";
import "./card.css";

const Card = ({ section, index, userdata, grouping }) => {
    return (
          <Droppable key={section.id} droppableId={section.id1}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                className="card"
                ref={provided.innerRef}
              >
                {section.map((task) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id1}
                      index={index}
                    >
                      {(provided) => (
                        <SubCard
                          key={task.id}
                          title={task?.title}
                          id={task.id}
                          tag={task.tag}
                          userId={task.userId}
                          status={task.status}
                          priority={task.priority}
                          cardId={task.id1}
                          innerRef={provided.innerRef}
                          provided={provided}
                          userdata={userdata} 
                          grouping={grouping}/>
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
