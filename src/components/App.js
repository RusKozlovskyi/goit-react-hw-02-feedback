import React,  { Component } from 'react';
import Statistics from './Statistics/statistics';
import FeedbackOptions from './FeedbackOptions/feedbackOptions';
import Section from './Section/section';
import Notification from './Notification/notification';
import styles from './App.module.css';

export default class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0
    };

	countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		const result = good + neutral + bad;
		return result;
	  };

	  countPositiveFeedbackPercentage = () => {
		const result = this.countTotalFeedback();
		const { good } = this.state;
		const percentage = (good * 100) / result;
		return Math.round(percentage);
	};

	handleClick = e => {
		const { name } = e.target;
		this.setState(state => ({ [name]: state[name] + 1 }));
		this.countTotalFeedback();
		this.countPositiveFeedbackPercentage();
	  };

    render () {
	    const { good, neutral, bad} = this.state;
	    const total = this.countTotalFeedback();
	    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
        <>
		<div className={styles.App}>
        <Section title="Please leave feedback">
        <FeedbackOptions options={this.state} onLeaveFeedback={this.handleClick} /> 
		</Section>
		{total === 0 ? (<Notification message="No feedback given" />) : (
		<Section title="Statistics">
        <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedbackPercentage}
        />
		</Section>
		)}
		</div>
        </>
    )
    }
}
