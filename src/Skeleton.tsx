import { Wrapper } from './Skeleton.styled';
import { CSSProperties } from 'react';

export interface SkeletonProps {
  width?: number;
  widthPercentage?: number;
  height?: number;
  heightPercentage?: number;
  rounded?: number;
  roundedPercentage?: number;
  isCircle?: boolean;
  duration?: number;
  timingFunc?: CSSProperties['animationTimingFunction'];
  baseColor?: string;
  highlightColor?: string;
  gradient?: string;
  count?: number;
  flex?: {
    direction?: CSSProperties['flexDirection'];
    gap?: CSSProperties['gap'];
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
  };
  withoutAnimation?: boolean;
  style?: CSSProperties;
}

export function Skeleton({ count, flex, ...props }: SkeletonProps) {
  if (count) {
    return (
      <div
        style={{
          display: 'inline-flex',
          flexDirection: flex?.direction ?? 'initial',
          justifyContent: flex?.justifyContent ?? 'initial',
          alignItems: flex?.alignItems ?? 'initial',
          gap: flex?.gap ?? 'initial',
        }}
      >
        {Array(count)
          .fill(null)
          .map((_, idx) => (
            <Item key={`skeleton-${idx}`} {...props} />
          ))}
      </div>
    );
  }

  return <Item {...props} />;
}

function Item({
  width,
  widthPercentage,
  roundedPercentage,
  rounded,
  heightPercentage,
  height,
  withoutAnimation,
  duration,
  highlightColor,
  baseColor,
  isCircle,
  gradient,
  timingFunc,
  style,
}: Omit<SkeletonProps, 'count' | 'flex'>) {
  return (
    <Wrapper
      $width={width}
      $widthPercentage={widthPercentage}
      $height={height}
      $heightPercentage={heightPercentage}
      $rounded={rounded}
      $roundedPercentage={roundedPercentage}
      $withoutAnimation={withoutAnimation}
      $highlightColor={highlightColor}
      $baseColor={baseColor}
      $isCircle={isCircle}
      $gradient={gradient}
      $timingFunc={timingFunc}
      $duration={duration}
      style={style}
    >
      &nbsp;
    </Wrapper>
  );
}
