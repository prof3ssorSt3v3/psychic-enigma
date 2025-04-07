import Header from '../components/header';
import { useColor } from '../context/color.provider';
// import { NavLink } from 'react-router';
import ColorBox from '../components/color.box';
import Loading from '../components/loading';

export default function Grouped() {
  const { color, colorList, colorGroupList, setColor, setColorList, setColorGroupList, getColorById, getColorByValue, makeGroupList, addColor } = useColor();

  return (
    <div>
      <Header />
      <main>
        <h1>Grouped Color Categories</h1>

        <section>
          {Object.entries(colorGroupList).length == 0 && <Loading />}
          {Object.entries(colorGroupList).map((group) => {
            return (
              <div key={group[0]}>
                <h3>{group[0]}</h3>
                <section className="boxes">
                  {group[1].map((c) => (
                    <ColorBox key={c.id} clr={c} />
                  ))}
                </section>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
