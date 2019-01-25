# FrontEnd Developer Test

Given the following mockup:

![mockup][mockup]

The candidate will implement it using React (Only the default React components, and no CSS framework).
The resulting application bundle (the front end part) will be a single javascript file without external dependecies hostable on a CDN.

The application will be responsive with usual three sizes (desktop, tablet, mobile).

The mockup shows the desktop and landscape tablet version.
The portrait and landscape mobile version will display on top the left element of the first row. The right element of the first row will join the three elements of the second row and be displayed two per line (likewise for the third row). The forth row will be displayed three elements per line.
The mobile portrait will display all the elements (but for the fourth line) one per row (stacked) and the forth line two per line.

Upon clicking on an article a lightbox will show up displaying the full content as coming from the JSON.

The data to populate the list will come from a simple server side application, the candidate will choose the technology as the server side is outside the scope of this project) replying with a JSON object with the following schema:

```json
[
  {
    "id": 1,
    "title": "Lorem Ipsum",
    "artwork": "https://placehold.it/1920x1080",
    "content": "Lorem ipsum dolor sit amet, consectetur..."
  },
  {
    "id": 2,
    "title": "Lorem Ipsum",
    "artwork": "https://placehold.it/1920x1080",
    "content": "Lorem ipsum dolor sit amet, consectetur..."
  },
  ...
]
```

The array is flat and will be handled by the application as needed.

The server will be able to serve the built bundle (as well as a supporting HTML from a public folder exposed on `/`).

The React component will be snapshot tested no less than 75% coverage.

[mockup]: FE_Mockup.jpg

## Notes
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Server
This project is using an external service to serve mocking data as it was out of scope.

### Comments
I don't like to write comments into the code, I prefer having self explaining code, then you won't find any comment (except the linting comments)

### Testing
I wrote unit tests in a BDD way covering the most important parts of the project.

### Over engineering
When you're showcasing what you know, it's hard to stay in the borders of not over engineering. Here I decided to use redux with redux-saga to handle the async calls. For example I could have achieved just using async/await into the specific components, or sending more parameters to the API, or managing better all the info retrieved by the APIs.

### Deployed version
I've deployed this project on [Netlify](https://articles-listing-demo.netlify.com/) if you don't want to run it locally 🙂

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

### `yarn lint`

Parses the `src` directory for linting.<br>
