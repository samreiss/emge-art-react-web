import React, { useEffect } from 'react';
import { pageTitleWithSeparator } from '../common-variables';

const MeetNicoleReiss: React.FC = () => {
    console.log('Rendering Meet Mrs. Nicole Reiss Page');

    useEffect(() => {
        document.title = pageTitleWithSeparator + 'Meet Mrs. Nicole Reiss';
    }, []);

    return (
        <div className="title">
            <img src="images/pages/title_Bio.png" alt="Meet Mrs. Nicole Reiss" /><br />
            <div>
                <table border={0} width="100%">
                    <tbody>
                        <tr>
                            <td valign="top">
                                <img src="images/pages/main_Bio.gif" width="300px" alt="Meet Mrs. Nicole Reiss" />
                            </td>
                            <td valign="top" style={{ fontSize: '16px', fontWeight: 'normal' }}>
                                Mrs. Nicole Reiss has been teaching at Emge Elementary in O'Fallon, Missouri since the 2003-2004 school year. At Emge, she instructs students in Kindergarten through 5th grade. Her students have the opportunity to learn about art as a process as well as art through art history including a variety of artists and styles. After learning about an artist or style, students have the opportunity to create their own version of the artwork through drawing, painting, print making, ceramics, sculpture, collage, and papier-mâché.
                                <br></br><br></br>
                                Mrs. Nicole Reiss also sponsors Emge Elementary's Art Club. The club which is offered to 4th & 5th grade gives students the opportunity to go above and beyond their regular classroom curriculum. In Art Club, students work on their own art projects as well as art projects for the school.
                                <br></br><br></br>
                                Before joining the staff at Emge, she graduated from the University of Missouri - Columbia with a Bachelor of Science in Art Education. She also holds a Master of Arts in Art Education from Maryville University of Saint Louis.
                                <br></br><br></br>
                                "I absolutely love teaching elementary art. I feel that developing creativity in students through fine art is extremely important especially at such a young age. Creativity allows our students to be innovative thinkers, excellent problem solvers, and gives them a skill set that they can carry with them throughout their careers in education as well as into the workforce. I feel that every child is creative it is just a matter of providing them with meaningful opportunities to show and enhance their creative efforts opportunities to flourish. And so our creative efforts continue through our children our future." - Mrs. Nicole Reiss
                                <br></br><br></br>
                                "Happiness it lies in the joy of achievement, in the thrill of creative effort." - Vincent Van Gogh
                                <br></br><br></br>
                                <table border={0} width="100%">
                                    <tbody>
                                        <tr>
                                            <td width="50%" align="left">
                                                Art Instructor (K-5): Mrs. Nicole Reiss<br />
                                                Phone: 636.978.4186<br />
                                            </td>
                                            <td align="right">
                                                <a href="http://www.fz.k12.mo.us" target="_blank" rel="noopener noreferrer">Fort Zumwalt School District</a>&nbsp;
                                                <a href="http://www.fz.k12.mo.us" target="_blank" rel="noopener noreferrer">
                                                    <img src="images/pages/main_FortZumwaltLogo.jpg" width="50px" alt="Fort Zumwalt Logo" />
                                                </a>
                                            </td>
                                        </tr>
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

export default MeetNicoleReiss;
