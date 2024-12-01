"use client";

import { useState, useEffect } from 'react';
import { TextField, MenuItem, Button } from '@mui/material';
import styles from './cotizarForm.module.css';

export default function CotizarForm() {
  const [formData, setFormData] = useState({
    servicio: '',
    concepto: '',
    cantidadUnidad: '',
    cantidadDocena: '',
    cantidadKilos: '',
    observaciones: '',
    fechaHora: '',
    precioEstimado: '$ MXN',
    fechaEstimada: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calcularCostoTotal = () => {
    let total = 0;
    if (formData.servicio === "lavanderia" && formData.cantidadKilos) {
      total = formData.cantidadKilos * 25;
    } else if (formData.servicio === "tintoreria" && formData.cantidadUnidad) {
      total = formData.cantidadUnidad * 80;
    } else if (formData.servicio === "planchado" && formData.cantidadDocena) {
      total = formData.cantidadDocena * 180;
    } else {
      total = 0;
    }
    setFormData((prevData) => ({
      ...prevData,
      precioEstimado: `$${total.toFixed(2)} MXN`,
    }));
    return total.toFixed(2);
  };

  const calcularFechaEntrega = () => {
    const diasExtraPorServicio = {
      lavanderia: 1,
      planchado: 2,
      tintoreria: 3,
    };
    const diasExtra = diasExtraPorServicio[formData.servicio] || 0;
    // Validar si la fecha seleccionada es válida
    const fechaSeleccionada = new Date(formData.fechaHora);
    if (isNaN(fechaSeleccionada)) {
      return "";
    }
    // Agregar días extra a la fecha seleccionada
    fechaSeleccionada.setDate(fechaSeleccionada.getDate() + diasExtra);
    // Si la nueva fecha cae en domingo, mover al lunes
    if (fechaSeleccionada.getDay() === 6) {
      fechaSeleccionada.setDate(fechaSeleccionada.getDate() + 1);
    }
    // Formatear la fecha en 'YYYY-MM-DD'
    const fechaEstimada = fechaSeleccionada.toISOString().split("T")[0];
    // Actualizar el estado del formulario
    setFormData((prevData) => ({ ...prevData, fechaEstimada }));
    return fechaEstimada;
  };

  useEffect(() => {
    calcularCostoTotal();
  }, [formData.servicio, formData.cantidadUnidad, formData.cantidadDocena, formData.cantidadKilos]);

  useEffect(() => {
    calcularFechaEntrega();
  }, [formData.fechaHora, formData.servicio]);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
     // Evita que la página se recargue automáticamente
    e.preventDefault();

    // --- AQUÍ VA LA LÓGICA PARA ENVIAR LOS DATOS DEL FORMULARIO ---
    
    console.log('Datos enviados', formData);
    alert("Orden enviada a Tintorería GAMA");
    // Recargar la página
    window.location.reload();
  };
  
  return (
    <div className={styles.container}>
      <h2 className='font-bungee text-backgroundBlue text-4xl flex justify-center py-9'>COTIZAR</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.grid}>
          <TextField
            select
            className='font-bungee text-2xl text-backgroundBlue'
            style={{backgroundColor: "white"}}
            label="Servicio"
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: '1.5px solid #000',
                  borderRadius: '4px',
                  boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                }
              }
            }}
          >
            <MenuItem value="lavanderia">Lavandería</MenuItem>
            <MenuItem value="tintoreria">Tintorería</MenuItem>
            <MenuItem value="planchado">Planchado</MenuItem>
          </TextField>

          <TextField
            label="Fecha"
            type="date"
            name="fechaHora"
            className="font-bungee text-2xl text-backgroundBlue"
            style={{ backgroundColor: "white" }}
            value={formData.fechaHora}
            onChange={(e) => {
              let selectedDate = new Date(e.target.value);

              // Verificar si la fecha seleccionada es sábado o domingo
              if (selectedDate.getDay() === 6) {
                // Cambiar al siguiente lunes
                selectedDate.setDate(selectedDate.getDate() + (selectedDate.getDay() === 6 ? 1 : 0));
                alert("No se permiten fechas en fin de semana. Se ha cambiado automáticamente al lunes.");
              }

              // Actualizar el valor del campo y el estado
              const adjustedDateStr = selectedDate.toISOString().split("T")[0];
              handleChange({ target: { name: e.target.name, value: adjustedDateStr } });
            }}
            fullWidth
            margin="normal"
            required
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "1.5px solid #000",
                  borderRadius: "4px",
                  boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                },
              },
            }}
          />

          <TextField
            select
            label="Concepto"
            name="concepto"
            className='font-bungee text-2xl text-backgroundBlue'
            style={{backgroundColor: "white"}}
            value={formData.concepto}
            onChange={handleChange}
            fullWidth
            margin="normal"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: '1.5px solid #000',
                  borderRadius: '4px',
                  boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                }
              }
            }}
          >
            <MenuItem value="traje">Traje</MenuItem>
            <MenuItem value="camisa">Camisa</MenuItem>
            <MenuItem value="pantalon">Pantalón</MenuItem>
            <MenuItem value="saco">Saco</MenuItem>
            <MenuItem value="sueter">Sueter</MenuItem>
            <MenuItem value="playera">Playera</MenuItem>
            <MenuItem value="vestido">Vestido</MenuItem>
            <MenuItem value="falda">Falda</MenuItem>
            <MenuItem value="abrigo">Abrigo</MenuItem>
            <MenuItem value="corbata">Corbata</MenuItem>
            <MenuItem value="chamarra">Chamarra</MenuItem>
            <MenuItem value="cobertor">Cobertor</MenuItem>
            <MenuItem value="edredon">Edredón</MenuItem>
          </TextField>

          <TextField
            label="Cantidad (Unidad)"
            name="cantidadUnidad"
            className='font-bungee text-2xl text-backgroundBlue'
            style={{backgroundColor: "white"}}
            value={formData.servicio === "tintoreria" ? formData.cantidadUnidad : 0}
            onChange={(e) => {
              const value = e.target.value;
              if (!isNaN(value) && Number(value) <= 30) {
                handleChange(e);
              }
            }}
            fullWidth
            margin="normal"
            disabled={formData.servicio !== "tintoreria"}
            required={formData.servicio === "tintoreria"}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: '1.5px solid #000',
                  borderRadius: '4px',
                  boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                }
              }
            }}
          />

          <TextField
            label="Cantidad (Docena)"
            name="cantidadDocena"
            className='font-bungee text-2xl text-backgroundBlue'
            style={{backgroundColor: "white"}}
            value={formData.servicio === "planchado" ? formData.cantidadDocena : 0}
            onChange={(e) => {
              const value = e.target.value;
              if (!isNaN(value) && Number(value) <= 5) {
                handleChange(e);
              }
            }}
            fullWidth
            margin="normal"
            disabled={formData.servicio !== "planchado"}
            required={formData.servicio === "planchado"}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: '1.5px solid #000',
                  borderRadius: '4px',
                  boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                }
              }
            }}
          />

          <TextField
            label="Cantidad (Kilos)"
            name="cantidadKilos"
            className='font-bungee text-2xl text-backgroundBlue'
            style={{backgroundColor: "white"}}
            value={formData.servicio === "lavanderia" ? formData.cantidadKilos : 0}
            onChange={(e) => {
              const value = e.target.value;
              if (!isNaN(value) && Number(value) <= 30) {
                handleChange(e);
              }
            }}
            fullWidth
            margin="normal"
            disabled={formData.servicio !== "lavanderia"}
            required={formData.servicio === "lavanderia"}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: '1.5px solid #000',
                  borderRadius: '4px',
                  boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                }
              }
            }}
          />

          <TextField
            label="Observaciones (Opcional)"
            name="observaciones"
            className='font-bungee text-2xl text-backgroundBlue'
            style={{backgroundColor: "white", gridColumn: 'span 2'}}
            value={formData.observaciones}
            onChange={(e) => {
              const value = e.target.value;
              const maxLength = 500;
              if (value.length <= maxLength) {
                handleChange(e);
              }
            }}
            multiline
            rows={2}
            fullWidth
            margin="normal"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: '1.5px solid #000',
                  borderRadius: '4px',
                  boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                }
              }
            }}
          />
      
          <TextField
            label="Precio Estimado"
            name="precioEstimado"
            className='font-bungee text-2xl text-backgroundBlue'
            style={{backgroundColor: "white"}}
            value={formData.precioEstimado}
            disabled
            fullWidth
            margin="normal"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: '1.5px solid #000',
                  borderRadius: '4px',
                  boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                }
              }
            }}
          />

          <TextField
            label="Fecha Estimada"
            type="date"
            name="fechaEstimada"
            className="font-bungee text-2xl text-backgroundBlue"
            style={{ backgroundColor: "white" }}
            value={formData.fechaEstimada}
            fullWidth
            disabled
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "1.5px solid #000",
                  borderRadius: "4px",
                  boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                },
              },
            }}
          />

        </div>
        <div className='flex justify-center py-9'>
          <button type="submit" className=" text-white bg-backgroundBlue hover:bg-darkaquaLine focus:ring-4
          focus:ring-blue-300 font-alegreyaMedium rounded-lg text-base px-5 py-2.5 me-2 mb-2
          dark:bg-aquaLine dark:bg-aquaLine focus:outline-none dark:focus:ring-cyan-800">Crear Orden</button>
        </div>
      </form>
    </div>
  );
}
