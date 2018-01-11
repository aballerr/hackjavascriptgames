import { Component, OnInit, ViewChild } from '@angular/core';
import { AceEditorDirective } from 'ng2-ace-editor';
import { AceEditorModule } from 'ng2-ace-editor';
import { AceEditorComponent } from 'ng2-ace-editor';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']

})
export class EditorComponent implements OnInit {
  text:string = "";
  options:any = {maxLines: 1000, printMargin: false};
  editor:string = "html";
  javascript: string;
  html: string;
  css: string;
  jsSelected: any= "notSelected";
  htmlSelected: any= "selected";
  cssSelected: any= "notSelected";
  innerHtml: any = "<p>Hello world lad</p>"


  onChange(code) {
    console.log("new code", code);
  }

  update() {
    this.innerHtml = this.html;
  }

  changeEditor(arg){
    this.editor=arg;

    if (arg == "javascript"){
      this.jsSelected = "selected";
      this.htmlSelected = "notSelected";
      this.cssSelected ="notSelected";
    }
    else if (arg == "html") {
      this.jsSelected = "notSelected";
      this.htmlSelected = "selected";
      this.cssSelected ="notSelected";
    }
    else {
      this.jsSelected = "notSelected";
      this.htmlSelected = "notSelected";
      this.cssSelected ="selected";

    }
  }

  constructor() { }

  ngOnInit() {
  }

}
