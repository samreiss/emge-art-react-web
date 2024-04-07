import React, { useEffect } from 'react';
import { pageTitle } from '../common-variables';

const Index: React.FC = () => {
  console.log('Rendering Index Page');

  useEffect(() => {
    document.title = pageTitle;
  }, []);

  return (
    <div>
      <table cellSpacing={0} cellPadding={0} border={1} width="100%" className="grid">
        <thead>
          <tr>
            <th>Kindergarten</th>
            <th>1st Grade</th>
            <th>2nd Grade</th>
            <th>3rd Grade</th>
            <th>4th Grade</th>
            <th>5th Grade</th>
          </tr>
        </thead>
        <tbody>
          {/* 1st Row */}
          <tr>
            <td align="center">
              <a href="presentations/kindergarten/Helen Frankenthaler.pptx" className="header">
                <img src="images/kindergarten/Frankenthaler.jpg" height="100px" style={{ borderStyle: "none" }} alt="Helen Frankenthaler" />
                <br />
                <span>Helen Frankenthaler</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/first/Piet Mondrian.pptx" className="header">
                <img src="images/first/Mondrian.jpg" height="100px" style={{ borderStyle: "none" }} alt="Piet Mondrian - Landscape" />
                <br />
                <span>Piet Mondrian - Landscape</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/second/Piet Mondrian.pptx" className="header">
                <img src="images/second/Mondrian.jpg" height="100px" style={{ borderStyle: "none" }} alt="Piet Mondrian" />
                <br />
                <span>Piet Mondrian</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/third/Joan Miro.pptx" className="header">
                <img src="images/third/Miro.jpg" height="100px" style={{ borderStyle: "none" }} alt="Joan Miro" />
                <br />
                <span>Joan Miro</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/fourth/Georgia OKeefe.pptx" className="header">
                <img src="images/fourth/OKeefe.jpg" height="100px" style={{ borderStyle: "none" }} alt="Georgia O'Keefe" />
                <br />
                <span>Georgia O'Keefe</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/fifth/Alexander Calder.pptx" className="header">
                <img src="images/fifth/Calder.jpg" height="100px" style={{ borderStyle: "none" }} alt="Alexander Calder" />
                <br />
                <span>Alexander Calder</span>
              </a>
            </td>
          </tr>
          {/* 2nd Row */}
          <tr>
            <td align="center">
              <a href="presentations/kindergarten/Robert Motherwell.pptx" className="header">
                <img src="images/kindergarten/Motherwell.jpg" height="100px" style={{ borderStyle: "none" }} alt="Robert Motherwell" />
                <br />
                <span>Robert Motherwell</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/first/Bridget Riley Op Art.pptx" className="header">
                <img src="images/first/Riley.jpg" height="100px" style={{ borderStyle: "none" }} alt="Bridget Riley - Op Art" />
                <br />
                <span>Bridget Riley - Op Art</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/second/Hans Hofmann.pptx" className="header">
                <img src="images/second/Hofmann.jpg" height="100px" style={{ borderStyle: "none" }} alt="Hans Hofmann" />
                <br />
                <span>Hans Hofmann</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/third/Frank Stella Paintings.pptx" className="header">
                <img src="images/third/Stella-Painting.jpg" width="150px" style={{ borderStyle: "none" }} alt="Frank Stella - Painting" />
                <br />
                <span>Frank Stella - Painting</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/fourth/Jasper Johns Flags.pptx" className="header">
                <img src="images/fourth/JASPERJOHNSFLAGS.jpg" height="100px" style={{ borderStyle: "none" }} alt="Jasper Johns - Flags" />
                <br />
                <span>Jasper Johns - Flags</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/fifth/Frank Stella Sculpture.pptx" className="header">
                <img src="images/fifth/Stella.jpg" height="100px" style={{ borderStyle: "none" }} alt="Frank Stella" />
                <br />
                <span>Frank Stella</span>
              </a>
            </td>
          </tr>
          {/* 3rd Row */}
          <tr>
            <td align="center">
              <a href="presentations/kindergarten/Kenneth Noland.pptx" className="header">
                <img src="images/kindergarten/Noland.jpg" height="100px" style={{ borderStyle: "none" }} alt="Kenneth Noland" />
                <br />
                <span>Kenneth Noland</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/first/Wassily Kandinsky.pptx" className="header">
                <img src="images/first/Kandinsky.jpg" height="100px" style={{ borderStyle: "none" }} alt="Wassily Kandinsky" />
                <br />
                <span>Wassily Kandinsky</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/second/Elements of Art Value.pptx" className="header">
                <img src="images/second/ElementsOfArtValue.jpg" width="150px" style={{ borderStyle: "none" }} alt="Elements of Art-Value" />
                <br />
                <span>Elements of Art-Value</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/third/Frank Stella Sculpture.pptx" className="header">
                <img src="images/third/Stella-Sculpture.jpg" height="100px" style={{ borderStyle: "none" }} alt="Frank Stella - Sculpture" />
                <br />
                <span>Frank Stella - Sculpture</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/fourth/Jasper Johns Numbers.pptx" className="header">
                <img src="images/fourth/JasperJohnsNumbers.jpg" height="100px" style={{ borderStyle: "none" }} alt="Jasper Johns - Numbers" />
                <br />
                <span>Jasper Johns - Numbers</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/fifth/Andy Goldsworthy.pptx" className="header">
                <img src="images/fifth/Goldsworthy.jpg" height="100px" style={{ borderStyle: "none" }} alt="Andy Goldsworthy" />
                <br />
                <span>Andy Goldsworthy</span>
              </a>
            </td>
          </tr>
          {/* 4th Row */}
          <tr>
            <td align="center">
              <a href="presentations/kindergarten/Jim Dine.pptx" className="header">
                <img src="images/kindergarten/Dine.jpg" height="100px" style={{ borderStyle: "none" }} alt="Jim Dine" />
                <br />
                <span>Jim Dine</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/first/Paul Klee.pptx" className="header">
                <img src="images/first/Klee.jpg" height="100px" style={{ borderStyle: "none" }} alt="Paul Klee" />
                <br />
                <span>Paul Klee</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/second/Paul Klee.pptx" className="header">
                <img src="images/second/Klee.jpg" height="100px" style={{ borderStyle: "none" }} alt="Paul Klee" />
                <br />
                <span>Paul Klee</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/third/Georgia OKeefe.pptx" className="header">
                <img src="images/third/OKeefe.jpg" height="100px" style={{ borderStyle: "none" }} alt="Georgia O'Keefe" />
                <br />
                <span>Georgia O'Keefe</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/fourth/Asian Art.pptx" className="header">
                <img src="images/fourth/AsianArt.jpg" height="100px" style={{ borderStyle: "none" }} alt="Asian Art" />
                <br />
                <span>Asian Art</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/fifth/Robert Rauschenberg.pptx" className="header">
                <img src="images/fifth/Rauschenberg.jpg" height="100px" style={{ borderStyle: "none" }} alt="Robert Rauschenberg" />
                <br />
                <span>Robert Rauschenberg</span>
              </a>
            </td>
          </tr>
          {/* 5th Row */}
          <tr>
            <td align="center">
              <a href="presentations/kindergarten/Piet Mondrian.pptx" className="header">
                <img src="images/kindergarten/Mondrian.jpg" height="100px" style={{ borderStyle: "none" }} alt="Piet Mondrian" />
                <br />
                <span>Piet Mondrian</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/first/Henri Matisse Cut Outs.pptx" className="header">
                <img src="images/first/Outs.jpg" height="100px" style={{ borderStyle: "none" }} alt="Henri Matisse-Cut Outs" />
                <br />
                <span>Henri Matisse-Cut Outs</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/second/Mark Rothko.pptx" className="header">
                <img src="images/second/Rothko.jpg" height="100px" style={{ borderStyle: "none" }} alt="Mark Rothko" />
                <br />
                <span>Mark Rothko</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/third/Romare Bearden.pptx" className="header">
                <img src="images/third/Bearden.jpg" height="100px" style={{ borderStyle: "none" }} alt="Romare Bearden" />
                <br />
                <span>Romare Bearden</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/fourth/Claude Monet Water Lilies.pptx" className="header">
                <img src="images/fourth/Monet.jpg" height="100px" style={{ borderStyle: "none" }} alt="Claude Monet" />
                <br />
                <span>Claude Monet</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/fifth/Vincent Van Gogh Texture.pptx" className="header">
                <img src="images/fifth/VanGogh.jpg" height="100px" style={{ borderStyle: "none" }} alt="Vincent Van Gogh" />
                <br />
                <span>Vincent Van Gogh</span>
              </a>
            </td>
          </tr>
          {/* 6th Row */}
          <tr>
            <td align="center">
              <a href="presentations/kindergarten/Henri Matisse Cut Outs.pptx" className="header">
                <img src="images/kindergarten/Matisse.jpg" height="100px" style={{ borderStyle: "none" }} alt="Henri Matisse" />
                <br />
                <span>Henri Matisse</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/first/Romare Bearden.pptx" className="header">
                <img src="images/first/Bearden.jpg" height="100px" style={{ borderStyle: "none" }} alt="Romare Bearden" />
                <br />
                <span>Romare Bearden</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/second/Jackson Pollock.pptx" className="header">
                <img src="images/second/Pollock.jpg" height="100px" style={{ borderStyle: "none" }} alt="Jackson Pollock" />
                <br />
                <span>Jackson Pollock</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/third/Paul Klee.pptx" className="header">
                <img src="images/third/Klee.jpg" height="100px" style={{ borderStyle: "none" }} alt="Paul Klee" />
                <br />
                <span>Paul Klee</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/fourth/Pablo Picasso Abstract Still Life.pptx" className="header">
                <img src="images/fourth/Picasso.jpg" height="100px" style={{ borderStyle: "none" }} alt="Pablo Picasso" />
                <br />
                <span>Pablo Picasso</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/fifth/Marcel Duchamp.pptx" className="header">
                <img src="images/fifth/Duchamp.jpg" height="100px" style={{ borderStyle: "none" }} alt="Marcel Duchamp" />
                <br />
                <span>Marcel Duchamp</span>
              </a>
            </td>
          </tr>
          {/* 7th Row */}
          <tr>
            <td align="center">
              <a href="presentations/kindergarten/Robert Motherwell.pptx" className="header">
                <img src="images/kindergarten/Motherwell.jpg" height="100px" style={{ borderStyle: "none" }} alt="Robert Motherwell" />
                <br />
                <span>Robert Motherwell</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/first/Bridget Riley Op Art.pptx" className="header">
                <img src="images/first/Riley.jpg" height="100px" style={{ borderStyle: "none" }} alt="Bridget Riley - Op Art" />
                <br />
                <span>Bridget Riley - Op Art</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/second/Hans Hofmann.pptx" className="header">
                <img src="images/second/Hofmann.jpg" height="100px" style={{ borderStyle: "none" }} alt="Hans Hofmann" />
                <br />
                <span>Hans Hofmann</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/third/Frank Stella Paintings.pptx" className="header">
                <img src="images/third/Stella-Painting.jpg" width="150px" style={{ borderStyle: "none" }} alt="Frank Stella - Painting" />
                <br />
                <span>Frank Stella - Painting</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/fourth/Jasper Johns Flags.pptx" className="header">
                <img src="images/fourth/JASPERJOHNSFLAGS.jpg" height="100px" style={{ borderStyle: "none" }} alt="Jasper Johns - Flags" />
                <br />
                <span>Jasper Johns - Flags</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/fifth/Frank Stella Sculpture.pptx" className="header">
                <img src="images/fifth/Stella.jpg" height="100px" style={{ borderStyle: "none" }} alt="Frank Stella" />
                <br />
                <span>Frank Stella</span>
              </a>
            </td>
          </tr>
          {/* 8th Row */}
          <tr>
            <td align="center">
              <a href="presentations/kindergarten/Kenneth Noland.pptx" className="header">
                <img src="images/kindergarten/Noland.jpg" height="100px" style={{ borderStyle: "none" }} alt="Kenneth Noland" />
                <br />
                <span>Kenneth Noland</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/first/Wassily Kandinsky.pptx" className="header">
                <img src="images/first/Kandinsky.jpg" height="100px" style={{ borderStyle: "none" }} alt="Wassily Kandinsky" />
                <br />
                <span>Wassily Kandinsky</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/second/Elements of Art Value.pptx" className="header">
                <img src="images/second/ElementsOfArtValue.jpg" width="150px" style={{ borderStyle: "none" }} alt="Elements of Art-Value" />
                <br />
                <span>Elements of Art-Value</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/third/Frank Stella Sculpture.pptx" className="header">
                <img src="images/third/Stella-Sculpture.jpg" height="100px" style={{ borderStyle: "none" }} alt="Frank Stella - Sculpture" />
                <br />
                <span>Frank Stella - Sculpture</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/fourth/Jasper Johns Numbers.pptx" className="header">
                <img src="images/fourth/JasperJohnsNumbers.jpg" height="100px" style={{ borderStyle: "none" }} alt="Jasper Johns - Numbers" />
                <br />
                <span>Jasper Johns - Numbers</span>
              </a>
            </td>
            <td align="center">
              <a href="presentations/fifth/Andy Goldsworthy.pptx" className="header">
                <img src="images/fifth/Goldsworthy.jpg" height="100px" style={{ borderStyle: "none" }} alt="Andy Goldsworthy" />
                <br />
                <span>Andy Goldsworthy</span>
              </a>
            </td>
          </tr>
          {/* 9th Row */}
          <tr>
            <td align="center">&nbsp;</td>
            <td align="center">&nbsp;</td>
            <td align="center">&nbsp;</td>
            <td align="center">&nbsp;</td>
            <td align="center">&nbsp;</td>
            <td align="center">
              <a href="presentations/fifth/Blue Dog.pptx" className="header">
                <img src="images/fifth/BlueDog.jpg" height="100px" style={{ borderStyle: "none" }} alt="Blue Dog" />
                <br />
                <span>Blue Dog</span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Index;
