import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 1.2rem 2rem;
  border-radius: 6px;
  box-shadow: 0px 1px 8px #aaa;

  h2 {
    margin-bottom: 1.5rem;
  }

  .ant-input-number-input {
    background-color: #fff;
  }

  .ant-input-number{
    width: 100%;
  }

  .ant-input {
    background-color: #fff;
  }

  .ant-form-item-label > label {
    color: var(--text-color-secondary);
  }

  .first-line {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }

  .second-line {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 1rem;
  }

  .third-line {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }

  .fourth-line {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 1rem;
  }

  .buttons-field {
    display: flex;
    justify-content: flex-end;

    button:nth-child(2) {
      background: var(--button-primary-color);
      border-color: var(--button-primary-color);
    }

    button {
      margin-left: 0.5rem;
    }
  }
`;
