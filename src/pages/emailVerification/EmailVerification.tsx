import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import "./emailVerification.css"



const EmailVerification = () => {
    const [response, setResponse] = useState()


    const token = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`https://renturn.appinprod.au/api/v1/auth/emailVerification/${token.token}`);

                setResponse(result.data.message);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [token]);
    return (
        <>
            <div className="center-container">
                <img src="https://imgs.search.brave.com/pEU1_lbvDiEYFCEa9MbZbd21nsmuxgPb3T3aLHLEyzo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/NDM2MDA0L3Bob3Rv/L2dyZWVuLWNoZWNr/LW1hcmsuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPW1uRnJ1/Q1p3WHhtLXlfSTBi/LWR2MzlTZlFCMzYx/MjFCSTRabmxkMkth/eVE9" alt="sucess"
                    className="center-image" />
            </div>
            <h1 style={{
                textAlign: "center"
            }
            }>
                {response ? response : "Email Already Verified"}
            </h1>
        </>
    )
}

export default EmailVerification