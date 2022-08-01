import { useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import LinearWithValueLabel from "./LinearProgressWithLabel.component";

const InitialTasks = () => {
  const [steps, setSteps] = useState({
    uploadLogo: true,
    catalogImg: true,
    bannerImg: false,
    deliveryMethod: false,
    contactInfo: false,
    categories: false,
    createAProduct: false,
  });
  const [progress, setProgress] = useState(0);

  const {
    uploadLogo,
    catalogImg,
    bannerImg,
    deliveryMethod,
    contactInfo,
    categories,
    createAProduct,
  } = steps;

  useEffect(() => {
    const checkeds = Object.values(steps).reduce(
      (acc, el) => (el ? acc + 1 : acc),
      0
    );
    setProgress((checkeds * 100) / Object.keys(steps).length);
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
          <FormControlLabel
            control={<Checkbox checked={uploadLogo} name="uploadLogo" />}
            label={
              <Typography
                sx={{ textDecoration: uploadLogo ? "line-through" : "" }}
              >
                Sube el logo de la tienda
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox checked={catalogImg} name="catalogImg" />}
            label={
              <Typography
                sx={{ textDecoration: catalogImg ? "line-through" : "" }}
              >
                Imagen para el catálogo
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox checked={bannerImg} name="bannerImg" />}
            label={
              <Typography
                sx={{ textDecoration: bannerImg ? "line-through" : "" }}
              >
                Imagen de banner
              </Typography>
            }
          />
          <FormControlLabel
            control={
              <Checkbox checked={deliveryMethod} name="deliveryMethod" />
            }
            label={
              <Typography
                sx={{ textDecoration: deliveryMethod ? "line-through" : "" }}
              >
                Define el método de entrega
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox checked={contactInfo} name="contactInfo" />}
            label={
              <Typography
                sx={{ textDecoration: contactInfo ? "line-through" : "" }}
              >
                Añade datos de contacto
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox checked={categories} name="categories" />}
            label={
              <Typography
                sx={{ textDecoration: categories ? "line-through" : "" }}
              >
                Añade categorías
              </Typography>
            }
          />
          <FormControlLabel
            control={
              <Checkbox checked={createAProduct} name="createAProduct" />
            }
            label={
              <Typography
                sx={{ textDecoration: createAProduct ? "line-through" : "" }}
              >
                Crea un producto
              </Typography>
            }
          />
        </FormGroup>
      </FormControl>
      <Box sx={{ width: "100%" }}>
        <LinearWithValueLabel value={progress} />
      </Box>
    </Paper>
  );
};

export default InitialTasks;
