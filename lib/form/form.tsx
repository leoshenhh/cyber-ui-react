import React, {ReactFragment} from 'react';
import validator, {Errors, FormRules} from './validator';
import Input from '../input/input';
import {scopedClassMaker} from '../helper/class-names';
import './form.scss';

const sc = scopedClassMaker('cyber-form');

export interface FormData {
  [propName: string]: any;
}

interface Field {
  name: string, label: string, input: { type: string }
}

interface Props {
  formData: FormData,
  fields: Array<Field>,
  buttons: ReactFragment,
  onSubmit: () => void,
  onChange: (value: FormData) => void,
  errors: Errors,
  labelWidth?: Number;
  errorModel?: 'single' | 'all'
}

const Form: React.FunctionComponent<Props> = (props) => {
  console.log(props.errors);
  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    props.onSubmit();
  };
  const onChange = (name: string, value: string) => {
    const newValue = {...props.formData, [name]: value};
    props.onChange(newValue);
  };
  const showError = (field:Field) => {
    if (props.errors && props.errors[field.name] &&  props.errors[field.name].length > 0) {
      if (props.errorModel === 'single') {
        return props.errors[field.name][0];
      } else {
        return props.errors[field.name].join(',');
      }
    }

  };
  return (
    <form onSubmit={onSubmit}>
      <div className={sc([''])}>
        {
          props.fields.map(field =>
            <div className={sc(['row'])} key={field.name}>
              <div className={sc(['row-label'])} style={{width: `${props.labelWidth}px`}}>{field.label}</div>
              <Input
                type={field.input.type}
                name={field.name}
                value={props.formData[field.name]}
                onChange={(e) => onChange(field.name, e.target.value)}
              />
              <div style={{marginLeft: `${props.labelWidth}px`}} className={sc(['errors'])}>{showError(field)}</div>
            </div>
          )
        }
      </div>
      <div style={{marginLeft: `${props.labelWidth}px`}}>
        {props.buttons}
      </div>
    </form>

  );
};

Form.defaultProps = {
  labelWidth: 60,
  errorModel: 'single'
};

export default Form;
export {validator};

