import {NgModule} from '@angular/core';

import {
  AccordionModule,
  AlertModule,
  BsDatepickerModule,
  ButtonsModule,
  CollapseModule,
  ModalModule,
  PopoverModule,
  ProgressbarModule,
  RatingModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
  TypeaheadModule
} from 'ngx-bootstrap';

import {SortableModule} from 'src/app/component-library/sortable/sortable.module';

@NgModule({
  imports: [AccordionModule.forRoot(), AlertModule.forRoot(), BsDatepickerModule.forRoot(), ButtonsModule.forRoot(),
    CollapseModule.forRoot(), ModalModule.forRoot(), PopoverModule.forRoot(), ProgressbarModule.forRoot(), RatingModule.forRoot(),
    SortableModule.forRoot(), TabsModule.forRoot(), TimepickerModule.forRoot(), TooltipModule.forRoot(), TypeaheadModule.forRoot()],
  exports: [AccordionModule, AlertModule, BsDatepickerModule, ButtonsModule, CollapseModule, ModalModule, PopoverModule, ProgressbarModule,
    RatingModule, SortableModule, TabsModule, TimepickerModule, TooltipModule, TypeaheadModule]
})
export class AppNgxBootstrapModule {

}
