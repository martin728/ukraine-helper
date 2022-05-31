import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css'],
})
export class AddRequestComponent {
  addRequestForm = new FormGroup({
    request: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    title: new FormControl('', [Validators.required, Validators.minLength(6)]),
    fullName: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    selectedCategory: new FormControl('', Validators.required),
  });
  formControls = Object.keys(this.addRequestForm.controls);

  addRequest() {
    this.data.addRequest(this.addRequestForm.value);
    this.addRequestForm.reset();
    this.router.navigate(['/']);
  }

  constructor(
    private router: Router,
    private auth: AuthService,
    private data: DataService
  ) {}
}
