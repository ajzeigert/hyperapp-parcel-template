import {h, app} from "hyperapp"

const state = {
	count: 0
}

const actions = {
	down: value => state => ({ count: state.count - value }),
	up: value => state => ({ count: state.count + value }),
	upLater: () => async (state, actions) => {
		await new Promise(done => setTimeout(done, 1000))
		actions.up(10)
	}
}

const view = (state, actions) => (
	<div>
		<h1>{state.count}</h1>
		<button onclick={() => actions.down(1)}>-</button>
		<button onclick={() => actions.up(1)}>+</button>
		<button onclick={() => actions.upLater(1)}>+ later</button>
	</div>
)

app(state, actions, view, document.body)
