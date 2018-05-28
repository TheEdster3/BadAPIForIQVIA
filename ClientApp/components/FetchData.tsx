import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

interface FetchDataExampleState {
    tweets: Tweets[];
    loading: boolean;
}

export class FetchData extends React.Component<RouteComponentProps<{}>, FetchDataExampleState> {
    constructor() {
        super();
        this.state = { tweets: [], loading: true };

        /*fetch('api/SampleData/WeatherForecasts')
            .then(response => response.json() as Promise<WeatherForecast[]>)
            .then(data => {
                this.setState({ forecasts: data, loading: false });
            });*/
        //fetch('https://badapi.iqvia.io/api/v1/Tweets?startDate=2016-03-20T04%3A07%3A56.271Z&endDate=2016-03-20T06%3A07%3A56.271Z')
        fetch('api/TweetController/Tweets')
            .then(response => {return response.json()})
            .then(data => {
                this.setState({ tweets: data, loading: false });
            }).catch(err => console.log(err));
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderTweets(this.state.tweets);

        return <div>
            <h1>Tweets</h1>
            <p>This component pulls tweets from the BadAPI</p>
            { contents }
        </div>;
    }

    private static renderTweets(tweets: Tweets[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Tweet Date</th>
                    <th>Tweet Time</th>
                    <th>Tweet Content</th>
                </tr>
            </thead>
            
            <tbody>
            {tweets.map(tweets =>
                <tr key={ tweets.id }>
                    <td>{ new Date(tweets.stamp).toDateString()}</td>
                    <td>{ new Date(tweets.stamp).toLocaleTimeString()}</td>
                    <td>{ tweets.text }</td>
                </tr>
            )}
            </tbody>
        </table>;
    }
}

interface Tweets {
    id : string
    stamp: string;
    text: string;
}