import { useLocalStorage } from "usehooks-ts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import MedalForm from "@/containers/MedalForm";
import MedalTable from "@/containers/MedalTable";

import { MedalRecordDto } from "@/types.dto";
import { LOCAL_STORAGE_MEDAL_LIST } from "./constants";

function App() {
  const [medalList, setMedalList] = useLocalStorage<MedalRecordDto[]>(
    LOCAL_STORAGE_MEDAL_LIST,
    []
  );

  return (
    <Card className="min-w-[600px] max-w-[1000px] w-4/5 mx-auto mt-12">
      <CardHeader>
        <CardTitle>2024 파리 올림픽</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <MedalForm setMedalList={setMedalList} />
        <MedalTable medalList={medalList} setMedalList={setMedalList} />
      </CardContent>
    </Card>
  );
}

export default App;
