import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NotesService } from './notes.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import NotesFixture from './notes.fixture';

export function notesFactory() {
  const service = new NotesService();
  service['notes'] = NotesFixture;
  return service;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {
      provide: NotesService,
      useFactory: notesFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
