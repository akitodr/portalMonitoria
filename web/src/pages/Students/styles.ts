import styled from 'styled-components';

export const TableItem = styled.div`
  margin-top: 2rem;
  background: #fff;
  box-shadow: 0px 1px 8px #aaa;
  border-radius: 6px;

  svg {
    color: var(--primary-color);
    cursor: pointer;
  }
`;

export const ActionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .ant-input-suffix svg {
    color: var(--primary-color);
  }

  .buttons Button {
    margin-left: 0.2rem;
  }

  .newButton,
  .uploadButton {
    background: #5bbec2;
    border-color: #5bbec2;
  }
`;
