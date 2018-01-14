import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SafeHtml } from './safeHtml';
import { AceEditorComponent } from 'ng2-ace-editor';
import { AppComponent } from './app.component';
import { EditorComponent } from './components/editor/editor.component';



@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    AceEditorComponent,
    SafeHtml

  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
