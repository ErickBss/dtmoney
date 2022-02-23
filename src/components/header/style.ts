import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto; //centralize

  padding: 2rem 1rem 9rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #ffff;
    background: var(--blue-light);

    padding: 0 2rem;
    height: 3rem;

    border-radius: 0.25rem;
    border: none;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
