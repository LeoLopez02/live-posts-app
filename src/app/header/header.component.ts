import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../service/back-end.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private backenService: BackEndService) {}

  ngOnInit(): void {
    this.onFetch();
  }

  onSave() {
    this.backenService.saveData();
  }

  onFetch() {
    console.log('On fetch works');
    this.backenService.fetchData();
  }
}
