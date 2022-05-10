import { configure, makeObservable } from 'mobx'
import { createContext, useContext } from 'react'
import remotedev from 'mobx-remotedev'

configure({ enforceActions: 'observed' })
@remotedev({ global: true })
export class RootStore {
  //   @observable analyticsStore: AnalyticsStore

  constructor() {
    // this.loadStatistic = new LoadStatsStore(this)

    makeObservable(this)
  }
}

const store = new RootStore()

export const StoreContext = createContext<RootStore>(store)

export const useStore = (): RootStore => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error('You have forgot to use StoreProvider, shame on you.')
  }
  return store
}

export default store
