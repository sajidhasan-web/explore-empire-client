import { useContext } from "react";
import { AuthContext } from "../../providers/FirebaseProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Register = () => {

    const {createUser} = useContext(AuthContext)
   


    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // password validation
        const hasUppercase = /[A-Z]/.test(password);
        if (!hasUppercase) {
          return  toast.error("Password must contain at least one uppercase letter.");
           
        }
        const hasLowercase = /[a-z]/.test(password);
        if (!hasLowercase) {
          return  toast.error("Password must contain at least one lowercase letter.");
         
        }
        const isLengthValid = password.length >= 6;
        if (!isLengthValid) {
          return  toast.error("Password must be at least 6 characters long.");
            
        }
    

        // Create a new user with email and password
        createUser(email, password)
        .then(result =>{
            toast.success("User created successfully!");
            console.log(result.user)
        })
        .catch((error) => {
            toast.error(error.message.split(":")[1]);
            console.log(error.message.split(":")[1])
          });
        
    }

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
      <h1 className="text-2xl font-bold text-center">Register</h1>
       <form onSubmit={handleRegister} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-600">
            Email
          </label>
          <input
            type="text"
            name="email"          
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 border dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 border dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
         
        </div>
        <button type="submit" className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
          Register
        </button>
      </form>
      
      <p className="text-xs text-center sm:px-6 dark:text-gray-600">
        if already have an account?
        <Link to={"/login"}
          className="underline dark:text-gray-800 link"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
