import React, { useEffect } from 'react';
import { pageTitleWithSeparator } from '../common-variables';

const DistrictOfficeArtDisplay: React.FC = () => {
  console.log('Rendering District Office Art Display Page');

  useEffect(() => {
    document.title = pageTitleWithSeparator + 'District Office Art Display';
  }, []);

  return (
    <div className="title">
      <img src="images/pages/title_DistrictOfficeArtDisplay.png" alt="District Office Art Display" /><br />
      <div>
        <table border={0} width="100%">
          <tbody>
            <tr>
              <td valign="top">
                <img src="images/pages/main_DistrictOfficeArtDisplay.gif" width="300px" alt="District Office Art Display" />
              </td>
              <td valign="top" style={{ fontSize: '16px', fontWeight: 'normal' }}>
                Presented By: Fort Zumwalt School District Administration Office along with Emge, Progress South, and Dardenne Elementary<br></br><br></br>
                Dates: March 2013<br></br><br></br>
                Featured Emge artists, due to the fact that meetings may be scheduled in the board room, please call before you go... 636.272.6620/636.240.2072(metro)<br></br><br></br>
                Fort Zumwalt District Office<br></br>
                110 Virgil Street<br></br>
                O'Fallon, MO 63366<br></br><br></br>
                Don't forget to bring your camera...
                <br></br><br></br>
                <div className="title">2011 District Landscape Show</div>
                Take a look at the 2011 District Landscape Show:
                <br /><br />
                <table>
                  <tbody>
                    <tr><td valign="middle"><a href="https://naea.digication.com/fzsd/landscape2011" target="_blank" rel="noreferrer">Fort Zumwalt School District Landscape Show</a>&nbsp;</td><td align="right" valign="middle"><a href="https://naea.digication.com/fzsd/landscape2011" target="_blank" rel="noreferrer"><img src="images/pages/main_FortZumwaltLogo.jpg" width="50px" alt="Fort Zumwalt Logo" /></a></td></tr>
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

export default DistrictOfficeArtDisplay;
