import { createElement, SFC } from 'react';
import omit = require('lodash.omit');

const componentFromProp = (propName: string): SFC<any> => {
  const Component = (props: any) => createElement(props[propName], omit(props, [propName]));
  Component.displayName = `componentFromProp(${propName})`;
  return Component;
};

export default componentFromProp;
