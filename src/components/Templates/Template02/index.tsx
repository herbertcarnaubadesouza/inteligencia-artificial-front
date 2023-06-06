// index.tsx
import { MapPin, PhoneCall } from '@phosphor-icons/react';
import { Container, HeaderBlock, LineHeader, LineHeaderBottom } from './styles';
import './template01.scss';

interface Template02Props {
  isVisible02: boolean;
}

function Template02({ isVisible02 }: Template02Props) {
  return (
    <Container>
      <HeaderBlock>
        <div className="container-block-header">
          <LineHeader></LineHeader>
          <span>Comprometidos em ajudar nossos clientes a ter sucesso</span>
        </div>
        <h1>
          Você precisa de um escritório de advocacia confiável que ajude a lidar
          com seus assuntos familiares
        </h1>
        <LineHeaderBottom></LineHeaderBottom>
        <div className="container-header-footer-block">
          <div>
            <div className="header-footer-block">
              <MapPin size={16} weight="fill" />
              <span>Our Location</span>
            </div>
            <h4>Melbourne, Australia</h4>
          </div>
          <div>
            <div className="header-footer-block">
              <PhoneCall size={16} weight="fill" />
              <span>Free Review</span>
            </div>
            <h4>91 123-456-7890/91</h4>
          </div>
        </div>
      </HeaderBlock>
    </Container>
  );
}

export default Template02;
