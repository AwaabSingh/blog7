const Login = () => {
    return (
       <section>
          <div className="min-h-screen flex items-center justify-center bg-indigo-200 ">


<div className="bg-white p-16 rounded shadow-2xl w-2/3 xl:mx-80 my-20">

  <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">Login</h2>

  <form className="space-y-5">
    <div>
      <label className="block m b-1 font-bold text-gray-500">Email</label>
      <input type="email" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
    </div>

    <div>
      <label className="block mb-1 font-bold text-gray-500">Password</label>
      <input type="password" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
    </div>


    <button className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">Login</button>

  </form>

</div>

</div>
       </section>
    )
}

export default Login
