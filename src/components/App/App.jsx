import Statistics from '../Statistics/Statistics';
import { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import { AppContainer } from './App.styled';

const options = [{ name: 'good' }, { name: 'neutral' }, { name: 'bad' }];

export class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  onLeaveFeedback = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = ({ good, bad, neutral } = this.state) => {
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const percentage = Math.round((good * 100) / this.countTotalFeedback());
    return percentage;
  };

  render() {
    return (
      <AppContainer>
        <Section title={'Leave your feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </AppContainer>
    );
  }
}
