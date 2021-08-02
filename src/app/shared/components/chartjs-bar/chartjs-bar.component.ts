import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-chartjs-bar',
  styleUrls: ['./chartjs-bar.component.scss'],
  templateUrl: './chartjs-bar.component.html',
})
export class SharedChartjsBarComponent implements OnInit {
  constructor() {}
  type = 'bar';
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
  options = {
    responsive: true,
    maintainAspectRatio: false,
  };
  ngOnInit() {}
}
