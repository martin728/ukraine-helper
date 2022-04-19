import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/auth.service";
import {DataService} from "../../shared/data.service";
import {IRequest} from "../../models/IRequest";

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {
  requestsList: IRequest[] = [];
  requestsObj : IRequest ={
    email: "",
    mobile: "",
    name: "",
    title: ""
  };
  id:string= '';
  name:string= '';
  email:string= '';
  mobile:string= '';
  title:string= '';

  constructor(private auth :AuthService, private data : DataService) { }

  ngOnInit(): void {
  }
  resetForm(){
    this.id = '';
    this.name = '';
    this.email = '';
    this.mobile = '';
    this.title = '';
  }
  addRequest(){
    // if(this.name=='' || this.email=='' || this.mobile=='' || this.title==''){
    //   alert('Fill all the fields');
    //   return;
    // }
    this.requestsObj.id = '';
    this.requestsObj.email = this.email;
    this.requestsObj.name = this.name;
    this.requestsObj.mobile = this.mobile;
    this.requestsObj.title = this.title;

    this.data.addRequest(this.requestsObj);
    this.resetForm()
  }
}
