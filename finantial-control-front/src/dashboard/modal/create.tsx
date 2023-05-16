import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { container } from "../toolbar/styles";
import { object, string, number, date, InferType } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateFuel } from "../../service/fuel";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
interface CreateFuelHistory {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  updateList: () => void;
}

const schema = object({
  dayOfRefill: string().required(),
  initialKm: string().required(),
  fuelGasoline: string().required(),
  fuelAlcohol: string().required(),
  valuePaid: string().required(),
});
type Fuel = InferType<typeof schema>;

export function CreateHistoryModal({ open, setOpen , updateList}: CreateFuelHistory) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateFuelHistory>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: CreateFuelHistory) => {
    CreateFuel(data)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Registro adicionado com sucesso.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          handleClose();
          reset();
          updateList()
        }
      })
      .catch(() => {
        toast.error("Erro ao adicionar o registro", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };
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
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "end",
            paddingBottom: "2px",
          }}
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Adicionar</Button>
        </Box>
      </Dialog>
    </Box>
  );
}
