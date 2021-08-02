import { css } from "@emotion/react";

export const CSS_AUTH_ROOT_CONTAINER = css`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CSS_AUTH_FORM_CONTAINER = css`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.2);
  width: 450px;
`;

export const CSS_CARD = css`
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
`;

export const CSS_TABLE_CONTAINER_PADDING = css`
  padding: 0px 15px;
`;

export const CSS_TABLE_ITEM = css`
  padding: 10px 0px;
`;

export const CSS_TABLE_ITEM_CONTAINER = css`
  display: grid;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--primary-background-color);
  &:hover {
    background-color: 1px solid var(--primary-background-color);
  }
`;

export const CSS_CONTAINER_PADDING = css`
  padding: 10px 15px;
`;
