import { useEffect } from 'react'

export const useTelegram = () => {
  const tg = window.Telegram.WebApp

  useEffect(() => {
    tg.ready()
    tg.expand()
  }, [tg])

  const onClose = () => {
    tg.close()
  }

  const user = tg.initDataUnsafe?.user

  return {
    onClose,
    user,
    tg,
  }
}
