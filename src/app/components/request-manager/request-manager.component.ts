import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/auth.service";
import {DataService} from "../../shared/data.service";
import {IRequest} from "../../models/IRequest";

@Component({
  selector: 'app-request-manager',
  templateUrl: './request-manager.component.html',
  styleUrls: ['./request-manager.component.css']
})
export class RequestManagerComponent implements OnInit {
  requestsList: IRequest[] = [];
  id:string= '';
  name:string= '';
  email:string= '';
  mobile:string= '';
  title:string= '';


  constructor(private auth :AuthService, private data : DataService) { }

  ngOnInit(): void {
    this.getAllRequests()
  }
  getAllRequests(){
    this.data.getAllRequests().subscribe( res => {

      this.requestsList = res.map( (e: any) => {

        const data = e.payload.doc.data();
        data.id =e.payload.doc.id;
        return data;
      })

    },err => {
      alert('Error while fetching data')
    })
  }


  deleteRequest(request:IRequest){
    if(window.confirm("Do you really want to delete this request?"))
    this.data.deleteRequest(request)
  }
}
