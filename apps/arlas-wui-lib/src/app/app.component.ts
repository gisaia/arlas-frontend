import { Component, inject, viewChild } from '@angular/core';
import { ArlasWuiComponent, ResultlistService } from 'arlas-wui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent<L, S, M> {
  public arlasWui = viewChild<ArlasWuiComponent<L, S, M>>('arlaswui');

  private readonly resultlistService = inject(ResultlistService<L, S, M>);

  public constructor() {
    this.resultlistService.actionOnList.subscribe(e => this.actionEvent(e));
  }

  /**
   * Execute an action based on an event triggered from the ResultList
   * @param event ResultList event
   */
  public actionEvent(event: { origin: string; event: string; data?: any; }) {}
}
