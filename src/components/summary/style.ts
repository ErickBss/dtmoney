import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 2rem;

  margin-top: -8rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div {
    background: var(--shape);

    padding: 1.5rem 2rem;

    border-radius: 0.25rem;

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight_background {
      background: var(--green);
      color: #fff;
    }
  }
`
