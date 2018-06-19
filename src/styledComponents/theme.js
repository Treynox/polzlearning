import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px 25px;
  background-color: #FAD961;
  background-image: linear-gradient(90deg, #FAD961 0%, #F76B1C 100%);
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  font-family: sans-serif;
  filter: hue-rotate(0deg);
  transition: filter 300ms linear;
  cursor: pointer;
  &:focus,
  &:hover {
    filter: hue-rotate(45deg);
  }
`;