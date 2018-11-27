import styled from 'styled-components'

export const Main = styled.div`
  display: flex
  margin: auto
  margin-top: 150px
  width: 70%
`
export const Left = styled.div`
  flex:1 
`

export const Right = styled.div`
  flex:1
  padding: 10px
`
export const TextArea = styled.textarea`
  width: 70%
  height: 240px
  border-radius: 5px
  padding: 10px
`

export const Header = styled.header`
  background-color: #34394d
  color: white
  position: absolute
  top: 0
  width: 100%
  padding:25px 0
  text-align: center
`

export const Games = styled.div`
  margin: auto
  margin-top: 150px
  width: 70%
  text-align: center
`

export const Button = styled.button`
  margin:auto
  color: white
  background-color: #3A394D
  border-radius: 3px
  border: none
  outline: none
  width: 75%
  text-align: center
  padding: 10px
  margin-top: 20px
  cursor: pointer
`
export const Button2 = styled.button`
  margin:auto
  margin-right: 10px
  color: white
  background-color: #3A394D
  border-radius: 3px
  border: none
  outline: none
  width: 20%
  padding: 10px
  margin-top: 20px
  cursor: pointer
`
export const List = styled.div`
  display: flex
  flex-direction: column
  margin-top: 40px
`

export const Row = styled.div`
  display: flex
  flex-direction: row
`

export const Item1 = styled.label`
  text-align:left
  font-size: 30px
  flex:1
`
export const Item2 = styled.label`
  text-align:center
  font-size: 30px
  flex:1
`
export const Item3 = styled.label`
  text-align:right
  font-size: 30px
  flex:1
`
