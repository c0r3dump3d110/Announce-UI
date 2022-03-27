import React, { useState } from 'react'
import axiosFetcher from '../../Fetchers/axiosFetcher';
import PropTypes from 'prop-types';
import { LockClosedIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { toast } from 'wc-toast';

export default function Login({ setToken }) {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();

        const reque = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                password: password
            })
        }


        const resp = await fetch(process.env.REACT_APP_API_URL + '/auth', reque)
        const data = await resp.json();

        if (data.organisation && data.token) {
            localStorage.setItem('organisation', JSON.stringify(data.organisation));
            localStorage.setItem('token', JSON.stringify(data.token))
            setToken(data.token);

            toast.success("Auth succeed"); 
           
            window.location.reload();


        } else if (data.error) {
            document.getElementById("cust-form").reset();
            toast.error(data.error); 
           
            setLogin(null);
            setPassword(null);
        }


    }


    return (
        <>
            <wc-toast></wc-toast>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>

                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST" id="cust-form">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="login" className="sr-only">
                                    Login
                                </label>
                                <input
                                    id="login"
                                    name="login"
                                    type="login"
                                    autoComplete="login"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Login"

                                    onChange={e => {
                                        setLogin(e.target.value);
                                    }}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"

                                    onChange={e => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={onSubmitForm}

                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <a href="/Register" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Register if you don't have an account
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
};