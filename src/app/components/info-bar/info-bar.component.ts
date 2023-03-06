import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dp-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent implements OnInit {

  constructor() { }

  public vcfData: string = `
    BEGIN:VCARD
    VERSION:3.0
    N:Diparth Patel
    EMAIL;type=INTERNET;type=WORK;type=pref:pateldiparth309@gmail.com
    TEL;type=IPHONE;type=CELL;type=VOICE;type=pref:+1 (226) 961-6511
    END:VCARD
  `;

  public ngOnInit(): void {
  }

}
