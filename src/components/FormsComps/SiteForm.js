import { ColorSwatchIcon } from '@heroicons/react/outline';
import React, { useState } from 'react'
import { toast } from 'wc-toast';
import axiosFetcher from '../../Fetchers/axiosFetcher';
import MyModal from '../microcomps/MyModal';
import SimpleInput from './SimpleInput'



export default function SiteForm() {
    let [isOpen, setIsOpen] = useState(false);

    const [clicked, setClicked] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    const [message, setMessage] = useState("");
    const [button, setButton] = useState("");

    const [name, setName] = useState("");
    const [datecreated, setDatecreated] = useState("");

    const submitSite = async (e) => {
        e.preventDefault();
        const siteAdd = JSON.parse(localStorage.getItem('address'));

        if (
            name &&
            datecreated &&
            siteAdd
        ) {
            axiosFetcher.post('/sites', {
                Token: JSON.parse(localStorage.getItem('token')),
                name: name,
                datecreated: datecreated,
                id_organisation: JSON.parse(localStorage.getItem('organisation')).id,
                geoLocation: siteAdd
            }).then(res => {
                if (res.data.id) {
                    setButton("Okay")
                    setMessage("Site added succefully with id: " + res.data.id);
                    openModal();
                    setClicked(false)
                } else {
                    toast.error(res.data.mes)
                    setClicked(false)
                }

            }).catch(err => {
                console.log(err)

            })
        } else {
            toast.error("Please Fill correctly your data");
        }
    }




    return (
        <main>
            <MyModal
                closeModal={closeModal}
                isOpen={isOpen}
                openModal={openModal}
                message={message}
                button={button}
            />
            <wc-toast></wc-toast>
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
                                        className="bg-indigo-500 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={(e) => {
                                            setClicked(true)
                                            submitSite(e)
                                            setClicked(false)
                                        }

                                        }

                                    >
                                        {clicked ?
                                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg> : <></>}
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
