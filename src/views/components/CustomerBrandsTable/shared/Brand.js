import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  CSS_TABLE_CONTAINER_PADDING,
  CSS_TABLE_ITEM_CONTAINER,
} from "../../../style/shared";

const CSS_GRID_COLUMNS = css`
  grid-template-columns: 60px 200px 1fr 150px;
`;

export const HeadlineContainer = styled.div`
  display: grid;
  ${CSS_GRID_COLUMNS};
  ${CSS_TABLE_CONTAINER_PADDING};
  width: 100%;
`;

export const ItemContainer = styled.div`
  ${CSS_GRID_COLUMNS};
  ${CSS_TABLE_CONTAINER_PADDING};
  ${CSS_TABLE_ITEM_CONTAINER};
  cursor: ${(props) => (props.link ? "pointer" : "default")};
  &:hover {
    background-color: ${(props) => (props.link ? "var(--light-color)" : "")};
  }
`;

export const LogoItem = styled.img`
  background: ${(props) => `url(${props.logoUrl})`};
  background-size: cover;
  width: 40px;
  height: 40px;
`;
