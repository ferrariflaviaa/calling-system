/* eslint-disable jsx-a11y/anchor-is-valid */
import { FiX } from 'react-icons/fi'
import { ContainerModal, Content } from './styles'
export default function Modal({ conteudo, close }) {
  return (
    <ContainerModal>
      <Content>
        <button className="close" onClick={close}>
          <FiX size={23} color="#FFF" />
        </button>

        <div>
          <h2>Detalhes do chamado</h2>

          <div className="row">
            <span>
              Cliente: <a>{conteudo.cliente}</a>
            </span>
          </div>

          <div className="row">
            <span>
              Assunto: <a>{conteudo.assunto}</a>
            </span>
            <span>
              Cadastrado em: <a>{conteudo.createdFormated}</a>
            </span>
          </div>

          <div className="row">
            <span>
              Status:{' '}
              <a
                style={{
                  color: '#FFF',
                  backgroundColor:
                    conteudo.status === 'Aberto' ? '#5cb85c' : '#999',
                }}
              >
                {conteudo.status}
              </a>
            </span>
          </div>

          {conteudo.complemento !== '' && (
            <>
              <h3>Complemento</h3>
              <p>{conteudo.complemento}</p>
            </>
          )}
        </div>
      </Content>
    </ContainerModal>
  )
}
