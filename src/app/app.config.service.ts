import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

export interface AppConfig {
	apiBaseUrl: string;
	fallbackLanguage: string
}

@Injectable()
export class AppConfigService {
	private appConfig: AppConfig;
	
	constructor(private http: HttpClient) {}
	
	loadConfig() {
		return this.http.get('/assets/app.config.json')
			.toPromise()
			.then(data => {
				this.appConfig = data as AppConfig;
				return data;
			});
	}
	
	apiBaseUrl() {
		this.ensureConfig();
		return this.appConfig.apiBaseUrl;
	}
	
	appLanguage() {
		this.ensureConfig();
		return navigator.language || this.appConfig.fallbackLanguage;
	}
	
	private ensureConfig() {
		if (!this.appConfig) {
			this.loadConfig().then(data => {
				if (!this.appConfig) {
					throw Error('Key value configuration file could not be loaded, bitch!');
				}
			});
		}
	}
}
