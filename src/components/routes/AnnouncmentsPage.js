import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'wc-toast';
import axiosFetcher from '../../Fetchers/axiosFetcher';
import RouterHeader from '../RouterHeader'

const announcements1 = [
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
    "Image", "Start Date", "End Date", "Title", "Description", "Modify"
]

export default function AnnouncmentsPage() {

    const [announcements, setAnnouncements] = useState([]);

    var data = JSON.stringify({
        Token: JSON.parse(localStorage.getItem('token')),
        id_organisation: JSON.parse(localStorage.getItem('organisation')).id
    });

    var config = {
        method: 'options',
        url:process.env.REACT_APP_API_URL+'/annonces',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    useEffect(() => {
        const fetchData = async () => {

            await axios(config).
                then(res => {
                    console.log(res.data);
                    if(res.data.length === 0){
                        toast.error("No data to show for your organisation ")
                    } else {
                        setAnnouncements(res.data)
                    }
                    
                })

        }

        fetchData();
    }, [setAnnouncements])

    return (
        <>
        <wc-toast></wc-toast>
            <RouterHeader name="Manage announcements" />
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <div class="p-4">
                                <label for="table-search" class="sr-only">Search</label>
                                <div class="relative mt-1">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="table-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                                </div>
                            </div>
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                            </div>
                                        </th>
                                        {
                                            headers.map(header => (

                                                <th scope="col" class="px-6 py-3">
                                                    {header}
                                                </th>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        announcements.length > 0 ? 
                                        announcements.map((anno) => (
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td class="w-4 p-4">
                                                    <div class="flex items-center">
                                                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                                    </div>
                                                </td>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    <img style={{ width: "50px" }} src={anno.urlPrincipalImage} />
                                                </th>
                                                <td class="px-6 py-4">
                                                    {anno.dateDebut}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {anno.dateFin}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {anno.titre}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {anno.description}
                                                </td>
                                                <td class="px-6 py-4 text-right">
                                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> Delete</a>
                                                </td>
                                            </tr> 
                                        )) : <></>
                                    }

                                    {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            Microsoft Surface Pro
                                        </th>
                                        <td class="px-6 py-4">
                                            White
                                        </td>
                                        <td class="px-6 py-4">
                                            Laptop PC
                                        </td>
                                        <td class="px-6 py-4">
                                            $1999
                                        </td>
                                        <td class="px-6 py-4 text-right">
                                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                    </tr>
                                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            Magic Mouse 2
                                        </th>
                                        <td class="px-6 py-4">
                                            Black
                                        </td>
                                        <td class="px-6 py-4">
                                            Accessories
                                        </td>
                                        <td class="px-6 py-4">
                                            $99
                                        </td>
                                        <td class="px-6 py-4 text-right">
                                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
