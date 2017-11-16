import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { IAlert } from '../Models';

@Injectable()
export class AlertService {

  private alertStream = new Subject<IAlert>();
  alerts$ = this.alertStream.asObservable();

  public emitNotification(alert: IAlert) {
    this.alertStream.next(alert);
  }
  
}
