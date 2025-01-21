import {
  ColumnDef,
  flexRender,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { MedalRecordDto } from "@/types.dto";
import { SetStateAction, useState } from "react";
import { TanStackColumnSort } from "./types.type";

interface MedalRecordWithCountDto extends MedalRecordDto {
  total: number;
}

export interface MedalTableProps {
  medalList: MedalRecordWithCountDto[];
  setMedalList: React.Dispatch<SetStateAction<MedalRecordDto[]>>;
}

export default function MedalTable({
  medalList,
  setMedalList,
}: MedalTableProps) {
  const [sortConfig, setSortConfig] = useState<TanStackColumnSort[]>([
    { id: "gold", desc: true },
    { id: "sliver", desc: true },
    { id: "bronze", desc: true },
  ]);

  const columns: ColumnDef<MedalRecordWithCountDto>[] = [
    {
      accessorKey: "country",
      header: "국가명",
      cell: ({ row }) => <div>{row.getValue("country")}</div>,
    },
    {
      accessorKey: "gold",
      header: "금메달",
      cell: ({ row }) => <div>{row.getValue("gold")}</div>,
    },
    {
      accessorKey: "sliver",
      header: "은메달",
      cell: ({ row }) => <div>{row.getValue("sliver")}</div>,
    },
    {
      accessorKey: "bronze",
      header: "동메달",
      cell: ({ row }) => <div>{row.getValue("bronze")}</div>,
    },
    {
      accessorKey: "total",
      header: () => (
        <Button
          variant="ghost"
          onClick={() =>
            setSortConfig((prev) => {
              const newArr = [...prev];
              if (newArr.length === 3)
                newArr.unshift({ id: "total", desc: true });
              else newArr.shift();
              return newArr;
            })
          }
        >
          전체 합
          <ArrowUpDown />
        </Button>
      ),
      cell: ({ row }) => <div>{row.getValue("total")}</div>,
    },
    {
      accessorKey: "delete",
      header: "설정",
      cell: ({ row }) => (
        <Button
          onClick={() =>
            setMedalList((prev) =>
              prev.filter((medal) => medal.country !== row.getValue("country"))
            )
          }
        >
          삭제
        </Button>
      ),
    },
  ];

  const table = useReactTable({
    data: medalList,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sortConfig,
    },
    onSortingChange: setSortConfig,
  });

  return (
    <div className="rounded-md border w-full text-center">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="text-center">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getSortedRowModel().rows?.length ? (
            table.getSortedRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
