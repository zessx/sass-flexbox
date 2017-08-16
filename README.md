<a href="https://www.npmjs.com/package/sass-flexbox"><img src="https://img.shields.io/npm/dt/sass-flexbox.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/sass-flexbox"><img src="https://img.shields.io/npm/v/sass-flexbox.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/sass-flexbox"><img src="https://img.shields.io/npm/l/sass-flexbox.svg" alt="License"></a>

# SassFlexbox

<p align="center">
  <img src="https://raw.githubusercontent.com/zessx/sass-flexbox/master/sass-flexbox.png" alt="Sass Flexbox logo">
</p>

Manage Flexbox in Sass easily.

## Configuration

```bash
npm install sass-flexbox --save 

# or 

bower install zessx-sass-flexbox
```

```sass
@import 'whatever/path/to/modules/sass-flexbox'
```

    
## Usage

SassFlexbox comes with a bunch of placeholders and mixins to help you use Flexbox without worrying about vendor prefixes. Whenever possible, extend placeholders are provided to allow you to not create so much duplicated code. Since they don't always work though (sass doesn't allow `@extend` in `@media` queries), there are also mixins available for all the shorthands.

Since some flexbox values are set with numbers or other measurements, there aren't useful predefined values for them, so there aren't any extend placeholders defined.

### Display

- **`@mixin display-flex`**
- **`@mixin display-inline-flex`**
- `%display-flex`
- `%display-inline-flex`

### Flex direction

- **`@mixin flex-direction($direction: row)`**
- **`@mixin flex-direction-row`**
- **`@mixin flex-direction-row-reverse`**
- **`@mixin flex-direction-column`**
- **`@mixin flex-direction-column-reverse`**
- **`@mixin flex-direction-inherit`**
- `%flex-direction-row`
- `%flex-direction-row-reverse`
- `%flex-direction-column`
- `%flex-direction-column-reverse`
- `%flex-direction-inherit`


### Flex wrap

- **`@mixin flex-wrap($wrap: nowrap)`**
- **`@mixin flex-wrap-nowrap`**
- **`@mixin flex-wrap-wrap`**
- **`@mixin flex-wrap-wrap-reverse`**
- **`@mixin flex-wrap-inherit`**
- `%flex-wrap-nowrap`
- `%flex-wrap-wrap`
- `%flex-wrap-wrap-reverse`
- `%flex-wrap-inherit`

### Order

- **`@mixin order($order: 0)`**

### Flex flow

- **`@mixin flex-flow($direction: row, $wrap: nowrap)`**

### Flex grow

- **`@mixin flex-grow($grow: 0)`**

### Flex shrink

- **`@mixin flex-shrink($shrink: 1)`**

### Flex basis

- **`@mixin flex-basis($basis: auto)`**

### Flex

- **`@mixin flex($grow: 0, $shrink: 1, $basis: auto)`**

### Justify content

- **`@mixin justify-content($justify: flex-start)`**
- **`@mixin justify-content-flex-start`**
- **`@mixin justify-content-flex-end`**
- **`@mixin justify-content-center`**
- **`@mixin justify-content-space-between`**
- **`@mixin justify-content-space-around`**
- **`@mixin justify-content-inherit`**
- `%justify-content-flex-start`
- `%justify-content-flex-end`
- `%justify-content-center`
- `%justify-content-space-between`
- `%justify-content-space-around`
- `%justify-content-space-evenly`
- `%justify-content-inherit`

### Align items

- **`@mixin align-items($align: stretch)`**
- **`@mixin align-items-flex-start`**
- **`@mixin align-items-flex-end`**
- **`@mixin align-items-center`**
- **`@mixin align-items-baseline`**
- **`@mixin align-items-stretch`**
- **`@mixin align-items-inherit`**
- `%align-items-flex-start`
- `%align-items-flex-end`
- `%align-items-center`
- `%align-items-baseline`
- `%align-items-stretch`
- `%align-items-inherit`

### Align self

- **`@mixin align-self($align: auto)`**
- **`@mixin align-self-auto`**
- **`@mixin align-self-flex-start`**
- **`@mixin align-self-flex-end`**
- **`@mixin align-self-center`**
- **`@mixin align-self-baseline`**
- **`@mixin align-self-stretch`**
- **`@mixin align-self-inherit`**
- `%align-self-auto`
- `%align-self-flex-start`
- `%align-self-flex-end`
- `%align-self-center`
- `%align-self-baseline`
- `%align-self-stretch`
- `%align-self-inherit`

### Align content

- **`@mixin align-content($align: stretch)`**
- **`@mixin align-content-flex-start`**
- **`@mixin align-content-flex-end`**
- **`@mixin align-content-center`**
- **`@mixin align-content-space-between`**
- **`@mixin align-content-space-around`**
- **`@mixin align-content-stretch`**
- **`@mixin align-content-inherit`**
- `%align-content-flex-start`
- `%align-content-flex-end`
- `%align-content-center`
- `%align-content-space-between`
- `%align-content-space-around`
- `%align-content-space-evenly`
- `%align-content-stretch`
- `%align-content-inherit`

## Developing Locally

This package includes options to compile local sass files to spot check them, or to run tests with [sassaby](https://github.com/ryanbahniuk/sassaby).

First run `npm install` to download dev dependencies.

To quickly spot-check anything you add or change, run `npm run output-dev`. It will compile the `./dev/_dev.sass` file to `./dev/output.css`.

To run tests, run `npm test`. Tests are written in `./test/index.js`.

## Sources

- http://www.w3.org/TR/css3-flexbox/
- https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes
- http://caniuse.com/#feat=flexbox
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
