import { useColor } from '../context/color.provider';
import { useState } from 'react';
export default function ColorForm() {
  const [clr, setClr] = useState('#0033CC');
  const [grp, setGrp] = useState('');
  const { color, colorList, colorGroupList, setColor, setColorList, setColorGroupList, getColorById, getColorByValue, makeGroupList, addColor } = useColor();

  function saveColor(formData) {
    let _hex = formData.get('color');
    let _group = formData.get('group');
    addColor(_hex, _group);
    let randomcolor = `#${Math.floor(Math.random() * Math.pow(2, 24)).toString(16)}`;
    setClr(randomcolor);
    setGrp('');
  }
  return (
    <form action={saveColor} className="colorform">
      <p>
        <label htmlFor="color">Color</label>
        <input type="color" name="color" value={clr} onChange={(ev) => setClr(ev.target.value)} />
      </p>
      <p>
        <label htmlFor="group">Group</label>
        <input type="text" name="group" value={grp} onChange={(ev) => setGrp(ev.target.value)} />
      </p>
      <p>
        <button>Add Color</button>
      </p>
    </form>
  );
}
