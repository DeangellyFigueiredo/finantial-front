import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { actions, container, titleStyle } from "../toolbar/styles";
import { object, string, number, date, InferType } from "yup";
import { FuelHistory } from "@/app/interface/fuelHistory";
import { yupResolver } from "@hookform/resolvers/yup";

interface CreateFuelHistory {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const schema = object({
  dayOfRefill: string().required(),
  initialKm: string().required(),
  fuelGasoline: string().required(),
  fuelAlcohol: string().required(),
  valuePaid: string().required(),
});
type Fuel = InferType<typeof schema>;

export function CreateHistoryModal({ open, setOpen }: CreateFuelHistory) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FuelHistory>({
    resolver: yupResolver(schema),
  });

  const handleClose = () => {
    reset();
    setOpen(false);
  };

  return (
    <Box sx={container}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Novo Registro</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha os campos abaixo para adicionar um novo abastecimento.
          </DialogContentText>
          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            <TextField
              margin="dense"
              {...register("dayOfRefill")}
              type="date"
              label="Data do abastecimento"
              fullWidth
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              margin="dense"
              {...register("initialKm")}
              label="Quilometragem inicial"
              type="text"
              fullWidth
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              margin="dense"
              {...register("fuelGasoline")}
              label="Combustível Gasolina"
              type="text"
              fullWidth
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              margin="dense"
              {...register("fuelAlcohol")}
              label="Combustível Álcool"
              type="text"
              fullWidth
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              margin="dense"
              {...register("valuePaid")}
              label="Valor pago"
              type="text"
              fullWidth
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Adicionar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
