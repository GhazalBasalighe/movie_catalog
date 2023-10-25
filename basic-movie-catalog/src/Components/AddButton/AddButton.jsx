import { Icon } from "@iconify/react";

function AddButton({ onAddNewMovie }) {
  return (
    <button
      onClick={onAddNewMovie}
      className="bg-blue-600 flex justify-center items-center w-16 h-16 text-4xl text-white rounded-full absolute bottom-3 right-3"
    >
      <Icon icon="fluent:add-12-filled" />{" "}
    </button>
  );
}

export default AddButton;
