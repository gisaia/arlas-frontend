import { Component, ViewChild } from '@angular/core';
import { ArlasWuiComponent, ResultlistService } from 'arlas-wui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent<L, S, M> {

  @ViewChild('arlaswui', { static: false }) public arlasWui: ArlasWuiComponent<L, S, M>;

  public constructor(
    private readonly resultlistService: ResultlistService<L, S, M>
  ) {
    this.resultlistService.actionOnList.subscribe(e => this.actionEvent(e));
  }

  public actionEvent(event: { origin: string; event: string; data?: any; }) {}

  public actionEventPopup(event: any) {}
}
