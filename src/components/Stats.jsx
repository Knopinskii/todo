function Stats({ items }) {
  const numItems = items.length;
  const numDone = items.filter((item) => item.done).length;
  const percentage = Math.round((numDone / numItems) * 100);

  return (
    <footer className="mt-2 text-center text-teal-400 ">
      <em>
        {numItems < 1 ? 'Add some things to do' : ''}
        {numItems === 1
          ? `You have 1 thing to do, and you have already done ${numDone} (${percentage}%)`
          : ''}
        {numItems > 1
          ? `You have ${numItems} things to do, and you have already done ${numDone} (${percentage}%)`
          : ''}
      </em>
    </footer>
  );
}

export default Stats;
