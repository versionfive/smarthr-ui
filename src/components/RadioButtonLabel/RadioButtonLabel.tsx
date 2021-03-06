import React, { VFC } from 'react'
import styled, { css } from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'

import { RadioButton, Props as RadioButtonProps } from '../RadioButton'

type Props = RadioButtonProps & {
  label: string
}

export const RadioButtonLabel: VFC<Props> = ({ label, className = '', ...props }) => {
  const theme = useTheme()

  return (
    <Wrapper className={className}>
      <Label className={`${props.disabled ? 'disabled' : ''}`} themes={theme}>
        <RadioButton {...props} />
        <Txt themes={theme}>{label}</Txt>
      </Label>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: inline-block;
`
const Label = styled.label<{ themes: Theme }>`
  ${({ themes }) => {
    const { palette } = themes
    return css`
      display: flex;
      align-items: center;
      color: ${palette.TEXT_BLACK};
      cursor: pointer;

      &.disabled {
        color: ${palette.TEXT_DISABLED};
        cursor: default;
      }
    `
  }}
`
const Txt = styled.span<{ themes: Theme }>`
  ${({ themes }) => {
    const { size, spacingByChar } = themes
    return css`
      margin: 0 0 0 ${spacingByChar(0.5)};
      font-size: ${size.pxToRem(size.font.TALL)};
    `
  }}
`
