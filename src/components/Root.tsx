import * as React from 'react'
import { Board } from './Board'

export interface RootProps {}
export interface RootState {}

export class Root extends React.Component<RootProps, RootState> {
  constructor(props: RootProps) {
    super(props)
  }

  render() {
    return <Board />
  }
}
