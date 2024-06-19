import { useMemo, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import ColumnContainer from "./ColumnContainer";
import { useAuth } from "../../../Hooks/useAuth";
import Loading from "../../../Shared/Loading";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";

const Kanban = () => {
  const { loading } = useAuth();
  const [column, setColumn] = useState([]);
  const [activeColumn, setActiveColumn] = useState([]);

  // Remember COl ID
  const columnID = useMemo(() => column.map((col) => col.id), [column]);

  console.log(activeColumn);

  if (loading) {
    return <Loading></Loading>;
  }

  const addColumn = () => {
    const generateId = () => {
      return Math.floor(Math.random() * 1001);
    };

    const columnToAdd = {
      id: generateId(),
      title: `Column ${column.length + 10}`,
    };

    setColumn([...column, columnToAdd]);
  };

  const deleteColumn = (id) => {
    const filteredColumn = column.filter((col) => col.id !== id);
    setColumn(filteredColumn);
    console.log("Delete column triggered with id :", id);
  };

  const handleDragStart = (event) => {
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.col);
      return;
    }
  };

  return (
    <div className="m-auto flex min-h-screen w-full items-center  overflow-x-auto overflow-y-hidden px-[40px] ">
      <DndContext onDragStart={handleDragStart}>
        <div className="m-auto flex gap-4">
          {/* Columns container  */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-3  justify-items-center gap-4"> */}
          <div className="flex gap-4">
            <SortableContext items={columnID}>
              {column.map((col) => {
                return (
                  <ColumnContainer
                    col={col}
                    key={col.id}
                    deleteColumn={deleteColumn}
                  ></ColumnContainer>
                );
              })}
            </SortableContext>
          </div>
          {/* Add Column button */}
          <button
            onClick={addColumn}
            className="h-[60px] w-[350px] m-10 min-w-[350px] cursor-pointer rounded-lg btn btn-accent p-4 ring-black-500 hover:ring-2"
          >
            <FiPlusCircle />
            Add Column
          </button>
        </div>

        {/* Drag Overlay */}
        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnContainer
                col={activeColumn}
                deleteColumn={deleteColumn}
              ></ColumnContainer>
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );
};

export default Kanban;
