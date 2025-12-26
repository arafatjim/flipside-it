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
    <div className="grid text-gray-600 text-xs mx-auto grid-cols-2  border-t-2 border-b-2 border-gray-200 lg:grid-cols-4 gap-8 justify-items-center items-center text-center p-1 md:text-sm">
        {
            FooterTopInf?.map((info, index) => (
                <div key={index} className="flex rounded-md p-2 w-full border-gray-200 m-auto items-center group hover:scale-105 transition-transform duration-300 cursor-pointer hover:text-[#0e6b8e] hover:bg-blue-50">
                    <div className="text-center font-bold pl-3">
                        {info.icon}
                        </div> 
                    <div className="ml-4 text-left">
                            <span className="font-bold "
                            
                            >{info.title}</span>
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
