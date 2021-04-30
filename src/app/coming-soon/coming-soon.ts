import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var anime: any;

@Component({
  selector: 'dp-coming-soon',
  templateUrl: './coming-soon.html',
  styleUrls: ['./coming-soon.scss']
})
export class ComingSoonComponent implements OnInit, AfterViewInit {

  public title: string;
  public subtitle1: string;
  public subtitle2: string;

  public ngOnInit(): void {
    this.title = "Coming Soon!";
    this.subtitle1 = "Stay tuned, ";
    this.subtitle2 = "Something awesome is";
  }

  public ngAfterViewInit(): void {
    anime.timeline({ loop: false })
      .add({
        targets: '.wb .circle-container',
        scale: [0, 1],
        duration: 1500,
        easing: "easeInOutExpo",
        offset: '-=500'
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

    anime({
      targets: '.wb .circle-dark-dashed',
      rotateZ: 360,
      duration: 8000,
      easing: 'linear',
      loop: true
    });
  }
}
