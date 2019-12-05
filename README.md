Jan Miksovsky spoke at a Web Components meeting - The first meeting of the seattle WC Meetup.  He stared out talking about the fact that if you want to do something on the backend, there's probably a npm package that will get you a lot of the way there, but not in front end land.  

Technically speaking, since I know almost nothing about Web Components, it was over my head, but he proposed separating logic from presentation by making Web Components that act as logical containers that have template slots where you can put your visual elements.  He said, calendars, gallerys, side-swipy things share some functionality in common, you need a way to go forwards and backwards, maybe some sort of pagination or something in the middle.  Just swap in your forward and back UI elements and have them call commands on the logical container.

I found [his talk](https://www.youtube.com/watch?v=ZyEkJQeAcGU) inspiring and I kind of zero in on the part where he makes and image viewer at about 10 minutes in and I thought I'd try to do something like it in React. 

Although I don't use it as a base class or anything, ThreePartPage is a logical container, with logic components that provide the functionality of forward and back buttons and expect a children prop which will be the purely visual, and swappable components.     CarouselViewer is a more concrete example of the idea.  Here is what it returns:

```
    return (<div className="carousel">
      <GoBack>{props.makeVisualBackButton()}</GoBack>
      {props.stagingArea}
      <GoForward>{props.makeVisualForwardButton()}</GoForward>
    </div>);```


Both ThreePartPage and Carousel expect props of this type:


```interface ThreePartProps {
    makeVisualBackButton: () => JSX.Element,
    stagingArea: JSX.Element,
    makeVisualForwardButton: () => JSX.Element,
  }
  ```

makeVisualBackButton will be called inside the GoBack logical container, which is a div with a click handler.  Same kind of thing for makeVisualForwardButton: it is rendered inside the GoForwardComponent and all it has to do is look good, or look like what you want it to.  The logic of moving back and forth through the items is handled by the logical controls i.e.

```
const GoForward = (props: props) => {
    const {IncrementIndex} = useContext<ContextInterface>(SrcContext);
    return <div className="arrowButton" onClick={(e) => {
        IncrementIndex();
    }}>
        {props.children}
    </div>
}
```

