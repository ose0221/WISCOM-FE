import * as D from './ProjectStyle';
import DeveloperProfile from './DeveloperProfile.jsx';

import BackBlue from '../../img/Project/BackgroundBlue.svg';
import BackGreen from '../../img/Project/BackgroundGreen.svg';
import BackYellow from '../../img/Project/BackgroundYellow.svg';

const backgroundImages = [BackGreen, BackBlue, BackGreen, BackYellow];

const Developer = ({ data }) => {
  const developerLength = data && data.developer.length;
  const upBoxData = data && data.developer.slice(2, developerLength);
  const downBoxData = data && data.developer.slice(0, Math.min(2, developerLength));
  return (
    <D.DeveloperContainer>
      {data && (
        <>
          <D.DeTitle>DEVELOPER</D.DeTitle>
          <D.UpBox>
            {upBoxData.map((developer, index) => (
              <DeveloperProfile
                key={index}
                bg={backgroundImages[index]}
                image={developer.image}
                name={developer.name}
                impression={developer.impression}
              />
            ))}
          </D.UpBox>

          <D.DownBox>
            {downBoxData.map((developer, index) => (
              <DeveloperProfile
                key={index}
                bg={backgroundImages[Math.min(index + 2, backgroundImages.length - 1)]}
                image={developer.image}
                name={developer.name}
                impression={developer.impression}
              />
            ))}
          </D.DownBox>
        </>
      )}
    </D.DeveloperContainer>
  );
};

export default Developer;
