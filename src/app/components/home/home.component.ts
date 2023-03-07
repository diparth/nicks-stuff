import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public hello: string = `\u{1F44B}`;
  public skill: string = `\u{1F4BB}`; // U+1F9D1 U+200D U+1F4BB

  constructor() { }

  ngOnInit(): void {
  }
}
