import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IRequest } from '../../models/IRequest';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css'],
})
export class EditRequestComponent implements OnInit {
  requestId: string | null = null;
  selectedRequest: IRequest | unknown;

  editRequestForm = new FormGroup({
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

  formControls = Object.keys(this.editRequestForm.controls);

  ngOnInit(): void {
    this.requestId = this.route.snapshot.paramMap.get('requestId');
    this.dataService.getRequestById(this.requestId!).subscribe((res) => {
      this.selectedRequest = res.data();
    });
  }
  updateForm() {
    this.dataService.updateRequestById(this.requestId!, this.editRequest());
    this.editRequestForm.reset();
    this.router.navigate(['/']);
  }
  editRequest() {
    return this.editRequestForm.value;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private dataService: DataService
  ) {}
}
