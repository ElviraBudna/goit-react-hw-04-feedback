import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FeedbackContainer, FeedbackButton } from './Feedback.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackContainer>
      {options.map(option => (
        <FeedbackButton
          type="button"
          onClick={() => onLeaveFeedback(option.name)}
          key={(option.id = nanoid())}
        >
          {option.name}
        </FeedbackButton>
      ))}
    </FeedbackContainer>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};
