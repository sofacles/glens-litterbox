Jan Miksovsky spoke at a Web Components meeting - The first meeting of the seattle WC Meetup.  He stared out talking about the fact that if you want to do something on the backend, there's probably a npm package that will get you a lot of the way there, but not in front end land.  

Technically speaking, since I know almost nothing about Web Components, it was over my head, but he proposed separating logic from presentation by making Web Components that act as logical containers that have template slots where you can put your visual elements.  He said, calendars, gallerys, side-swipy things share some functionality in common, you need a way to go forwards and backwards, maybe some sort of pagination or something in the middle.  Just swap in your forward and back UI elements and have them call commands on the logical container.

So I thought I'd try to do something like it in React.

ThreePartPage is a logical container and Parts will be the forward and back buttons.  Although I don't use it as a base
class or anything, CarouselViewer is an enhancement of the idea.  It also expects ThreePartProps:  

```interface ThreePartProps {
    makeVisualBackButton: () => JSX.Element,
    // stagingArea: JSX.Element,
    makeVisualForwardButton: () => JSX.Element,
    items: string[]
  }
  ```

makeVisualBackButton will be called inside the GoBack logical container, which is a div with a click handler.  Same kind of thing for makeVisualForwardButton: it is rendered inside the GoForwardComponent and all it has to do is look like the control you're trying to make.  Moving back and forth through the items is handled by the logical control: <GoForward />

```
    return (<div className="carousel">
      <GoBack goBackCommand={back}>{props.makeVisualBackButton()}</GoBack>
      <Carousel src={obj.state.src} />
      <GoForward goForwardCommand={forward}>{props.makeVisualForwardButton()}</GoForward>
    </div>);```
