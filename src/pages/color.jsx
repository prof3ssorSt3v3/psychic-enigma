import { useEffect } from 'react';
import Header from '../components/header';
import Loading from '../components/loading';
import { useColor } from '../context/color.provider';
import { NavLink, redirect, useParams, useNavigate } from 'react-router';
import ColorBox from '../components/color.box';

export default function Color() {
  const { color, colorList, colorGroupList, setColor, setColorList, setColorGroupList, getColorById, getColorByValue, makeGroupList, addColor } = useColor();

  // loaded by color/:colorid
  const { colorid } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    // console.log(colorid, colorList);
    if (colorList.length == 0) return;
    try {
      getColorById(colorid);
      //this will update the value of color
    } catch (err) {
      if (err.name == 'ColorError') {
        console.warn('No Matching Color');
        nav('/');
        return;
      }
      console.warn(err.message);
      return;
    }
  }, [colorList]);

  return (
    <div>
      <Header />
      <main>
        <h1>Color {color ? `${color.hex} [${color.group}]` : 'Page'}</h1>
        {!color && <Loading />}
        {color && <ColorBox clr={color} />}
      </main>
    </div>
  );
}
