import styled from 'styled-components'


export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Define el número de columnas */
  grid-template-rows: repeat(2, 1fr); /* Puedes ajustar esto según tus necesidades */
  grid-template-areas:
    'header header header'
    'sidebar content content'
    'footer footer footer';
  gap: 1rem; /* Ajusta el espacio entre celdas según tus necesidades */
`;

export const Header = styled.div`
  grid-area: header;
`;

export const Sidebar = styled.div`
  grid-area: sidebar;
`;

export const Content = styled.div`
  grid-area: content;
`;

export const Footer = styled.div`
  grid-area: footer;
`;