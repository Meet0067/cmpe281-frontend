import React, { Component } from 'react';
import LeftSideBar from '../HomePage/LeftSideBar/LeftSideBar';
import Header from "../HomePage/Header/Header";
import { buildQueries } from "@testing-library/react";
import DateTimePicker from "react-datetime-picker";
import moment, { isMoment } from "moment";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import config from "../../config.json";

class ManageRobot extends React.Component {

    constructor(props) {   
    super(props);
    const ud = JSON.parse(sessionStorage.getItem("userDetails"));
    this.state = {
      robotName: "",
      robotType: "",
      manuName: "",
      os: "",
      version: "",
      xLoc: "",
      yLoc: "",
      zLoc : "",
      building :"",
      floor:"",
      room:"",
      userId:ud.userId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  handleSubmit(){

    const data = {
      robotName: this.state.robotName,
      robotType: this.state.robotType,
      manuName: this.state.manuName,
      os: this.state.os,
      version: this.state.version,
      xLoc: this.state.xLoc,
      yLoc: this.state.yLoc,
      zLoc : this.state.zLoc,
      building:this.state.building,
      floor:this.state.floor,
      room:this.state.room,
      userId:this.state.userId

    };
    const success="Data Saved Successfully!!";    
    const headers = { headers: { "Content-Type": "application/json" } };
        axios.post(config.backEndURL+"/robot/save", data,headers)
       .then(function (response) {
          if(response.status==200 || response.status==201){
            toast.success("Successfull!!");
          }
        })
        .catch( err => {
          toast.error("Error Occured. Please check logs");
        });
   

  };
  

    render() { 
        return (
          
  <div className="container p-2">
    <div className="row" >
      <div className="col">
        <div className="card card-registration" style={{width:'90%'}}>
        <ToastContainer autoClose={3000}  />
            <form onSubmit={this.handleSubmit} success={this.state.formSuccess} error={this.state.formError}>
        <h3 className="m-2 text-uppercase">Register Robot</h3>
       
          <div className="row g-0">
             
         
            <div className="col-7">
              <div className="p-5 text-black">

                <div className="row">
                  <div className="col-4 mb-4">
                    <div className="form-outline">
                    <label className="form-label">ROBOT NAME</label>
                   
                    </div>
                  </div>
                  <div className="col-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="robotName"  value={this.state.robotName} onChange={event => this.setState({ robotName: event.target.value })} className="form-control" />
        
                    </div>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-4 mb-4">
                    <div className="form-outline">
                    <label className="form-label">ROBOT TYPE</label>
                   
                    </div>
                  </div>
                  <div className="col-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="robotName" value={this.state.robotType} onChange={event => this.setState({ robotType: event.target.value })}  className="form-control" />
        
                    </div>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-4 mb-4">
                    <div className="form-outline">
                    <label className="form-label" value={this.state.manuName} onChange={event => this.setState({ manuName: event.target.value })} >MANUFACTURER NAME</label>
                   
                    </div>
                  </div>
                  <div className="col-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="robotName" className="form-control" />
        
                    </div>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-4 mb-4">
                    <div className="form-outline">
                    <label className="form-label" >OPERATION SYSTEM</label>
                   
                    </div>
                  </div>
                  <div className="col-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="robotName"  value={this.state.os}  onChange={event => this.setState({ os: event.target.value })}  className="form-control" />
        
                    </div>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-4 mb-4">
                    <div className="form-outline">
                    <label className="form-label">VERSION</label>
                   
                    </div>
                  </div>
                  <div className="col-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="robotName"  value={this.state.version}  onChange={event => this.setState({ version: event.target.value })} className="form-control" />
        
                    </div>
                  </div>
                  
                </div>
              

              </div>
            </div>
            
            <div class="col-5">
            <div className="p-5 text-black">
            <div className="row">
                  <div className="col-4 mb-4">
                    <div className="form-outline">
                    <label className="form-label" >X LOCATION</label>
                   
                    </div>
                  </div>
                  <div className="col-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="robotName" value={this.state.xLoc} onChange={event => this.setState({ xLoc: event.target.value })}  className="form-control" />
        
                    </div>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-4 mb-4">
                    <div className="form-outline">
                    <label className="form-label">Y LOCATION</label>
                   
                    </div>
                  </div>
                  <div className="col-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="robotName" value={this.state.yLoc} onChange={event => this.setState({ yLoc: event.target.value })} className="form-control" />
        
                    </div>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-4 mb-4">
                    <div className="form-outline">
                    <label className="form-label">Z LOCATION</label>
                   
                    </div>
                  </div>
                  <div className="col-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="robotName" value={this.state.zLoc}  onChange={event => this.setState({ zLoc: event.target.value })}  className="form-control" />
        
                    </div>
                  </div>
                  </div>
                <div className="row">
                  <div className="col-4 mb-4">
                    <div className="form-outline">
                    <label className="form-label">Building</label>
                   
                    </div>
                  </div>
                  <div className="col-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="robotName" value={this.state.building}  onChange={event => this.setState({ building: event.target.value })}  className="form-control" />
        
                    </div>
                  </div>
                  </div>
                  <div className="row">
                  <div className="col-4 mb-4">
                    <div className="form-outline">
                    <label className="form-label">Floor</label>
                   
                    </div>
                  </div>
                  <div className="col-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="robotName" value={this.state.floor}  onChange={event => this.setState({ floor: event.target.value })}  className="form-control" />
        
                    </div>
                  </div>
                  </div>
                  <div className="row">
                  <div className="col-4 mb-4">
                    <div className="form-outline">
                    <label className="form-label">Room</label>
                   
                    </div>
                  </div>
                  <div className="col-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="robotName" value={this.state.room}  onChange={event => this.setState({ room: event.target.value })}  className="form-control" />
        
                    </div>
                  </div>
                  </div>
                </div>

           
            </div>
          </div>
          <div className="row g-0" style={{marginLeft:'30%'}}>           
                <button type="submit" className="col-2 float-right btn btn-primary btn-sm m-2" >
                  Create
                </button>
                <button type="reset" className="col-2 float-right btn btn-primary btn-sm m-2">
                  Reset
                </button>
                </div>
                </form>
        </div>
      </div>
    </div>
  </div>

            
        );
    }
}
 
export default ManageRobot;