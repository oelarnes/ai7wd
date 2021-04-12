import { displaySpecs } from "./graph";
import {
  ChoiceType,
  DisplayItem,
  GameStateRaw,
  ObjectType,
  Player,
} from "./interface";
import { objectKey } from "./objects";
import { getRange, randN, randSample } from "./util";

export function getInitialState(
  randomSeed: number,
  secret: string
): GameStateRaw {
  return new Array(5).reduce(
    (state: GameStateRaw, _) => {
      return ((dealt) => ({
        ...dealt.state,
        tokenDisplay: state.tokenDisplay.concat([dealt.value]),
      }))(dealOneFromDeck("token", state, secret));
    },
    {
      randomSeed,
      initiative: randN(2, { randomSeed }) as Player,
      stage: ObjectType.Wonder,
      wonderDisplay: [],
      cardDisplay: [],
      choice: {
        choiceType: ChoiceType.ChoosePlayer,
        choices: [Player.Zero, Player.One],
      },
      p0Tableau: [],
      p1Tableau: [],
      p0Wonders: [],
      p1Wonders: [],
      p0Coins: 7,
      p1Coins: 7,
      conflictValue: 0,
      conflictThresholds: {
        p0l1: false,
        p0l3: false,
        p0l6: false,
        p0loss: false,
        p1l1: false,
        p1l3: false,
        p1l6: false,
        p1loss: false,
      },
      discard: [],
      tucked: [],
      tokenDisplay: [],
      decks: {
        wonder: getRange(...(objectKey.wonder as [number, number])),
        age1: getRange(...(objectKey.age1 as [number, number])),
        age2: getRange(...(objectKey.age2 as [number, number])),
        age3: getRange(...(objectKey.age3 as [number, number])),
        guild: getRange(...(objectKey.guild as [number, number])),
        token: getRange(...(objectKey.token as [number, number])),
      },
      extraTurn: false,
    } as GameStateRaw
  );
}

function dealOneFromDeck(
  objectType: string,
  state: GameStateRaw,
  secret: string
): { value: number; state: GameStateRaw } {
  return ((deck) =>
    ((index) => ({
      value: deck[index],
      state: {
        ...state,
        decks: {
          ...state.decks,
          [objectType]: deck.slice(0, index).concat(deck.slice(index + 1)),
        },
      },
    }))(randN(deck.length, state, secret)))(state.decks[objectType]);
}

function dealAge(state: GameStateRaw, secret: string): GameStateRaw {
  return state.stage === ObjectType.Wonder
    ? new Array(4).reduce(
        (state, _) =>
          ((dealt) => ({
            ...dealt.state,
            wonderDisplay: state.wonderDisplay.concat([dealt.value]),
          }))(dealOneFromDeck(ObjectType.Wonder, state, secret)),
        state
      )
    : ((ageGraph) =>
        state.stage === ObjectType.Age3
          ? randSample([...ageGraph.keys()], 3, state, secret).reduce(
              (graph, ind) =>
                graph
                  .slice(0, ind)
                  .concat([
                    {
                      ...graph[ind],
                      cardId: ObjectType.Guild as number | ObjectType,
                    },
                  ])
                  .concat(graph.slice(ind + 1)),
              ageGraph
            )
          : ageGraph)(
        displaySpecs[state.stage].map((spec) => ({
          ...spec,
          cardId: state.stage as number | ObjectType,
        }))
      ).reduce(
        (state: GameStateRaw, displayItem: DisplayItem) =>
          displayItem.faceUp
            ? ((dealt) => ({
                ...dealt.state,
                cardDisplay: dealt.state.cardDisplay.concat({
                  ...displayItem,
                  cardId: dealt.value,
                }),
              }))(
                dealOneFromDeck(displayItem.cardId as ObjectType, state, secret)
              )
            : {
                ...state,
                cardDisplay: state.cardDisplay.concat([displayItem]),
              },
        state
      );
}

function availableCardsInDisplay(state: GameStateRaw): number[] {
  return [...state.cardDisplay.filter((item) => !item.children.length).keys()];
}

function choosePlayerResolver(
  state: GameStateRaw,
  choice: number,
  secret: string
): GameStateRaw {
  return ((state) =>
    state.stage === ObjectType.Wonder
      ? {
          ...state,
          choice: {
            choiceType: ChoiceType.ChooseWonderFromDisplay,
            choices: [...state.wonderDisplay],
          },
        }
      : {
          ...state,
          choice: {
            choiceType: ChoiceType.ChooseCardFromDisplay,
            choices: availableCardsInDisplay(state),
          },
        })(
    dealAge(
      {
        ...state,
        initiative: choice,
      },
      secret
    )
  );
}

function addWondersChoice(state: GameStateRaw, choice: number) {
  return {
    ...state,
    wonderDisplay: state.wonderDisplay.filter(n => n !== choice),
    p0Wonders:
      state.initiative === Player.Zero
        ? state.p0Wonders.concat([choice])
        : state.p0Wonders,
    p1Wonders:
      state.initiative === Player.One
        ? state.p1Wonders.concat([choice])
        : state.p1Wonders,
  };
}

function chooseWonderFromDisplayResolver(
  state: GameStateRaw,
  choice: number,
  secret: string
) {
  return (
    state => !state.wonderDisplay.length
    ? state.decks.wonder.length === 8
      ? new Array(4).reduce(
          (state: GameStateRaw, _): GameStateRaw =>
            ((dealt) => ({
              ...dealt.state,
              wonderDisplay: state.wonderDisplay.concat([dealt.value]),
            }))(dealOneFromDeck(ObjectType.Wonder, state, secret)),
          {
            ...state,
            initiative: 1 - state.initiative,
            choice: {
              choiceType: ChoiceType.ChooseWonderFromDisplay,
              choices: [...state.wonderDisplay],
            },
          }
        )
      : dealAge(
          {
            ...state,
            stage: ObjectType.Age1,
            initiative: 1 - state.initiative,
          },
          secret
        )
    : {
        ...state,
        initiative:
          state.wonderDisplay.length == 2
            ? state.initiative
            : 1 - state.initiative,
        choice: {
          choiceType: ChoiceType.ChooseWonderFromDisplay,
          choices: [...state.wonderDisplay]
        }
      }
  )(addWondersChoice(state, choice))
}
