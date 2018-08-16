import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ComponentModel} from '../component-model/component.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  gridLayoutCollapse: boolean;
  itemObjectsLeft: ComponentModel[];
  itemObjectsRight: ComponentModel[];

  constructor() {
  }

  ngOnInit() {
    this.itemObjectsLeft = [{id: 1, renderType: 'component1'}, {id: 2, renderType: 'component2'}, {id: 3, renderType: 'component3'}];
    this.itemObjectsRight = [];
  }

}
