import React from 'react'
import SimpleInput from '../FormsComps/SimpleInput'

export default function RegisterPage() {

    return (
        <main>

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

                                            }}
                                        />
                                        <SimpleInput
                                            label="Email address"
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            onChange={e => {

                                            }}
                                        />

                                        <SimpleInput
                                            label="Login name"
                                            type="text"
                                            name="login-comp"
                                            id="login-comp"
                                            onChange={e => {

                                            }}
                                        />
                                        <SimpleInput
                                            label="Organisation's Password"
                                            type="password"
                                            name="pass"
                                            id="pass"
                                            onChange={e => {

                                            }}
                                        />
                                        <SimpleInput
                                            label="Creation Date"
                                            type="date"
                                            name="creation-date"
                                            id="creation-date"
                                            onChange={e => {

                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
