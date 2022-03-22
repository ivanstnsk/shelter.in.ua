import React from 'react';
import styles from './Typography.module.scss';

export type TypographyVariant = 'h1' | 'h2' | 'body1' | 'body2' | 'body3';
export type TypographyComponent = 'h1' | 'h2' | 'div';
type TypographyTheme = 'dark' | 'light';

interface Props {
  variant: TypographyVariant;
  component: TypographyComponent;
  children: string;
  theme?: TypographyTheme;
}

const createComponent = (component: TypographyComponent) => {
  return component;
}

export const Typography: React.FC<Props> = ({
  variant,
  component,
  children,
  theme = 'light',
}) => {
  const Component = createComponent(component);

  return (
    <Component className={`${styles[variant]} ${styles[theme]}`}>{children}</Component>
  )
}