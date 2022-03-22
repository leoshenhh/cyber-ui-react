import React, {ReactFragment} from 'react';
import validator, {FormRules} from './validator';
import Input from '../input/input';
import {scopedClassMaker} from '../helper/class-names';
import './form.scss';

const sc = scopedClassMaker('cyber-form');

export interface FormData {
  [propName: string]: any;
}

interface Props {
  formData: FormData,
  fields: Array<{ name: string, label: string, input: { type: string } }>,
  buttons: ReactFragment,
  onSubmit: () => void,
  onChange: (value: FormData) => void,
  errors: any,
  labelWidth?: Number
}

const Form: React.FunctionComponent<Props> = (props) => {
  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    props.onSubmit();
  };
  const onChange = (name: string, value: string) => {
    const newValue = {...props.formData, [name]: value};
    props.onChange(newValue);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className={sc([''])}>
        {
          props.fields.map(field =>
            <div className={sc(['row'])} key={field.name}>
              <div className={sc(['row-label'])} style={{width: `${props.labelWidth}px`}}>{field.label }</div>
              <Input
                type={field.input.type}
                name={field.name}
                value={props.formData[field.name]}
                onChange={(e) => onChange(field.name, e.target.value)}
              />
              <div>{props.errors[field.name]}</div>
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
  labelWidth: 60
}

export default Form;
export {validator};

