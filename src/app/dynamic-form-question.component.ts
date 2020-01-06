import {
  Component, Input, Renderer2, AfterViewInit, OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './question-base';
import { GeneralService } from './general.service';
import { Aif } from './data.model';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent implements OnInit, AfterViewInit {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  aifData: Aif[];
  get isValid() { return this.form.controls[this.question.key].valid; }

  constructor(private renderer: Renderer2,
    private aifService: GeneralService) {
  }

  ngOnInit(): void {
    this.aifService.getAifDtl().subscribe((aif: Aif[]) => {
      this.aifData = aif;
    })

  }

  ngAfterViewInit(): void {
    this.form.get('aif').valueChanges.subscribe((data) => {
      let eventclick = document.getElementById('aif');
      this.renderer.listen(eventclick, 'blur', (event) => {
        this.form.get('aifDesc').patchValue('');
        this.changeAif(data)
      })
    })
  }
  changeAif(data: string) {
    this.aifData.forEach(dataAif => {
      if (dataAif.shortName.toLowerCase() === data.toLowerCase()) {
        this.form.get('aifDesc').patchValue(dataAif.longName);
      }
    })
  }


  // ngAfterViewInit(): void {
  //   this.eventAttach();
  // }
  // eventAttach() {
  //   if (this.question.key === 'emailAddress') {
  //     let eventclick = document.getElementById(this.question.key)
  //     let element='';
  //     let qstn = this.question.key
  //     this.renderer.listen(eventclick, 'blur', (event) => {

  //      this.aifData.forEach((ele)=>{

  //      })
  //       element = 'test@gmail.com'
  //      this.form.patchValue({
  //       'emailAddress1':  element
  //      })
  //     })
  //   }
  // }


}



