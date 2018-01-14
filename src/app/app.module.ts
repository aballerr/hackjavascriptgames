import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SafeHtml } from './safeHtml';
import { AceEditorComponent } from 'ng2-ace-editor';
import { AppComponent } from './app.component';
import { EditorComponent } from './components/editor/editor.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    AceEditorComponent,
    SafeHtml,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'nav',
        component: NavbarComponent,

      },
      {
        path: 'editor',
        component: EditorComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
