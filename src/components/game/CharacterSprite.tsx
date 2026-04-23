import { useState } from 'react';
import type { CharacterDisplay } from '../../types/scene';
import type { CharacterDefinition } from '../../types/character';
import styles from './CharacterSprite.module.css';

interface CharacterSpriteProps {
  display: CharacterDisplay;
  character: CharacterDefinition;
  isSpeaking?: boolean;
}

export function CharacterSprite({ display, character, isSpeaking }: CharacterSpriteProps) {
  const [imgError, setImgError] = useState(false);

  const expression =
    isSpeaking && character.sprites?.['talking'] ? 'talking' : display.expression;
  const spritePath = character.sprites?.[expression] ?? character.sprites?.['normal'];
  const src = spritePath
    ? `${import.meta.env.BASE_URL}assets/${spritePath}`
    : null;

  const posClass =
    display.position === 'left'
      ? styles.left
      : display.position === 'right'
        ? styles.right
        : styles.center;

  const bottomPx = 120 + (display.y_offset ?? character.y_offset ?? 0);

  return (
    <div className={`${styles.root} ${posClass}`} style={{ bottom: `${bottomPx}px` }}>
      {src && !imgError ? (
        <img
          className={styles.img}
          src={src}
          alt={character.name}
          onError={() => setImgError(true)}
        />
      ) : (
        <div className={styles.placeholder}>
          <span className={styles.placeholderName}>{character.name}</span>
        </div>
      )}
    </div>
  );
}
