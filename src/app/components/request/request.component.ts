import {Component, Input, OnInit} from '@angular/core';
import {IRequest} from "../../models/IRequest";
import {DataService} from "../../shared/data.service";
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  @Input()
  request! : IRequest;

  constructor(private auth :AuthService, private data : DataService) { }

  ngOnInit(): void {
  }
  deleteRequest(){
    this.data.deleteRequest(this.request)
  }

}
