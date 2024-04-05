'use client';

import { Cell, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useReducer, useState } from 'react';
import { EnergyOffer } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { columns } from './energy-table/columns';
import { fakeData } from './fakedata';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons';

export default function Home () {
  const [ data, _setData ] = useState(() => fakeData);
  const rerender = useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const rateTypeStylers = (value: string | any) => {
    if (value === 'Fixed') {
      return 'bg-green-300 rounded-full -my-2';
    }

    return 'bg-yello-400';
  };

  const valueStylers = (value: Cell<EnergyOffer, unknown>) => {
    if (value.column.id === 'rateType') {
      return rateTypeStylers(value.getValue());
    }
  };

  return (
    <div className="py-20 px-[100px] flex flex-col mx-auto text-[#464F60]">
      <table className="rounded-xl overflow-hidden">
        <thead className="bg-[#F7F9FC] border-[#E9EDF5] drop-shadow-md">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-2 px-6 text-[#687182] uppercase font-light text-xs">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="p-4 border-x-[1px] border-b-[1px] border-[#E9EDF5]">
              {row.getVisibleCells().map((cell, index) => (<><></><td key={cell.id} className={`text-center p-4 bg-[#fffffe] ${cell.column.columnDef.meta?.className || ''}`}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td></>
              ))}
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>
    </div>
  );
}
