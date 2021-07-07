import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

//pages
import MouseDescription from './pages/MouseDescription/MouseDescription';

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                   
                    <Route path="/description/:id">
                        <MouseDescription />
                    </Route>
                 
                    <Route path="/">
                        <MouseImg id={120}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function MouseImg(props) {
    return (
        <div>
            <Link to={`/description/${props.id}`}>
                <img src='https://www.taconic.com/images/nmri-outbred-mouse-model.jpg' alt='mouse' />
            </Link>
        </div>);
}



