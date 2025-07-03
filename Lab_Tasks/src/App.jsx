import "./App.css";
import FirebaseAuth from "./FirebaseCrudAndAuth/FirebaseAuth";
import FirebaseCrud from "./FirebaseCrudAndAuth/FirebaseCrud";
import HomeScreen from "./FirebaseCrudAndAuth/HomeScreen";
import JsonApiCrudData from "./JsonApiCrudData";
import PublicApiData from "./PublicApiData";
import { Routes, Route } from "react-router";
import ToggleDarkLight from "./ThemeData/ToggleDarkLight";
import UserAuthContext from "./ThemeData/UserAuthContext";
import CouterComponent from "./ReduxCouter/COuterComponent";
import TodoAppComponent from "./RecoilTodoApp/TodoAppComponent";
import UserCrudComponent from "./ReduxToolKitCrud/UserCrudComponent";

function App() {
  return (
    <>
    <UserCrudComponent />
      {/* <TodoAppComponent /> */}
      {/* <CouterComponent /> */}
      {/* <UserAuthContext /> */}
      {/* <ToggleDarkLight /> */}
      {/* <PublicApiData /> */}
      {/* <Routes>
        <Route path='/' element={<FirebaseAuth />} />
        <Route path='/dashboard' element={<HomeScreen />} />
      </Routes> */}
    </>
  );
}

export default App;
