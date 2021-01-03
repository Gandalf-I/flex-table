import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { publicationValuesMock } from '@app/mock/publication.values';
import { Publication } from '@shared/interfaces/publication';
import { PublicationMetadata } from '@shared/interfaces/publication-metadata';
import { publicationMetadataMock } from '@app/mock/publication.metadata';
import { NzTableSortOrder } from 'ng-zorro-antd/table';
import { SortEnum } from '@shared/enums/sort.enum';
import { Field } from '@shared/interfaces/field';

import cloneDeep from 'clone-deep';

interface Filter {
  key: string;
  value: NzTableSortOrder;
}

export type FieldWithMetadata = Field & PublicationMetadata | null;

@Injectable({
  providedIn: 'root',
})
export class PublicationService {

  private _publicationValues$ = new BehaviorSubject<Publication[]>([]);

  get publicationValues(): Publication[] {
    return this._publicationValues$.value;
  }

  get publicationValuesAsync(): Observable<Publication[]> {
    return this._publicationValues$.asObservable();
  }

  set publicationValues(value) {
    localStorage.setItem('publication', JSON.stringify(value));
    this._publicationValues$.next(value);
  }

  publicationColumns$ = new BehaviorSubject<PublicationMetadata[]>([]);

  constructor() {
  }

  initPublications(): boolean {

    if (this.checkPublicationContain()) {
      this.setPublications();
      return true;
    }

    this.setMockPublications();
    return true;
  }

  resetPublications(): void {
    this.setMockPublications();
  }

  sortPublication(filters: Filter[]) {
    let publications = cloneDeep(this.publicationValues);

    for (const [i, filter] of filters.entries()) {
      if (!filter.value) {
        continue;
      }
      const sortType = filter.value === SortEnum.ASC ? 1 : -1;

      publications =
        publications.sort(
          (a: Publication, b: Publication) => sortType * this.columnSort(a.data[i].value, b.data[i].value),
        );
    }

    this.publicationValues = publications;
  }

  columnSort(a: number | string, b: number | string): number {
    if (typeof b === 'number' && typeof a === 'number') {
      return a - b;
    }

    return (a as string).toLocaleLowerCase() > (b as string).toLocaleLowerCase() ? 1 : -1;
  }

  checkPublicationContain(): boolean {
    return !!(localStorage.getItem('publication') && localStorage.getItem('metadata'));
  }

  sortRowTable() {
    const rows = this.publicationColumns$.value
      .sort((a, b) => a.priority - b.priority);

    this.publicationColumns$.next(rows);
  }

  getPublicationFieldsWithMetadata(id: number): FieldWithMetadata[] {
    const fields = this.publicationValues.find(v => v.id === id)?.data;
    if (!fields?.length) {
      return [];
    }

    const column = this.publicationColumns$.value;
    return fields.map((field) => {

      const fieldMetadata = column.find(({ fieldId }) => fieldId === field.fieldId);

      if (!fieldMetadata) {
        return null;
      }

      return {
        ...field,
        ...(fieldMetadata),
      };
    });
  }

  getPublication(id: number): Publication {
    return <Publication> this.publicationValues.find(v => v.id === id);
  }

  putPublication(publication: Publication): void {
    this.publicationValues = this.publicationValues
      .map(v => v.id === publication.id ? publication : v);
  }

  putMetadata(editedMetadata: PublicationMetadata[]) {
    localStorage.setItem('metadata', JSON.stringify(editedMetadata));
    this.publicationColumns$.next(editedMetadata);
  }

  private setPublications(): void {
    this.publicationValues =
      JSON.parse(<string> localStorage.getItem('publication'));

    this.publicationColumns$.next(
      JSON.parse(<string> localStorage.getItem('metadata')),
    );
  }

  private setMockPublications(): void {
    console.log(publicationValuesMock.result);
    this.publicationValues = cloneDeep(publicationValuesMock.result);

    localStorage.setItem('metadata', JSON.stringify(publicationMetadataMock));
    this.publicationColumns$.next(cloneDeep(publicationMetadataMock));
  }
}
