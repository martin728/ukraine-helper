import { Component, Input } from '@angular/core';
import { IRequest } from '../../models/IRequest';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent {
  @Input()
  request!: IRequest;

  constructor(private auth: AuthService, private data: DataService) {}

  deleteRequest() {
    this.data.deleteRequest(this.request);
  }
}
