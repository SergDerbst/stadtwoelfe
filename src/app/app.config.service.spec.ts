import {inject, TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {AppConfig, AppConfigService} from "./app.config.service";


describe('app.config.service', () => {
	let httpMock: HttpTestingController;
	let toTest: AppConfigService;
	
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [AppConfigService],
		});
	});
	
	it('should load configuration', inject([AppConfigService, HttpTestingController], (_service, _httpMock) => {
		toTest = _service;
		httpMock = _httpMock;
		
		toTest.loadConfig()
			.then((data) => {
				console.log('drecks puperz', toTest.apiBaseUrl());
				expect(toTest.apiBaseUrl()).toBe('apiBaseUrl');
				expect(toTest.appLanguage()).toBe('fallbackLanguage');
		});
		
		httpMock.expectOne('/assets/app.config.json').flush({
			apiBaseUrl: 'apiBaseUrl',
			fallbackLanguage: 'fallbackLanguage'
		});
	}));
});

