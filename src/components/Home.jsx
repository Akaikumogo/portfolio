export default function Home() {
  return (
    <div className="Home" data-aos="fade-up">
      <div className="homeContainer">
        <div className="homeImage">
          <img
            className="akaikumogosimage"
            src="https://avatars.githubusercontent.com/u/98486553?v=4"
            alt=""
          />
        </div>
        <div className="homeData">
          <div className="myName">
            <h1> Sarvarbek Xazratov</h1>
          </div>
          <div className="MyData">
            <h3 className="myDescription">
              Hello. I am Sarvarbek Xazratov Full-stack developer. I have been
              in this field since 2019.
            </h3>
          </div>
          <div className="socials">
            <a target="_blank" href="https://t.me/Akaikumogo" rel="noreferrer">
              Telegram
            </a>
            <a
              target="_blank"
              href="https:instagram.com/Akaikumogo"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              target="_blank"
              href="https:github.com/akaikumogo/"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
