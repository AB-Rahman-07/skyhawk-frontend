import { Component, OnInit, Input, ViewChild } from '@angular/core';

// type ViewType = "user" | "admin";

@Component({
  selector: 'shared-events-list-item',
  styleUrls: ['./shared-events-list-item.component.scss'],
  templateUrl: './shared-events-list-item.component.html',
})
export class SharedEventsListItemComponent implements OnInit {
  constructor() {}
  @Input() item:any;
  ngOnInit() {}
}
