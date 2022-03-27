import React, { useEffect, useImperativeHandle, useState } from 'react'
import axiosFetcher from '../../Fetchers/axiosFetcher';

const Legend = "By Email";

const Sites = [
  { id: 1, name: 'CasaBlanca', title: 'Site CasaBlanca' },
  { id: 2, name: 'Marrakech', title: 'Site Marrakech' },
  { id: 3, name: 'Oujda', title: 'Site Oujda' }
]


export default function ComboBoxes(props) {

  const [sites, setSites] = useState([]);
  const [sitesData, setSitesData] = useState([]); 
  useEffect(() => {
    if (props.onChange) {
      props.onChange(sites)
    }
  }, [sites])

  useEffect(() => {
    // here I need to call the ids of sites from backend depending on the organisation 

    async function fetchSites() {
      const request = await axiosFetcher.options('/sites', {
        Token: localStorage.getItem('token'),
        id_organisation: JSON.parse(localStorage.getItem('organisation')).id
      })

      setSitesData(request.data)
    }

    fetchSites(); 
  }, [])


  return (
    <fieldset>
      <legend className="text-base font-medium text-gray-900">
        {Legend}
      </legend>

      <div className="mt-4 space-y-4">

        {Sites.map((site) => (
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id={site.id}
                name={site.name}
                type="checkbox"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                onChange={(e) => {
                  if (e.target.checked) {
                    if (!sites.includes(site.id)) {
                      setSites([...sites, site.id]);
                    }
                  } else {
                    var inde = sites.indexOf(site.id);
                    if (inde > -1) {
                      sites.splice(inde, 1);
                    }
                  }
                }}


              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="comments" className="font-medium text-gray-700">
                {site.title}
              </label>
            </div>
          </div>
        ))}

      </div>

    </fieldset>

  )
}
