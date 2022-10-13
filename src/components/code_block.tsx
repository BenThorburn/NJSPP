import React, { FunctionComponent } from 'react'

type Props = {
  children?: JSX.Element
}

const Code: FunctionComponent = ({children}: Props): JSX.Element => {
  return (
    <div className="mockup-code">
      <pre data-prefix="$"><code>cdscdsc</code></pre> 
      <pre data-prefix=">" className="text-warning"><code>installing...</code></pre> 
      <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
      {children}
    </div>
  )
}

export default Code