import {
  Switch,
  BrowserRouter,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import DayList from "./component/DayList";
import Day from "./component/Day";
import Header from "./component/Header";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          {/* "/"는 첫번째 페이지를 의미 */}
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route path="/create_word">
            <CreateWord />
          </Route>
          <Route path="/create_day">
            <CreateDay />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

/*
REST API : CRUD 요청
- Create : POST
- Read : GET
- Update : PUT
- Delete : DELETE
*/
