import React, { useState, useEffect } from "react"

import DataColumn from "./data.column"
const Fields = () => {
  const [fields, setFields] = useState([])
  const addField = () => {
    setFields([...fields, <DataColumn />])
  }
}
export default Fields
