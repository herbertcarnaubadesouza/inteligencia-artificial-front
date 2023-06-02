import React from 'react';
import { Container, HeaderFooter, Navigation, Main, LogoTemplate, Line, Info } from './styles';

interface Template01Props {
  isVisible01: boolean;
}

function Template01({ isVisible01 }: Template01Props) {
  return (
    <Container>
      <HeaderFooter as="header">
        <h1>Advogados de Defesa Criminal</h1>
        <Line></Line>
        <h2>Escritório de advogados criminais com mais de
          50 anos de experiência entre nossos sócios</h2>
        <button>Fale conosco agora</button>
      </HeaderFooter>

      <Main>
        <section className="about">

          <Info>
            <LogoTemplate src='./images/template01/about.png' alt='Sobre nós' />
            <div>
              <h2>Sobre Nós</h2>
              <p>A Super Tecnologia Inc é uma empresa inovadora e líder em tecnologia, com um histórico comprovado de entrega de soluções tecnológicas avançadas que impulsionam o crescimento e o sucesso dos negócios. Fundada em 2023 por um grupo de engenheiros e empresários visionários, a Super Tecnologia Inc tem a missão de empregar tecnologias revolucionárias para resolver os desafios mais complexos do mundo dos negócios.</p>
            </div>
          </Info>
        </section>
        {/* <section className="products">
          <h2>Nossos Produtos</h2>
          <p>Nós na Super Tecnologia Inc somos apaixonados por criar produtos e soluções que tornem a vida mais fácil e os negócios mais eficientes. Nossos produtos incluem uma ampla gama de soluções de software e hardware, desde sistemas de gerenciamento de dados empresariais a dispositivos inteligentes e wearables. Todos os nossos produtos são construídos com uma coisa em mente - ajudar nossos clientes a atingir seus objetivos de negócios e superar suas expectativas.</p>
          <LogoTemplate src='./images/template01/produtos.jpg' alt='Produtos' />
        </section>
        <section className="specialties">
          <h2>Nossas Especialidades</h2>
          <p>Nossa equipe de especialistas é formada por profissionais de diversas áreas, o que nos permite oferecer uma gama completa de serviços e soluções para nossos clientes. Além de nossas soluções de software e hardware, nós também oferecemos consultoria em TI, serviços de infraestrutura em nuvem, desenvolvimento de aplicativos móveis, design de interface do usuário e experiência do usuário, segurança cibernética e muito mais. Independentemente do desafio tecnológico que sua empresa esteja enfrentando, nossa equipe tem o conhecimento e a experiência para encontrar uma solução.</p>
          <LogoTemplate src='./images/template01/especialidades.jpg' alt='Especialidades' />
        </section>
        <section className="contact">
          <h2>Contate-nos</h2>
          <p>Email: contato@supertecnologia.com</p>
          <p>Telefone: (11) 1234-5678</p>
          <p>Endereço: Rua da Inovação, 123 - São Paulo, SP</p>
          <LogoTemplate src='./images/template01/contato.jpg' alt='Contato' />
        </section> */}
      </Main>
      {/* <HeaderFooter as="footer">
        <p>&copy; 2023 Super Tecnologia Inc</p>
      </HeaderFooter> */}
    </Container>
  );
};

export default Template01;
