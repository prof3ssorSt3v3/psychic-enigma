import Header from '../components/header';
import { useColor } from '../context/color.provider';
import ColorBox from '../components/color.box';

export default function Home() {
  const { color, colorList, colorGroupList, setColor, setColorList, setColorGroupList, getColorById, getColorByValue, makeGroupList, addColor } = useColor();

  console.log(colorList);

  return (
    <div>
      <Header />
      <main>
        <h1>Home Page</h1>
        <h2>All the available Colors</h2>
        <section className="boxes">
          {colorList.map((c) => (
            <ColorBox key={c.id} clr={c} />
          ))}
        </section>
      </main>
    </div>
  );
}
