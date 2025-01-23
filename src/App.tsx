import { useLocalStorage } from "usehooks-ts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MedalForm from "@/containers/MedalForm";
import MedalTable from "@/containers/MedalTable";
import { LOCAL_STORAGE_MEDAL_LIST } from "@/constants";

import { MedalRecordDto } from "@/types.dto";

function App() {
  const [medalList, setMedalList] = useLocalStorage<MedalRecordDto[]>(
    LOCAL_STORAGE_MEDAL_LIST,
    []
  );

  return (
    <Card className="min-w-[37.5rem] max-w-[62.5rem] w-4/5 mx-auto mt-12">
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
