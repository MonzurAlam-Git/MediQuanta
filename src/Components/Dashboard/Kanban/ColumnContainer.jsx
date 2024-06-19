/* eslint-disable react/prop-types */
import React from "react";
import { MdDelete } from "react-icons/md";

import { DragOverlay, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const ColumnContainer = ({ col, deleteColumn }) => {
  // const { id, title } = col;

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: col.id,
      data: {
        type: "Column",
        col,
      },
    });

  const style = {
    transform: CSS.Translate.toString(transform),
  };
  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-mainBgColor w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col text-white"
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-mainBgColor w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col text-white "
    >
      {/* Header */}
      <div className="bg-columnBgColor text-md h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold border-columnBgColor border-4 flex items-center justify-between">
        0<p>{col.title}</p>
        <button
          onClick={() => {
            deleteColumn(col.id);
          }}
          className="stroke-gray-500 hover:stroke-white hover:bg-red-500 rounded px-1 py-2"
        >
          <MdDelete />
        </button>
      </div>
      {/* Content */}
      {/* Footer */}
    </div>
  );
};

export default ColumnContainer;
