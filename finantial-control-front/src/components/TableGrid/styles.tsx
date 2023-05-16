import {colors} from '../../shared/themes';

export const tableContainer = {
  display: 'flex',
  flex: 1,
  height: 'calc(100vh - 248px)',
};

export const table = {
  width: '100%',
  border: 0,
  '& .super-app-theme--header': {
    backgroundColor: colors.accent,
    border: colors.accent,
    color: colors.accent  ,
    padding: '20px',
    height: '10px',
  },
  '& .MuiDataGrid-cell': {
    padding: '24px',
  },
  '& .MuiDataGrid-iconSeparator': {
    color: colors.primary_lightest,
  },
  '& .MuiDataGrid-columnHeaderTitleContainer':{
    backgroundColor: colors.accent,
    color: '#FFFFFF',
    padding: '10px',
  }
};
