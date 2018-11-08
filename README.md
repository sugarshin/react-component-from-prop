# react-component-from-prop

[![CircleCI][circleci-image]][circleci-url]
[![Codecov][codecov-image]][codecov-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

Creates a component that accepts a component as a prop and renders it with the remaining props.

This project is a just fork from [recompose](https://github.com/acdlite/recompose) .

```bash
yarn add react-component-from-prop
```

## Usage

```js
// e. g.,

import componentFromProp from 'react-component-from-prop'
import { Link } from 'react-router-dom'

const Anchor = componentFromProp('component')
Anchor.defaultProps = { component: 'a' }
<Anchor component={Link} to="/foo">Click</Anchor> // <a href="/foo">Click</a>
```

## License

[MIT][license-url]

© sugarshin

[circleci-image]: https://circleci.com/gh/sugarshin/react-component-from-prop/tree/master.svg?style=svg&circle-token=
[circleci-url]: https://circleci.com/gh/sugarshin/react-component-from-prop/tree/master
[codecov-image]: https://codecov.io/gh/sugarshin/react-component-from-prop/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/sugarshin/react-component-from-prop
[npm-image]: https://img.shields.io/npm/v/react-component-from-prop.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/react-component-from-prop
[license-image]: https://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: https://sugarshin.mit-license.org/
