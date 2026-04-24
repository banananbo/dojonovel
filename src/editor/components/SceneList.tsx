import { useState } from 'react';
import type { RawScene } from '../hooks/useYamlFs';

interface SceneListProps {
  scenes: RawScene[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onAddScene: (parentId: string | null) => void;
}

function SceneItem({ scene, depth, selectedId, onSelect, onAddScene }: {
  scene: RawScene;
  depth: number;
  selectedId: string | null;
  onSelect: (id: string) => void;
  onAddScene: (parentId: string | null) => void;
}) {
  const [open, setOpen] = useState(depth === 0);
  const isSelected = scene.id === selectedId;
  const hasChildren = (scene.child_scenes?.length ?? 0) > 0;

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '4px 6px',
          paddingLeft: depth * 14 + 6,
          borderRadius: 4,
          cursor: 'pointer',
          background: isSelected ? '#3a3a6e' : 'transparent',
          borderLeft: isSelected ? '3px solid #5c6bc0' : '3px solid transparent',
          marginBottom: 1,
          userSelect: 'none',
        }}
        onClick={() => onSelect(scene.id)}
      >
        <span
          style={{ marginRight: 4, fontSize: 10, color: '#555', flexShrink: 0, width: 10 }}
          onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }}
        >
          {hasChildren ? (open ? '▼' : '▶') : '•'}
        </span>
        <span style={{
          fontSize: 12,
          color: isSelected ? '#c5cae9' : '#aaa',
          fontWeight: isSelected ? 'bold' : 'normal',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          flex: 1,
        }}>
          {scene.id}
        </span>
        {isSelected && (
          <span
            title="子シーンを追加"
            style={{ marginLeft: 4, color: '#5c6bc0', fontSize: 13, lineHeight: 1 }}
            onClick={(e) => { e.stopPropagation(); setOpen(true); onAddScene(scene.id); }}
          >
            ＋
          </span>
        )}
      </div>
      {open && (hasChildren || isSelected) && (
        <div>
          {scene.child_scenes?.map((child) => (
            <SceneItem key={child.id} scene={child} depth={depth + 1} selectedId={selectedId} onSelect={onSelect} onAddScene={onAddScene} />
          ))}
        </div>
      )}
    </div>
  );
}

export function SceneList({ scenes, selectedId, onSelect, onAddScene }: SceneListProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: 1, overflow: 'auto' }}>
        {scenes.map((s) => (
          <SceneItem key={s.id} scene={s} depth={0} selectedId={selectedId} onSelect={onSelect} onAddScene={onAddScene} />
        ))}
      </div>
      <button
        className="primary"
        onClick={() => onAddScene(null)}
        style={{ margin: '8px 0 0', width: '100%', fontSize: 12 }}
      >
        ＋ トップレベルに追加
      </button>
    </div>
  );
}
