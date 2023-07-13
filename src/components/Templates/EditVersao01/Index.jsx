import React from 'react';

function Index() {
  return (
    <div>
      <div className={`${modalOpen ? 'openModal' : 'closeModal'}`}>
        <div>
          <label>Alterar nome da Empresa</label>
          <input
            type="text"
            value={nomeEmpresaTemplate}
            onChange={(e) => setNomeEmpresaTemplate(e.target.value)}
          />
          <label>Alterar Slogan</label>
          <input
            type="text"
            value={randomSubTitleHeaderText}
            onChange={(e) => setRandomSubTitleHeaderText(e.target.value)}
          />
          <label htmlFor="imageInput">Alterar Banner</label>
          <input type="file" id="imageInput" onChange={handleImageChange} />
        </div>
      </div>
    </div>
  );
}

export default Index;
