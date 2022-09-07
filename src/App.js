import "./styles.css";
import Header from "./Component/Header";
import BodyPage from "./Component/BodyPage";
import BusinessProfile from "./Component/BusinessProfile";
//import UserInterface from "./Component/UserInterface";
//const headerStyle = {
//color: "purple"
//};

export default function App() {
  return (
    <div className="App">
      <Header />
      <BodyPage />
      <BusinessProfile />
    </div>
  );
}
