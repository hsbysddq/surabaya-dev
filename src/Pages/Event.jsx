import React from "react"
import Card from "../Component/Card"

const Event = () => {
  return (
    <div className="bg-about w-screen pt-[1200px]">
      <div className="container">
        <div className="justify-center">
          <h1 className="flex justify-center text-lightGrey font-inter text-4xl font-bold pb-16">
            Event
          </h1>
          <div className="grid grid-cols-3 gap-12">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event
