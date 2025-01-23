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
import { ArrowUpDown } from "lucide-react";
import { SetStateAction, useState } from "react";

export interface MedalTableProps {
  medalList: MedalRecordDto[];
  setMedalList: React.Dispatch<SetStateAction<MedalRecordDto[]>>;
}

export default function MedalTable({
  medalList,
  setMedalList,
}: MedalTableProps) {
  const [isSortByTotal, setIsSortByTotal] = useState(false);
  const sortedMedalList = isSortByTotal
    ? medalList.sort(byTotalSorting)
    : medalList.sort(byMedalSorting);

  function handleTotalHeaderClick() {
    setIsSortByTotal((prev) => !prev);
  }

  function handleDeleteButtonClick(item: MedalRecordDto) {
    setMedalList((prev) =>
      prev.filter((medal) => medal.country !== item.country)
    );
  }

  return (
    <div className="rounded-md border w-full text-center">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">국가</TableHead>
            <TableHead className="text-center">금메달</TableHead>
            <TableHead className="text-center">은메달</TableHead>
            <TableHead className="text-center">동메달</TableHead>
            <TableHead className="text-center">
              <Button variant="ghost" onClick={() => handleTotalHeaderClick()}>
                전체 합
                <ArrowUpDown />
              </Button>
            </TableHead>
            <TableHead className="text-center">설정</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {medalList.length ? (
            sortedMedalList.map((item) => (
              <TableRow key={item.country}>
                {Object.entries(item).map(([key, value]) => (
                  <TableCell key={key}>{value}</TableCell>
                ))}
                <TableCell>
                  <Button onClick={() => handleDeleteButtonClick(item)}>
                    삭제
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

function byMedalSorting(a: MedalRecordDto, b: MedalRecordDto) {
  if (a.gold === b.gold && a.sliver === b.sliver) return b.bronze - a.bronze;
  if (a.gold === b.gold) return b.sliver - a.sliver;
  return b.gold - a.gold;
}

function byTotalSorting(a: MedalRecordDto, b: MedalRecordDto) {
  if (a.total === b.total) return byMedalSorting(a, b);
  return b.total - a.total;
}
