export interface Iplatform
{
        platformIdentfier: number;
        fullName:string;
        PhysicalPlatform:string;
        LogicalPlatform : string;

}

export class controlOptions
{
    key: string;
    value :string;
    checked:string;
}

export interface IQuestionaire
{
    key: string;
    controlType:string;
    type:string;
    label : string;
    validators : string[];  
    options: controlOptions[];
    order: number;
    value:string;
  }


  export class Questionaire
{
    key: string
    controlType:string
    type:string
    label : string
    required : boolean
    options: controlOptions[];
    validators : string[];
    order: number;
    value:string;
  }

  export interface Aif
{
    shortName: string;
    longName:string;
}