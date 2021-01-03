import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FieldWithMetadata, PublicationService } from '@core/services/publication.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Publication } from '@shared/interfaces/publication';
import moment from 'moment';

@Component({
  selector: 'app-publication-edit',
  templateUrl: './publication-edit.component.html',
  styleUrls: ['./publication-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicationEditComponent implements OnInit {
  form: FormGroup;
  fields: FieldWithMetadata[] = [];

  publication: Publication;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private publicationService: PublicationService,
              private message: NzMessageService,
  ) {
    this.form = this.fb.group({});

    const { id } = this.route.snapshot.params;
    this.publication = this.publicationService.getPublication(+id);
    this.fields = this.publicationService.getPublicationFieldsWithMetadata(+id);
  }

  ngOnInit(): void {
    if (!this.fields?.length) {
      this.close();
      return;
    }
    this.initForm();
  }

  initForm(): void {
    for (const field of this.fields) {
      if (!field) {
        continue;
      }

      this.form.addControl(
        field.fieldId.toString(),
        this.fb.control(
          { value: field?.value || '', disabled: field.isReadOnly },
          this.getValidators(field),
        ),
      );
    }
  }

  getValidators(field: FieldWithMetadata) {
    const validators = [];

    if (field?.isMandatory) {
      validators.push(Validators.required);
    }

    return validators;
  }

  save() {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }

    if (this.form.invalid) {
      this.message.error('Please fill in all required fields');
      return;
    }

    const editedPublication = this.getEdited();

    this.publicationService.putPublication(editedPublication);

    this.message.success('Complete save!');
    this.close();
  }

  getEdited(): Publication {
    this.publication.data
      .forEach(
        (field) => {
          const value = this.form.controls[field.fieldId].value;

          if (value instanceof Date && !isNaN(value.valueOf())) {
            field.value = moment(value).toISOString();
          } else  {
            field.value = value;
          }
        },
      );

    console.log('Send', this.publication);

    return this.publication;
  }

  close() {
    this.router.navigate(['../']);
  }
}
