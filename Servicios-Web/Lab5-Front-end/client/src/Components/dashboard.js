import React, { useState } from 'react';

function Dashboard() {
  const [data, setData] = useState(null);

  const handleClick = () => {
    fetch('/api/pet')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  };

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="p-4 bg-gray-100">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
          {!data ? "Load pets" : JSON.stringify(data)}
        </button>
      </div>
      {/* Aquí puedes agregar más contenido y aplicar estilos utilizando las clases de utilidad de Tailwind CSS */}
    </div>
  );
}

export default Dashboard;
