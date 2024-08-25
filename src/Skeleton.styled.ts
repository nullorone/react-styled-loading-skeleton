import styled, { css, keyframes } from 'styled-components';
import { CSSProperties } from 'react';

interface SkeletonStyledProps {
  $width?: number;
  $widthPercentage?: number;
  $height?: number;
  $heightPercentage?: number;
  $rounded?: number;
  $roundedPercentage?: number;
  $isCircle?: boolean;
  $duration?: number;
  $timingFunc?: CSSProperties['animationTimingFunction'];
  $baseColor?: string;
  $highlightColor?: string;
  $gradient?: string;
  $count?: number;
  $withoutAnimation?: boolean;
}

const loading = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

export const Wrapper = styled.div<SkeletonStyledProps>`
  display: inline-flex;
  position: relative;
  width: ${({ $width, $widthPercentage }) =>
    $width
      ? `${$width}px`
      : $widthPercentage
        ? `${$widthPercentage}%`
        : '100%'};
  height: ${({ $height, $heightPercentage }) =>
    $height
      ? `${$height}px`
      : $heightPercentage
        ? `${$heightPercentage}%`
        : '100%'};
  line-height: 1;
  background-color: ${({ $baseColor }) =>
    $baseColor ? $baseColor : '#e9e9e9'};
  user-select: none;
  overflow: hidden;

  ${({ $rounded, $roundedPercentage, $isCircle }) => {
    switch (true) {
      case !!$rounded:
        return css`
          border-radius: ${$rounded}px;
        `;
      case !!$roundedPercentage:
        return css`
          border-radius: ${$roundedPercentage}%;
        `;
      case $isCircle:
        return css`
          border-radius: 50%;
        `;
      default:
        return css``;
    }
  }}

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-repeat: no-repeat;
    transform: translateX(-100%);

    ${({ $baseColor, $highlightColor, $gradient }) => {
      switch (true) {
        case !!$gradient:
          return css`
            background-image: linear-gradient(${$gradient});
          `;
        default:
          return css`
            background-image: linear-gradient(
              90deg,
              ${$baseColor ?? '#e9e9e9'},
              ${$highlightColor ?? '#f9f9f9'},
              ${$baseColor ?? '#e9e9e9'}
            );
          `;
      }
    }}

    ${({ $duration, $timingFunc, $withoutAnimation }) => {
      if (!!$withoutAnimation) {
        return css``;
      }

      return css`
        animation-name: ${loading};
        animation-duration: ${$duration ? `${$duration}ms` : '1500ms'};
        animation-timing-function: ${$timingFunc ? $timingFunc : 'ease-in-out'};
        animation-iteration-count: infinite;
      `;
    }}

    @media (prefers-reduced-motion) {
      display: none;
    }
  }
`;
