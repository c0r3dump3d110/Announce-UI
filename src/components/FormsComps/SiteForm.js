import { ColorSwatchIcon } from '@heroicons/react/outline';
import React, { useState } from 'react'
import axiosFetcher from '../../Fetchers/axiosFetcher';
import SimpleInput from './SimpleInput'



// {
//     "Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb3JlZHVtcGVkIiwiaWQiOiIyIiwiaWF0IjoxNjQ2NjA3NTU0fQ.0L6xy6hfXOKiamHqt7pvBFeFYtogXBLe93BGlPBQr_Y",
//     "name": "Site casa",
//     "datecreated": "2022-04-12", 
//     "id_organisation": "1",
//     "geoLocation": {
//         "laltittude": "33.53502277157057",
//         "longtitude": "-7.642598863956569"
//     }
// }

export default function SiteForm() {

    const [name, setName] = useState("");
    const [datecreated, setDatecreated] = useState("");

    const submitSite = async (e) => {
        e.preventDefault();

        if (localStorage.getItem('address')){

            const siteAdd = JSON.parse(localStorage.getItem('address'));


            // const reque = {
            //     method: 'POST',
            //     headers: {
            //         'Content-type': 'application/json'
            //     },
            //     body: {
            //         Token: localStorage.getItem('token'),
            //         name: name,
            //         datecreated: datecreated,
            //         id_organisation: JSON.parse(localStorage.getItem('organisation')).id,
            //         geoLocation: siteAdd
            //     }
            // }

            axiosFetcher.post('/sites', {
                Token: localStorage.getItem('token'),
                name: name,
                datecreated: datecreated,
                id_organisation: JSON.parse(localStorage.getItem('organisation')).id,
                geoLocation: siteAdd
            }).then(res => {
                console.log(res); 
                
            }).catch(err => {
                console.log(err)
            })

            // console.log(reque);

            // const resp = await fetch('http://0.0.0.0:8080/SMART_WALK-1.0-SNAPSHOT/sites', reque);
            // const data = await resp.json();
            // console.log(data);

        }
    }




    return (
        <main>

            <div className="max-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-14">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Site Information</h3>
                            <p className="mt-1 text-sm text-gray-600">This form is in the goal to collect data for the site in which you'll have you next Announcements</p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <SimpleInput
                                            label="Site name"
                                            type="text"
                                            name="site-name"
                                            id="site-name"
                                            onChange={e => {
                                                setName(e.target.value)
                                            }}
                                        />


                                        <SimpleInput
                                            label="Creation Date"
                                            type="date"
                                            name="creation-date"
                                            id="creation-date"
                                            onChange={e => {
                                                setDatecreated(e.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={submitSite}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </main>
    )
}
