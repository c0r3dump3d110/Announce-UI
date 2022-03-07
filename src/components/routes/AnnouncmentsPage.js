import React, { useEffect, useState } from 'react'
import axiosFetcher from '../../Fetchers/axiosFetcher';
import RouterHeader from '../RouterHeader'

const announcements = [
    // {
    //     name: 'Jane Cooper',
    //     title: 'Regional Paradigm Technician',
    //     department: 'Optimization',
    //     role: 'Admin',
    //     email: 'jane.cooper@example.com',
    //     image:
    //         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    // },
    {
        "id": 20,
        "dateDebut": "Feb 12, 2021",
        "dateFin": "Feb 12, 2021",
        "titre": "First",
        "description": "TEEEEEEEEEEEEEEEEEEEEEEEEEEEEST",
        "urlPrincipalImage": "test",
        "subImgs": [],
        "sites": []
    },
]

const headers = [
    "Profile", "Start Date", "End Date", "Title", "Description"
]

export default function AnnouncmentsPage() {
    
    
    
   // const [announcements, setAnnouncements] = useState([]); 

    useEffect(() => {

        async function fetchAnnouncements(){
            const request = await axiosFetcher.get('/annonces', {
                params: {
                    Token : "1111",
                    id_organisation: 1
                }
            })
            console.log(request); 
            return request;
        }

        fetchAnnouncements();
    }, [])
    
    return (
        <>
            <RouterHeader name="Check all your announcements" />
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">

                        <div className="flex flex-col">
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    {
                                                        headers.map((header) => (
                                                            <th
                                                                scope="col"
                                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            >
                                                                {header}
                                                            </th>
                                                        ))
                                                    }

                                                    <th scope="col" className="relative px-6 py-3">
                                                        <span className="sr-only">Edit</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {announcements.map((announcement) => (
                                                    <tr key={announcement.email}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 h-10 w-10">
                                                                    <img className="h-10 w-10 rounded-full" src={announcement.urlPrincipalImage} alt="" />
                                                                </div>
                                                                {/* <div className="ml-4">
                                                                    <div className="text-sm font-medium text-gray-900">{announcement.titre}</div>
                                                                    <div className="text-sm text-gray-500">{announcement.email}</div>
                                                                </div> */}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{announcement.dateDebut}</div>
                                                            {/* <div className="text-sm text-gray-500">{announcement.dateFin}</div> */}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {/* <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                Active
                                                            </span> */}
                                                            <div className="text-sm text-gray-500">{announcement.dateFin}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{announcement.titre}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                            
                                                            {announcement.description.length > 10 ? 
                                                                announcement.description.substring(0,10) + "..." : announcement.description
                                                            }
                                                        
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                                Edit
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}
