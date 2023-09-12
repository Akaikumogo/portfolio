import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";

export default function Portfolio() {
  const { portfolio } = useGlobalContext();
  return (
    <>
      <div className="portfolio">
        <div className="portfolioContainer">
          {portfolio.map((item) => {
            return (
              <div className="portfolioItem" key={item.id}>
                <div className="portfolioImageblock">
                  <img
                    className="portfolioimage"
                    src={item.image}
                    alt={item.image}
                  />
                </div>
                <div className="portfolioTitle">{item.title}</div>
                <div className="portfolioDescription">{item.description}</div>
                <div className="more">
                  <Link to={item.link}>More</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
