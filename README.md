# React GIF browser

GIF browser created in React, powerd by [Giphy](https://developers.giphy.com/docs/sdk/). See demo [here](https://nerychucuy.github.io/react-gif-browser/).

## Running this project in your local environment

1. Clone repository
1. Generate a Giphy API key by creating an app [here](https://developers.giphy.com/docs/sdk/)
1. Create environment file in the project directory , i.e.: .env.development.local with the following content:

```
REACT_APP_API_URL=https://api.giphy.com/v1/gifs/search
REACT_APP_API_KEY=<your key>
```
4. Then, run the following commands:

```
npm install
npm start
```

5. Go to http://localhost:3000 in your browser

## ToDo
- [ ] Add share buttons to GIF preview
- [ ] Responsive design

## Resources
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
* Favicon generated using [favicon.io](https://favicon.io/favicon-generator/)
* GitHub corner added thanks to [react-github-corner](https://github.com/skratchdot/react-github-corner)
