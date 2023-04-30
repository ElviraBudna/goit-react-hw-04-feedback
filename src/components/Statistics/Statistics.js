import PropTypes from 'prop-types';
import Notification from 'components/Section/Notification';
import { TextStatistics, Container } from './Statistics.styled';
export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage = 0,
}) {
  return (
    <div>
      {total !== 0 ? (
        <Container>
          <TextStatistics>Good: {good}</TextStatistics>
          <TextStatistics>Neutral: {neutral}</TextStatistics>
          <TextStatistics>Bad: {bad}</TextStatistics>
          <TextStatistics>Total: {total}</TextStatistics>
          <TextStatistics>
            Positive Feedback: {positivePercentage}%
          </TextStatistics>
        </Container>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
