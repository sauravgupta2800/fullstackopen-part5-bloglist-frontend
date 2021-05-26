import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from '../Blog'

test('renders content', () => {
  const blog = {
    id:'ID-123456', title:'Blog title', author:'author-sauravgupta', url:'www.google.com', likes:10, user:{ userId:'userid-123' }
  }

  const component = render(
    <Blog blog={blog} isBlogOwner={true}/>
  )

  component.debug()

//   expect(component.container).toHaveTextContent(
//     'Component testing is done with react-testing-library'
//   )
})