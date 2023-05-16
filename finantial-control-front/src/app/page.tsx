"use client";
import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { TableGrid } from "./components/TableGrid";
import { CreateHistoryModal } from "./dashboard/modal/create";
import { columnsRoutesExtra } from "./dashboard/tableGrid/columns";
import { ToolbarFuel } from "./dashboard/toolbar";
import { mockData } from "./data/mockData";
import { FuelHistory } from "./interface/fuelHistory";
export default function Home() {
  const [rows, setRows] = useState<FuelHistory[]>([
    {
      id: 0,
      dayOfRefill: "",
      dayFuelEnds: "",
      initialKm: "",
      finalKm: "",
      approximateKm: "",
      fuelGasoline: "",
      fuelAlcohol: "",
      totalFuel: "",
      length: "",
      valuePaid: "",
      carPerformance: "",
    },
  ]);

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setRows(mockData);
  }, []);

  return (
    <Box>
      <ToolbarFuel
        title="Histórico de Abastecimento"
        key={"toolbar"}
        openNewView={() => {setOpen(true);}}
      ></ToolbarFuel>
      <CreateHistoryModal open={open} setOpen={setOpen}></CreateHistoryModal>
      <div
        style={{
          height: 500,
          width: "100%",
          content: "center",
        }}
      >
        <TableGrid
          columns={columnsRoutesExtra}
          rows={rows}
          skip={0}
        ></TableGrid>
      </div>
    </Box>
  );
}
