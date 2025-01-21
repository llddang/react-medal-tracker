import MedalForm, { MedalFormDto } from "./MedalForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function App() {
  function addFormData(data: MedalFormDto) {
    // TODO: 값 검증 및 갱신
  }

  function updateFormData(data: MedalFormDto) {
    // TODO: 값 검증 및 갱신
  }
  return (
    <Card className="min-w-[600px] max-w-[1000px] w-4/5 mx-auto mt-12">
      <CardHeader>
        <CardTitle>2024 파리 올림픽</CardTitle>
      </CardHeader>
      <CardContent>
        <MedalForm
          onAddButtonClick={addFormData}
          onUpdateButtonClick={updateFormData}
        />
      </CardContent>
    </Card>
  );
}

export default App;
