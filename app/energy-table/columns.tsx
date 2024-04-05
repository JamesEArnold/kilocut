import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { EnergyOffer } from '../types';
import { faCircleDown, faCircleUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const columnHelper = createColumnHelper<EnergyOffer>();

export const columns = [
  columnHelper.accessor('supplierCompanyName', {
    header: () => 'Supplier Name',
    cell: (info) => <div className="flex items-center"><FontAwesomeIcon icon={faCircleUp} className="hover:cursor-pointer" /><span className="ml-2 text-left text-[#5E5ADB]">{info.getValue()}</span></div>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.rateType, {
    id: 'rateType',
    cell: (info) => <div className="bg-[#E1FCEF] rounded text-[#14804A] text-sm py-1 w-3/4 mx-auto">
      <span>{info.getValue()}</span>
    </div>,
    header: () => <span>Rate Type</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('renewable', {
    header: () => '% of Renewable Energy',
    cell: (info) => <div className="bg-[#E9EDF5] w-10 rounded mx-auto text-[#464F60]">
      <span>
        {info.renderValue()}
      </span>
    </div>,
    footer: (info) => info.column.id,
    meta: {
      align: 'center',
    },
  }),
  columnHelper.accessor('isIntroductoryOffer', {
    header: () => 'Intro Offer?',
    cell: (info) => (info.renderValue() === true ? 'Yes' : 'No'),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('termLength', {
    header: () => 'Term Length',
    cell: (info) => <div className="bg-[#E9EDF5] w-10 rounded mx-auto text-[#464F60]">
      <span>
        {info.renderValue()}
      </span>
    </div>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('earlyTerminationFee', {
    header: () => 'Early Termination Fee',
    cell: (info) => <div className="bg-[#E9EDF5] w-10 rounded mx-auto text-[#464F60]">
      <span>
        {info.renderValue()}
      </span>
    </div>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('monthlyFee', {
    header: () => 'Monthly Fee',
    cell: (info) => <div className="bg-[#E9EDF5] w-10 rounded mx-auto text-[#464F60]">
      <span>
        {info.renderValue()}
      </span>
    </div>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('isPromotionalOffer', {
    header: () => 'Promo Offer?',
    cell: (info) => (info.renderValue() === true ? 'Yes' : 'No'),
    footer: (info) => info.column.id,
  }),

  /*
   * columnHelper.accessor('visits', {
   *   header: () => <span>Visits</span>,
   *   footer: info => info.column.id,
   * }),
   * columnHelper.accessor('status', {
   *   header: 'Status',
   *   footer: info => info.column.id,
   * }),
   * columnHelper.accessor('progress', {
   *   header: 'Profile Progress',
   *   footer: info => info.column.id,
   * }),
   */
];
