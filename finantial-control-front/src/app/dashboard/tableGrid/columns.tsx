import {GridColDef} from '@mui/x-data-grid';

export function tabValue(open: boolean, values: string){
  return{open, values}
}

export const columnsRoutesExtra: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "dayOfRefill", headerName: "Dia do Refil", width: 130 },
  {
    field: "dayFuelEnds",
    headerName: "Dia do Fim do Combustível",
    width: 130,
  },
  { field: "initialKm", headerName: "Km Inicial", width: 130 },
  { field: "finalKm", headerName: "Km Final", width: 130 },
  { field: "approximateKm", headerName: "Km Aproximado", width: 130 },
  { field: "fuelGasoline", headerName: "Combustível Gasolina", width: 130 },
  { field: "fuelAlcohol", headerName: "Combustível Álcool", width: 130 },
  { field: "totalFuel", headerName: "Combustível Total", width: 130 },
  { field: "length", headerName: "Distância Percorrida", width: 130 },
  { field: "valuePaid", headerName: "Valor Pago", width: 130 },
  {
    field: "carPerformance",
    headerName: "Desempenho do Carro",
    width: 130,
  },
];
