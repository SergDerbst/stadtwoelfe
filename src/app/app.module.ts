import {APP_INITIALIZER, NgModule} from "@angular/core";
import {AppRoutingModule} from "./app.routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {JwtModule} from "@auth0/angular-jwt";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {StoreModule} from "@ngrx/store";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {environment} from "../environments/environment.prod";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {AppConfigService} from "./app.config.service";
import {AppComponent} from "./app.component";
import {appReducers} from "./_store/app.reducers";

export function httpTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

export function tokenGetter() {
	return localStorage.getItem('stdwlf_acstkn');
}

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		CommonModule,
		FontAwesomeModule,
		HttpClientModule,
		JwtModule.forRoot({
			config: {
				tokenGetter: tokenGetter,
				allowedDomains: ['arsch.morz']
			}
		}),
		StoreModule.forRoot(appReducers),
		StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: httpTranslateLoader,
				deps: [ HttpClient ]
			}
		}),
	],
	providers: [
		AppConfigService,
		{
			provide: APP_INITIALIZER,
			multi: true,
			deps: [ AppConfigService ],
			useFactory: (appConfigService: AppConfigService) => {
				return () => {
					return appConfigService.loadConfig();
				};
			}
		}
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}