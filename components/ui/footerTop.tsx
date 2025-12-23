import { Mail, MapPin, Phone } from "lucide-react";

const FooterTopInf = [
  {
    title: 'Visit Us',
    subtitle: '123 Main Street, Rangpur, Bangladesh',
    icon: (
        <MapPin className='h-6 w-6 text-gray-500' />
    )
  },
  {
    title: 'Call Us',
    subtitle: '+880 1234 567890',
    icon: (
        <Phone className='h-6 w-6 text-gray-500' />
    )
  },
  {
    title: 'Working Hours',
    subtitle: 'Mon - Sat: 9:00 AM - 6:00 PM',
    icon: '⏰' // or <ClockIcon />
  },
  {
    title: 'Email Us',
    subtitle: 'info@yourdomain.com',
    icon: (
        <Mail className='h-6 w-6 text-gray-500' />
    )
  }
];
import React from 'react'

const FooterTopInfo = () => {
  return (
    <div className="grid text-sm grid-cols-2 border-t-2 border-b-2 border-b-slate-700 lg:grid-cols-4 gap-8 justify-items-center items-center text-center p-4 md:text-lg">
        {
            FooterTopInf?.map((info, index) => (
                <div key={index} className="flex p-2 w-full rounded-xl border-r-2 border-l-2 m-auto items-center group hover:scale-105 transition-transform duration-300 cursor-pointer hover:text-[#0e6b8e] hover:bg-gray-200">
                    <div className="text-center">
                        {info.icon}
                        
                        </div> 
                    <div className="ml-3 text-left">
                            <span>{info.title}</span>
                                <br />
                            <small>{info.subtitle}</small>
                    </div>
                        
                </div>
            ))
        }
    </div>
  )
}

export default FooterTopInfo
