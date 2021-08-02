import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-chartjs-line',
  styleUrls: ['./chartjs-line.component.scss'],
  templateUrl: './chartjs-line.component.html',
})
export class SharedChartjsLineComponent implements OnInit {
  constructor() {}
  type = 'line';
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
