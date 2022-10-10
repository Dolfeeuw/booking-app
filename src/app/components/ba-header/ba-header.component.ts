import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ba-header',
  templateUrl: './ba-header.component.html',
  styleUrls: ['./ba-header.component.scss'],
})
export class BaHeaderComponent implements OnInit {
  title = 'CHECK IN';

  constructor() {}

  ngOnInit(): void {}
}
