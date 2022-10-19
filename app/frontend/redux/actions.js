const GET_GREETING = 'GET_GREETING';
const POST_GREETING = 'POST_GREETING';

const getGreeting = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/greeting')
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: GET_GREETING,
                    payload: json,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

const postGreeting = (greeting) => {
    return (dispatch) => {
        return fetch('http://localhost:3000/greeting', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(greeting),
        })
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: POST_GREETING,
                    payload: json,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
