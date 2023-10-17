import ModuleList from "./ModuleList";
import Status from "../Status";

function Modules() {
  return (
    <div>
      <h2>Modules</h2>
      <div className="container flex-row">
        <ModuleList />
        <Status />
      </div>
    </div>
  );
}

export default Modules;