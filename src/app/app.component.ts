import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataShareService } from './services/data-share.service';
import { Utils } from './helpers/utils';

@Component({
  selector: 'dp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  public showToast: boolean = false;

  private subscriptions: Subscription[] = [];

  constructor(private dataShareService: DataShareService) { }

  public ngOnInit(): void {
    this.subscriptions.push(this.dataShareService.showToast.subscribe((shouldShowToast: boolean) => {
      this.showToast = shouldShowToast;

      setTimeout(() => {
        this.showToast = false;
      }, 1000);
    }));
  }

  public ngOnDestroy(): void {
    Utils.UnsubscribeAll(this.subscriptions);
  }
}
