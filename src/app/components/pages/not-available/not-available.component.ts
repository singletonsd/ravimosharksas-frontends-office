// tslint:disable: no-implicit-dependencies
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appRoutesNames } from '@app/app.routes.names';
import { StorageService } from '@app/services/storage/storage.service';
import { NGXLogger } from 'ngx-logger';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-main-not-available',
  templateUrl: './not-available.component.html',
  styleUrls: ['./not-available.component.css']
})
export class MainNotAvailableComponent implements OnInit {

  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  public routes = appRoutesNames;

  constructor(private readonly storage: StorageService
            , private readonly router: Router
            , private readonly logger: NGXLogger) { }

  ngOnInit(): void {
  }

  retry(): void {
    this.loadingSubject.next(true);
    this.storage.load()
    .then(response => {
      this.loadingSubject.next(false);
      if (response) {
        this.router.navigate([this.routes.HOME])
        .catch(() => {});
      }
    }, () => {
      this.logger.error('Cant connect to api.');
    });
  }
}
