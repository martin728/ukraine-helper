import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { IRequest } from '../../models/IRequest';

@Component({
  selector: 'app-request-manager',
  templateUrl: './request-manager.component.html',
  styleUrls: ['./request-manager.component.css'],
})
export class RequestManagerComponent implements OnInit {
  filteredString: string = '';
  requestsList: IRequest[] = [];

  constructor(private auth: AuthService, private dataService: DataService) {}

  ngOnInit(): void {
    this.getAllRequests();
  }

  getAllRequests() {
    this.dataService.getAllRequests().subscribe(
      (res) => {
        this.requestsList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
      },
      () => {
        alert('Error while fetching data');
      }
    );
  }
  emptyString() {
    this.filteredString = '';
  }

  deleteRequest(request: IRequest) {
    if (window.confirm('Do you really want to delete this request?'))
      this.dataService.deleteRequest(request);
  }
}
