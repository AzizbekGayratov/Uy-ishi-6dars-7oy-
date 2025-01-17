import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ListItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item">
      <Toaster position="top-right" />
      <input
        type="checkbox"
        defaultChecked={item.checked}
        onChange={() => {
          handleCheck(item.id);
          toast.success("Success");
        }}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => {}}
      >
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              handleDelete(item.id);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 500,
              });
            }
          });
        }}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default ListItem;
