import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles, Card, CardContent, CardMedia, CardActionArea, Typography, Grid, CircularProgress } from '@material-ui/core';
import { saveWeatherInfo } from 'actions';
import { getForecast } from 'service';

const useStyles = makeStyles({
    cardItem: {
        width: '100%',
        borderRadius: '10px'
    },
    media: {
        position: 'relative',
        height: 120,
        background: 'linear-gradient(135deg, #EC0B51 25%, #F87E25)'
    },
    degree: {
        position: 'absolute',
        bottom: 0,
        left: 16,
        margin: 0,
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white'
    },
    header: {
        marginBottom: 80,
        paddingLeft: 100
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 0
    },
    subTitle: {
        fontSize: 25
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    dot: {
        position: 'absolute',
        bottom: 5,
        left: 60,
        fontSize: 30,
        color: 'white'
    },
    spinner: {
        display: 'flex',
        margin: '50px auto'
    }
});

const WeatherList = (props) => {
    const { user, saveWeatherInfo } = props;
    const [ isLoading, setIsLoading ] = useState(true);
    const classes = useStyles();
    const backgroundColors = [
        {
            from: '#EC0B51',
            to: '#F87E25'
        },
        {
            from: '#E931F5',
            to: '#A410A2'
        },
        {
            from: '#6157EE',
            to: '#52D1C6'
        },
        {
            from: '#6638EB',
            to: '#C2ACFE'
        },
        {
            from: '#03DD2F',
            to: '#10C798'
        }
    ];

    useEffect(() => {
        getForecast(user.location)
            .then(data => {
                // Edge case:
                // When the webservice returns data for 6 calendar days during evenings as a result of offset,
                // this ensures that we are showing only 5-days of forecast.
                const tiles = Object.values(groupByDays(data.list));
                const forcastTitles = tiles.length > 5 ? tiles.slice(0, 5) : tiles;
                saveWeatherInfo(forcastTitles);
                setIsLoading(false);
            });
    }, [saveWeatherInfo, user.location, user.name]);

    const groupByDays = data => {
        return (data.reduce((list, item) => {
            const forecastDate = item.dt_txt.substr(0, 10);
            list[forecastDate] = list[forecastDate] || [];
            list[forecastDate].push(item);

            return list;
        }, {}));
    };

    // Returns week of the day
    // const getDayInfo = data => {
    //     const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    //     return daysOfWeek[new Date(data[0].dt * 1000).getDay()];
    // };

    const weatherListInfos = [
        {
            id: 0,
            degree: 34,
            date: 'January 11th, 2021',
            day: 'Monday'
        },
        {
            id: 1,
            degree: 42,
            date: 'January 11th, 2021',
            day: 'Tuesday'
        },
        {
            id: 2,
            degree: 41,
            date: 'January 11th, 2021',
            day: 'Wednesday'
        },
        {
            id: 3,
            degree: 44,
            date: 'January 11th, 2021',
            day: 'Thursday'
        },
        {
            id: 4,
            degree: 46,
            date: 'January 11th, 2021',
            day: 'Friday'
        }
    ]

    return (
        <React.Fragment>
            {isLoading && <CircularProgress className={classes.spinner} />}
            {!isLoading && <>
                <header className={classes.header}>
                    <Typography component="p" className={classes.title}>
                        Hi, {user.name}
                    </Typography>
                    <Typography component="span" className={classes.subTitle}>
                        Weather forecast: {user.location} for the next 5 days
                    </Typography>
                </header>
                <Grid container justify="center" spacing={3} className={classes.root}>
                    {weatherListInfos.map((item, index) => (
                        <Grid item xs={2} key={index}>
                            <Card className={classes.cardItem}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        style={{ background: `linear-gradient(135deg, ${backgroundColors[index].from} 25%, ${backgroundColors[index].to})` }}
                                        title="Contemplative Reptile"
                                    >
                                        <Typography gutterBottom component="p" className={classes.degree}>
                                            {item.degree}
                                        </Typography>
                                        <span className={classes.dot}>&#8451;</span>
                                    </CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom component="p" className={classes.date}>
                                            {item.day}
                                        </Typography>
                                        <Typography color="textSecondary" component="p">
                                            {item.date}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </>}
        </React.Fragment>
    )
}

const mapStateToProps = ({ user, forecast }) => {
    return {
        user,
        forecast
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveWeatherInfo: (forecast) => {
            dispatch(saveWeatherInfo(forecast))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);