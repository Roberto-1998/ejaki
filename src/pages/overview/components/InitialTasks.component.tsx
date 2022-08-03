import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useContext,
  useEffect,
  useState,
} from "react";
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
import { Context } from "../../../Context";

const InitialTasks = () => {
  const contextData = useContext(Context);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const checkeds = contextData?.steps.reduce(
      (acc: number, el: { isCompleted: any }) =>
        el.isCompleted ? acc + 1 : acc,
      0
    );
    setProgress((checkeds * 100) / contextData?.steps.length);
  }, [contextData?.steps]);

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
          {contextData?.steps.map(
            (el: { id: string; isCompleted: boolean; text: string }) => (
              <FormControlLabel
                key={el.id}
                control={<Checkbox checked={el.isCompleted} name={el.id} />}
                label={
                  <Typography
                    sx={{
                      textDecoration: el.isCompleted ? "line-through" : "",
                    }}
                  >
                    {el.text}
                  </Typography>
                }
              />
            )
          )}
        </FormGroup>
      </FormControl>
      <Box sx={{ width: "100%" }}>
        <LinearWithValueLabel value={progress} />
      </Box>
    </Paper>
  );
};

export default InitialTasks;
