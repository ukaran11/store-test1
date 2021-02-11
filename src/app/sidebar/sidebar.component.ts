import { Component, OnInit } from '@angular/core';


import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Widget } from './../store/models/widget.model'
import {addCaption, addLegend, addPosition, addSubTitle, addThickness, addTitle, removeWidget}  from './../store/actions/widget.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  

  constructor(private store: Store<AppState>) { }
  
  addTitle(title: string): void {
    this.store.dispatch(addTitle({title}));
  }

  addSubTitle(subtitle: string): void {
    this.store.dispatch(addSubTitle({subtitle}));
  }

  addLegend(legend: string): void {
    this.store.dispatch(addLegend({legend}));
  }

  addCaption(caption: string): void {
    this.store.dispatch(addCaption({caption}));
  }

  addThickness(thickness: string): void {
    this.store.dispatch(addThickness({thickness}));
  }

  addPosition(position: string): void {
    this.store.dispatch(addPosition({position}));
  }

  removeWidget(): void {
    this.store.dispatch(removeWidget());
  }
  ngOnInit(): void {
  }

}
