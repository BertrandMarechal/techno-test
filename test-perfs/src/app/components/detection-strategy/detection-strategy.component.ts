import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detection-strategy',
  templateUrl: './detection-strategy.component.html',
  styleUrls: ['./detection-strategy.component.css']
})
export class DetectionStrategyComponent implements OnInit {

  counter: number;

  constructor() { }

  ngOnInit() {
    this.counter = 0;
    setInterval(() => {
      this.counter++;
    }, 1000);
  }

}
