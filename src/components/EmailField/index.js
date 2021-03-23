import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { InputWrap, Chip } from './styles';
import { validEmailFormat } from './helpers';
import { ReactComponent as ErrorCircle } from './svg/error-circle.svg';
import { ReactComponent as Close } from './svg/close.svg';

export const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const EmailField = ({
  autoFocus,
  onListChange,
}) => {
  const [textareaMinWidth, setTextareaMinWidth] = useState(0);
  const [textareaValue, setTextareaValue] = useState('');
  const [emails, setEmails] = useState([]);
  const prevEmails = usePrevious(emails);

  const addEmail = email => {
    const emailList = [...emails, {
      uid: Date.now(),
      value: email,
      valid: validEmailFormat(email),
    }];
    setEmails(emailList);
  };

  const removeEmail = uid => {
    const emailList = emails.filter(email => email.uid !== uid);
    setEmails(emailList);
  };

  const removeLastEmail = () => {
    const emailList = [...emails].slice(0, emails.length - 1);
    setEmails(emailList);
  };

  const handleOnKeyDown = e => {
    const { target: { value } } = e;

    // Add a new email to the list
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
        setTextareaMinWidth(0);
      }
    }

    // Remove last email in the list
    if (e.key === 'Backspace' || e.keyCode === 8) {
      if (value.length <= 0) {
        e.preventDefault();
        removeLastEmail();
      }
    }
  };

  const handleOnChange = e => {
    const { target: { value } } = e;
    setTextareaMinWidth(value.length * 10);
    setTextareaValue(value);
  };

  useEffect(() => {
    if (prevEmails !== emails && typeof onListChange === 'function') {
      onListChange(emails);
    }
  }, [prevEmails, emails, onListChange]);

  return (
    <InputWrap textareaMinWidth={textareaMinWidth}>
      {emails.map(email => (
        <Chip key={`email-${email.uid}`} error={!email.valid}>
          {email.value}
          {!email.valid && (
            <ErrorCircle />
          )}
          {email.valid && (
            <button type="button" onClick={() => removeEmail(email.uid)}><Close /></button>
          )}
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
  onListChange: PropTypes.func,
};

EmailField.defaultProps = {
  autoFocus: false,
  onListChange() {},
};

export default EmailField;