import {useState, useEffect} from 'react';


export default httpHandler => {
    const [error, setError] = useState(null);

    const reqInterceptor = httpHandler.interceptors.request.use(req => {
        setError(null);
        return req;
    })
    const resInterceptor = httpHandler.interceptors.response.use(res => res, err =>{
        setError(err);
    });

    useEffect(() => {
        return () => {
            httpHandler.interceptors.request.eject(reqInterceptor);
            httpHandler.interceptors.response.eject(resInterceptor);
        };
    }, [reqInterceptor, resInterceptor]);

    const errorConfirmedHandler = () =>{
        setError(null);
    }
        
    return [error, errorConfirmedHandler];
}