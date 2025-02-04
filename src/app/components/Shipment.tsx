import React from 'react'

export const  shipment = async () => {
    const response = await fetch("Api/Shipengine/Get-rates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shipToAddress: {
            name: "Henry William",
            phone: "+1 555 987 6552",
            addressLine1: "453 Oak Avenue",
            addressLine2: "Suite 250",
            cityLocality: "Los Angeles",
            stateProvince: "CA",
            postalCode: "90001",
            countryCode: "US",
            addressResidentialIndicator: "no",
          },
          packages: [
            { weight: { value: 5, unit: "ounce" }, dimensions: { height: 3, width: 15, length: 10, unit: "inch" } },
          ],
        }),
      });
      
      const data = await response.json();
      console.log(data);
  return (
    <div>shipment</div>
  )
}