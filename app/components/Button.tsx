'use client';
import React from 'react'
import { IconType } from "react-icons";
type ButtonProps = {
    label:string,
    onClick: (e:React.MouseEvent<HTMLButtonElement>) => void;
    disabled:boolean,
    outline:boolean,
    small:boolean,
    icon?: IconType
}

const Button:React.FC<ButtonProps> = () => {
  return (
    <div>Button</div>
  )
}
export default Button