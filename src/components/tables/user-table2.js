import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import config from '../../config.json';
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Robot Name',
    width: 150,
    editable: true,
  },
  {
    field: 'active',
    headerName: 'Robot Status',
    width: 150,
    editable: true,
  },
];


class UserTable2 extends React.Component{
  state={robots:[], simulations:[],billing:[]}
  componentDidMount(){
    this.fetchCharacters()
    }
    fetchCharacters=async()=>{
      const ud = JSON.parse(sessionStorage.getItem("userDetails"));
      const url=config.backEndURL + "/billing/user/robot/"+ud.userId
      const response=await fetch(url);
      const data=await response.json();
      this.setState({robots: data})
      
   }
  render(){
    return (
      <div style={{ height: 300, width: '99%' }}>
        <div className="card-header text-white bg-info pt-2 pb-2 " style={{ width:'99%', color : 'white' }}><b>Robots List </b></div>
          <DataGrid
            style={{ color : 'white'}}
            rows={this.state.robots.map((robot=>{
            return{
              id: robot.robotId,
              name: robot.robotName,
              active: robot.status,
              
            }
            }))}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
    );
  }
  
}
export default UserTable2;
