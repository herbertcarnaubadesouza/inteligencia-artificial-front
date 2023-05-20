import './leftside.scss';

function LeftSide() {
  return (
    <>
      <div className="left-side-container">
        <img src="./images/logo.svg"></img>
        <div className="progressBar-container">
          <div className="progress"></div>
          <div className="icons-container">
            <img src="./images/bag.svg"></img>
            <img src="./images/constructing.svg"></img>
            <img src="./images/location.svg"></img>
            <img src="./images/etiqueta.svg"></img>
            <img src="./images/diamond.svg"></img>
            <img src="./images/email.svg"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSide;
