import { useState } from 'react'

export default function App() {
  const [form, setForm] = useState({})

  const sections = {
    infraestructura: [
      "Dimensiones mínimas del cuarto (5m x 3.5m x 2.5m)",
      "Piso nivelado y con soporte estructural ≥500 kg/m²",
      "Iluminación adecuada (≥300 lux)",
      "Temperatura entre 10 °C y 40 °C",
      "Humedad relativa entre 30% y 75%",
      "Señalización de radiación visible"
    ],
    electricidad: [
      "Alimentación eléctrica (380V ±10%, trifásico)",
      "Disyuntor trifásico instalado",
      "Conexión a tierra < 0.1 ohm",
      "Ethernet activo en la sala",
      "Botón de paro de emergencia instalado",
      "Indicador visual de emisión de rayos X"
    ],
    mecanica: [
      "Anclajes de mesa preparados y nivelados",
      "Soporte del tubo de rayos X instalado",
      "Rieles de desplazamiento alineados",
      "Espacio libre para movilidad del equipo",
      "Ruta de cableado técnico definida"
    ]
  }

  const handleCheck = (section, field) => {
    const updated = { ...form }
    updated[section] = { ...updated[section], [field]: !updated[section]?.[field] }
    setForm(updated)
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Checklist Preinstalación Rayos X</h1>
      {Object.entries(sections).map(([section, items]) => (
        <div key={section}>
          <h2 style={{ marginTop: '1.5rem' }}>{section.toUpperCase()}</h2>
          {items.map((item, idx) => (
            <label key={idx} style={{ display: 'block', marginBottom: '.5rem' }}>
              <input
                type="checkbox"
                checked={form[section]?.[item] || false}
                onChange={() => handleCheck(section, item)}
              />{" "}
              {item}
            </label>
          ))}
        </div>
      ))}
    </div>
  )
}