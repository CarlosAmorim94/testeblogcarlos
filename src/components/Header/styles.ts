import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`
export const Content = styled.div`
  width: 80%;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  width: 5rem;
  min-width: 3rem;
`
export const TextArea = styled.div`
  text-align: center;
`

export const Title = styled.h1`

`
export const Description = styled.h4`
  opacity: .6;

  @media (max-width: 600px) {
    font-size: .8rem;
  }
`