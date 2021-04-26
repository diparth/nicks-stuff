import { AfterViewInit, Component } from '@angular/core';

declare var anime: any;

@Component({
  selector: 'dp-root',
  templateUrl: './base.html',
  styleUrls: ['./base.scss']
})

export class BaseComponent implements AfterViewInit {

  public ngAfterViewInit(): void {
    anime.timeline({ loop: false })
      .add({
        targets: '.wb .circle-container',
        scale: [0, 1],
        duration: 1500,
        easing: "easeInOutExpo",
        offset: '-=1000'
      }).add({
        targets: '.wb .circle-dark',
        scale: [0, 1],
        duration: 1000,
        easing: "easeOutExpo",
        offset: '-=600'
      }).add({
        targets: '.wb .letters-left',
        scale: [0, 1],
        duration: 1000,
        offset: '-=550'
      }).add({
        targets: '.wb .bang',
        scale: [0, 1],
        duration: 1000,
        offset: '-=1000'
      });
  }
}
