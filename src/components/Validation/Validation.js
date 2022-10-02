import { useCallback, useState } from 'react';
import validator from 'validator';

import { regexWord, regexNumber } from '../../utils/constants';

export function Validation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChangeInput = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    setIsValid(evt.target.closest('form').checkValidity());

    if (name === 'name' || name === 'surname') {
      if (value === '') {
        setErrors({ ...errors, [name]: 'Вы пропустили это поле.' });
      } else if (!regexWord.test(value)) {
        setErrors({
          ...errors,
          [name]: 'Поле может содержать только латиницу, кириллицу, пробел или дефис.',
        });
        setIsValid(false);
      } else {
        setErrors({ ...errors, [name]: evt.target.validationMessage });
      }
    }

    if (name === 'phone') {
      if (value === '') {
        setErrors({ ...errors, [name]: 'Вы пропустили это поле.' });
      } else if (!regexNumber.test(value)) {
        setErrors({
          ...errors,
          [name]: 'Поле может содержать только цифры.',
        });
        setIsValid(false);
      } else {
        setErrors({ ...errors, [name]: evt.target.validationMessage });
      }
    }

    if (name === 'location') {
      if (value === '') {
        setErrors({ ...errors, [name]: 'Вы пропустили это поле.' });
      } else {
        setErrors({ ...errors, [name]: evt.target.validationMessage });
      }
    }

    if (name === 'email') {
      if (value === '') {
        setErrors({ ...errors, [name]: 'Вы пропустили это поле.' });
      } else if (!validator.isEmail(value)) {
        setErrors({ ...errors, [name]: 'Некорректный E-Mail.' });
      } else {
        setErrors({ ...errors, [name]: evt.target.validationMessage });
      }
    }
  };

  const resetForm = useCallback(() => {
    setValues({});
    setErrors({});
    setIsValid(false);
  }, [setValues, setErrors, setIsValid]);

  return { errors, isValid, handleChangeInput, resetForm };
}
