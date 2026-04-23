import { useState, useEffect } from 'react';
import styles from './SceneBackground.module.css';

interface SceneBackgroundProps {
  backgroundPath?: string;
  locationName?: string;
}

export function SceneBackground({ backgroundPath, locationName }: SceneBackgroundProps) {
  const [imgError, setImgError] = useState(false);

  const src = backgroundPath
    ? `${import.meta.env.BASE_URL}assets/${backgroundPath}`
    : null;

  useEffect(() => { setImgError(false); }, [src]);

  return (
    <div className={styles.root}>
      {src && !imgError ? (
        <img
          className={styles.img}
          src={src}
          alt=""
          onError={() => setImgError(true)}
        />
      ) : (
        <div className={styles.fallback}>
          {locationName && (
            <span className={styles.locationName}>{locationName}</span>
          )}
        </div>
      )}
    </div>
  );
}
