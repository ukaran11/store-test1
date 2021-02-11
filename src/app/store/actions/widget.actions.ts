import { Injectable } from '@angular/core'
import { Action, createAction ,props } from '@ngrx/store'
import { Widget } from './../models/widget.model'



export const ADD_WIDGET       = '[WIDGET] Add'
export const ADD_TITLE       = '[TITLE] Add'
export const ADD_SUBTITLE       = '[SUBTITLE] Add'
export const ADD_LEGEND       = '[LEGEND] Add'
export const ADD_CAPTION       = '[CAPTION] Add'
export const ADD_THICKNESS       = '[THICKNESS] Add'
export const ADD_POSITION       = '[POSITION] Add'
export const REMOVE_WIDGET    = '[WIDGET] Remove'
  // title: string;
  //   subtitle: string;
  //   legend: string;
  //   caption: string;
  //   thickness: string;
  //   position: string;

// export class AddWidget implements Action {
//     readonly type = ADD_WIDGET

//     constructor(public payload: Widget) {}
// }

export const addWidget = createAction(
  '[Widget] AddWidget',
  props<{title:String}>()
);

export const addTitle = createAction(
    '[Widget] AddTitle',
    props<{title:String}>()
);

export const addSubTitle = createAction(
  '[Widget] AddSubTitle',
  props<{subtitle:String}>()
);

export const addLegend = createAction(
  '[Widget] AddLegend',
  props<{legend:String}>()
);

export const addCaption = createAction(
  '[Widget] AddCaption',
  props<{caption:String}>()
);

export const addThickness = createAction(
  '[Widget] AddThickness',
  props<{thickness:String}>()
);

export const addPosition = createAction(
  '[Widget] AddPosition',
  props<{position:String}>()
);

export const removeWidget = createAction(
  '[Widget] removeWidget'
);

