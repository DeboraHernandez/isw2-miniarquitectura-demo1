export default function handler(req, res) {
  const nombre = req.query.nombre ?? "ANÓNIMO";

   if (nombre === "error") {
    return res.status(500).json({
      error: "Error simulado en el procesamiento"
    });
  }
  
  const nombreMayus = nombre.toUpperCase();
  
  res.status(200).json({
    resultado: `Nombre procesado: ${nombreMayus}`,
    longitud: nombreMayus.length
  });
}

