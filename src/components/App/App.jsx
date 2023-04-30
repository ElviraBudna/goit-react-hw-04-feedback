import Statistics from '../Statistics/Statistics';
import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import { AppContainer } from './App.styled';

const options = [{ name: 'good' }, { name: 'neutral' }, { name: 'bad' }];

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.round((good * 100) / countTotalFeedback());
    return percentage;
  };

  return (
    <AppContainer>
      <Section title={'Leave your feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </AppContainer>
  );
}

// export class App extends Component {
//   static defaultProps = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   state = {
//     good: this.props.good,
//     neutral: this.props.neutral,
//     bad: this.props.bad,
//   };

//   onLeaveFeedback = name => {
//     this.setState(prevState => {
//       return {
//         [name]: prevState[name] + 1,
//       };
//     });
//   };

//   countTotalFeedback = ({ good, bad, neutral } = this.state) => {
//     const total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const percentage = Math.round((good * 100) / this.countTotalFeedback());
//     return percentage;
//   };

//   render() {
//     return (
//       <AppContainer>
//         <Section title={'Leave your feedback'}>
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title={'Statistics'}>
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         </Section>
//       </AppContainer>
//     );
//   }
// }
