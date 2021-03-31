import React, { useState } from 'react';
import { sounds } from './data';
import styles from './nsound.module.scss';

export default function () {
  const [currentSounds, setCurrentSounds] = useState<Array<{ name: string; url: string }>>([]);

  const handleTrackClick = (track: { name: string; url: string }, isActive: boolean) => (
    e: any,
  ) => {
    e.preventDefault();

    setCurrentSounds(_currentSounds => {
      if (isActive) {
        return [..._currentSounds.filter(_s => _s.name !== track.name)];
      }
      return [..._currentSounds, track];
    });
  };
  return (
    <div className="math doc-level-2">
      <div> Nsound</div>

      <div className={styles.list}>
        {sounds.map(sound => {
          const isActive = !!currentSounds.find(_s => _s.name === sound.name);
          return (
            <div
              className={`${styles.item} ${isActive ? styles.item_active : ''}`}
              key={sound.name}
            >
              <a href="" onClick={handleTrackClick(sound, isActive)}>
                {sound.name}
              </a>
            </div>
          );
        })}
      </div>

      {currentSounds.map(sound => {
        return (
          <div key={sound.name}>
            <audio src={sound.url} autoPlay={true} loop={true} />
          </div>
        );
      })}
    </div>
  );
}
