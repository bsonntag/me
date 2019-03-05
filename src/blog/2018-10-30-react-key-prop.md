---
title: "React's key prop"
path: "/blog/react-key-prop"
date: "2018-10-30"
---


In this post I'll talk a bit about React's `key` prop.
The `key` is mostly known for being necessary to render lists,
but there are other use cases as well.
It can be a powerful thing that can be used to conjure some awesome
React magics.


## Lists


The most common use for React's `key` prop is to render a list of elements.
React uses it to track changes to the list items, like updates, insertions and removals.
Without it, React wouldn't know if an element changed or was just moved
in the list and would perform some unnecessary DOM changes.

```jsx
const Todos = ({ todos }) => (
  <ul>
    {todos.map(({ id, title }) => (
      <li key={id}>
        {text}
      </li>
    ))}
  </ul>
);
```

It's easy to be lazy about this and use the element's index as its `key`,
but generally that isn't a good idea when items can be inserted on arbitrary
positions, or when the order of the items can change.

On the other hand, if the list being rendered never changes during runtime
it's safe to use indexes.

See the [official documentation](https://reactjs.org/docs/lists-and-keys.html)
for more information on lists and keys.


## Forcing remounts


Another thing keys can be used for is to force a component to unmount and mount again.
This means that the mounting lifecycle methods (like `componentDidMount`)
will be called.
There are a few interesting use cases where you might want to do this.


### Refetching data


Forcing a component to remount can be useful if you have a component that
fetches data when mounting and you want to force it to fetch that data again.

Imagine a `UserDetails` component that fetches the user's data when it mounts:

```jsx
class UserDetails extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    // ...
  }
}
```

If for some reason you want to fetch the user's data again, you have two options:

- You can pass a prop to `UserDetails` telling it to fetch again and handle it on `componentDidUpdate`;
- Pass a `key` prop to `UserDetails` and change it when you want to re-fetch.

The second option would look like this:

```jsx
class UserPage extends Component {
  state = { userDetailsKey: 0 };

  refresh = () => {
    this.setState(({ userDetailsKey }) => ({
      userDetailsKey: userDetailsKey + 1
    });
  };

  render() {
    return (
      <div>
        <UserDetails key={this.state.userDetailsKey} />
        <button onClick={this.refresh}>
          Refresh
        </button>
      </div>
    );
  }
}
```

When the "Refresh" button is clicked, `userDetailsKey` will be incremented,
changing `UserDetails`'s `key`.
React will then unmount the current instance of `UserDetails` and mount
a new one.


### Animations


This technique can also be useful for animations.
React will unmount elements when their keys change and mount them again.
This will make CSS animations trigger again.

Here's an example:

<iframe
  allowfullscreen='true'
  allowtransparency='true'
  frameborder='no'
  height='336'
  scrolling='no'
  src='//codepen.io/bsonntag/embed/JmqVwB/?height=300&theme-id=0&default-tab=js,result'
  style='display: block; width: 100%;'
  title='Ripple effect using React key'
>
See the Pen
<a href='https://codepen.io/bsonntag/pen/JmqVwB/' target='_blank' rel='noopener'>Ripple effect using React key</a>
by Benjamim Sonntag
(<a href='https://codepen.io/bsonntag' target='_blank' rel='noopener'>@bsonntag</a>)
on <a href='https://codepen.io' target='_blank' rel='noopener'>CodePen</a>.
</iframe>

On this example I have a button with a ripple effect which is triggered when the button is clicked.
This is done by incrementing a `key` stored in the `Button` component's state
when the button is clicked.
Changing this `key` will make the button element remount,
triggering the animation again.


## More ideas?


If you know about some other interesing uses of the `key` prop
please share them below on the comments.
I always love to hear about new React tricks.
