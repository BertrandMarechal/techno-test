import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit {

  @Input() count: number;
  internalCounter: number;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.internalCounter = 0;
    setInterval(() => {
      this.internalCounter++;
    }, 100);

    setInterval(() => {
      this.cd.detectChanges();
    }, 500);
  }
}
