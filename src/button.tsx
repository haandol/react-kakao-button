import React from 'react'
import styled from 'styled-components'

export interface IProps {
  disabled: boolean
  onClick: (event?: React.MouseEvent<any>) => void
}

export interface IStates {
}

export default class KakaoButton extends React.PureComponent<IProps, IStates> {
  mouseClick = (event: React.MouseEvent<any>) => {
    if (!this.props.disabled) {
      this.props.onClick(event)
    }
  }

  render() {
    const Button = styled.div`
      background: transparent;
      margin: 0;
      padding: 0;
      border: none;
      text-align: center;
      cursor: pointer;
      userSelect: none;
      width: 222px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    `
    const Image = styled.img`
      width: 222px;
      height: 48px;
    `

    const imgSrc = '//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg'
    return (
      <Button onClick={this.mouseClick}>
        <Image src={imgSrc} />
      </Button>
    )
  }
}