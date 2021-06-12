import {ActionReducerMap} from "@ngrx/store";
import {AppState} from "./app.state";
import {routerReducer} from "@ngrx/router-store";

export const appReducers: ActionReducerMap<AppState, any> = {
	routerState: routerReducer,
	//authState: undefined, //TODO the security state, cunt
	//headerState: headerReducer, //TODO the header state, bitch
	//footerState: undefined, //TODO the footer state, dickwad
}