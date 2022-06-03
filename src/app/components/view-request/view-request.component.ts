import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css'],
})
export class ViewRequestComponent implements OnInit {
  requestId: string | null = null;
  selectedRequest: any;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.requestId = this.route.snapshot.paramMap.get('requestId');
    this.data.getRequestById(this.requestId!).subscribe((res) => {
      this.selectedRequest = res.data();
    });
  }
}
