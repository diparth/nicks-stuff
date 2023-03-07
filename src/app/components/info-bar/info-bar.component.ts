import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/services/data-share.service';

@Component({
  selector: 'dp-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent implements OnInit {
  public vcfData: string;

  constructor(private dataShareService: DataShareService) { }

  public ngOnInit(): void {
  }

  public downloadVCard(): void {
    this.vcardData();

    const a = document.createElement('a');
    const file = new Blob([this.vcfData], { type: 'text/vcard' });

    a.href = URL.createObjectURL(file);
    a.download = 'diparth_patel.vcf';
    a.click();

    URL.revokeObjectURL(a.href);
  }

  private vcardData(): void {
    this.vcfData = `BEGIN:VCARD
    ${'VERSION:3.0'}
    ${'N:'}
    ${'FN:Diparth Patel'}
    ${'TEL;TYPE=MOBILE,VOICE:+12269616511'}
    ${'EMAIL;TYPE=email,PREF:pateldiparth309@gmail.com'}
    REV:${new Date().toISOString()}
    END:VCARD`.replace(/^\s\s\s\s/gm, ``);
  }

  public copyText(text: string): void {
    navigator.clipboard.writeText(text);
    this.dataShareService.showToast.next(true);
  }
}
