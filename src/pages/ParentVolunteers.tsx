import React, { useEffect } from 'react';
import { pageTitleWithSeparator } from '../common-variables';

const ParentVolunteers: React.FC = () => {
  console.log('Rendering Parent Volunteers Page');

  useEffect(() => {
    document.title = pageTitleWithSeparator + 'Parent Volunteers';
  }, []);

  return (
    <div className="title">
      <img src="images/pages/title_ParentVolunteers.png" alt="Parent Volunteers" /><br />
      <div>
        <table border={0} width="100%">
          <tbody>
            <tr>
              <td valign="top">
                <img src="images/pages/main_ParentVolunteers.gif" width="300px" alt="Parent Volunteers" />
              </td>
              <td valign="top" style={{ fontSize: '16px', fontWeight: 'normal' }}>
                Are you interested in volunteering?  The art department is looking for parent volunteers for the 2012-2013 school year.  If you are able to frame/hang artwork throughout the year please contact Mrs. Nicole Reiss at Emge Elementary.  The framing/hanging would require only an hour or so of your time per visit.  If you are interested in volunteering, we can work out a time that best fits your schedule any Monday-Friday from 9 a.m. - 4 p.m.  Thank you in advance for your help, it is greatly appreciated!
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ParentVolunteers;
