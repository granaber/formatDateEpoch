import React from "react";
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import FormatDateEpoch from '../'


describe('Format Epoch Date  testing',()=>{
    const unixEpoch = 1620584314
    const formatDefault = '9.05.2021'               // "%d.%mm.%Y"
    const formatMediun = 'Sunday 9 May 2021'        // "%DD %d %MM %Y"
    const textErroEpoch = 'Unix Epoch Erro!'       // unixEpoch = 0
    const formatFullSpaning ='Domingo 9 Mayo de 2021 - 02:18:34 pm' // "%DD %d %MM de %Y - %h:%m:%s %a"

    it('shows the componet', ()=>{
        const contentRender = render(<FormatDateEpoch unix={unixEpoch} />)
        const returnEpoch =contentRender.getByTestId('epoch-id')
        expect(returnEpoch).not.toBeUndefined()
        expect(returnEpoch).toHaveTextContent(formatDefault)
    })
  
    it('shows the componet with format %DD %d %MM %Y', ()=>{
        const contentRender = render(<FormatDateEpoch unix={unixEpoch} format="%DD %d %MM %Y" />)
        const returnEpoch =contentRender.getByText(formatMediun)
        expect(returnEpoch).not.toBeUndefined()
        expect(returnEpoch).toHaveTextContent('2021')
    })

    it('shows the componet with Epoch Timestamp ZERO (0)', ()=>{
        const contentRender = render(<FormatDateEpoch unix={0} format="%DD %d %MM %Y" />)
        const returnEpoch =contentRender.getByText(textErroEpoch)
        expect(returnEpoch).not.toBeUndefined()
        expect(returnEpoch).toHaveTextContent('Erro!')
    })

    it('shows the componet with Epoch return to Full Date human-readable in Spaning', ()=>{
        const contentRender = render(<FormatDateEpoch unix={unixEpoch} format='%DD %d %MM de %Y - %h:%m:%s %a' Intl="ES"/>)
        const returnEpoch =contentRender.getByTestId('epoch-id')
        expect(returnEpoch).not.toBeUndefined()
        expect(returnEpoch).not.toHaveTextContent('Domingo!!!!!')
        expect(returnEpoch).toBeVisible()
        expect(returnEpoch).toHaveTextContent('Mayo de 2021')
    })

    it('shows the componet with Epoch return Time 24 hours format %H', ()=>{
        const contentRender = render(<FormatDateEpoch unix={unixEpoch} format='%H:%m:%s'/>)
        const returnEpoch =contentRender.getByTestId('epoch-id')
        expect(returnEpoch).not.toBeUndefined()
        expect(returnEpoch).not.toHaveTextContent('02')
        expect(returnEpoch).toHaveTextContent('14:18:34')
    })

    it('shows the componet with Epoch return Time 14 hours format %h and am/pm with format %a', ()=>{
        const contentRender = render(<FormatDateEpoch unix={unixEpoch} format='%h:%m:%s %a' Intl='es'/>)
        const returnEpoch =contentRender.getByTestId('epoch-id')
        expect(returnEpoch).not.toBeUndefined()
        expect(returnEpoch).not.toHaveTextContent('14')
        expect(returnEpoch).toHaveTextContent('02:18:34 pm')
    })
})