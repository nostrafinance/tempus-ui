import { FC, memo, useCallback, useState, KeyboardEvent, ChangeEvent, ReactNode } from 'react';
import jsonp from 'jsonp';
import ButtonWrapper from '../ButtonWrapper';

import './EmailSubscription.scss';

export interface EmailSubscriptionProps {
  mailchimpBaseUrl: string;
  mailchimpU: string;
  mailchimpId: string;
  className?: string;
  title?: string | ReactNode;
  button?: string | ReactNode;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (str: string) => void;
  onSuccess?: (str: string) => void;
  onError?: (errorMsg: string) => void;
}

const EmailSubscription: FC<EmailSubscriptionProps> = props => {
  const {
    mailchimpBaseUrl,
    mailchimpU,
    mailchimpId,
    className = '',
    title,
    button = 'Subscribe',
    placeholder,
    disabled,
    onChange,
    onSuccess,
    onError,
  } = props;

  const [email, setEmail] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>();
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleCall = useCallback(
    (error: Error | null, data: { result: 'success' | 'error'; msg: string }) => {
      if (error) {
        const msg = error.message;
        setErrorMsg(msg);
        onError?.(msg);
        return;
      }

      if (data.result === 'error') {
        const msg = data.msg.replace(/^\d - /, '');
        setErrorMsg(msg);
        onError?.(msg);
        return;
      }

      onSuccess?.(email);
    },
    [email, onSuccess, onError],
  );

  const handleClick = useCallback(() => {
    if (buttonDisabled) {
      return;
    }

    setButtonDisabled(true);

    const query = `EMAIL=${email}`;

    jsonp(`${mailchimpBaseUrl}?u=${mailchimpU}&id=${mailchimpId}&${query}`, { param: 'c' }, handleCall);
  }, [mailchimpBaseUrl, mailchimpU, mailchimpId, email, buttonDisabled]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        const { value } = event.currentTarget;
        setEmail(value);
        setButtonDisabled(!value);
        setErrorMsg(undefined);
        onChange?.(value);
      }
    },
    [disabled, onChange],
  );

  const handleKeyup = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        handleClick();
      }
    },
    [handleClick],
  );

  const handleFocus = useCallback(() => setIsFocus(true), []);
  const handleBlur = useCallback(() => setIsFocus(false), []);

  return (
    <div className={`common-ui__email-subscription ${className}`}>
      {title}
      <div
        className={`common-ui__email-subscription__email ${
          isFocus ? 'common-ui__email-subscription__email__focus' : ''
        } ${errorMsg ? 'common-ui__email-subscription__email__error' : ''}`}
      >
        <label htmlFor="MERGE0">
          <input
            type="email"
            name="email"
            id="MERGE0"
            value={email}
            onChange={handleChange}
            onKeyUp={handleKeyup}
            placeholder={placeholder}
            disabled={disabled}
            autoCapitalize="none"
            autoCorrect="off"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>
      </div>
      <div className="common-ui__email-subscription__button">
        <ButtonWrapper onClick={handleClick} disabled={buttonDisabled || disabled}>
          {button}
        </ButtonWrapper>
      </div>
      <div
        style={{ position: 'absolute', left: '-5000px' }}
        aria-hidden="true"
        aria-label="Please leave the following three fields empty"
      >
        <label htmlFor="b_name">Name: </label>
        <input
          type="text"
          name="b_name"
          tabIndex={-1}
          value=""
          onChange={() => null}
          placeholder="Freddie"
          id="b_name"
        />

        <label htmlFor="b_email">Email: </label>
        <input
          type="email"
          name="b_email"
          tabIndex={-1}
          value=""
          onChange={() => null}
          placeholder="youremail@gmail.com"
          id="b_email"
        />

        <label htmlFor="b_comment">Comment: </label>
        <textarea
          name="b_comment"
          tabIndex={-1}
          placeholder="Please comment"
          onChange={() => null}
          id="b_comment"
        ></textarea>
      </div>
    </div>
  );
};

export default memo(EmailSubscription);
