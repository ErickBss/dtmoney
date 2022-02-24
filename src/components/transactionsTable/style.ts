import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 10rem;

  table {
    width: 100%;

    border-spacing: 0.25rem;

    th {
      color: var(--text-body);
      font-weight: 400;

      padding: 1rem 2rem;
      text-align: left;

      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;

      border: 0;
      border-radius: 0.25rem;

      background: var(--shape);
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.payment {
        color: var(--red);
      }
    }
  }
`
