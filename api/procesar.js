export default function handler(req, res) {
  const nombre = req.query.nombre || "anónimo";

  if (nombre.toLowerCase() === "error") {
    return res.status(500).json({
     error: "Error en /api/procesar",
      timestamp: new Date().toISOString()
    });
  }

  const timestamp = new Date().toISOString();
  
  res.status(200).json({
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`,
    timestamp
  });
}
