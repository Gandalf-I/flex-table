import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PublicationService } from '@core/services/publication.service';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicationComponent implements OnInit {
  visibleFieldsId: number[] = [];

  constructor(public publication: PublicationService) {
  }

  ngOnInit(): void {
    this.publication.publicationColumns$
      .pipe(untilDestroyed(this))
      .subscribe((columns) => {
        columns.sort((a, b) => a.priority - b.priority);

        this.visibleFieldsId = [];
        for (const column of columns) {
          if (!column.isHidden) {
            this.visibleFieldsId.push(column.fieldId);
          }
        }
      });
  }

  onQueryParamsChange(params: NzTableQueryParams) {
    this.publication.sortPublication(params.sort);
  }
}
