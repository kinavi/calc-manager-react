import { AnyAction } from "redux";
import { IReducersObject, Reducer } from "../redux/types";

export function reducerCreator<T>(reducers: IReducersObject<T>, defaultState: T): Reducer<T> {
    return (state: T = defaultState, action: AnyAction) => {
        const identity = (initialState: T) => initialState;

        const reducerImpl = reducers[action.type] || identity;
        return reducerImpl(state, action);
    };
}
