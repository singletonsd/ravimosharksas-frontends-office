// tslint:disable: no-implicit-dependencies
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { TranslateService } from '@ngx-translate/core';
import { PreviousRouteService } from '@services/previous-route/previous-route.service';
// import { StorageService } from '@services/storage/storage.service';

@Component({
  selector: 'app-main-not-access',
  templateUrl: './not-access.component.html',
  styleUrls: ['./not-access.component.css']
})
export class MainNotAccessComponent implements OnInit {

  public url: string;

  public levelPage: string;
  public levelUser: string;
  constructor(private readonly route: ActivatedRoute
            // , storage: StorageService
            // , private readonly translate: TranslateService
            , public readonly previousRouteService: PreviousRouteService) {
    // let text = 'user.levels.COMMON';
    // if (storage.getCurrentUser()) {
    //   text = ('user.levels.').concat(storage.getCurrentUser().role);
    //   translate.get(text)
    //   .subscribe(trans => {
    //     this.levelUser = trans;
    //   });
    // }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.url = params['url'];
      if (!this.url) {
        this.url = '/';
      }
      // let level;
      // if (this.url.includes('Add')) {
      //   level = UsersRole.ADMIN;
      // } else if (this.url.includes('Main')) {
      //   level = UsersRole.VIEWER;
      // } else {
      //   level = UsersRole.COMMON;
      // }
      // this.translate.get(('user.levels.').concat(level))
      //   .subscribe(trans => {
      //   this.levelPage = trans;
      // });
    });
  }

}
