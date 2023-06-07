// index.tsx

import FlagCheckered from '@phosphor-icons/react/dist/icons/FlagCheckered';
import {
  AboutSection,
  AwardsRow1,
  AwardsSection,
  Container,
  HeaderAwards,
  HeaderBlock,
  HowWorksHeaderSection,
  HowWorksSection,
  IconSection,
  LeftAwardBlock,
  LeftSideBlock,
  LineAboutSection,
  LineAwardsSection,
  PraticaceSection,
  RightSideBlock,
  RigthAwardBlock,
} from './styles';
import { BagSimple, Buildings, Hammer, Scales } from '@phosphor-icons/react';

interface Template03Props {
  isVisible03: boolean;
}

function Template03({ isVisible03 }: Template03Props) {
  return (
    <Container>
      <HeaderBlock>
        <span>1º Escritório De Advocacia Eleito Pelos Pares</span>
        <h1>
          Advogados de família de primeira classe e advogados de divórcio em
          Vancouver
        </h1>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.
        </p>
        <button>agendar reunião</button>
      </HeaderBlock>
      <AboutSection>
        <LeftSideBlock>
          <div>
            <LineAboutSection></LineAboutSection>
            <div className="title-about-section-block">
              <h2>Sobre nós</h2>
              <h3>Premiado Escritório de Advocacia do Ano</h3>
            </div>
          </div>
          <p>
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi. Vivamus magna justo, lacinia eget consectetur sed, convallis
            at tellus. Nulla porttitor accumsan tincidunt. Curabitur arcu erat,
            accumsan id imperdiet et, porttitor at sem.
          </p>
          <div className="footer-div-block">
            <div className="footer-div-block-content">
              <h3>Premiado Escritório de Advocacia do Ano</h3>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec velit neque.
              </p>
            </div>
            <div className="footer-div-block-content">
              <h3>Premiado Escritório de Advocacia do Ano</h3>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec velit neque.
              </p>
            </div>
          </div>
          <button>fale conosco</button>
        </LeftSideBlock>
        <RightSideBlock>
          <img src="./images/template03/bg05.jpg"></img>
        </RightSideBlock>
      </AboutSection>
      <IconSection>
        <div className='Container-blocks'>
          <div className="meta-icons">
          <Scales size={50} weight="fill" />
          <h3>120+</h3>
          <p>Casos Resolvidos</p>
          </div>

          <div className="meta-icons">
          <Hammer size={50} weight="fill" />
          <h3>120+</h3>
          <p>Clientes Satisfeitos</p>
          </div>

          <div className="meta-icons">
          <Buildings size={50} weight="fill" />
          <h3>120+</h3>
          <p>Escritorios</p>
          </div>

          <div className="meta-icons">
          <BagSimple size={50} weight="fill" />
          <h3>120+</h3>
          <p>Associados Legais</p>
          </div>
        </div>
      </IconSection>
      <AwardsSection>
      <LineAwardsSection></LineAwardsSection>
        <HeaderAwards>
          <div className='header-awards'>
          <h2>Prêmios e reconhecimentos</h2>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque.</p>
        </div>
        </HeaderAwards>

        <AwardsRow1>

        <div className='awards-block'>
        <img src="./images/template03/award5.png" alt="" />
        <h3>Prêmio de Melhor Escritório de Advocacia</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>

        <div className='awards-block'>
        <img src="./images/template03/award5.png" alt="" />
        <h3>Prêmio de Melhor Escritório de Advocacia</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>

        <div className='awards-block'>
        <img src="./images/template03/award5.png" alt="" />
        <h3>Prêmio de Melhor Escritório de Advocacia</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>

        </AwardsRow1>

        <AwardsRow1>

        <div className='awards-block'>
        <img src="./images/template03/award5.png" alt="" />
        <h3>Prêmio de Melhor Escritório de Advocacia</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>

        <div className='awards-block'>
        <img src="./images/template03/award5.png" alt="" />
        <h3>Prêmio de Melhor Escritório de Advocacia</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>

        <div className='awards-block'>
        <img src="./images/template03/award5.png" alt="" />
        <h3>Prêmio de Melhor Escritório de Advocacia</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>

        </AwardsRow1>

      
      <div className='awards-row2'>

      </div>
      </AwardsSection>

      <PraticaceSection>

      <LeftAwardBlock>

      <LineAwardsSection></LineAwardsSection>
        <h2>Nossas Áreas de Atuação</h2>
        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque.</p>
        <img src="./images/template03/practiceareas1.jpg" alt="" />

      </LeftAwardBlock>
        
      <RigthAwardBlock>
      <div className='Areas-block'>
          <h3>Separação e Divórcio</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
        
        <div className='Areas-block'>
          <h3>Custódia da criança</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
        
        <div className='Areas-block'>
          <h3>Pensão alimentícia</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
        
        <div className='Areas-block'>
          <h3>Apoio do cônjuge</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
        
      </RigthAwardBlock>

      <RigthAwardBlock>
      <div className='Areas-block'>
          <h3>Assuntos Internacionais</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
        
        <div className='Areas-block'>
          <h3>Apelações de direito de família</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
        
        <div className='Areas-block'>
          <h3>Proteção de patrimônio</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
        
        <div className='Areas-block'>
          <h3>Serviços de alto patrimônio líquido</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
        
      </RigthAwardBlock>
      </PraticaceSection>

      <HowWorksSection>
        <LineAwardsSection></LineAwardsSection>
      <HowWorksHeaderSection>

        <div className="Header-How-Work">
          <h2>Como trabalhamos</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>

      </HowWorksHeaderSection>
      </HowWorksSection>

    </Container>
  );
}

export default Template03;
