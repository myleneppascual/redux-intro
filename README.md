# redux-intro
sample application using redux

#https://daveceddia.com/how-does-redux-work/
#https://daveceddia.com/redux-tutorial/

We wrote a mapStateToProps function that does what the name says: transforms the Redux state into an object containing props.
We connected the Redux store to our Counter component with the connect function from react-redux, using the mapStateToProps function to configure how the connection works.
We created a reducer function to tell Redux what our state should look like.
We used the ingeniously-named createStore function to create a store, and passed it the reducer.
We wrapped our whole app in the Provider component that comes with react-redux, and passed it our store as a prop.
The app works flawlessly, except the fact that the counter is stuck at 42.

An “action” is a JS object that describes a change that we want to make. The only requirement is that the object needs to have a type property, and its value should be a string.

Remember the reducer’s job is to take the current state and an action and figure out the new state. So if the reducer received an action like { type: "INCREMENT" }, what might you want to return as the new st

Remember that the reducer’s job is to return a new state, even if that state is unchanged from the current one. You never want to go from “having a state” to “state = undefined”, right? That’s what would happen if you left off the default case. Don’t do that.

One more thing to never do: do not mutate the state. State is immutable.
Redux is built on the idea of immutability, because mutating global state is the road to ruin.

Redux avoids these problems with some simple rules. State is read-only, and actions are the only way to modify it. Changes happen one way, and one way only: action -> reducer -> new state. The reducer function must be “pure” – it cannot modify its arguments.

One piece of this puzzle remains: we need a way to feed an action into our reducer function so that we can increment and decrement the counter.

Actions are not born, but they are dispatched, with a handy function called dispatch.

The dispatch function is provided by the instance of the Redux store. That is to say, you can’t just import { dispatch } and be on your way. You can call store.dispatch(someAction), but that’s not very convenient since the store instance is only available in one file.

As luck would have it, the connect function has our back. In addition to injecting the result of mapStateToProps as props, connect also injects the dispatch function as a prop. And with that bit of knowledge, we can finally get the counter working again.

But you’ve got the basic idea now. Hopefully you understand how data flows in Redux (dispatch(action) -> reducer -> new state -> re-render), and what a reducer does, and what an action is, and how that all fits together.