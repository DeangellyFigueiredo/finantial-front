import React from 'react';
import Button from '@mui/material/Button';
import {Box} from '@mui/system';
import {Typography} from '@mui/material';
import { actions, container, titleStyle } from './styles';

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
      <Typography style={titleStyle}>{title}</Typography>
      <Box sx={actions}>
          <>
            <Button variant="contained" onClick={() => openNewView()}>
              Registrar Abastecimento
            </Button>
          </>
       
      </Box>
    </Box>
  );
}
