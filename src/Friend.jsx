export default function Friend({friend}) {
  console.log(friend)
  const { name, email, phone,address } = friend;
  const { street, city, zip, country } = address || {};
  return (
    <div className="cardd">
      <h3>
        name:{name}
      </h3>
      <p>maile:{email}</p>
      <h5>phone:{phone}</h5>

         <div>
        <h4>Address:</h4>
        <p>Street: {street ? street : 'No street available'}</p>
        <p>City: {city ? city : 'No city available'}</p>
        <p>Zip: {zip ? zip : 'No zip available'}</p>
        <p>Country: {country ? country : 'No country available'}</p>
      </div>
    </div>
  )
}