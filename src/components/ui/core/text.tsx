import React from 'react';
import {styled} from 'nativewind';
import {Text as NNText, TextProps} from 'react-native';

interface ITextProps extends TextProps {
  variant?: string;
  className?: string;
}

export const SText = styled(NNText);

export const textVariants = {
  defaults: 'text-base text-black',
  h1: 'text-[28px]',
  xl: 'text-[20px]',
  sm: 'text-[14px]',
  md: '',
  lg: 'text-[18px]',
  xs: 'text-[12px]',
  error: '',
};

export const Text = ({
  children,
  variant = 'sm',
  style,
  className,
  ...props
}: ITextProps) => {
  return (
    <SText
      className={`${textVariants.defaults} ${textVariants[variant]} ${className}`}
      {...props}>
      {children}
    </SText>
  );
};
