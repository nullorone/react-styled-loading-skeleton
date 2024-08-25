# react-styled-loading-skeleton
Animated loading skeleton on styled-components based for React.

### Description

This package provides a stub component that can be used while the main content of the site is loading. The component can be modified for different types of content: round avatars, composition.

### Features

- Suitable for React.
- Easy to integrate.
- Easy to modify.
- It can be used for any purpose where you need to show the process of loading content blocks.

### Installation

Install the package via npm:

`npm install --save react-styled-loading-skeleton`

### Use

Once installed, import the component and use it in your app:

```
import {  Skeleton} from 'react-styled-loading-skeleton';

// ...

function App() {

// ...

    return (
        { loading
         ? <Skeleton />
         : <div>Your Content</div>
        }
    );
}
```

If you need to change the visual representation of the Skeleton boot component, you can pass props for modification.

| **Prop**                                                                                                                                                                               | **Description**                                                               | **Default**                       |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------|:----------------------------------|
| width?: number                                                                                                                                                                         | Width in pixels                                                               | undefined                         |
| widthPercentage?: number                                                                                                                                                               | Width as a percentage                                                         | 100%                              |
| height?: number                                                                                                                                                                        | Height in pixels                                                              | font size                         |
| heightPercentage?: number                                                                                                                                                              | Height as a percentage                                                        | 100%                              |
| rounded?: number                                                                                                                                                                       | Rounding borders in pixels  (border-radius)                                   | none                              |
| roundedPercentage?: number                                                                                                                                                             | Rounding borders as a percentage                                              | none                              |
| isCircle?: boolean                                                                                                                                                                     | Round to the shape of a circle                                                | false                             |
| duration?: number                                                                                                                                                                      | Animation duration (ms)                                                       | 1500                              |
| timingFunc?: CSSProperties['animationTimingFunction']                                                                                                                                  | Animation type                                                                | ease-in-out                       |
| baseColor?: string                                                                                                                                                                     | Primary background color                                                      | #e9e9e9                           |
| highlightColor?: string                                                                                                                                                                | Highlight color animation                                                     | #f9f9f9                           |
| gradient?: string                                                                                                                                                                      | Background gradient. background-image: linear-gradient(<gradient>)            | 90deg, #e9e9e9, #f9f9f9, #e9e9e9  |
| count?: number                                                                                                                                                                         | Number of skeletons per row                                                   | undefined                         |
| flex?: {   direction?: CSSProperties['flexDirection'];   gap?: CSSProperties['gap'];   justifyContent?: CSSProperties['justifyContent'];   alignItems?: CSSProperties['alignItems']; } | Align skeletons in a row column.  **Must be used in conjunction with count!** | undefined                         |
| withoutAnimation?: boolean                                                                                                                                                             | Disable animation                                                             | false                             |
| style?: CSSProperties                                                                                                                                                                  | Any css properties                                                            | undefined                         |

### License

This project is distributed under the MIT license.
