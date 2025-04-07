import { useNavigate } from 'react-router';

export default function ColorBox({ clr }) {
  const nav = useNavigate();

  if (clr == null) return <div></div>;

  return (
    <div
      className="box"
      data-ref={clr.id}
      onClick={() => {
        nav(`/color/${clr.id}`);
      }}
    >
      <h3>{clr.hex}</h3>
      <p className="swatch" style={{ backgroundColor: `${clr.hex}` }}>
        {clr.group}
      </p>
    </div>
  );
}
