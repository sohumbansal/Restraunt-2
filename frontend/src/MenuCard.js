import React from 'react';

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--container">
        {menuData.map((curElem) => {

            const {id, name, category, image, description} = curElem;

          return (
            <>
              <div className='card-container' key={id} >
                <div className='card'>
                  <div className='card-body'>
                    <span className='card-number card-circle number'>{id}</span>
                    <span className='card-author subtle'>{name}</span>
                    <h2 className='card-name'>{name}</h2>
                    <span className='card-description subtle'>
                      {description}
                    </span>
                    <div className='card-read'>Read</div>
                    <img src={image} alt="images" className='card-media' />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}

export default MenuCard;
