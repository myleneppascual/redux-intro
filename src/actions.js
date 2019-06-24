 const INCREMENT = 'INCREMENT';
 const DECREMENT = 'DECREMENT';
 const RESET =  'RESET';

export const decrement = () => ({ type: DECREMENT });
export const increment = () => ({ type: INCREMENT });
export const reset = () => ({ type: RESET }) ;