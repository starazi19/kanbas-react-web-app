import ModuleList from "../Modules/ModuleList";
import Status from "../Status/";


function Home() {
  return (
    <div>
        <div className="col d-lg-10">
          <h2>Home</h2>
          <ModuleList />
        </div>
      <Status />
    </div>
  );
}
export default Home;