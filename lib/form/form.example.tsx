import React, {Fragment, useState} from 'react';
import Form ,{FormData,validator} from './form';
import Button from '../button/button';

export default () => {
  const [formData,setFormData] = useState<FormData>({
    username: '',
    password: ''
  });
  const [fields] = useState([
    {name: 'username', label: 'username', input: {type: 'text'}},
    {name: 'password', label: 'password', input: {type: 'password'}}
  ]);
  const [errors,setErrors] = useState({})
  const formRules = [
    {key: 'username', required: true,maxLength: 10,minLength: 2,pattern: /^[a-z]+$/},
    {key: 'password', required: true,maxLength: 10,minLength: 2,pattern: /^[a-z]+$/},
  ]
  const onSubmit = () => {
    const errors = validator(formData,formRules)
    setErrors(errors)
  };

  return (
    <div>
      <Form
        labelWidth={100}
        formData={formData}
        fields={fields}
        errors={errors}
        onSubmit={onSubmit}
        onChange={(value)=>setFormData(value)}
        buttons={
          <Fragment>
            <Button type="submit">submit</Button>
            <Button>cancel</Button>
          </Fragment>
        }
      />
    </div>
  );
}
