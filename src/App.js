import './App.css';
import {Route, Switch} from "react-router-dom";
import Posts from "./components/posts";
import Home from "./components/home";
import NavBar from "./components/common/navbar";
import NotFound from "./components/notFound";

function App() {
    return (
        <div className="container-fluid">
            <NavBar/>
            <div className="container">
                <div className="content">
                    <Switch>
                        <Route path="/posts"
                               component={Posts}/>}
                        />
                        <Route path="/" exact component={Home}/>
                        <Route path="/" component={NotFound}/>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
