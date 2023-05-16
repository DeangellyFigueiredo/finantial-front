import { formatDate } from "../../utils/Date";
import { GridColDef } from "@mui/x-data-grid";

export function tabValue(open: boolean, values: string) {
  return { open, values };
}

export const columnsRoutesExtra: GridColDef[] = [
  {
    field: "dayOfRefill",
    headerName: "Dia do Abastecimento",

    renderCell: (params) => {
      return params.row.dayOfRefill ? formatDate(params.row.dayOfRefill) : "";
    },
  },
  {
    field: "dayFuelEnds",
    headerName: "Dia da Reserva",
    editable: true,
    renderCell: (params) => {
      return params.row.dayFuelEnds ? formatDate(params.row.dayFuelEnds) : "";
    },
  },
  { field: "initialKm", headerName: "Km Inicial" },
  {
    field: "finalKm",
    headerName: "Km Final",
    editable: true,
  },
  { field: "approximateKm", headerName: "Km Aproximado" },
  { field: "fuelGasoline", headerName: "Gasolina(L)" },
  { field: "fuelAlcohol", headerName: "Álcool(L)" },
  { field: "totalFuel", headerName: "Total(L)" },
  { field: "length", headerName: "Distância Percorrida", minWidth: 200 },
  { field: "valuePaid", headerName: "Valor Pago" },
  {
    field: "carPerformance",
    headerName: "Desempenho do Carro",
  },
];
