/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import { pageTitleWithSeparator } from '../common-variables';

const PictureTheMusic: React.FC = () => {
  useEffect(() => {
    document.title = pageTitleWithSeparator + 'Picture the Music';
  }, []);

  return (
    <div className="title">
      <img src="images/pages/title_PictureTheMusic.png" alt="Picture the Music" /><br />
      <div>
        <table border={0} width="100%">
          <tbody>
            <tr>
              <td valign="top">
                <img src="images/pages/main_PictureTheMusic.jpg" width="300px" alt="Picture the Music" />
              </td>
              <td valign="top" style={{ fontSize: '16px', fontWeight: 'normal' }}>
                "Picture the Music is a creative art competition for students in kindergarten through sixth grade who create artwork inspired by a selected symphonic work."  ~<a href="http://www.slso.org" target="_blank" rel="noreferrer">www.slso.org</a>
                <br></br><br></br>
                Students at Emge Elementary will participate in the Picture the Music contest given by the Saint Louis Symphony Orchestra.   Students will listen to a selection of music provided by the Saint Louis Symphony.  Students are then encouraged to create a piece of artwork that illustrates their interpretation of the music.  Seven Emge Elementary students will have their work selected to enter the contest.  The Saint Louis Symphony uses a panel of judges to select 100 winners for their exhibition.  After the judging process takes place, students will be notified if their artwork is one of the winning pieces.  Winning artworks will first be displayed at Powell Symphony Hall, and then travel to several other St. Louis locations.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PictureTheMusic;
