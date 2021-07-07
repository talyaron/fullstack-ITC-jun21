import React from "react";
import { withRouter } from "react-router";

// A simple component that shows the pathname of the current location
class Home extends React.Component {

componentDidMount(){
    const {  history } = this.props;
    console.log(history);
}

 render() {
   const { location } = this.props;

   return <div>You are now at {location.pathname}</div>;
 }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
export default withRouter(Home);