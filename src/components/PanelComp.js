import React from 'react'

export default function PanelComp() {
  return (
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0">
            <img class="h-12 w-12" src="https://static.thenounproject.com/png/3794420-200.png" alt="ChitChat Logo" />
        </div>
        <div>
            <div class="text-xl font-medium text-black">ChitChat</div>
            <p class="text-slate-500">You have a new message!</p>
        </div>
    </div>
  )
}