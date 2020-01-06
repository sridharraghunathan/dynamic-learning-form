export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  options: any;
  type:string;
  constructor(options: 
    {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      options?:any,
      type?:string
    } = {}) {
    this.value = options.value ;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required|| false;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.options = options['options'] || '';
    this.type = options.type || '';
  }
}
