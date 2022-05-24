import {Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {DataService} from "../../services/data.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent{
  addRequestForm = new FormGroup({
    request: new FormControl(),
    title: new FormControl(),
    fullName: new FormControl(),
    city: new FormControl(),
    country: new FormControl(),
    email: new FormControl(),
    selectedCategory: new FormControl(),
  });
  formControls = Object.keys(this.addRequestForm.controls);

  addRequest(){
    this.data.addRequest(this.addRequestForm.value);
    this.addRequestForm.reset();
    this.router.navigate(["/"])
  }

  constructor(private router: Router,private auth :AuthService, private data : DataService) { }
}
