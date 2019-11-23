Jan Miksovsky spoke at a Web Components meeting - The first meeting of the seattle WC Meetup.
Technically it was over my head, but he talked about the fact that if you want to do something on the backend, there's probably a npm package that will get you a lot of the way there, but not in front end land.  

So, he proposed separating logic from presentation in the form of making controls that acted as logical container that has template slots where you can put your visual elements.  So, calendars, gallerys, side-swipy things share some functionality in common, you need a way to go forwards and backwards, maybe some sort of pagination or something in the middle.  Just swap in your forward and back UI elements and have them call commands on the logical container.

ThreePartPage is a logical container and Parts will be the forward and back buttons.
