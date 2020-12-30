import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-publication-edit',
  templateUrl: './publication-edit.component.html',
  styleUrls: ['./publication-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicationEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
