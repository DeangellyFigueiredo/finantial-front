"use client";
import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { TableGrid } from "../components/TableGrid";
import { CreateHistoryModal } from "../dashboard/modal/create";
import { columnsRoutesExtra } from "../dashboard/tableGrid/columns";
import { ToolbarFuel } from "../dashboard/toolbar";
import { mockData } from "../data/mockData";
import { FuelHistory } from "../interface/fuelHistory";
import { toast, ToastContainer } from "react-toastify";
import { CreateFuel, ListFuel, UpdateFuel } from "../service/fuel";
import { colors } from "../shared/themes";
import React from "react";
export default function Home() {
  const [rows, setRows] = useState<FuelHistory[]>([
    {
      id: "0",
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
    listAll();
  }, []);

  const listAll = () => {
    ListFuel()
      .then((response) => {
        if (response.status === 200) {
          setRows(response.data);
        }
      })
      .catch(() => {
        toast.error("Erro ao listar os registros.", {
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

  const updateList = async () => {
    listAll();
  };

  const handleCellEditCommit = React.useCallback((params: FuelHistory) => {
    console.log(params);
    UpdateFuel(params)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Registro atualizado com sucesso.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          updateList();
        }
      })
      .catch(() => {
        toast.error("Erro ao atualizar o registro.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  }, []);

  return (
     <Box>
      <Box sx={{maxWidth:1500, justifyContent: 'auto'}}>
        <ToolbarFuel
          title="Histórico de Abastecimento"
          key={"toolbar"}
          openNewView={() => {
            setOpen(true);
          }}
        ></ToolbarFuel>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <CreateHistoryModal
          open={open}
          setOpen={setOpen}
          updateList={updateList}
        ></CreateHistoryModal>
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
            onCellEditCommit={handleCellEditCommit}
          ></TableGrid>
        </div>
      </Box>
    </Box> 
  
  );
}
