import React, { useState, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
const Togglable = React.forwardRef(
  ({ showFormBtnText, hideFormBtnText = 'cancel', children }, ref) => {
    const [showActionButton, setActionButton] = useState(true)

    useImperativeHandle(ref, () => {
      return {
        toggleValue,
      }
    })

    const toggleValue = () => {
      setActionButton(!showActionButton)
    }

    return (
      <div>
        {showActionButton ? (
          <div>
            <button onClick={() => setActionButton(false)}>
              {showFormBtnText}
            </button>
          </div>
        ) : (
          <div>
            {children}
            <button onClick={() => setActionButton(true)}>
              {hideFormBtnText}
            </button>
          </div>
        )}
      </div>
    )
  }
)

Togglable.propTypes = {
  showFormBtnText: PropTypes.string.isRequired
}

Togglable.displayName = 'Togglable'


export default Togglable
