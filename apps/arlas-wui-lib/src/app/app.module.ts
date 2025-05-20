import { NgModule } from '@angular/core';
import { BaseCollectionService, CollectionModule } from 'arlas-web-components';
import { ArlasWuiModule } from 'arlas-wui';
import { ArlasCollaborativesearchService, ArlasCollectionService, ArlasConfigService, ArlasStartupService } from 'arlas-wui-toolkit';
import { AppComponent } from './app.component';
import { ArlasMapFrameworkService, AbstractArlasMapService, BasemapService, LegendService } from 'arlas-map';
import { ArlasMaplibreService, MaplibreBasemapService, MaplibreLegendService, ArlasMapService } from 'arlas-maplibre';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ArlasWuiModule,
    CollectionModule.forRoot({
      loader: {
        deps: [
          ArlasCollaborativesearchService,
          ArlasConfigService,
          ArlasStartupService
        ],
        provide: BaseCollectionService,
        useClass: ArlasCollectionService
      }
    })
  ],
  providers: [
    {
      provide: AbstractArlasMapService,
      useClass: ArlasMapService
    },
    ArlasMaplibreService,
    {
      provide: BasemapService,
      useClass: MaplibreBasemapService
    },
    {
      provide: LegendService,
      useClass: MaplibreLegendService
    },
    {
      provide: ArlasMapFrameworkService,
      useClass: ArlasMaplibreService
    },
    ArlasMapService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

