import axios from 'axios';
import React, { useRef, useState } from 'react'
import axiosFetcher from '../../Fetchers/axiosFetcher';
import ComboBoxes from '../FormsComps/ComboBoxes';
import SimpleInput from '../FormsComps/SimpleInput';


// {
//     "Token" : "1555",
//     "dateDebut":"2021-2-12",
//     "dateFin":"2021-2-12",
//     "sites":[1],
//     "Titre":"First",
//     "url":"test",
//     "Description":"TEEEEEEEEEEEEEEEEEEEEEEEEEEEEST"
// }


export default function CreateAnnonce() {


    const [sitesData, setSitesData] = useState([]);

    const eventHandler = data => {
        setSitesData(data);
    }


    const [sitestoshow, setSitesToShow] = useState([]);

    const [dateDebut, setDateDebut] = useState("");
    const [dateFin, setDateFin] = useState("");
    const [title, setTitle] = useState("");

    //cloudinary 
    const [image, setImage] = useState("");
    //

    const [description, setDescription] = useState("");

    const [datevalid, setDatevalid] = useState(false);

    const cloudName = "drmmqpbsw";
    const cloudinaryLink = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;


    const submitAnnonce = async (e) => {
        e.preventDefault();
        const formData2 = new FormData();

        formData2.append('file', image);
        formData2.append('upload_preset', 'bn1v0kfl');

        //---------------

        axios.post(cloudinaryLink, formData2)
            .then(resp => {
                if (resp.data.url) {
                    const formData = new FormData();

                    formData.append('dateDebut', dateDebut);
                    formData.append('dateFin', dateFin);
                    formData.append('sites', sitesData);
                    formData.append('Token', sessionStorage.getItem('token'))
                    formData.append('Titre', title);
                    formData.append('Description', description);
                    formData.append('url', resp.data.url);

                    axiosFetcher.post('/annonces', formData)
                    .then(res => {
                        console.log(res); 
                    }).catch(err => {
                        console.log(err); 
                    })

                    //console.log([...formData]);
                } else {
                    console.log("there is an error on inserting the image in cloudinary");
                }
            })

        //---------------

    }


    return (
        <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Add announcement </h3>
                    <p className="mt-1 text-sm text-gray-600">
                        Informations for the announcement
                    </p>
                </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
                <form>
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-3 sm:col-span-2">

                                    {/* <div className="mt-1 flex rounded-md shadow-sm">
                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                            Title
                                        </span> */}
                                    <SimpleInput
                                        type="text"
                                        label="Title of announcement"
                                        name="title-anno"
                                        id="title-anno"
                                        onChange={e => {
                                            setTitle(e.target.value);
                                        }}
                                    />
                                    {/* </div> */}
                                </div>
                            </div>
                            <div className="grid grid-cols-6 gap-6">

                                <SimpleInput
                                    label="Start Date"
                                    name="start-date"
                                    id="start-date"
                                    type="date"
                                    onChange={e => {
                                        setDateDebut(e.target.value);
                                    }}
                                />
                                <SimpleInput
                                    label="End Date"
                                    name="end-date"
                                    id="end-date"
                                    type="date"
                                    onChange={e => {
                                        setDateFin(e.target.value);
                                    }}
                                />


                            </div>
                            <p className="mt-2 text-sm text-red-500">
                                {!datevalid ? "Dates are fault" : ""}
                            </p>
                            <div>
                                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={3}
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        placeholder="Describe"
                                        defaultValue={''}

                                        onChange={e => {
                                            setDescription(e.target.value);
                                        }}
                                    />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                    Brief description for your upComing announcement
                                </p>
                            </div>

                            <ComboBoxes onChange={eventHandler} />

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg
                                            className="mx-auto h-12 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input
                                                    id="file-upload"
                                                    name="file-upload"
                                                    type="file"
                                                    className="sr-only"
                                                    onChange={e => {
                                                        setImage(e.target.files[0]);
                                                        console.log(image);
                                                    }}
                                                />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="submit"
                                onClick={submitAnnonce}
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
