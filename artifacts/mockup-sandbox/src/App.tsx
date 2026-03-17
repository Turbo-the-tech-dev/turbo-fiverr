import { useMemo, useState } from 'react';

type Panel = {
  id: string;
  title: string;
  description: string;
};

const panelData: Panel[] = [
  {
    id: 'status',
    title: 'API Health',
    description: 'Displays the live status of the API server.'
  },
  {
    id: 'mockups',
    title: 'Design Explorations',
    description: 'Capture layout experiments and interactive notes here.'
  }
];

export default function App() {
  const [selected, setSelected] = useState(panelData[0]);
  const handleSelect = (panel: Panel) => setSelected(panel);

  const summary = useMemo(() => {
    return `${selected.title}: ${selected.description}`;
  }, [selected]);

  return (
    <main className="sandbox">
      <aside className="sidebar">
        <h1>Mockup Sandbox</h1>
        <p>Swap panels to preview different presentations.</p>
        <div className="panel-list">
          {panelData.map((panel) => (
            <button
              key={panel.id}
              onClick={() => handleSelect(panel)}
              className={panel.id === selected.id ? 'active' : ''}
            >
              {panel.title}
            </button>
          ))}
        </div>
      </aside>
      <section className="panel">
        <h2>{selected.title}</h2>
        <p>{summary}</p>
        <dl>
          <dt>Last updated</dt>
          <dd>{new Date().toLocaleTimeString()}</dd>
          <dt>Notes</dt>
          <dd>Adjust the layout or add widgets as the story grows.</dd>
        </dl>
      </section>
    </main>
  );
}
