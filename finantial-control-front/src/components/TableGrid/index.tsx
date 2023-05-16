import { FuelHistory } from "../../interface/fuelHistory";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { table, tableContainer } from "./styles";

interface TableGridProps {
  rows: any[];
  skip: number;
  take?: number;
  total?: number;
  columns: GridColDef[];
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
  onView?: (id: string) => void;
  handleSkip?: (row: number) => void;
  handleTake?: (row: number) => void;
  onCellEditCommit: (params: FuelHistory) => void;
  titleDelete?: string;
  subtitleDelete?: string;
}
export function TableGrid(props: TableGridProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [value, setValue] = useState("");
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    const field = event.currentTarget.dataset.field!;
    const id = event.currentTarget.parentElement!.dataset.id!;
    const row = props.rows.find((r) => r.id === id)!;
    setValue(row[field]);
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const columns = [...props.columns];

  return (
    <Box sx={tableContainer}>
      <DataGrid
        rows={props.rows}
        rowCount={props.total}
        columns={columns.map((column: GridColDef) => ({
          ...column,
          flex: 1,
          sortable: false,
          headerClassName: "header",
        }))}
        sx={table}
        componentsProps={{
          cell: {
            onMouseEnter: handlePopoverOpen,
            onMouseLeave: handlePopoverClose,
          },
        }}
        components={{
          NoRowsOverlay: () => (
            <>
              <Stack height="100%" alignItems="center" justifyContent="center">
                Adicione dados para exibir na tabela
              </Stack>
            </>
          ),
          NoResultsOverlay: () => (
            <>
              <Stack height="100%" alignItems="center" justifyContent="center">
                Adicione dados para exibir na tabela
              </Stack>
            </>
          ),
        }}
        disableColumnMenu
        processRowUpdate={(params) => {
          props.onCellEditCommit(params);
        }}
      />
    </Box>
  );
}
