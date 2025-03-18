import React from "react";

class LoginPage1 extends React.Component {
  constructor(props: any) {

    // this will initialize the state 
    // we cant call api from constructor

    super(props);
    console.log("I am first call");
  }
componentDidMount(): void {
    console.log("i am Third call");
    // data is taken from here
   // call API to fetch the data 
   //update the component 


}
componentDidUpdate() {
    // change effect 
    // aaru event haru lai fire / trigger garnu paryo vaany yaha lekhinxz 

}
componentWillUnmount(): void {
    // this is the last call of hte component 
    // this will be destroy for calling of the another components 
    
}

  render = () => {
    console.log("I am second call");
// after the update of the componetnt from the data and again it will rednder again 

    return (
        
      <>
        <h1>Hello from class login page</h1>
      </>
    );
  };
}
export default LoginPage1;
