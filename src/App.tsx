import React from "react";
import * as axios_utils from './utils/axios_utils';
import './App.scss';
 
class App extends React.Component{

  Constructor(){
    
  }

  state = {
      userdata: []
  }
  
  getUsers = () => {
    axios_utils.getAllUsers()
                .then(res => {
                  this.setState({
                    userdata: res.data.data
                  });
                  })
                 
  }

  componentDidMount(){
    this.getUsers();
  }

  render() {

      const { userdata } = this.state;

    return (
        <>
     
     <div className="select">
     <select >
            <option>aaa</option>
       
            {
              userdata.map(user => {
                   // console.log(user['id']);
               
                        return(
                          <option id={user['id']}>{user['name']}</option>
                        )
                    
                    
              })
            }
            
          </select>
     </div>
          
          
        </>
    )
      
  }
}
 
export default App;