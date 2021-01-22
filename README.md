This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Simple Weather Monitoring app built with React.

Tasks:
- Login Screen:
    Name - Variable name that needs to be stored. 
    Location - Variable name that needs to be stored.
- Show a loading spinner when getting the data from the OpenWeatherApi.
- Dashboard
    Greet the user with their input name.
    Get the forecast for the next 5 days with the Location of the user 
    (provided in the previous screen)
    User information (Name, Location) is locally stored, so if the page reloads, the application state is retained.
    Requests to OpenWeatherApi should be cached, so that the OpenWeatherApi receives as little requests as possible.

Things that assess:
- Project scaffolding and organization.
- Application styling and use of the React library.
- Data caching.
- Async request handling practices.

Tech Stacks used.
- react v16.7.0
- react-redux v6.0.0 
- redux-persist v5.10.0
- axios v0.21.1
- React UI framework: material-ui v4.11.2

# To OpenWeatherApi receives as little requests as possible, I handled service/api.js to improve it.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
