import type { RawArea } from '../hooks/useYamlFs';

interface AreaPanelProps {
  areas: RawArea[];
  selectedId: string | null;
  allSceneIds: string[];
  onSelect: (id: string | null) => void;
  onAreaChange: (areas: RawArea[]) => void;
}

export function AreaPanel({ areas, selectedId, allSceneIds, onSelect, onAreaChange }: AreaPanelProps) {
  const selected = areas.find((a) => a.id === selectedId) ?? null;

  function updateSelected(patch: Partial<RawArea>) {
    onAreaChange(areas.map((a) => (a.id === selectedId ? { ...a, ...patch } : a)));
    if (patch.id !== undefined) {
      onSelect(patch.id);
    }
  }

  function deleteSelected() {
    onAreaChange(areas.filter((a) => a.id !== selectedId));
    onSelect(null);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, height: '100%', overflow: 'auto' }}>
      {selected && (
        <div style={{ background: '#2a2a3e', borderRadius: 6, padding: 12, marginBottom: 8 }}>
          <div style={{ fontWeight: 'bold', marginBottom: 8, color: '#ffb300' }}>選択中エリア</div>

          <label>ID</label>
          <input
            value={selected.id}
            onChange={(e) => updateSelected({ id: e.target.value })}
          />

          <label>ラベル</label>
          <input
            value={selected.label}
            onChange={(e) => updateSelected({ label: e.target.value })}
            placeholder="例: 郵便受け"
          />

          <label>遷移先シーン (next_scene)</label>
          <select
            value={selected.next_scene ?? ''}
            onChange={(e) => updateSelected({ next_scene: e.target.value || null })}
          >
            <option value="">なし</option>
            {allSceneIds.map((id) => (
              <option key={id} value={id}>{id}</option>
            ))}
          </select>

          <label>座標・サイズ</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
            <div>
              <label>X</label>
              <input type="number" value={selected.x} onChange={(e) => updateSelected({ x: Number(e.target.value) })} />
            </div>
            <div>
              <label>Y</label>
              <input type="number" value={selected.y} onChange={(e) => updateSelected({ y: Number(e.target.value) })} />
            </div>
            <div>
              <label>幅</label>
              <input type="number" value={selected.width} onChange={(e) => updateSelected({ width: Number(e.target.value) })} />
            </div>
            <div>
              <label>高さ</label>
              <input type="number" value={selected.height} onChange={(e) => updateSelected({ height: Number(e.target.value) })} />
            </div>
          </div>

          <div style={{ marginTop: 12 }}>
            <button className="danger" onClick={deleteSelected}>削除</button>
          </div>
        </div>
      )}

      <div style={{ background: '#2a2a3e', borderRadius: 6, padding: 12, flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <div style={{ fontWeight: 'bold' }}>エリア一覧</div>
          <button
            className="primary"
            style={{ padding: '3px 10px', fontSize: 12 }}
            onClick={() => {
              const newId = `area_new_${Date.now()}`;
              const newArea: RawArea = { id: newId, x: 100, y: 100, width: 120, height: 80, label: '', next_scene: null, condition: null };
              onAreaChange([...areas, newArea]);
              onSelect(newId);
            }}
          >
            ＋ 追加
          </button>
        </div>
        {areas.length === 0 && (
          <div style={{ color: '#666', fontSize: 12 }}>エリアなし。「＋ 追加」または画像上でドラッグして追加。</div>
        )}
        {areas.map((a) => (
          <div
            key={a.id}
            onClick={() => onSelect(a.id)}
            style={{
              padding: '6px 8px',
              borderRadius: 4,
              cursor: 'pointer',
              background: a.id === selectedId ? '#3a3a6e' : 'transparent',
              borderLeft: a.id === selectedId ? '3px solid #ffb300' : '3px solid transparent',
              marginBottom: 2,
            }}
          >
            <div style={{ fontWeight: a.id === selectedId ? 'bold' : 'normal' }}>
              {a.label || a.id}
            </div>
            <div style={{ fontSize: 11, color: '#888' }}>
              {a.x},{a.y} {a.width}×{a.height}
              {a.next_scene && ` → ${a.next_scene}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
