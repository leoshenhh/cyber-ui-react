import {FormData} from './from';

interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
}

export type FormRules = Array<FormRule>

const isempty = (value: any): Boolean => {
  if (value === undefined || value === null || value === '') {
    return true;
  }
  return false;

};

const validator = (formData: FormData, rules: FormRules) => {
  const errors: any = {};
  const addError = (key: string, message: string) => {
    if (errors[key] === undefined){
      errors[key] = []
    }
    errors[key].push(message);
  }
  rules.map(rule => {
    const value = formData[rule.key];
    if (rule.required && isempty(value)) {
      addError(rule.key, '必填');
    }
    if(rule.minLength){
      if(value.length < rule.minLength){
        addError(rule.key,'太短')
      }
    }
    if(rule.maxLength){
      if(value.length > rule.maxLength){
        addError(rule.key,'太长')
      }
    }
    if(rule.pattern){
      if(!rule.pattern.test(value)){
        addError(rule.key, '格式错误')
      }
    }
  });
  return errors;
};

export default validator;
