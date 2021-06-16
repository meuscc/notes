import React, { useEffect } from 'react'

export function F({ name }: { name: string }) {
  console.log(document.getElementById('ddd'))
  useEffect(() => {
    console.log(document.getElementById('ddd'))
  }, [])

  return (
    <div>
      <div id="ddd">{name}</div>
    </div>
  )
}
