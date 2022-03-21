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
  errors: any
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
      <table className={sc([''])}>
        {
          props.fields.map(field =>
            <tr className={sc(['row'])} key={field.name}>
              <td className={sc(['label'])}>{field.label}</td>
              <td>
                <Input
                  type={field.input.type}
                  name={field.name}
                  value={props.formData[field.name]}
                  onChange={(e) => onChange(field.name, e.target.value)}
                />
              </td>
              <div>{props.errors[field.name]}</div>
            </tr>
          )
        }
      </table>
      <div>
        {props.buttons}
      </div>
    </form>

  );
};

export default Form;
export {validator};

