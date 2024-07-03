export type TableData = typeof TABLE_DATA;

export type TableIdValue = 'standard' | 'deferred-3' | 'deferred-6';
export type RowData = { term: number; rate: number };

export const TABLE_DATA = [
  {
    title: 'Standard Financing',
    id: 'standard' as TableIdValue,
    rowData: [
      { term: 36, rate: 0.0311245 },
      { term: 48, rate: 0.0242468 },
      { term: 60, rate: 0.0201375 },
      { term: 72, rate: 0.0174124 }
    ]
  },
  {
    title: '3 Month Deferred followed by',
    id: 'deferred-3' as TableIdValue,
    rowData: [
      { term: 36, rate: 0.0319167 },
      { term: 48, rate: 0.0249198 },
      { term: 60, rate: 0.0207416 },
      { term: 69, rate: 0.0185730 }
    ]
  },
  {
    title: '6 Month Deferred followed by',
    id: 'deferred-6' as TableIdValue,
    rowData: [
      { term: 36, rate: 0.0325045 },
      { term: 48, rate: 0.0253788 },
      { term: 60, rate: 0.0211236 },
      { term: 66, rate: 0.0195832 }
    ]
  }
];
