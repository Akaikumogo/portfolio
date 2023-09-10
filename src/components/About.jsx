import { useGlobalContext } from "../Context";

export default function About() {
  const { date } = useGlobalContext();
  return (
    <div className="About">
      <div className="aboutContainer">
        <div className="aboutAuthor">
          <div className="aboutAuthorContainer">
            <div className="aboutTitle">
              <h2 className="aboutTitleText">About</h2>
              <h1 className="MainTitle">About ME</h1>
            </div>
            <div className="MyPicture">
              <img src="" alt="My picture Here" />
            </div>
            <div className="myNameAndProfession">
              <h1 className="myName">Sarvarbek Xazratov</h1>
              <h2 className="myDescription">Full-stack developer</h2>
            </div>
            <p className="aboutHorizontal"></p>

            <div className="subSkills">
              <p className="myDescription">
                Ability to work with a team. Ability to work with Git and
                Github. Python Javascript basics, mtproto and telegram bot api,
                FastApi, Aiogram, Pyrogram, React js. BEM quality website
                service
              </p>
            </div>
            <p className="aboutHorizontal"></p>

            <div className="aboutData">
              <div className="aboutLeft">
                <div className="column">
                  <h1 className="aboutDataTitels">Age:</h1>
                  <h1 className="aboutDatas">{date.getFullYear() - 2005}</h1>
                </div>
                <div className="column">
                  <h1 className="aboutDataTitels">Email:</h1>
                  <a href="mailto:sarvarbekred147@gmail.com">
                    sarvarbekred147@gmail
                  </a>
                </div>
              </div>
              <div className="aboutright">
                <div className="column">
                  <h1 className="aboutDataTitels">Nationality:</h1>
                  <h1 className="aboutDatas">Uzbekistan</h1>
                </div>
                <div className="column">
                  <h1 className="aboutDataTitels">Study:</h1>
                  <h1 className="aboutDatas">Najot Ta'lim , KIUT</h1>
                </div>
                <div className="column">
                  <h1 className="aboutDataTitels">Dagree:</h1>
                  <h1 className="aboutDatas">High-school</h1>
                </div>
                <div className="column">
                  <h1 className="aboutDataTitels">Freelance:</h1>
                  <h1 className="aboutDatas">Available(partly)</h1>
                </div>
              </div>
            </div>
            <p className="aboutHorizontal"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
