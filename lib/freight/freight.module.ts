import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
// import { HttpClient } from 'your module';


import { EventsService } from './events.service';
import { SubscriptionsService } from './subscriptions.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    EventsService,
    SubscriptionsService ]
})
export class FreightModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            Module: FreightModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
