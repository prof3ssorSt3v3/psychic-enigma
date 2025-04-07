import { useEffect } from 'react';
import Header from '../components/header';
import { useColor } from '../context/color.provider';
import { NavLink, useParams } from 'react-router';
import ColorBox from '../components/color.box';

export default function Color() {
  const { color, colorList, colorGroupList, setColor, setColorList, setColorGroupList, getColorById, getColorByValue, makeGroupList, addColor } = useColor();

  // loaded by color/:colorid
  const { colorid } = useParams();

  useEffect(() => {
    // console.log(colorid, colorList);
    if (colorList.length == 0) return;
    getColorById(colorid);
    //this will update the value of color
  }, [colorList]);

  return (
    <div>
      <Header />
      <main>
        <h1>Color {color ? `${color.hex} [${color.group}]` : 'Page'}</h1>
        <ColorBox clr={color} />
      </main>
    </div>
  );
}
