import { createContext, useContext, useEffect, useState } from 'react';
import { ColorError, API } from '../api/api';

const ColorContext = createContext();

function ColorProvider(props) {
  const [color, setColor] = useState(null); //the current focused color object
  const [colorList, setColorList] = useState([]); //the current list of colors
  const [colorGroupList, setColorGroupList] = useState({}); //the current grouped object of lists

  useEffect(() => {
    const api = new API();
    api.getColors().then((list) => {
      setColorList(list);
      //convert list to grouped list
      makeGroupList(list);
    });
  }, []);

  function getColorById(_id) {
    if (colorList.length == 0) return;
    let match = colorList.find((c) => {
      return c.id == _id;
    });
    setColor(match);
  }

  function getColorByValue(_hex) {
    let match = colorList.find((c) => c.hex == _hex);
    console.log(match);
    setColor(match);
  }

  function makeGroupList(list) {
    let grouped = list.reduce((existing, current) => {
      // console.log(current.group, current.group in existing);
      if (current.group in existing) {
        existing[current.group].push(current);
      } else {
        existing[current.group] = [current];
      }
      return existing;
    }, {});

    setColorGroupList(grouped);
  }

  function addColor(_group, _hex) {
    let obj = {
      id: crypto.randomUUID(),
      group: _group,
      hex: _hex,
    };
    setColor(obj);
    colorList.push(obj);
    setColorList([...colorList]);
  }

  return <ColorContext.Provider {...props} value={{ color, colorList, colorGroupList, setColor, setColorList, setColorGroupList, getColorById, getColorByValue, makeGroupList, addColor }} />;
}

function useColor() {
  const context = useContext(ColorContext);
  if (!context) throw new Error('Hook being used outside of Provider');
  return context;
}

export { useColor, ColorProvider };
