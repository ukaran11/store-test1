import { Action } from '@ngrx/store'
import { Widget } from './../models/widget.model'
import {addCaption, addLegend, addPosition, addSubTitle, addThickness, addTitle, addWidget, removeWidget}  from './../actions/widget.actions';
import { createReducer, on } from '@ngrx/store';
const initialState: Widget = null;

const _widgetReducer = createReducer(
    initialState,
    on(addWidget, (state, action) =>{
        return {
            ...state,
            title: action.title
        }
    }),
    on(addTitle, (state, action) =>{
        return {
            ...state,
            title: action.title
        }
    }),
    on(addSubTitle, (state, action) =>{
        return {
            ...state,
            subtitle: action.subtitle
        }
    }),
    on(addLegend, (state, action) =>{
        return {
            ...state,
            legend: action.legend
        }
    }),
    on(addCaption, (state, action) =>{
        return {
            ...state,
            caption: action.caption
        }
    }),
    on(addThickness, (state, action) =>{
        return {
            ...state,
            thickness: action.thickness
        }
    }),
    on(addPosition, (state, action) =>{
        return {
            ...state,
            position: action.position
        }
    }),
    on(removeWidget, (state) => {
        return {
            ...state ,
            title:'',
            subtitle:'',
            legend:'',
            caption:'',
            thickness:'',
            position:''
            
        }
    })
)
export function widgetReducer(state, action){
    return _widgetReducer(state, action);
}

// export function reducer(state: Widget[] = [initialState], action: WidgetActions.Actions) {
    // switch(action.type) {
    //     case WidgetActions.ADD_WIDGET:
    //         return [...state, action.payload];

    //     case WidgetActions.ADD_TITLE:
    //         return [...state, action.payload];

    //     case WidgetActions.ADD_SUBTITLE:
    //         return [...state, action.payload];
        
    //     case WidgetActions.ADD_LEGEND:
    //         return [...state, action.payload];
        
    //     case WidgetActions.ADD_CAPTION:
    //         return [...state, action.payload];

    //     case WidgetActions.ADD_THICKNESS:
    //         return [...state, action.payload];
        
    //     case WidgetActions.ADD_POSITION:
    //         return [...state, action.payload];

    //     case WidgetActions.REMOVE_WIDGET:
    //         state.splice(action.payload, 1)
    //         return state;
    //     default:
    //         return state;
    // }
// }