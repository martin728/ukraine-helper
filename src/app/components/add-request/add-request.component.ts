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
  requestsObj : IRequest = {
    email: "",
    city: "",
    request: "",
    title: "",
    selectedCategory: "",
    country: ""
  };
  id:string= '';
  email:string= '';
  city:string= '';
  country:string= '';
  request:string= '';
  title:string= '';
  selectedCategory = '';

  categories = [
    { id: 1, name: 'Food' },
    { id: 2, name: 'Clothes' },
    { id: 3, name: 'Medicine' },
    { id: 4, name: 'Shelter' },
  ];
  constructor(private auth :AuthService, private data : DataService) { }

  ngOnInit(): void {
  }
  resetForm(){
    this.id = '';
    this.request = '';
    this.email = '';
    this.city = '';
    this.selectedCategory = '';
    this.country = '';
    this.title = '';
  }
  addRequest(){
    // if(this.name=='' || this.email=='' || this.mobile=='' || this.title==''){
    //   alert('Fill all the fields');
    //   return;
    // }
    this.requestsObj.id = '';
    this.requestsObj.email = this.email;
    this.requestsObj.request = this.request;
    this.requestsObj.city = this.city;
    this.requestsObj.selectedCategory = this.selectedCategory;
    this.requestsObj.country = this.country;
    this.requestsObj.title = this.title;

    this.data.addRequest(this.requestsObj);
    this.resetForm()
  }
}
