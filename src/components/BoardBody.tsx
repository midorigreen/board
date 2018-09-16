import * as React from 'react'
import { Message } from '../model/Model'

export interface Props {
  messages: Message[]
}
export interface State {}

export class BoardBody extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const messages: JSX.Element[] = []
    this.props.messages.forEach(element => {
      messages.push(
        <div key={element.id} className="message">
          <div>Date: {element.createdAt.toLocaleString()}</div>
          <div>
            Body:
            <br />
            {element.body}
          </div>
        </div>
      )
    })

    return messages
  }
}
