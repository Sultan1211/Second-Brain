import { IoShareOutline } from "react-icons/io5";
import { Button } from "./components/ui/Button";
import { FaPlus } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="bg-purple-400 border-8">hi there</div>
      <div className="flex justify-center ">
        <Button
          variant="primary"
          buttonText="Add Content"
          onClick={() => console.log("clicked")}
          startIcon={<FaPlus/>}
        />
        <Button
          variant="secondary"
          buttonText="Share Brain"
          onClick={() => console.log("clicked 2")}
          startIcon={<IoShareOutline />}
        />
      </div>
    </>
  );
}

export default App;
