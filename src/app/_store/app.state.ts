import {RouterReducerState} from "@ngrx/router-store";

export interface AppState {
	readonly routerState?: RouterReducerState;
	//readonly authState: AuthState;
	//readonly headerState: HeaderState;
	//readonly footerState: FooterState;
}

export const initialAppState = {
	routerState: undefined,
	authState: undefined,
	headerState: undefined,
	footerState: undefined,
}