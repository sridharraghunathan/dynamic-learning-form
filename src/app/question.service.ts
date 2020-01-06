import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  'providedIn': 'root'
})
export class QuestionService implements InMemoryDbService {
  constructor() {

  }
  createDb() {

    let aifDtl = [
      {
        shortName: 'PVY',
        longName: 'Automated Privacy Report'
      },
      {
        shortName: 'ise',
        longName: 'Security Engineering Report'
      }
    ]

    let platforms = [
      {
        platformIdentfier: 1,
        fullName: 'Teradata RCHTERA',
        PhysicalPlatform: 'VA22',
        LogicalPlatform: 'ODP'
      },
      {
        platformIdentfier: 2,
        fullName: 'Teradata PROD',
        PhysicalPlatform: 'TX22',
        LogicalPlatform: 'ADP'
      },
      {
        platformIdentfier: 3,
        fullName: 'Teradata PROD',
        PhysicalPlatform: 'TX23',
        LogicalPlatform: 'UAT'
      }
    ]


    let questions = [

      {
        key: 'taass',
        label: 'Have you Enageged before with this form',
        validators: [''],
        controlType: 'radiobutton',
        type: 'radio',
        options: [
          { key: 'yes', value: 'yes' },
          { key: 'no', value: 'no' }
        ],
        order: 1
      },

      
      {
        key: 'taassform',
        label: 'Have you Enageged creating the template',
        validators: [''],
        controlType: 'radiobutton',
        type: 'radio',
        options: [
          { key: 'yes', value: 'yes' },
          { key: 'no', value: 'no' }
        ],
        order: 2
      },

      {
        key: 'firstName',
        label: 'First name',
        value: '',
        validators: ['Required'],
        order: 3,
        controlType: 'textbox',
        type: 'text'

      },

      {
        key: 'aif',
        label: 'AifInfo', 
        validators: [''],
        controlType: 'textbox',
        order: 4
      },

      {
        key: 'brave',
        label: 'Bravery Rating',
        validators: [''],
        controlType: 'dropdown',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 14
      },

      {
        key: 'angular',
        label: 'Have you passed Angular course',
        validators: [''],
        controlType: 'radiobutton',
        type: 'radio',
        options: [
          { key: 'yes', value: 'yes' },
          { key: 'no', value: 'no' }
        ],
        order: 6
      },

      {
        key: 'brave2',
        label: 'Bravery Rating',
        validators: [''],
        controlType: 'dropdown',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 7
      },
      {
        key: 'brave3',
        label: 'Bravery Rating',
        validators: [''],
        controlType: 'dropdown',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 8
      },
      {
        key: 'brave4',
        label: 'Bravery Rating',
        validators: [''],
        controlType: 'dropdown',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 9
      },
      {
        key: 'brave5',
        label: 'Bravery Rating',
        validators: [''],
        controlType: 'dropdown',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 10
      },
      {
        key: 'brave6',
        label: 'Bravery Rating',
        validators: [''],
        controlType: 'dropdown',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 11
      },
      {
        key: 'brave7',
        label: 'Bravery Rating',
        validators: [''],
        controlType: 'dropdown',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 12
      },
      {
        key: 'Target',
        controlType: 'checkbox',
        validators: [''],
        type: 'checkbox',
        label: 'Target values',
        options: [],
        order: 13
      },

      {
        key: 'firstName1',
        label: 'First name',
        validators: [''],
        controlType: 'textbox',
        value: '',

        order: 12
      },

      {
        key: 'aifDesc',
        validators: [''],
        label: 'aifDescription',
        controlType: 'textarea',
        type: '',
        order: 5
      },

    ];

    questions = questions.sort((a, b) => a.order - b.order);
    return { questions, platforms, aifDtl };
  }
}
