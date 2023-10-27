import { useRouteError } from "react-router-dom"

interface RouteErrorType {
    data: string,
    error: {
        message: string,
    },
    status: number,
    statusText: string,
};


function ErrorPage() {

    const error = useRouteError() as RouteErrorType;
    console.log('error :>> ', error);

    return (
        <div>
            <h1>Nothing to see here!</h1>
            <h2>{error.status} Not Found</h2>
            <h3>{error.error.message}</h3>

        </div>
    );
};

export default ErrorPage