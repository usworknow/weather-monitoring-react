import React, { useState } from 'react';
import { makeStyles, withStyles, FormControl, InputLabel, FilledInput, FormHelperText, Grid, Button, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { saveUserInfo } from 'actions';
// import PlacesAutocomplete from 'react-places-autocomplete';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    commonSize: {
        width: '60%',
        margin: 'auto'
    },
    welcome: {
        marginBottom: 40
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: '10px 0 10px 0'
    },
    subTitle: {
        fontSize: 25
    },
    fontFamily: {
        fontFamily: 'Poppins-Bold',
    }
}));

const ColorButton = withStyles(() => ({
    root: {
        backgroundColor: '#602EE9',
        padding: '15px 0 15px 0',
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
        textTransform: 'lowercase',
        '&:hover': {
            backgroundColor: '#602EE9'
        }
    },
    label: {
        color: 'white !important'
    }
}))(Button);

const WeatherInfo = (props) => {
    const [errorState, setErrorState] = useState({});
    const [state, setState] = useState({
        name: "",
        location: ""
    });
    const classes = useStyles();

    const handleChange = (event) => {
        setErrorState({});
        setState({ ...state, [event.target.id]: event.target.value });
    }
    const handleSubmit = () => {
        const { saveUserInfo } = props;
        const errors = {};
        if (state.name === "") {
            errors.name = "Name can not be empty!"
        };
        if (state.location === "") {
            errors.location = "Location can not be empty!"
        };
        if (Object.keys(errors).length > 0) { setErrorState(errors); return; }

        saveUserInfo(state);
        props.history.push("/dashboard");
    }
    return (
        <React.Fragment>
            <div className={classes.root}>
                <div className={classes.welcome}>
                    <Typography component="p" className={classes.title}>
                        Welcome
                    </Typography>
                    <Typography component="span" className={classes.subTitle}>
                        Tell us about yourself
                    </Typography>
                </div>
                <form autoComplete="off">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <FormControl className={classes.commonSize} variant="filled">
                                <InputLabel className={classes.fontFamily} htmlFor="component-filled">Name</InputLabel>
                                <FilledInput className={classes.fontFamily} id="name" value={state.name} onChange={handleChange} />
                                {errorState.name && <FormHelperText id="component-error-text">{errorState.name}</FormHelperText>}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={classes.commonSize} variant="filled">
                                <InputLabel className={classes.fontFamily} htmlFor="component-filled">Location</InputLabel>
                                <FilledInput className={classes.fontFamily} id="location" value={state.location} onChange={handleChange} />
                                {/* <PlacesAutocomplete
                                    value={location}
                                    onChange={handleChangeLocation}
                                    searchOptions={searchOptions}
                                >
                                </PlacesAutocomplete> */}
                                {errorState.location && <FormHelperText id="component-error-text">{errorState.location}</FormHelperText>}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={classes.commonSize}>
                                <ColorButton variant="contained" color="primary" onClick={handleSubmit}>
                                    Continue
                                </ColorButton>
                            </FormControl>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveUserInfo: (user) => {
            dispatch(saveUserInfo(user))
        },
    }
}

export default connect(null, mapDispatchToProps)(WeatherInfo);