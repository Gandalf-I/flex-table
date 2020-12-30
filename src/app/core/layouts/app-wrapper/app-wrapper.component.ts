import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-app-wrapper',
  templateUrl: './app-wrapper.component.html',
  styleUrls: ['./app-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
