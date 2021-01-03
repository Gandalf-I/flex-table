import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicationService } from '@core/services/publication.service';
import { PublicationMetadata } from '@shared/interfaces/publication-metadata';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-table-settings',
  templateUrl: './table-settings.component.html',
  styleUrls: ['./table-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableSettingsComponent implements OnInit {
  form: FormGroup;
  columnsMetadata: PublicationMetadata[];

  constructor(private fb: FormBuilder,
              private router: Router,
              private publicationService: PublicationService,
              private message: NzMessageService,
  ) {
    this.form = this.fb.group([]);
    this.columnsMetadata = this.publicationService.publicationColumns$.value;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    for (const metadata of this.columnsMetadata) {
      if (!metadata) {
        continue;
      }

      this.form.addControl(metadata.fieldCode, this.getMetadataFormGroup(metadata));

    }
  }

  getMetadataFormGroup(metadata: PublicationMetadata) {
    const { isReadOnly, isMandatory, isHidden, priority } = metadata;

    return this.fb.group({
      isReadOnly: [isReadOnly || false],
      isMandatory: [isMandatory || false],
      isHidden: [isHidden || false],
      priority: [priority || 0, [Validators.min(1), Validators.max(100)]],
    });
  }

  close() {
    this.router.navigate(['../']);
  }

  save() {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }

    if (this.form.invalid) {
      this.message.error('Error!');
      return;
    }

    const editedMetadata = this.getEdited();

    this.publicationService.putMetadata(editedMetadata);

    this.message.success('Complete save!');
    this.close();
  }

  getEdited(): PublicationMetadata[] {

    const columnsMetadata = this.columnsMetadata
      .map(
        (metadata) => {
          return { ...metadata, ...this.form.get(metadata.fieldCode)?.value };
        },
      );

    console.log('Send', this.columnsMetadata);

    return columnsMetadata;
  }
}
