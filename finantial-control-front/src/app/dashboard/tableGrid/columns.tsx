import { formatDate } from "@/app/utils/Date";
import { GridColDef } from "@mui/x-data-grid";

export function tabValue(open: boolean, values: string) {
  return { open, values };
}

export const columnsRoutesExtra: GridColDef[] = [
  {
    field: "dayOfRefill",
    headerName: "Dia do Refil",

    renderCell: (params) => {
      return params.row.dayOfRefill ? formatDate(params.row.dayOfRefill) : "";
    },
  },
  {
    field: "dayFuelEnds",
    headerName: "Dia do Fim do Combustível",

    renderCell: (params) => {
      return params.row.dayFuelEnds ? formatDate(params.row.dayFuelEnds) : "";
    },
  },
  { field: "initialKm", headerName: "Km Inicial" },
  { field: "finalKm", headerName: "Km Final" },
  { field: "approximateKm", headerName: "Km Aproximado" },
  { field: "fuelGasoline", headerName: "Combustível Gasolina" },
  { field: "fuelAlcohol", headerName: "Combustível Álcool" },
  { field: "totalFuel", headerName: "Combustível Total" },
  { field: "length", headerName: "Distância Percorrida" ,

  
},
  { field: "valuePaid", headerName: "Valor Pago" },
  {
    field: "carPerformance",
    headerName: "Desempenho do Carro",
  },
];
