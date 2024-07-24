const Alert = ({ type, text }) => {
  return (
    <div className="absolute top-10 left-0 right-0 flex justify-center
     items-center" > 
    <div className={`${type === 'danger' ? 'bg-red-500' : 
 'bg-blue-800'} p-2 text-indigo-100 leading-none lg:rounded-full
 flex lg:inline-flex`} role="alert">
  <p className="mr-2 text-left">{text}</p>
    test
    </div>
 </div>
  )
}

export default Alert