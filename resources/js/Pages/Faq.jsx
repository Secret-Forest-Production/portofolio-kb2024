import FaqLayout from '@/Layouts/FaqLayout'
import { Head } from '@inertiajs/react'
import React from 'react'
import FaqSection from '@/sections/FAQ/FaqSection'

const Faq = () => {
  return (
    <>
     <Head title= "Faq"/>
     <FaqLayout>
        <FaqSection/>
     </FaqLayout>
    </>
  )
}

export default Faq;
