import Item from './Item';

function List({ items, onDeleteItem, onToggleItem }) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          item={item}
          key={item.id}
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem}
        />
      ))}
    </ul>
  );
}

export default List;
