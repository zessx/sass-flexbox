<a href="https://www.npmjs.com/package/sass-flexbox"><img src="https://img.shields.io/npm/dt/sass-flexbox.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/sass-flexbox"><img src="https://img.shields.io/npm/v/sass-flexbox.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/sass-flexbox"><img src="https://img.shields.io/npm/l/sass-flexbox.svg" alt="License"></a>

# SassFlexbox

<p align="center">
    <img src="https://raw.githubusercontent.com/zessx/sass-flexbox/master/sass-flexbox.png" alt="Sass Flexbox logo">
</p>

Manage Flexbox in Sass easily.

## Configuration

Put `sass-flexbox.scss` file in your project, and include it via your Sass manifest:

    @import "helpers/sass-flexbox";
    
## Usage

SassFlexbox comes with a bunch of placeholders and mixins to helps you using Flexbox, without carrying of vendor prefixes. Mixins attempt to use placeholders as soon as possible, to avoid extra compiled code. 

### Display

- `%display-flex`
- `%display-flex-inline`
- **`display-flex()`**
- **`display-flex-inline()`**

### Flex direction

- `%flex-direction-row`
- `%flex-direction-row-reverse`
- `%flex-direction-column`
- `%flex-direction-column-reverse`
- `%flex-direction-inherit`
- **`flex-direction($direction)`** 

### Flex wrap

- `%flex-wrap-nowrap`
- `%flex-wrap-wrap`
- `%flex-wrap-wrap-reverse`
- `%flex-wrap-inherit`
- **`flex-wrap($wrap)`**

### Flex flow

- **`flex-flow($direction, $wrap)`**

### Order

- **`order($order)`**

### Flex grow

- **`flex-grow($grow)`**

### Flex shrink

- **`flex-shrink($shrink)`**

### Flex basis

- **`flex-basis($basis)`**

### Flex

- **`flex($grow, $shrink, $basis)`**

### Justify content

- `%justify-content-flex-start`
- `%justify-content-flex-end`
- `%justify-content-center`
- `%justify-content-space-between`
- `%justify-content-space-around`
- `%justify-content-inherit`
- **`justify-content($justify)`**

### Align items

- `%align-items-flex-start`
- `%align-items-flex-end`
- `%align-items-center`
- `%align-items-baseline`
- `%align-items-stretch`
- `%align-items-inherit`
- **`align-items($align)`**

### Align self

- `%align-self-auto`
- `%align-self-flex-start`
- `%align-self-flex-end`
- `%align-self-center`
- `%align-self-baseline`
- `%align-self-stretch`
- `%align-self-inherit`
- **`align-self($align)`**

### Align content

- `%align-content-flex-start`
- `%align-content-flex-end`
- `%align-content-center`
- `%align-content-space-between`
- `%align-content-space-around`
- `%align-content-stretch`
- `%align-content-inherit`
- **`align-content($align)`**

## Sources

- http://www.w3.org/TR/css3-flexbox/
- https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes
- http://caniuse.com/#feat=flexbox
