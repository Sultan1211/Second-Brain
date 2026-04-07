import { IoShareOutline } from "react-icons/io5";
import { Button } from "./components/ui/Button";
import { FaPlus } from "react-icons/fa";
import { Card } from "./components/ui/Cards";
import { Navbar } from "./components/ui/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center ">
        <Button
          variant="primary"
          buttonText="Add Content"
          onClick={() => console.log("clicked")}
          startIcon={<FaPlus />}
        />
        <Button
          variant="secondary"
          buttonText="Share Brain"
          onClick={() => console.log("clicked 2")}
          startIcon={<IoShareOutline />}
        />
      </div>
      <div className="flex items-center justify-center gap-2">
        <Card
          title="Card-1"
          titleIcon={<IoShareOutline />}
          addedOn="11/06/2002"
          content="This is a card with no actual data just for testing only"
        />
        <Card
          title="Card-1"
          titleIcon={<IoShareOutline />}
          addedOn="11/06/2002"
          content=" This is a card with no actual data just for testing onlyThis is a cThis is a card with no actual data just for testing onlyard with no actual data just for testing onlyThis is a card with no actual data just for testing only"
        />
        <Card
          title="Card-1"
          titleIcon={<IoShareOutline />}
          addedOn="11/06/2002"
          content="This is a card with no actual data just for testing only"
        />
      </div>
    </>
  );
}

export default App;
