import React, { Component, Fragment } from 'react'
import {
  Header, Main,
  TextArea, Left, Right,
  Button, Button2,
  Games, List,
  Item1, Item2, Item3, Row } from './lib/index'
import Helmet from 'react-helmet'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      show: false,
      list: [],
      games: []
    }
  }

  onBack () {
    this.setState({ show: false })
  }

  async onSubmit (event) {
    event.preventDefault()
    const form = event.target
    const players = form.item.value.split('\n')
    if (players) {
      await this.setState({ list: [...players] })
    }

    for (let i = 0; i < this.state.list.length; i++) {
      for (let j = i + 1; j < this.state.list.length; j++) {
        if (this.state.list[i] && this.state.list[j]) {
          await this.setState({
            games: [
              ...this.state.games,
              `${this.state.list[i]} - ${this.state.list[j]}`
            ],
            show: true
          })
        }
      }
    }
    form.reset()
  }

  render () {
    const { show, games } = this.state
    return (
      <Fragment>
        <Helmet title='Taça Jatoba' />
        <Header>
          <h1>Gerador de tabelas todos contra todos</h1>
        </Header>
        {
          show ? (
            <Games>
              <Button2 onClick={this.onBack.bind(this)}> Voltar </Button2>
              <Button2> Imprimir </Button2>
              <List>
                {
                  games.map((item) => {
                    const game = item.split(' ')
                    return (
                      <Row>
                        <Item1> {game[0]} </Item1>
                        <Item2> {game[1]} </Item2>
                        <Item3> {game[2]} </Item3>
                      </Row>
                    )
                  })
                }

              </List>
            </Games>
          )
            : (<Main>
              <Left>
                <p> Nome dos jogadores </p>
                <form onSubmit={this.onSubmit.bind(this)}>
                  <TextArea type='text' name='item' placeholder='Um jogador em cada linha' autoFocus />
                  <Button> Gerar Partidas</Button>
                </form>
              </Left>
              <Right>
                <p> Digite os nomes dos times, um em cada linha, e aperte o botão.</p>
                <p> A tabela de todos-contra-todos será gerada, com os jogos balanceadamente distribuídos entre as rodadas. Pronta para ser impressa.</p>
              </Right>
            </Main>)
        }
      </Fragment>
    )
  }
}

export default App
