import { AnyActionArg } from "react";
import { createStore, Reducer } from "redux";

type Member = {
  name: string;
  age: number;
};
type Squad = {
  id: number;
  name: string;
  homeTown: string;
  formed: number;
  active: boolean;
  members: Member;
};

type Action = {
  type: SquadActions;
  value: Squad;
};
enum SquadActions {
  ADD_SQUAD = "ADD_SQUAD",
  REMOVE_SQUAD = "REMOVE_SQUAD",
}

const initSquads: Squad[] = [
  {
    id: 1,
    name: "Barca",
    homeTown: "Barcalona",
    formed: 1990,
    active: true,
    members: {
      name: "messi",
      age: 39,
    },
  },
];

// Let's make Actions
const addSquad = (squad: Squad) => ({
  type: SquadActions.ADD_SQUAD,
  value: squad,
});
const removeSquad = (squad: Squad) => ({
  type: SquadActions.REMOVE_SQUAD,
  value: squad,
});

// Let's make a Reducer
const squadReducer: Reducer<Squad[], Action> = (
  state: Squad[] = initSquads,
  action: Action
) => {
  switch (action.type) {
    case SquadActions.ADD_SQUAD:
      state.push(action.value);
      break;

    case SquadActions.REMOVE_SQUAD:
      state = state.filter((squad) => squad.id != action.value.id);
      break;
    default:
      break;
  }
  return state;
};

// Let's make Store
const squad: Squad = {
  id: 2,
  name: "Real Madrid",
  homeTown: "Madrid",
  formed: 1990,
  active: true,
  members: {
    name: "Ronaldo",
    age: 40,
  },
};
const store = createStore(squadReducer, initSquads);
store.dispatch(addSquad(squad));
store.dispatch(removeSquad(squad));

console.log(store.getState());

const Squads = () => {
  return <div>Squads</div>;
};

export default Squads;
