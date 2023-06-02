// index.tsx
import React from 'react';
import './template01.scss';

interface Template03Props {
  isVisible03: boolean;
}

function Template03({ isVisible03 }: Template03Props) {
  return (
    <div className="container">
      <header className="header">
        <h1>Super TRES Tecnologia Inc</h1>
        <img src='./images/template01/logo.png' alt='Logo' className="logo-template" />
      </header>
      <nav className="navigation">
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Produtos</li>
          <li>Especialidades</li>
          <li>Contato</li>
        </ul>
      </nav>
      <main className="main">
        <section className="about">
          <h2>Sobre Nós</h2>
          <p>A Super Tecnologia Inc é uma empresa inovadora e líder em tecnologia, com um histórico comprovado de entrega de soluções tecnológicas avançadas que impulsionam o crescimento e o sucesso dos negócios. Fundada em 2023 por um grupo de engenheiros e empresários visionários, a Super Tecnologia Inc tem a missão de empregar tecnologias revolucionárias para resolver os desafios mais complexos do mundo dos negócios.</p>
          {/* Substitua 'caminho_para_imagem' com o caminho da sua imagem */}
          <img className="logo-template" src='./images/template01/sobre.jpg' alt='Sobre nós' />
        </section>
        <section className="products">
          <h2>Nossos Produtos</h2>
          <p>Nós na Super Tecnologia Inc somos apaixonados por criar produtos e soluções que tornem a vida mais fácil e os negócios mais eficientes. Nossos produtos incluem uma ampla gama de soluções de software e hardware, desde sistemas de gerenciamento de dados empresariais a dispositivos inteligentes e wearables. Todos os nossos produtos são construídos com uma coisa em mente - ajudar nossos clientes a atingir seus objetivos de negócios e superar suas expectativas.</p>
          {/* Substitua 'caminho_para_imagem' com o caminho da sua imagem */}
          <img className="logo-template" src='./images/template01/sobre.jpg' alt='Produtos' />
        </section>
        <section className="specialties">
          <h2>Nossas Especialidades</h2>
          <p>Nossa equipe de especialistas é formada por profissionais de diversas áreas, o que nos permite oferecer uma gama completa de serviços e soluções para nossos clientes. Além de nossas soluções de software e hardware, nós também oferecemos consultoria em TI, serviços de infraestrutura em nuvem, desenvolvimento de aplicativos móveis, design de interface do usuário e experiência do usuário, segurança cibernética e muito mais. Independentemente do desafio tecnológico que sua empresa esteja enfrentando, nossa equipe tem o conhecimento e a experiência para encontrar uma solução.</p>
          {/* Substitua 'caminho_para_imagem' com o caminho da sua imagem */}
          <img className="logo-template" src='./images/template01/sobre.jpg' alt='Especialidades' />
        </section>
        <section className="contact">
          <h2>Contate-nos</h2>
          <p>Email: contato@supertecnologia.com</p>
          <p>Telefone: (11) 1234-5678</p>
          <p>Endereço: Rua da Inovação, 123 - São Paulo, SP</p>
          {/* Substitua 'caminho_para_imagem' com o caminho da sua imagem */}
          <img className="logo-template" src='./images/template01/sobre.jpg' alt='Contato' />
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Super Tecnologia Inc</p>
      </footer>
    </div>
  );
};

export default Template03;
