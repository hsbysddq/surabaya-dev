import React from "react"
import Card from "../Component/Card"
import Form from "../Component/Form"
const Event = () => {
  return (
    <div className="bg-about w-screen pt-[1300px]">
      <div className="container">
        <div className="justify-center">
          <h1 className="flex justify-center text-lightGrey font-inter text-4xl font-bold pb-12">
            Event
          </h1>
          <div className="grid grid-cols-3 gap-12">
            <Card />
            <Card />
            <Card />
          </div>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Event
