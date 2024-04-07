import React, { useEffect } from 'react';
import { pageTitleWithSeparator } from '../common-variables';

const DistrictK12ArtShow: React.FC = () => {
  console.log('Rendering District K-12 Art Show Page');

  useEffect(() => {
    document.title = pageTitleWithSeparator + 'District K-12 Art Show';
  }, []);

  return (
    <div className="title">
      <img src="images/pages/title_DistrictK12ArtShow.png" alt="District K-12 Art Show" /><br />
      <div>
        <table border={0} width="100%">
          <tbody>
            <tr>
              <td valign="top">
                <img src="images/pages/main_sccmap.gif" width="400px" alt="District K-12 Art Show" />
              </td>
              <td valign="top" style={{ fontSize: '16px', fontWeight: 'normal' }}>
                Dates: TBA... Spring / 2013<br></br><br></br>
                Don't forget to bring your camera...<br></br><br></br>
                Location: Fine Arts Building (See Map - Building #4)<br></br><br></br>
                Directions to SCC:<br></br>
                Adddress: 4601 Mid Rivers Mall Drive<br></br>
                Phone: 636-922-8000<br></br><br></br>
                From Interstate 70 - Drive South on Mid Rivers Mall drive for approximately 3 miles. The campus is located on the right side of the street. Turn right onto Cottleville Parkway. Turn right at the first or second light to enter the campus.<br></br><br></br>
                From Highway 40 - Turn onto Highway 94 North. Turn left onto Mid Rivers Mall Drive and drive approximately 2 miles. The college is located on the left side of the street. Turn left onto Cottleville Parkway. Turn right at the first or second light to enter the campus.
                <br></br><br></br>
                <div className="title">2011 Fort Zumwalt School District K-12 Art Show</div>
                Take a look at the 2011 District K-12 Art Show:
                <br /><br />
                <table>
                  <tbody>
                    <tr><td valign="middle"><a href="https://naea.digication.com/fzsd/Welcome2/published" target="_blank" rel="noreferrer">Fort Zumwalt School District K-12 Art Show</a>&nbsp;</td><td align="right" valign="middle"><a href="https://naea.digication.com/fzsd/Welcome2/published" target="_blank" rel="noreferrer"><img src="images/pages/main_FortZumwaltLogo.jpg" width="50px" alt="Fort Zumwalt Logo" /></a></td></tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DistrictK12ArtShow;
