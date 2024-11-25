"use client";

import { useState } from 'react';
import { TextField, MenuItem, Button } from '@mui/material';
import styles from './CotizarForm.module.css';

export default function CotizarForm() {
  const [formData, setFormData] = useState({
    servicio: 'lavanderia',
    concepto: 'pantalon',
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

  return (
    <div className={styles.container}>
      <h2 style={{textAlign: "center", marginTop: 30}}>COTIZAR</h2>
      <form className={styles.form}>
        <div className={styles.grid}>
          <TextField
            select
            className={styles.textfield}
            label="Servicio"
            name="servicio"
            value={formData.servicio}
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
            <MenuItem value="L">Lavandería</MenuItem>
            <MenuItem value="T">Tintorería</MenuItem>
            <MenuItem value="P">Planchado</MenuItem>
          </TextField>

          <TextField
            label="Fecha y Hora"
            type="datetime-local"
            name="fechaHora"
            className={styles.textfield}
            value={formData.fechaHora}
            onChange={(e) => {
              let selectedDate = new Date(e.target.value);
            
              // Verificar si es domingo (día 0 es domingo en JavaScript)
              if (selectedDate.getDay() === 0) {
                // Cambiar al siguiente lunes
                selectedDate.setDate(selectedDate.getDate() + 1);
                alert("No se permiten fechas en domingo. Se ha cambiado automáticamente al lunes.");
              }
            
              // Verificar rango de horas permitido (8:00 AM a 7:00 PM)
              const selectedHour = selectedDate.getHours();
              if (selectedHour < 8 || selectedHour > 19) {
                // Ajustar la hora automáticamente
                const adjustedHour = selectedHour < 8 ? 8 : 19;
                selectedDate.setHours(adjustedHour, 0, 0, 0); // Ajustar minutos, segundos y milisegundos a 0
                alert(`El rango de horas permitido es de 8:00 AM a 7:00 PM. La hora se ha ajustado automáticamente a las ${adjustedHour}:00.`);
              }
            
              // Actualizar el valor del campo y el estado
              const adjustedDateStr = selectedDate.toISOString().slice(0, 16); // Formato compatible con datetime-local
              handleChange({ target: { name: e.target.name, value: adjustedDateStr } });
            }}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
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
            select
            label="Concepto"
            name="concepto"
            className={styles.textfield}
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
            className={styles.textfield}
            value={formData.cantidadUnidad}
            onChange={(e) => {
              const value = e.target.value;
              if (!isNaN(value) && Number(value) <= 20) {
                handleChange(e);
              }
            }}
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
            label="Cantidad (Docena)"
            name="cantidadDocena"
            className={styles.textfield}
            value={formData.cantidadDocena}
            onChange={(e) => {
              const value = e.target.value;
              if (!isNaN(value) && Number(value) <= 5) {
                handleChange(e);
              }
            }}
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
            label="Cantidad (Kilos)"
            name="cantidadKilos"
            className={styles.textfield}
            value={formData.cantidadKilos}
            onChange={(e) => {
              const value = e.target.value;
              if (!isNaN(value) && Number(value) <= 30) {
                handleChange(e);
              }
            }}
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
            label="Observaciones (Opcional)"
            name="observaciones"
            className={styles.textfield}
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
            style={{ gridColumn: 'span 2'}}
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
            className={styles.textfield}
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
            type="datetime-local"
            name="fechaEstimada"
            className={styles.textfield}
            value={formData.fechaEstimada}
            onChange={handleChange}
            fullWidth
            disabled
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
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

        </div>
        <div style={{ textAlign: "center"}}>
          <Button variant="contained" style={{ margin: '50px 0', backgroundColor: '#53A7BF', color: 'white', border: 'none', width: 150, height: 40 }}>
            Crear Orden
          </Button>
        </div>
      </form>
    </div>
  );
}
