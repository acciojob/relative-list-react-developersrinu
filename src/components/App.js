import React from 'react';

const App = () => {
  const relatives = [
    'Relative 1',
    'Relative 2',
    'Relative 3',
    'Relative 4',
    // ...add more relatives
  ];

  return (
    <div>
      <h1>Relative List</h1>
      <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;

