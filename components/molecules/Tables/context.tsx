import { RowData, TableData, TableIdValue } from '@/data/TableData';
import React, { ReactNode, createContext, useContext, useState } from 'react';

interface Data {
  data: TableData;
  inputValue: number | null;
  selectedRow: {
    tableId: TableIdValue;
    selectedRow: RowData;
  } | null;
  onRowPress: (row: { tableId: TableIdValue; selectedRow: RowData }) => void;
}

// Create a context for the data
const TableDataContext = createContext<Data | null>(null);

// Create a Context Provider component
type TablesProviderProps = {
  data: TableData;
  inputValue: number | null;
  children: ReactNode;
};

const TablesProvider: React.FC<TablesProviderProps> = ({ data, children, inputValue }) => {
  const [selectedRow, setSelectedRow] = useState<{
    tableId: TableIdValue;
    selectedRow: RowData;
  } | null>(null);

  const onRowPress = (row: { tableId: TableIdValue; selectedRow: RowData }) => {
    // TODO: Next phase of development, comment this in
    // setSelectedRow(row);
  };

  const value = {
    data,
    inputValue,
    selectedRow,
    onRowPress
  };
  return <TableDataContext.Provider value={value}>{children}</TableDataContext.Provider>;
};

// Custom hook to access the data from any child component
const useTablesContext = (): Data => {
  const data = useContext(TableDataContext);
  if (data === null) {
    throw new Error('Tables.* must be rendered inside TablesProvider');
  }
  return data;
};

export { TablesProvider, useTablesContext };
