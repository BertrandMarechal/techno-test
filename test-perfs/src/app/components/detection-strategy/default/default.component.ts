import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  @Input() count: number;
  internalCounter: number;

  constructor() { }

  ngOnInit() {
    this.internalCounter = 0;
    setInterval(() => {
      this.internalCounter++;
    }, 100);
  }
}
