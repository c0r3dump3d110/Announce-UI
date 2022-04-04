import React, { useState } from 'react'
import SimpleInput from '../FormsComps/SimpleInput'
import axiosFetcher from '../../Fetchers/axiosFetcher';
import { toast } from 'wc-toast';



// String name;
// String email;
// String login;
// String password;
// String creationDate;
// String type;

export default function RegisterPage() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [login, setlogin] = useState("");
    const [password, setpassword] = useState("");
    const [creationDate, setcreationDate] = useState("");
    const [type, settype] = useState(1);

    const [clicked, setClicked] = useState(false);



    const submitOrganisation = async (e) => {
        e.preventDefault();
        console.log({
            name: name,
            email: email,
            login: login,
            password: password,
            creationDate: creationDate,
            type: type
        })
        setClicked(true);
        if (
            name &&
            email &&
            login &&
            password &&
            creationDate &&
            type
        ) {
            axiosFetcher.post('/register', {
                name: name,
                email: email,
                login: login,
                password: password,
                creationDate: creationDate,
                type: type
            }).then(res => {
                if (res.data.success) {
                    toast.success(res.data.success);
                }
                else if (res.data.error) {
                    toast.error(res.data.error);
                }
                setClicked(false);
                window.location.href = "/"
            })
        } else {
            toast.error('Please fille data correctly');

        }
    }


    return (
        <main>
            <wc-toast></wc-toast>
            <div className="max-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-14">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Organisation Informations</h3>
                            <p className="mt-1 text-sm text-gray-600">This informations is used to just make sure that the organisation have a login credentials to access the platform.</p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <SimpleInput
                                            label="Entreprise name"
                                            type="text"
                                            name="comp-name"
                                            id="comp-name"
                                            onChange={e => {
                                                setname(e.target.value)
                                            }}
                                        />
                                        <SimpleInput
                                            label="Email address"
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            onChange={e => {
                                                setemail(e.target.value)
                                            }}
                                        />

                                        <SimpleInput
                                            label="Login name"
                                            type="text"
                                            name="login-comp"
                                            id="login-comp"
                                            onChange={e => {
                                                setlogin(e.target.value)
                                            }}
                                        />
                                        <SimpleInput
                                            label="Organisation's Password"
                                            type="password"
                                            name="pass"
                                            id="pass"
                                            onChange={e => {
                                                setpassword(e.target.value)
                                            }}
                                        />
                                        <SimpleInput
                                            label="Creation Date"
                                            type="date"
                                            name="creation-date"
                                            id="creation-date"
                                            onChange={e => {
                                                setcreationDate(e.target.value)
                                            }}
                                        />

                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                            Type
                                        </label>
                                        <div class="relative">
                                            <select onChange={e => {
                                                settype(e.target.value)
                                            }} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                                <option value={1}>Entreprise</option>
                                                <option value={2}>Non comercial org</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={(e) => {
                                            submitOrganisation(e)
                                            setClicked(false)
                                        }}
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
