import React from 'react'
import Container from '../Container'
import Logo from './Logo'
type Props = {}

export default function Navbar({ }: Props) {
    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                <Logo />

                </Container>
            </div>
        </div>
    )
}