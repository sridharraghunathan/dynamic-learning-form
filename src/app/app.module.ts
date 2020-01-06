import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';
import { InMemoryWebApiModule}          from 'angular-in-memory-web-api'
import { AppComponent }                 from './app.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { QuestionService } from './question.service';
import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from './question/question.component';

@NgModule({
  imports: [ 
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(QuestionService)
    
   ],
  declarations: [ 
    AppComponent, 
    DynamicFormComponent, 
    DynamicFormQuestionComponent,
     QuestionComponent
     ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
  constructor() {
  }
}
