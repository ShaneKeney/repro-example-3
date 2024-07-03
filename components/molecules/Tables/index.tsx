import { ReactNode, useState } from 'react';
import { TablesProvider } from './context';
import { TABLE_DATA } from '@/data/TableData';
import Table from './AnimatedTable';

type Props = {
  children: ReactNode;
  inputValue: number | null;
};

export default function Tables({ children, inputValue }: Props) {
  return (
    <TablesProvider data={TABLE_DATA} inputValue={inputValue}>
      {children}
    </TablesProvider>
  );
}

Tables.Table = Table;
