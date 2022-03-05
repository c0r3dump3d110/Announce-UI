import React from 'react'
import CreateAnnonce from '../annonces/CreateAnnonce'
import RouterHeader from '../RouterHeader'

export default function AnnounceCreate() {
    return (
        <>
            <RouterHeader name="Create announcement" />
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <CreateAnnonce />
                    </div>
                </div>
            </main>
        </>
    )
}
