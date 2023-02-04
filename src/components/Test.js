import React from "react";



const Test = ({name = "", setName }) => {
  return (
  <div>
  <h1> The name is: {name}</h1>
  <input type="text"
  value={name}
   onChange={(e) => setName(e.target.value)}/>
  </div>
  );
};
// import "./Test.css";
// /*const Test = () => {
//     return (
//         <div>
//           <h1>Hello, I am Himani</h1>  
//         </div>
//     );
// };


// */
// class Test extends Component {
//    render(){
//     console.log("Hello");
//     return (
//         <div>
//           <h1 id="testId">Hello, I am Himani</h1>  
//         </div>
//     );
//    }
// }
 export default Test;