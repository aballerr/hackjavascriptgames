import { Renderer2, Component, OnInit, ViewChild, Inject } from '@angular/core';
import { AceEditorDirective } from 'ng2-ace-editor';
import { AceEditorModule } from 'ng2-ace-editor';
import { AceEditorComponent } from 'ng2-ace-editor';
import { DOCUMENT } from '@angular/platform-browser';
import * as parseCss from 'css-parse';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']

})
export class EditorComponent implements OnInit {
  text:string = "";
  options:any = {maxLines: 1000, printMargin: false};
  editor:string = "html";
  javascript: string = "/* Javascript File */ \n"
  html: string = "<!-- HTML File  --> \n <p>Hello world! </p>";
  css: string = `/** CSS file */

p {
    color: white;
}

div {
    background-color: yellow;
}


.random {
    margin-left: 20px;
    margin-top: 10px;
    padding: 5px;
}`;
  jsSelected: any= "notSelected";
  htmlSelected: any= "selected";
  cssSelected: any= "notSelected";
  innerHtml: any = "";


  constructor() {

  }



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
    this.innerHtml = this.updateCSS() + this.html;

  }


  //parsed the css and then adds it to the html via style tag
  updateCSS() {
    var i, j, property, value,  style;
    var parsed = parseCss(this.css);
    var classToAdd = "<style type='text/css'> \n";
    var container = ".content-container ";
    var rules = parsed.stylesheet.rules;

    for(i=0; i < rules.length; i++){
      if (rules[i].type == "rule") {
          var selectStyle = rules[i];

          classToAdd += "\t" + container+ selectStyle.selectors[0] + " { \n";
          for(j=0; j < selectStyle.declarations.length; j++){
            style = selectStyle.declarations[j];
            property = "\t\t"+style.property;
            value = ""+style.value;
            classToAdd += property+":"+value+"; \n"
          }
        classToAdd += "\t}\n";
      }
    }
    classToAdd += "</style>"

    return classToAdd;
  }


  changeEditor(arg){
    this.editor=arg;


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
