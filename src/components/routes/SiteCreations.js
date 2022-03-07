import React from 'react'
import MapsComp from '../googleMapComp/MapsComp'
import RouterHeader from '../RouterHeader'

export default function SiteCreations() {
    return (
        <>

            <RouterHeader name="Create Site" />
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <MapsComp />
                    </div>
                </div>
            </main>
        </>
    )
}
