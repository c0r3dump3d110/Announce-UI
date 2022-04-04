import axios from 'axios';
import React, { useEffect, useImperativeHandle, useState } from 'react'
import { toast } from 'wc-toast';
import axiosFetcher from '../../Fetchers/axiosFetcher';

const Legend = "Sites";



export default function ComboBoxes(props) {

  const [sites, setSites] = useState([]);
  const [sitesData, setSitesData] = useState([]);

  var data = JSON.stringify({
    Token: JSON.parse(localStorage.getItem('token')),
    id_organisation: JSON.parse(localStorage.getItem('organisation')).id
  });

  var config = {
    method: 'options',
    url: process.env.REACT_APP_API_URL + '/sites',
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
          if (res.data.length === 0) {
            toast.error("No site in your organisation please add one first")
          } else {
            setSitesData(res.data)
          }
        })
    }
    fetchData();

  }, [setSitesData])



  return (
    <fieldset>
      <wc-toast></wc-toast>
      <legend className="text-base font-medium text-gray-900">
        {Legend}
      </legend>

      <div className="mt-4 space-y-4">

        {sitesData.map((site, key) => (
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id={site.id}
                name={site.Name}
                type="checkbox"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                onChange={(e) => {
                  if (e.target.checked) {
                    if (!sites.includes(site.id)) {
                      setSites([...sites, site.id]); 
                      props.onChange([...sites, site.id]);
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
                {site.Name}
              </label>
            </div>
          </div>
        ))}

      </div>

    </fieldset>

  )
}
