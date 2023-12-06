import { Outlet } from "react-router-dom";

import React from 'react'

export const layout = () => {
  return (
      <main>
          <Outlet/>
    </main>
  )
}
