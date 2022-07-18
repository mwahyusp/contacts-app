import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      <i class="fa-solid fa-trash"></i>
    </button>
  );
}

export default DeleteButton;
