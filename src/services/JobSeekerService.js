  
import axios from "axios"

export default class JobSeekerService{
     getJobSeekers(){
         return axios.get("http://localhost:5000/api/jobseeker/getJobSeekers")
     }

     
}