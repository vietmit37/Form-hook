import { useEffect, useState } from "react";
import FormUser from "./form/FormUser";
import ListUser from "./form/ListUser";
import { Container } from "react-bootstrap";

function App() {
  const inintial = JSON.parse(localStorage.getItem("dataList")) || [];
  const [dataList, setDataList] = useState(inintial);
  useEffect(() => {
    localStorage.setItem("dataList", JSON.stringify(dataList));
  }, [dataList]);
  return (
    <Container>
      <FormUser dataList={dataList} setDataList={setDataList} />
      <ListUser dataList={dataList} />
    </Container>
  );
}

export default App;
