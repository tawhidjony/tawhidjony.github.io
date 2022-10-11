
import { BrowserRouter } from "react-router-dom";
import WebRoute from "./Routes/WebRoute";

const App = () => {
  return (
    <BrowserRouter >
      <WebRoute />
    </BrowserRouter >
  )
}

export default App