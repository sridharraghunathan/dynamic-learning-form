import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { QuestionBase } from '../question-base';
import { controlOptions, Iplatform, IQuestionaire, Questionaire } from '../data.model';
import { PlatformService } from '../platform.service';

@Component({
  selector: 'app-questionMain',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: any[];
  platformData: any[];

  constructor(private questionaireService: GeneralService,
    private platformService: PlatformService) { }
  ngOnInit() {

    this.platformService.getPlatforms().subscribe((pltf: Iplatform[]) => {
      this.platformData = this.preparePlatformModel(pltf);
    }
    )

    this.questionaireService.getQuestionsData().subscribe(
      (qstn: IQuestionaire[]) => {
        this.questions = this.prepareQuestionaireModel(qstn);
        //   console.log(this.questions) 
      }
    )
  }

  preparePlatformModel(platforms: Iplatform[]): controlOptions[] {

    let values = new Array<controlOptions>();

    for (let platform of platforms) {
      let value = new controlOptions();
      value.key = platform.PhysicalPlatform;
      value.value = platform.LogicalPlatform;
      values.push(value);
    }
    return values;
  }


  prepareQuestionaireModel(qstns: IQuestionaire[]): Questionaire[] {
    console.log(this.platformData)
    let Modifiedquestion = new Array<Questionaire>();

    for (let qstn of qstns) {
      let question = new Questionaire();

      question.key = qstn.key;
      question.label = qstn.label;
      question.controlType = qstn.controlType;

      if (question.key == 'Target') {
        question.options = this.platformData;
      }
      else {
        question.options = qstn.options;
      }
      question.value = qstn.value;
      question.type = qstn.type;
      question.order = qstn.order;
      question.required = false;

      if (qstn.validators) {
        for (let valdata of qstn.validators) {
          if (valdata == 'Required') {
            question.required = true;
          }
        }
      }

    Modifiedquestion.push(question);
    }

    return Modifiedquestion;

  }


}

