import React, { useEffect } from 'react';
import { pageTitleWithSeparator } from '../common-variables';

const EmgeSchoolArtShow: React.FC = () => {
  console.log('Rendering Emge School Art Show Page');

  useEffect(() => {
    document.title = pageTitleWithSeparator + 'Emge School Art Show';
  }, []);

  return (
    <div className="title">
      <img src="images/pages/title_EmgeSchoolArtShow.png" alt="Emge School Art Show" /><br />
      <div>
        <table border={0} width="100%">
          <tbody>
            <tr>
              <td valign="top">
                <img src="images/pages/main_EmgeSchoolArtShow.gif" width="300px" alt="Emge School Art Show" />
              </td>
              <td valign="top" style={{ fontSize: '16px', fontWeight: 'normal' }}>
                Presented By: Emge Elementary School<br></br><br></br>
                What: Student Artwork<br></br><br></br>
                When: TBA... Spring / 2013<br></br><br></br>
                Where:<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;Emge Elementary School<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;250 Fallon Parkway<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;O' Fallon, MO 63366<br></br><br></br>
                Artwork can be found throughout the hallways of Emge Elementary.<br></br><br></br>
                Don't forget to bring your camera...
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmgeSchoolArtShow;
