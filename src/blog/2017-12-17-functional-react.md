---
title: "Functional React"
path: "/blog/functional-react"
date: "2017-12-17"
---

I love React and I love functional programming.
Here I'll describe how I tried to make React more functional.


## JSX is just syntactic sugar


One day I saw someone say something like:
"JSX is just syntactic sugar for function composition."

I first thought "Hell yeah! FP, bro!"
But then I started thinking about it and realised it was wrong.
It's not really function composition, it's just plain old function calls.


## Function composition


I, like probably most people, first learned about function composition at math class.
I learned that I could compose two functions by first applying one,
and then applying the second to the first function's result.

Of course, this didn't have much use in school,
but now I use it almost everyday in my code.
Instead of just calling one function after the other,
I compose them into a single function so that my code stays clean and simple.


## Using components as functions


Anyway, it got me thinking:
"What if I could use React components like they were just functions?"

React takes great pride in saying that components are
["like JavaScript functions"](https://reactjs.org/docs/components-and-props.html),
but in fact they aren't used like functions.

Consider the following component:

```jsx
const Welcome = ({ name }) => (
  <h1>
    Hello, {props.name}!
  </h1>
);
```

It looks like a normal JavaScript function, but how do we use it? That's right:

```jsx
<Welcome name={'John Doe'} />
```

Which of course is just syntactic sugar for:

```js
React.createElement(Welcome, { name: 'John Doe' });
```

This is not how one would use a function.

If you were to use this component as a normal JavaScript function this is how you would do it:

```js
Welcome({ name: 'John Doe' });
```

Wouldn't it be nice to use React components like JavaScript functions?


## Implementing a wrapper


I then decided to write a simple wrapper that would let me use components like functions.

It was something like this:

```js
const createComponent = Component => (props, ...children) => {
  return React.createElement(Component, props, ...children);
};
```

Then I had to wrap my components with it:

```js
export default createComponent(Welcome);
```

But it wasn't enough, as I still had to write JSX for HTML elements.
So I created wrappers for all HTML tags using my wrapper and the
[html-tags](https://github.com/sindresorhus/html-tags) package:

```js
import htmlTags from 'html-tags';

const dom = htmlTags.reduce(
  (result, tag) => ({
    ...result,
    [tag]: createComponent(tag);
  }),
  {}
);
```

Now I was all set up to write React components with functions only.

Lets rewrite the `Welcome` component:

```js
const Welcome = ({ name }) => {
  return dom.h1({}, `Hello, ${name}`);
};

export default createComponent(Welcome);
```

And to put it to use:

```js
import Welcome from './welcome';

const Home = () => {
  return dom.div(
    {},
    Navbar({}),
    dom.header({}, Welcome({ name: 'John Doe' })),
    Footer({})
  );
};
```

Goodbye JSX! Although, I didn't quite like it...


## Making it look better


This didn't look/feel as nice as I expected.

First, it was annoying that I needed to pass an empty object when I didn't want to pass props.
Second, I'd like to just skip the props argument and start passing children when there were no props to pass.

So I tweaked my wrapper a little bit, like so:

```js

function isProps(value) {
  return typeof value === 'object' && !React.isValidElement(value);
};

const createComponent = Component => (props = {}, ...children) => {
  if (isProps(props)) {
    return React.createElement(Component, props, ...children);
  }

  return React.createElement(Component, {}, props, ...children);
};
```

This is a bit dangerous, as props could be abused to look like a valid React element
and make unwanted things end up in the DOM,
but now I could make my `Home` component cleaner:

```js
import Welcome from './welcome';

const Home = () => {
  return dom.div(
    Navbar(),
    dom.header(Welcome({ name: 'John Doe' })),
    Footer()
  );
};
```


## Rendering lists


Our function-like components are specially useful when rendering lists.

Consider the eternal example of a To-do application:

```jsx
const Todo = ({ description }) => (
  <li>
    {description}
  </li>
);

const Todos = ({ todos }) => (
  <ul>
    {todos.map(todo => <Todo {...todo } />)}
  </ul>
);
```

With our function-like components this would look like:

```js
// todo.js

const Todo = ({ description }) => {
  return div.li(description);
};

export default createComponent(Todo);
```

```js
// todos.js

import Todo from './todo';

const Todos = ({ todos }) => {
  return div.ul(todos.map(Todo));
};
```

Looks quite nice and concise, doesn't it?

One thing to note however, is that the `map`'s callback argument actually has three arguments:
[currentValue, index and array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Syntax).

This means that the index and the todos array are being passed as children to the `Todo` component.

This can be avoided by using lodash's [`unary`](https://lodash.com/docs/4.17.4#unary) function
or [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide)'s
`map` function (because it's callback argument is capped to one argument).

```js
const Todos = ({ todos }) => {
  return div.ul(todos.map(unary(Todo)));
};

// or

const Todos = ({ todos }) => {
  return div.ul(map(Todo, todos));
};
```

You still need to keep in mind that React needs a
[key prop](https://reactjs.org/docs/lists-and-keys.html#keys)
in each element when rendering an array.


## Composing components


Lets now see how function composition (what got us here in the first place)
looks like with our function-like components.

I'll be using lodash/fp's functions for these examples.
For those that don't know, these functions are "auto-curried iteratee-first data-last".
See the [documentation](https://github.com/lodash/lodash/wiki/FP-Guide) for more information.

Consider our `Todo` component and the last implementation of the `Todos` component,
the one that used lodash/fp's `map`.
Using function composition it could be written like this:

```js
import { compose, get, map } from 'lodash/fp';

const Todo = createComponent(compose(
  div.li,
  get('description')
));

const Todos = createComponent(compose(
  div.ul,
  map(Todo),
  get('todos')
));
```

We now moved from function components to
[point-free](https://en.wikipedia.org/wiki/Tacit_programming) components.

We can also use function composition to nest components.
Imagine we want to nest a div inside a section.
This can be done by composing `dom.section` and `dom.div`.

```js
compose(dom.section, dom.div)
```

This isn't particularly useful for HTML tags, but it's common for
the root component of an application to have many nested components.

```jsx
const App = () => (
  <ReduxProvider store={store}>
    <I18nextProvider i18n={i18n}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          {renderRoutes()}
        </BrowserRouter>
      </MuiThemeProvider>
    </I18nextProvider>
  </ReduxThemeProvider>
);
```

This would be written like:

```js
import { compose } from 'lodash/fp';
import { partial } from 'lodash';

const App = compose(
  partial(ReduxProvider, { store }),
  partial(I18nextProvider, { i18n }),
  partial(MuiThemeProvider, { theme }),
  BrowserRouter,
  renderRoutes
);
```

I needed to use lodash's [`partial`](https://lodash.com/docs/4.17.4#partial)
because I needed to pass props to `ReduxProvider`, `I18nextProvider` and `MuiThemeProvider`.


## Comparing to JSX


Lets put our components side by side with their JSX equivalents so that we can compare them.

```jsx
import { compose, get, map } from 'lodash/fp';

// Todo component

const Todo = compose(div.li, get('description'));

const Todo = ({ description }) => (
  <li>
    {description}
  </li>
);

// Todos component

const Todos = compose(
  div.ul,
  map(Todo),
  get('todos')
);

const Todos = ({ todos }) => (
  <ul>
    {todos.map(todo => <Todo {...todo} />)}
  </ul>
);

// Home component

const Home = () => {
  return dom.div(
    Navbar(),
    dom.header(Welcome({ name: 'John Doe' })),
    Todos({ todos }),
    Footer()
  );
};

const Home = () => (
  <div>
    <Navbar />

    <header>
      <Welcome name={'John Doe'} />
    </header>

    <Todos todos={todos} />

    <Footer />
  </div>
);
```

When we use components like this we lose the readability of JSX.
JSX is more readable, specially with large components,
because it's easy to track where stuff ends, thanks to the closing tags.

It's also a little annoying to wrap all components with `createComponent`,
but I couldn't figure out another way to make this work,
due to how React components work.

However, we gain the ability to pass components where we would pass functions,
like when calling `map`. We can also use function composition to create components
and even to easily nest them.
