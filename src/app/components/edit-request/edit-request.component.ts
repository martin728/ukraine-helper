import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {DataService} from "../../services/data.service";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css']
})
export class EditRequestComponent implements OnInit {
  requestId?: any;
  selectedRequest?: any;

  editRequestForm = new FormGroup({
    request: new FormControl(),
    title: new FormControl(),
    fullName: new FormControl(),
    city: new FormControl(),
    country: new FormControl(),
    email: new FormControl(),
    selectedCategory: new FormControl(),
  });


  ngOnInit(): void {
    this.requestId = this.route.snapshot.paramMap.get('requestId')
    this.dataService.getRequestById(this.requestId).subscribe(res => {
      this.selectedRequest = res.data()
    })
  }
  updateForm(){
    this.dataService.updateRequestById(this.requestId, this.editRequest())
    this.editRequestForm.reset();
    this.router.navigate(["/"])
  }
  editRequest(){
    return this.editRequestForm.value;
  }

  constructor(private router: Router,private route: ActivatedRoute, private auth: AuthService, private dataService: DataService) {}
}
