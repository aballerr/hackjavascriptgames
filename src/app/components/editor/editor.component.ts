import { Renderer2, Component, OnInit, ViewChild, Inject } from '@angular/core';
import { AceEditorDirective } from 'ng2-ace-editor';
import { AceEditorModule } from 'ng2-ace-editor';
import { AceEditorComponent } from 'ng2-ace-editor';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']

})
export class EditorComponent implements OnInit {
  text:string = "";
  options:any = {maxLines: 1000, printMargin: false};
  editor:string = "html";
  javascript: string = "/* Javascript File */ "
  html: string = "<!-- HTML File  --> \n <p>Hello world! </p>";
  css: string = "/** CSS file */"
  jsSelected: any= "notSelected";
  htmlSelected: any= "selected";
  cssSelected: any= "notSelected";
  innerHtml: any = "";



  updateJavaScript(){
    var script_elo = window.document.createElement("script");


    try {
      script_elo.innerHTML = this.javascript;
        window.document.body.appendChild(script_elo);
    }
    catch(err){
        console.log("an error has occured");
    }

  }

  updateHTML() {
    this.innerHtml = this.html;
  }



  changeEditor(arg){
    this.editor=arg;
    console.log(this.javascript);

    this.updateHTML();
    this.updateJavaScript();

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



  ngOnInit() {

  }

}
