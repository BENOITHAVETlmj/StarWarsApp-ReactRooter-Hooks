This application's purpose is to use react-router-dom with Starwars API.

It does render dynamically Url to fetch the right data when clicking on a character to show his identy Card + his vehicles as a link and update the url, once you click on vehicle, it redirects you back to the owners of this type of vehicles...and so on

![](/src/starWarsPoster.png)

# REACT ROUTER

[https://reactrouter.com/web/guides/quick-start](https://reactrouter.com/en/6.23.0/start/overview)

![](/src/react-router.png)

![](/src/react-router-link.png)


# Lazy loading React components

React.lazy() makes it easy to create components that are loaded using dynamic import() but rendered like regular components. This automatically causes the bundle containing the component to load when the component is rendered.

React.lazy() takes as its argument a function that must return a promise by calling import() to load the component. The returned promise resolves to a module with a default export containing the React component

```
const Characters = React.lazy(() => import("./Component/Characters"));
const About = React.lazy(() => import("./Component/About"));
```

# react-player

A React component for playing a variety of URLs, including file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo...

https://www.npmjs.com/package/react-player

# STARWARS API

https://swapi.dev/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
