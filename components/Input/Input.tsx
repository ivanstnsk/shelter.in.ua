import React, { useCallback, useState } from 'react';

import { Typography } from '../Typography';

import styles from './Input.module.scss';

interface Props {
  placeholder?: string
}

export const Input: React.FC<Props> = ({
  placeholder,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const getFocusChangeHandler = useCallback((isFocused) => () => {
    setIsFocused(isFocused);
    console.log(isFocused);
  }, [setIsFocused]);

  const handleChangeText = useCallback((event: any) => {
    setValue(event.target.value);
  }, [setValue]);

  const isEmpty = !value;
  const placeholdeClassNames = [
    styles.placeholder,
    !isFocused && isEmpty ? styles.blured : styles.focused,
  ].join(' ');

  return (
    <div className={styles.container}>
      {placeholder && (
        <Typography variant="body1" component="div" className={placeholdeClassNames}>{placeholder}</Typography>
      )}
      <input
        className={styles.input}
        placeholder=""
        value={value}
        onChange={handleChangeText}
        onFocus={getFocusChangeHandler(true)}
        onBlur={getFocusChangeHandler(false)}
      />
    </div>
  )
}