# React Biz

[![npm version](https://img.shields.io/npm/v/react-biz.svg?style=flat-square)](https://www.npmjs.com/package/react-biz)
[![NPM Status](http://img.shields.io/npm/dm/react-biz.svg?style=flat-square)](https://www.npmjs.org/package/react-biz)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/kodermax)

Этот проект делается для бизнес-приложений.
 Сделано для бизнеса:
 1. Постраничная навигация для таблицы.
 2. Сортировка колонок в таблице.
 3. Autosuggest, компонент позволяет работать с удаленным запросом

## Installation

React Biz can be installed as an [npm package](https://www.npmjs.org/package/react-biz);

```
npm install --save react-biz
```

## Usage

Although there are other ways to use React Biz, the recommended way is to create a webpack workflow with [babel-loader](https://github.com/babel/babel-loader), [css-loader](https://github.com/webpack/css-loader) and [sass-loader](https://github.com/jtangelder/sass-loader). A good starting point is [React Hot Webpack Boilerplate](https://github.com/gaearon/react-hot-boilerplate).

Once you have the workflow ready, you can just require and use the components:

```jsx
import React from 'react';
import Button from 'react-biz/lib/button';

const CustomButton = () => (
  <Button label="Hello world" raised accent />
);

export default CustomButton;
```

The previous code creates a React button component based on React Toolbox button. It's important to notice that requiring a module from the exposed root of the package will also import the **SASS** of the component.

## Roboto Font and Material Design Icons

React Toolbox assumes that you are importing [Roboto Font](https://fonts.google.com/specimen/Roboto) and [Material Design Icons](https://www.google.com/design/icons/).

In order to import the fonts for you, we'd need to include them in the CSS which is considered a bad practice. If you are not including them in your app, go to the linked sites and follow the instructions. 

## App component

There are some components in React Toolbox that require special positioning. For example, `Dialog` and `Drawer` components block the scroll showing a fixed positioned overlay. To handle these cases, React Toolbox needs some styling in your root node. This can be achieved by wrapping your app with a non intrusive `App` wrapper component:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import ToolboxApp from 'react-toolbox/lib/app';
import App from './my-app';

ReactDOM.render(
  <ToolboxApp>
    <App />
  </ToolboxApp>
, document.getElementById('app'));

```

