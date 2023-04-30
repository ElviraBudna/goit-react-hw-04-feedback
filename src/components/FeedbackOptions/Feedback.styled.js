import styled from '@emotion/styled';

export const FeedbackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin: 0 auto;
`;

export const FeedbackButton = styled.button`
  border-radius: 4px;
  border: 0.5px solid transparent;
  display: block;
  min-width: 60px;

  color: #2f4f4f;
  background-color: #ffefd5;
  font-family: inherit;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 6px 12px;

  &:hover {
    background-color: #ffdab9;
  }
`;
