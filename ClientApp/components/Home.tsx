import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Bad API Coding Homework</h1>
            <p>This is a single page application built with React and DotNetCore </p>
            
            <p>Usage is straightforward, simply click the tweets tab and the page will query the API and <br/> then load all available tweets between the dates 1/1/2016 and 12/31/2017</p>
            <p>Should take 15 to 20 seconds or so to load them all</p>
            <p>If you have any questions feel free to throw me a call or an email</p>
            <br/> 
            <p>Thanks,</p> 
            <p>Eddie Buchannan</p>
            </div>
    }
}
