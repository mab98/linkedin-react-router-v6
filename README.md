#### Routing:

The process of navigating users between different parts of the app when they visit a specific URL.
An efficient routing solution should also keep track of browser history for back and forward buttons, and for refreshing the app while keeping the UI in sync with the URL. Routing should also link users to specific sections of an app via URL to go to correct location. Routing should also handle redirection when user performs a certain action like submitting a form, crud to content.

#### React Router v6

React Router is for client side routing. It provides a component based approach to routing with a collection of navigational components. It can provide routing on web apps, server with nodejs and mobile devices with react native. React Router DOM package is for React web apps. It includes core functionality of React Router and DOM-specific Apis, components and Hooks to implement dynamic routing.

#### Components:

1. Enable React Router via **BrowserRouter** component. This component is the primary router that effectively keeps the UI in sync with URL.
2. **Route**: Instructs React Router to create a new route and render specific elements to the page whenever the current URL matches a given path
3. **Routes**: Manages all of the routes declared in the app. Its props are 'path' and 'element'.
4. **Link**: Changes the URL and navigates to another view without reloading the page. Its prop is 'to'. **anchor elements** for linking to other pages of a react app causes a full page refresh. This sends new server request, then the browser reloads and redirects the current page to new page.
5. **URL Parameters**: For dynamic Routes, URL parameters act as placeholders that match a specific portion of a URL.
6. **NavLink**: Changes the appearance of a link when it’s active.

#### Hooks:

1. **useParams hook**: A React Router Hook to access URL parameters within a component.
2. **useNavigate()**: A Hook that lets you navigate programmatically
3. **useLocation()**: Returns a location object containing information about the current URL
