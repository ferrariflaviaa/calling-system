import { Container } from "./styles";

export default function Title({children, name}){
  return(
    <Container>
      {children}
      <span>{name}</span>
    </Container>
  )
}