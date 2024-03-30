import Image from 'next/image';
import WhyList from './components/UI/WhyList';
import { whyData, cardData } from './components/data/appData';
import Card from './components/UI/Card';
import { customersData } from './components/data/appData';
// import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="main">
      <div className="hero">
        <h1>Працюйте з професіоналами!</h1>
      </div>

      <div className="container">
        <div className="why">
          <h2 className="title">Чому обирають саме нас:</h2>
          <div className="body">
            {whyData.map((item, index) => (
              <WhyList
                key={index}
                number={item.number}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="stability">
          <h2 className="title">Стабільність - ознака майстерності</h2>
          <div className="body">
            {cardData.map((item, index) => (
              <Card
                key={index}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="partners">
          <h2>НАШІ ПАРТНЕРИ</h2>

          <div className="brands">
            <div className="brands-wrapper">
              <span>
                {customersData['customers-image'].map((item, index) => (
                  <Image
                    src={item.img}
                    alt={`customers-img-${index}`}
                    key={index + 1}
                    width={200}
                    height={70}
                  />
                ))}
              </span>
              <span>
                {customersData['customers-image'].map((item, index) => (
                  <Image
                    src={item.img}
                    alt={`customers-img-${index}`}
                    key={index + 1}
                    width={200}
                    height={70}
                  />
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
