import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import SubCard from "../subcards/SubCard";
import "./card.css";

const Card = ({ section, index }) => {
    return (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                className="card"
                ref={provided.innerRef}
              >
                    <Draggable
                      key={section.id}
                      draggableId={section.id}
                      index={index}
                    >
                      {(provided) => (
                        <SubCard
                          key={section.id}
                          title={section?.title}
                          id={section.id}
                          tag={section.tag}
                          cardId={section.id}
                          innerRef={provided.innerRef}
                          provided={provided}/>
                      )}
                    </Draggable>
                  {provided.placeholder}
              </div>
            )}
          </Droppable>
    );
};

export default Card;
