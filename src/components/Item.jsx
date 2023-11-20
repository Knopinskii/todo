function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className=" flex items-center  justify-center border-slate-600">
      <input
        type="checkbox"
        value={item.done}
        onChange={() => onToggleItem(item.id)}
        className=""
      />
      <span
        className=" border-2  border-slate-600 p-2 text-white"
        style={item.done ? { textDecoration: 'line-through' } : {}}
      >
        {item.description}
      </span>
      <button
        className="border-2 border-slate-600  p-2 text-teal-400  hover:text-teal-500"
        onClick={() => onDeleteItem(item.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Item;
