import React from 'react';
import Button from '@mui/material/Button';
import {Box} from '@mui/system';
import { actions, container } from './styles';

interface ToolbarContainerProps {
  title: string;
  openNewView: () => void;
}

export function ToolbarFuel({
  title,
  openNewView,
}: ToolbarContainerProps) {
  return (
    <Box sx={container}>
      <Box sx={actions}>
          <>
            <Button variant="contained" sx={actions} onClick={() => openNewView()}>
              Registrar Abastecimento
            </Button>
          </>
       
      </Box>
    </Box>
  );
}
