// src/components/ProyectoCard.jsx
import React from 'react';

// Desestructuración directa en las props
const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {
  // Desestructuración del objeto proyecto interno
  const { id, titulo, categoria, estado } = proyecto;

  return (
    <div className="card-proyecto" style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      <h3>{titulo}</h3>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Estado:</strong> <span className={`badge-${estado.toLowerCase().replace(" ", "-")}`}>{estado}</span></p>
      
      <div className="acciones-card" style={{ marginTop: '10px' }}>
        <button onClick={() => onVerDetalle(proyecto)} style={{ marginRight: '8px', backgroundColor: '#007bff', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>
          Ver Detalle
        </button>
        <button onClick={() => onEliminar(id)} style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ProyectoCard;
