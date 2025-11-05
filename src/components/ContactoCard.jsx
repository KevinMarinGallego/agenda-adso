export default function ContactoCard({
  nombre,
  telefono,
  correo,
  etiqueta,
  empresa,
  onEliminar,
  
}) {
  return (
    <div className="card">
      <h3>{nombre}</h3>
      <p>📱 {telefono}</p>
      <p>✉️ {correo}</p>
      {empresa && <p>🏢 {empresa}</p>}
      {etiqueta && <span className="tag">{etiqueta}</span>}
      <button className="btn-eliminar" onClick={() => onEliminar(correo)}>
        Eliminar
      </button>
    </div>
  );
}
