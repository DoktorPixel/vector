import Image from 'next/image';
const Card = ({ image, title, subtitle, key }) => {
  return (
    <div className="card_item" key={key}>
      <div className="image">
        <Image src={image} alt={`card image ${key}`} width={130} height={130} />
      </div>
      <div className="description">
        <p className="title">{title}</p>
        <p className="text">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
