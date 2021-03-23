import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputWrap, Chip } from './styles';
import { validEmailFormat } from './helpers';

const EmailField = ({
  autoFocus,
}) => {
  const [textareaMinWidth, setTextareaMinWidth] = useState(0);
  const [textareaValue, setTextareaValue] = useState('');
  const [emails, setEmails] = useState([
    {
      value: 'hola@email.com',
      valid: true,
    },
    {
      value: 'hi@email.com',
      valid: true,
    },
    {
      value: 'bye@email.com',
      valid: true,
    },{
      value: 'foo@email.com',
      valid: true,
    },{
      value: 'erictaylor',
      valid: false,
    }
  ]);

  const addEmail = email => {
    const emailList = [...emails, {
      value: email,
      valid: validEmailFormat(email),
    }];
    setEmails(emailList);
  };

  const removeLastEmail = () => {
    const emailList = [...emails].slice(0, emails.length - 1);
    setEmails(emailList);
  };

  const handleOnKeyDown = e => {
    const { target: { value } } = e;
    console.log(e.key, e.keyCode);
    if (
      e.key === 'Enter' ||
      e.keyCode === 13 ||
      e.key === 'Tab' ||
      e.keyCode === 9
    ) {
      e.preventDefault();
      if (value.length > 0) {
        addEmail(value);
        setTextareaValue('');
      }
    }
  };
  const handleOnChange = e => {
    const { target: { value } } = e;
    setTextareaMinWidth(value.length * 10);
    setTextareaValue(value);
  };

  return (
    <InputWrap textareaMinWidth={textareaMinWidth}>
      {emails.map(email => (
        <Chip error={!email.valid}>
          {email.value}
        </Chip>
      ))}
      <textarea
        rows="1"
        onKeyDown={handleOnKeyDown}
        onChange={handleOnChange}
        autoFocus={autoFocus}
        value={textareaValue}
      />
    </InputWrap>
  );
};

EmailField.propTypes = {
  autoFocus: PropTypes.bool,
};

EmailField.defaultProps = {
  autoFocus: false
};

export default EmailField;