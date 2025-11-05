import React from 'react'

export default function Category({ cat }: { cat: string[] }) {
  return (
    <div>
      <h2>{cat[0]}</h2>
      <p>{cat[1]}</p>
    </div>
  )
}
