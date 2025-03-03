import React from 'react'
import { Fugaz_One } from 'next/font/google'
import Link from 'next/link'
import Button from './Button'
import Calendar from './Calendar'
import CallToAction from './CallToAction'
const fugaz = Fugaz_One({subsets: ['latin'],weight: ['400']})

function Hero() {
  return (
    <div className={'py-4 flex flex-col gap-4 sm:gap-8 md:py-12'}>
        <h1 className={'text-5xl sm:text-6xl md:text-7xl text-center lg:text-left ' + fugaz.className}>
        <span className='textGradient'>Broodl</span>helps you track you <span className='textGradient'>daily</span>mood</h1>
        <p className='text-lg text-center max-w-[700px] sm:text-xl md:text-2xl lg:text-left '>Create your mood record and see how you feel on <span className='font-semibold textGradient'>every day of the year</span></p>
        <CallToAction />
        <Calendar demo />
    </div>
  )
}

export default Hero
