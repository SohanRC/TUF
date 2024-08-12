import React from 'react'
import { Stack, IconButton, Divider } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-[rgb(14,102,85)] text-white p-4 font-serif tracking-wide dark:bg-[rgb(33,47,61)]'>
      <div className='flex flex-col items-center gap-3 flex-wrap'>
        <div className='text-center flex flex-col gap-2 flex-wrap'>
          <h1 className='font-bold tracking-wider xs:text-2xl md:text-3xl'>Movie Website</h1>
          <h2 className=' xs:text-sm md:text-xl'>Email : Jolites@gmail.com</h2>
          <h2 className=' xs:text-sm md:text-xl'>Address : Jalpaiguri, West Bengal</h2>
        </div>
        <div className='p-2'>
          <Stack spacing={2} direction="row" flexWrap='wrap'>
            <IconButton color='inherit'>
              <Link to='/'>
                <InstagramIcon color='error' sx={{ bgcolor: 'white' }} className='rounded-full p-1 text-4xl hover:scale-[1.2] hover:shadow-lg transition-all duration-250' />
              </Link>

            </IconButton >
            <IconButton color='inherit'>
              <Link to='/'>
                <FacebookIcon color='primary' sx={{ bgcolor: 'white' }} className='rounded-full p-1 text-4xl hover:scale-[1.2] hover:shadow-lg transition-all duration-250' />
              </Link>

            </IconButton >
            <IconButton color='inherit'>
              <Link to='/'>
                <LinkedInIcon color='primary' sx={{ bgcolor: 'white' }} className='rounded-full p-1 text-4xl hover:scale-[1.2] hover:shadow-lg transition-all duration-250' />
              </Link>

            </IconButton>
          </Stack>
        </div>
      </div>
      <Divider sx={{ bgcolor: 'white', mx: 2 }} />
      <div className='p-2 text-center text-wrap'>
        <h1 className='font-bold tracking-wider xs:text-sm md:text-xl'>@Jolu Boys | {new Date().getFullYear()}</h1>
      </div>
    </div>
  )
}
