import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://github.com/03jia/chatgpt-web/blob/1ab25ffc6c5e024a561f7fb8aa0d32a07cefbc0e/src/assets/me.jpg',
      name: 'JIA',
      description: 'Star on <a href="https://github.com/03jia/chatgpt-web" class="text-blue-500" target="_blank" >GitHub</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
