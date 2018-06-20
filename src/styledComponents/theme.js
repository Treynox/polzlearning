import styled from 'styled-components'

export const Button = styled.button`
  padding: 5px 25px;
  background-color: #fad961;
  background-image: linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  font-family: sans-serif;
  filter: ${({ disabled }) => (disabled ? 'grayscale(1)' : 'hue-rotate(0deg)')};
  transition: filter 300ms linear;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:focus,
  &:hover {
    filter: ${({ disabled }) => !disabled && 'hue-rotate(45deg)'};
  }
`
