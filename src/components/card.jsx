import React from 'react';
import './card.css';

const Card = () => {
  return (
  <div className='cards'>
    <div className="card">
      <img src="chytrazarovka.png" className="card-img-top" alt="..." />
        <h5 className="card-title">Chytrá žárovka Playa Azul</h5>
        <p className="card-text">umožňují ovládání intenzity a barvy světla přes mobilní aplikaci nebo hlasové asistenty</p>
        <a href="#" className="btn btn-primary">Přidat do košíku</a>
      </div>
      <div className='card'>
        <img src="chytrazasuvka.png" className="card-img-top" alt="..." />
          <h5 className="card-title">Chytré zásuvky</h5>
          <p className="card-text">poskytují možnost dálkového ovládání elektrických zařízení a monitorování jejich spotřeby</p>
          <a href="#" className="btn btn-primary">Přidat do košíku</a>
        </div>
        <div className='card'>
        <img src="robovysavac.png" className="card-img-top" alt="..." />
          <h5 className="card-title"></h5>
          <p className="card-text">automatizují úklid podlah a ušetří vám čas a práci, které můžete věnovat jiným aktivitám</p>
          <a href="#" className="btn btn-primary">Přidat do košíku</a>
        </div>
        <div className='card'>
        <img src="klimatizace.png" className="card-img-top" alt="..." />
          <h5 className="card-title">Klimatizace Ultra Cool</h5>
          <p className="card-text">zajišťuje příjemnou teplotu v domácnosti během horkých letních dnů</p>
          <a href="#" className="btn btn-primary">Přidat do košíku</a>
        </div>
      </div>
  );
};


export default Card;
