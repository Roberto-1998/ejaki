import { useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
  Typography,
} from "@mui/material";
import LinearWithValueLabel from "./LinearProgressWithLabel.component";

const InitialTasks = () => {
  const [steps, setSteps] = useState([
    { id: "uploadLogo", text: "Sube el logo de la tienda", isCompleted: true },
    { id: "catalogImg", text: "Imagen para el catálogo", isCompleted: true },
    { id: "bannerImg", text: "Imagen de banner", isCompleted: true },
    {
      id: "deliveryMethod",
      text: "Define el método de entrega",
      isCompleted: true,
    },
    { id: "contactInfo", text: "Añade datos de contacto", isCompleted: false },
    { id: "categories", text: "Añade categorías", isCompleted: false },
    { id: "createAProduct", text: "Crea un producto", isCompleted: false },
  ]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const checkeds = steps.reduce(
      (acc, el) => (el.isCompleted ? acc + 1 : acc),
      0
    );
    setProgress((checkeds * 100) / steps.length);
  }, [steps]);

  return (
    <Paper
      sx={{
        padding: "20px 30px 40px 30px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        borderRadius: "7px",
      }}
    >
      <Typography variant="h4">Bienvenido Francisco!</Typography>

      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">
          Trata de completar estas tareas y aprovecha al máximo las ventajas de
          nuestra plataforma:
        </FormLabel>
        <FormGroup>
          {steps.map((el) => (
            <FormControlLabel
              control={<Checkbox checked={el.isCompleted} name={el.id} />}
              label={
                <Typography
                  sx={{ textDecoration: el.isCompleted ? "line-through" : "" }}
                >
                  {el.text}
                </Typography>
              }
            />
          ))}
        </FormGroup>
      </FormControl>
      <Box sx={{ width: "100%" }}>
        <LinearWithValueLabel value={progress} />
      </Box>
    </Paper>
  );
};

export default InitialTasks;
