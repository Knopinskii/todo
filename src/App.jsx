import Logo from './components/Logo';
import Form from './components/Form';
import List from './components/List';
import Stats from './components/Stats';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  }

  return (
    <div className="h-screen w-full  bg-zinc-800">
      <div className="mx-auto w-[1200px] bg-zinc-700 p-5">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <List
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
        />
        <Stats items={items} />
      </div>
    </div>
  );
}

export default App;
