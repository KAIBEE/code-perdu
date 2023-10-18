import styled from "styled-components";

const ResetButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background: transparent;
  outline: none;
  padding: 0.35em 0.8em;
  &.form__error {
    fill: #f2b8b5;
  }
  & > svg {
    height: 3dvh;
    fill: inherit;
  }
`;

export const Reset = ({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}): React.ReactNode => (
  <ResetButton onClick={onClick} className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="inherit">
      <path
        fill="inherit"
        fillRule="evenodd"
        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-9.41L15.59 7 17 8.41 13.41 12 17 15.59 15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59Z"
        clipRule="evenodd"
      />
    </svg>
  </ResetButton>
);
