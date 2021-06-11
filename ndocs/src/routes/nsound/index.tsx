import React, { SyntheticEvent, useEffect, useState } from 'react'
import { sounds } from './data'
import styles from './nsound.module.scss'
import Mdx from './nsound.mdx'
import { If, Not, Switch, For } from '~/components/EDirectives'

type Track = { name: string; url: string }

const Trigger = (currentSounds: Track[], handleTrackClick: any) => (item: Track) => {
  const isActive = !!currentSounds.find(_s => _s.name === item.name)
  return (
    <div className={`${styles.item} ${isActive ? styles.item_active : ''}`} key={item.name}>
      <a href="" onClick={handleTrackClick(item, isActive)}>
        {item.name}
      </a>
    </div>
  )
}

const Audio = (item: Track) => (
  <div>
    <audio src={item.url} autoPlay={true} loop={true} />
  </div>
)

export default function () {
  const [currentSounds, setCurrentSounds] = useState<Array<Track>>([])
  const [check, setCheck] = useState(true)

  const handleTrackClick = (track: Track, isActive: boolean) => (e: SyntheticEvent) => {
    e.preventDefault()

    setCurrentSounds(_currentSounds => {
      if (isActive) {
        return [..._currentSounds.filter(_s => _s.name !== track.name)]
      }
      return [..._currentSounds, track]
    })
  }

  useEffect(() => {
    // @ts-ignore
    import('./nsound.ts')
  }, [])

  return (
    <div className="math doc-level-2">
      <Mdx />
      <div className={styles.list}>
        <For data={sounds} render={Trigger(currentSounds, handleTrackClick)} />
      </div>

      <For data={currentSounds} render={Audio} />
    </div>
  )
}
