import { Component } from "@angular/core";
import { AlertService } from "../../services/alert-service";
import { IAlert } from "../../Models";

@Component({
    selector: "alerts",
    template: `
        <div class="alert-container">
            <div *ngFor="let alert of alerts; let i = index;" 
                class="alert"
                [ngStyle]="{'background-color': alert.color}" 
                (click)="remove(i)"
            > {{alert.message}}
            </div>
        </div>
    `,
    styleUrls: ["alerts.scss"]
})
export class AlertsComponent {
    alerts: IAlert[] = [];

    constructor( private _alertService: AlertService ) {
        this._alertService.alerts$.subscribe(
            (alert: IAlert) => {
                const index = this.alerts.push(alert);
                if ( alert.color == null ) {
                    switch( alert.status ) {
                        case 200:
                            alert.color = 'rgba(56, 140, 74, 0.8)';
                            break;
                        case 401:
                            alert.color = 'rgba(135, 140, 56, 0.8)';
                            break;
                        case 403:
                        case 404:
                        case 500: 
                            alert.color = 'rgba(140, 56, 56, 0.8)';
                            break;
                        case 501:
                            alert.color = 'rgba(56, 121, 140, 0.8)';
                            break;
                        default: 
                            alert.color = 'rgba(255, 255, 255, 0.8)';
                    }
                }
                if ( alert.auto_dismiss ) {
                    setTimeout(() => {
                        this.alerts.splice(this.alerts.length - (index + 1), 1);
                    }, 5000);
                }
            }
        );
    }
    
    remove(i) {
        this.alerts.splice(i, 1);
    }
}
