import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'
import FaqSection from '@/sections/FAQ/FaqSection'

const Faq = () => {
  return (
    <>
     <Head title= "Faq"/>
     <AppLayout>
        <FaqSection/>
     </AppLayout>
    </>
  )
}

export default Faq;
