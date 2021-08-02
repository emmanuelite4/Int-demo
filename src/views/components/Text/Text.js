import styled from "@emotion/styled";

export const TextVeryBig = styled.h2`
  color: ${(props) => props.color || "var(--primary-color-two)"};
  margin: 0;
`;

export const TextBig = styled.h3`
  font-size: 20px;
  color: rgb(45, 45, 45);
  font-weight: bold;
  margin: 0 !important;
`;

// export const

export const TextBoldMid = styled.h5`
  color: var(--black-color);
`;

export const TextMid = styled.p`
  font-size: 12;
`;

export const TextSmall = styled.p`
  font-size: 12px;
  color: ${(props) => props.color || "var(--black-color)"};
`;
