import React, { useEffect } from 'react';
import { pageTitleWithSeparator } from '../common-variables';

const ArtLinks: React.FC = () => {
    console.log('Rendering Art Links Page');

    useEffect(() => {
        document.title = pageTitleWithSeparator + 'Art Links';
    }, []);

    return (
        <div className="title">
            <img src="images/pages/title_ArtLinks.png" alt="Art Links" /><br />
            <div>
                <table border={0} width="100%">
                    <tbody>
                        <tr>
                            <td valign="top">
                                <img src="images/pages/main_ArtLinks.gif" width="300px" alt="Art Links" />
                            </td>
                            <td valign="top" style={{ fontSize: '16px', fontWeight: 'normal' }}>
                                These art websites are awesome... see for yourself... check them out!
                                <br></br><br></br>
                                <a href="http://www.crayola.com" target="_blank" rel="noreferrer">Crayola - www.crayola.com</a>
                                <br></br><br></br>
                                <a href="http://www.ericcarle.com" target="_blank" rel="noreferrer">Eric Carle - www.ericcarle.com</a>
                                <br></br><br></br>
                                <a href="http://www.haringkids.com" target="_blank" rel="noreferrer">Keith Haring for Kids - www.haringkids.com</a>
                                <br></br><br></br>
                                <a href="http://www.kidzart.org" target="_blank" rel="noreferrer">Kidzart - www.kidzart.org</a>
                                <br></br><br></br>
                                <a href="http://www.draw3d.com" target="_blank" rel="noreferrer">Mark Kistler's Imagination Station - www.draw3d.com</a>
                                <br></br><br></br>
                                <a href="https://www.moma.org/visit/families/" target="_blank" rel="noreferrer">Museum of Modern Art (families)</a>
                                <br></br><br></br>
                                <a href="http://www.nga.gov/kids/zone" target="_blank" rel="noreferrer">National Gallery of Art (kids zone) - www.nga.gov/kids/zone</a>
                                <br></br><br></br>
                                <a href="http://www.si.edu" target="_blank" rel="noreferrer">Smithsonian - www.si.edu</a>
                                <br></br><br></br>
                                <a href="http://www.slam.org" target="_blank" rel="noreferrer">St. Louis Art Museum - www.slam.org</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ArtLinks;
