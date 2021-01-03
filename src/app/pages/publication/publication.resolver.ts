import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PublicationService } from '@core/services/publication.service';

@Injectable({ providedIn: 'root' })
export class PublicationResolver implements Resolve<any> {
  constructor(private publication: PublicationService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<any>|Promise<any>|any {
    return this.publication.initPublications();
  }
}
