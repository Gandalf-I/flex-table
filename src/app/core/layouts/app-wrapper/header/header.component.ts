import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { PublicationService } from '@core/services/publication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService, private publication: PublicationService) { }

  ngOnInit(): void {
  }

  public onLogout() {
    this.auth.logout();
  }

  public onReset() {
    this.publication.resetPublications();
  }
}
