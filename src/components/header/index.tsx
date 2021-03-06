import logo from '../../assets/logo.svg'
import { Container, Content } from './style'

type HeaderProps = {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button onClick={onOpenNewTransactionModal} type="button">
          New Transition
        </button>
      </Content>
    </Container>
  )
}
