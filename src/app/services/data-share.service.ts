import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  public showToast: Subject<any> = new Subject();

  constructor() { }
}
