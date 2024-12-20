import styled from 'styled-components'
import { cores } from '../../styles'

import { HashLink } from 'react-router-hash-link'

export const Container = styled.footer`
  background-color: ${cores.cinza};
  padding: 32px 0;
  font-size: 14px;
`

export const SectionTitle = styled.h4`
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
  margin-bottom: 10px;
`

export const Link = styled(HashLink)`
  color: ${cores.cinzaClaro};
  text-decoration: none;
  margin-right: 8px;

  &:hover {
    color: ${cores.branca};
  }
`

export const FooterSection = styled.div`
  margin-bottom: 64px;

  p {
    margin-bottom: 10px;
  }
`
export const Borda = styled.div`
  border: 1px solid ${cores.branca};

  margin-top: 10px;
`
