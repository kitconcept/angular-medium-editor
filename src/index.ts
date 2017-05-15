import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediumEditorComponent } from './medium.editor.component';

export * from './medium.editor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MediumEditorComponent
  ],
  exports: [
    MediumEditorComponent
  ]
})
export class MediumEditorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MediumEditorModule
    };
  }
}
