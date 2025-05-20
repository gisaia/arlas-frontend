import { Component, ViewChild } from '@angular/core';
import { ArlasWuiComponent } from 'arlas-wui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent<L, S, M> {

  @ViewChild('arlaswui', { static: false }) public arlasWui: ArlasWuiComponent<L, S, M>;

  public constructor() {}

  public actionEvent(event: any) {}

  public actionEventPopup(event: any) {}
}
